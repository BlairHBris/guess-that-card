import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import QuestionInput from "./QuestionInput";
import QuestionDisplay from "./QuestionDisplay";
import CardImageFilter from "./CardImageFilter";

const CardGenerator = () => {
	const [data, setData] = useState<any>({ data: [] });
	const [cardFound, setCardFound] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [giveUp, setGiveUp] = useState(false);
	const [err, setErr] = useState("");
	const [submittedCard, setSubmittedCard] = useState("");

	const createBlankCard = () => {
		localStorage.setItem("createdCard", "{}");
	};

	const createQuestionsList = () => {
		const questionsList: any = [];
		localStorage.setItem("questionsList", JSON.stringify(questionsList));
	};

	const selectedCard = (event: any) => {
		setSubmittedCard(event.target.value);
	};

	const getCard = async () => {
		localStorage.clear();
		setErr("");
		setIsLoading(true);
		setCardFound(false);
		try {
			const { data } = await axios.get(
				`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${submittedCard}`,
				{
					headers: {
						Accept: "application/json",
					},
				}
			);
			const chosenCard = data.data[0];
			localStorage.setItem("card", JSON.stringify(chosenCard));
			setData(chosenCard);
		} catch (err: any) {
			setErr(err.message);
		} finally {
			setIsLoading(false);
			setCardFound(true);
			setSubmittedCard("");
		}
		createBlankCard();
		createQuestionsList();
	};

	const getRandomCard = async () => {
		localStorage.clear();
		setErr("");
		setIsLoading(true);
		setCardFound(false);
		const randomID = Math.floor(Math.random() * (12456 + 1));
		try {
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
			setData(chosenCard);
		} catch (err: any) {
			setErr(err.message);
		} finally {
			setIsLoading(false);
			setCardFound(true);
		}
		createBlankCard();
		createQuestionsList();
	};

	const adjustGiveUp = () => {
		if (window.confirm("Are you sure you want to give up?")) {
			setGiveUp(!giveUp);
		}
	};

	const restart = () => {
		if (window.confirm("Are you sure you want to restart?")) {
			setCardFound(!cardFound);
			setGiveUp(false);
		}
	};

	return (
		<>
			{err && <h2>{err}</h2>}

			{!cardFound && (
				<>
					<button className="randomCard" onClick={getRandomCard}>
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
					<input onClick={getCard} type="submit" value="Set Card" />
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
					<h2 className="App-header">Your Card has been chosen!</h2>
					<div className="dualButtonsModified">
						<button className="giveUp" onClick={adjustGiveUp}>
							Give up and Reveal Card Name?
						</button>
						<button className="inputButton" onClick={restart}>
							Restart the Game?
						</button>
					</div>
					{giveUp && <h2 className="nameReveal">{data.name}</h2>}
					<QuestionInput />
					<QuestionDisplay />
					<br />
					<CardImageFilter />
				</>
			)}
		</>
	);
};

export default CardGenerator;
