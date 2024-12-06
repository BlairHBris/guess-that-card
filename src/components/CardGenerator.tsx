import { useState } from "react";
import axios from "axios";
import "../App.css";
import GameBoard from "./GameBoard";
import CardImageFilter from "./CardImageFilter";

const CardGenerator = () => {
	const [data, setData] = useState<any>({ data: [] });
	const [cardFound, setCardFound] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [giveUp, setGiveUp] = useState(false);
	const [err, setErr] = useState("");
	const [submittedCard, setSubmittedCard] = useState("");

	function createQuestionsList() {
		const questionsList: any = [];
		localStorage.setItem("questionsList", JSON.stringify(questionsList));
	}

	function selectedCard(event: any) {
		setSubmittedCard(event.target.value);
	}

	async function getCard() {
		const randomID = Math.floor(Math.random() * (12456 + 1));

		const { data } = await axios.get(
			`https://db.ygoprodeck.com/api/v7/cardinfo.php`,
			{
				headers: {
					Accept: "application/json",
				},
			}
		);
		const chosenCard = data.data[randomID];
		localStorage.setItem("card", JSON.stringify(chosenCard));
		const card = JSON.parse(window.localStorage.getItem("card") || "{}");
		if (!card.type.includes("Monster")) {
			getCard();
		}
		setData(chosenCard);
	}

	function stage() {
		localStorage.clear();
		setErr("");
		setIsLoading(true);
		setCardFound(false);
	}

	function setUpCard() {
		stage();
		try {
			getCard();
		} catch (err: any) {
			setErr(err.message);
		} finally {
			setIsLoading(false);
			setCardFound(true);
		}
		createQuestionsList();
	}

	function forfeit() {
		if (window.confirm("Are you sure you want to give up?")) {
			setGiveUp(!giveUp);
		}
	}

	function restart() {
		if (window.confirm("Are you sure you want to restart?")) {
			setCardFound(!cardFound);
			setGiveUp(false);
			localStorage.clear();
		}
	}

	return (
		<>
			{err && <h2>{err}</h2>}

			{!cardFound && (
				<>
					<button className="randomCard" onClick={setUpCard}>
						Get a Card!
					</button>
					<h2>Or select your own!</h2>
					<input
						type="text"
						id="name"
						name="name"
						onChange={selectedCard}
						value={submittedCard}
					/>
					<input onClick={setUpCard} type="submit" value="Set Card" />
					<footer>
						<p>Developed by Blair</p>
						<p>
							Powered by the{" "}
							<a href="https://ygoprodeck.com/api-guide/">
								Yu-Gi-Oh! API from YGOPRODeck.com
							</a>
						</p>
						<a href="https://www.freepik.com/free-vector/neon-purple-lights-background-arrow-style_8152351.htm#query=abstract%20purple&position=2&from_view=search&track=sph">
							Image by starline
						</a>{" "}
						on Freepik
					</footer>
				</>
			)}

			{isLoading && <h2 className="App-header">Getting your card...</h2>}

			{cardFound && (
				<>
					<div className="dualButtons">
						<button className="giveUp" onClick={forfeit}>
							Give up?
						</button>
						<button className="inputButton" onClick={restart}>
							Restart?
						</button>
					</div>
					{giveUp && <h2 className="nameReveal">{data.name}</h2>}
					<GameBoard />
					<br />
					<CardImageFilter />
				</>
			)}
		</>
	);
};

export default CardGenerator;
