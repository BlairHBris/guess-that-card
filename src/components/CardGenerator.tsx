import { useState } from "react";
import axios from "axios";
import "../App.css";
import GameBoard from "./GameBoard";
import CardImageFilter from "./CardImageFilter";

const createdCard: any = {};
const perfectCard: any = {};
const chosenCard: any = {};
const ygoWinStreak: any = 0;

const localStorageAttributes = [
	{ name: "createdCard", var: createdCard },
	{ name: "perfectCard", var: perfectCard },
	{ name: "card", var: chosenCard },
	{ name: "ygoWinStreak", var: ygoWinStreak },
];

const CardGenerator = () => {
	const [data, setData] = useState<any>({ data: [] });
	const [cardFound, setCardFound] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [giveUp, setGiveUp] = useState(false);
	const [err, setErr] = useState("");
	const [guessedCard, setGuessedCard] = useState("");

	function stage() {
		localStorage.removeItem("createdCard");
		setErr("");
		setIsLoading(true);
		setCardFound(false);
	}

	function createCard() {
		localStorageAttributes.forEach((attr) => {
			if (localStorage.getItem("ygoWinStreak")?.length === 1) {
				return;
			}
			localStorage.setItem(`${attr.name}`, JSON.stringify(attr.var));
		});
	}

	function setUpCard() {
		stage();
		try {
			getCard();
			setIsLoading(false);
			setCardFound(true);
			createCard();
		} catch (err: any) {
			alert(err);
		}
	}

	async function getCard() {
		const randomID = Math.floor(Math.random() * (12456 + 1));
		let searchString = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;

		const { data } = await axios.get(searchString, {
			headers: {
				Accept: "application/json",
			},
		});

		localStorage.setItem("card", "");
		const chosenCard = data.data[randomID];
		localStorage.setItem("card", JSON.stringify(chosenCard));
		const card = JSON.parse(window.localStorage.getItem("card") || "{}");
		if (!card.type.includes("Monster")) {
			getCard();
		}
		setData(chosenCard);
	}

	function restart() {
		const keysInStorage = Object.keys(localStorage);
		if (window.confirm("Are you sure you want to restart?")) {
			setCardFound(!cardFound);
			setGiveUp(false);
			keysInStorage.forEach((key) => {
				if (key === "createdCard" || key === "perfectCard" || key === "card")
					localStorage.removeItem(key);
			});
		}
	}

	function forfeit() {
		if (window.confirm("Are you sure you want to give up?")) {
			setGiveUp(!giveUp);
		}
	}

	return (
		<>
			{err === "" && !cardFound && !isLoading && (
				<>
					<button className="random-card" onClick={() => setUpCard()}>
						Get a Card!
					</button>

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
				<div className="App">
					<div className="dual-buttons">
						<button className="give-up" onClick={forfeit}>
							Give up?
						</button>
						<button className="input-button" onClick={restart}>
							Restart?
						</button>
					</div>
					{giveUp && <h2 className="name-reveal">{data.name}</h2>}
					<GameBoard
						guessedCard={guessedCard}
						setGuessedCard={setGuessedCard}
					/>
					<br />
					<CardImageFilter setGuessedCard={setGuessedCard} />
				</div>
			)}

			{err !== "" && <h2>Error Detected. Please refresh.</h2>}
		</>
	);
};

export default CardGenerator;
