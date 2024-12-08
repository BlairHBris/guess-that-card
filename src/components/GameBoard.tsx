import { useState } from "react";
import axios from "axios";
import "../App.css";

const GameBoard = () => {
	const [guessedCard, setGuessedCard] = useState("");
	const [checkCount, setCheckCount] = useState(0);
	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	let guesses = 6;

	function selectedCard(event: any) {
		setGuessedCard(event.target.value);
	}

	async function getSubmittedCard() {
		const { data } = await axios.get(
			`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${guessedCard}`,
			{
				headers: {
					Accept: "application/json",
				},
			}
		);
		const chosenCard = data.data[0];
		localStorage.setItem("submittedCard", JSON.stringify(chosenCard));
	}

	async function makeBoard() {
		await getSubmittedCard();

		console.log(checkCount);

		let submittedCard = JSON.parse(
			window.localStorage.getItem("submittedCard") || "{}"
		);

		let card = JSON.parse(window.localStorage.getItem("card") || "{}");

		let board = document.getElementById("table");

		let nameTag = document.createElement("div");
		nameTag.className = "grid-item";
		nameTag.id = `name_${checkCount}`;
		nameTag.innerText = submittedCard.name;
		board?.appendChild(nameTag);
		for (let j = 0; j < 6; j++) {
			let box = document.createElement("div");
			box.className = "grid-item";
			box.id = `detail_${checkCount}_${j}`;
			board?.appendChild(box);
		}

		let frame = document.getElementById(`detail_${checkCount}_0`);
		let level = document.getElementById(`detail_${checkCount}_1`);
		let attribute = document.getElementById(`detail_${checkCount}_2`);
		let race = document.getElementById(`detail_${checkCount}_3`);
		let attack = document.getElementById(`detail_${checkCount}_4`);
		let defense = document.getElementById(`detail_${checkCount}_5`);

		if (frame) {
			frame.textContent = submittedCard.frame;
			if (submittedCard.frameType === card.frameType) {
				frame.style.backgroundColor = "green";
			} else {
				frame.style.backgroundColor = "red";
			}
		}
		if (level) {
			level.textContent = submittedCard.level || submittedCard.linkval;
			switch (submittedCard.level) {
				case undefined:
					break;
				default:
					if (submittedCard.level === card.level) {
						level.style.backgroundColor = "green";
					} else if (submittedCard.level > card.level) {
						level.style.backgroundColor = "yellow";
						level.textContent += "(>)";
					} else if (submittedCard.level < card.level) {
						level.style.backgroundColor = "gold";
						level.textContent += "(<)";
					}
					break;
			}
			switch (submittedCard.linkval) {
				case undefined:
					break;
				default:
					if (submittedCard.linkval === card.linkval) {
						level.style.backgroundColor = "green";
					} else if (submittedCard.linkval > card.linkval) {
						level.style.backgroundColor = "yellow";
						level.textContent += "(>)";
					} else if (submittedCard.linkval < card.linkval) {
						level.style.backgroundColor = "gold";
						level.textContent += "(<)";
					}
					break;
			}
		}
		if (attribute) {
			attribute.textContent = submittedCard.attribute;
		}
		if (race) {
			race.textContent = submittedCard.race;
		}
		if (attack) {
			attack.textContent = submittedCard.atk;
		}
		if (defense) {
			defense.textContent = submittedCard.def;
		}

		if (frame) {
			frame.textContent = submittedCard.frameType;
		}
	}

	function checkCard() {
		makeBoard();
		setCheckCount(checkCount + 1);
		if (guessedCard === card.name) {
			alert(`Correct! The card was ${guessedCard}`);
		} else {
			if (checkCount === 5) {
				alert(`You have run out of guesses, the answer was ${card.name}`);
			} else {
				alert("Incorrect.");
			}
		}
	}

	return (
		<>
			<h2 className="cards-guessed-header">Cards Guessed</h2>
			<div>
				{guesses - checkCount === 1 ? (
					<h3>Final Guess!</h3>
				) : (
					<h3>{guesses - checkCount} Guesses Left</h3>
				)}
			</div>
			<div id="table" className="grid-container">
				<div className="grid-item">Name</div>
				<div className="grid-item">Super-Type</div>
				<div className="grid-item">Level</div>
				<div className="grid-item">Attribute</div>
				<div className="grid-item">Type</div>
				<div className="grid-item">Attack</div>
				<div className="grid-item">Defense</div>
			</div>
			<div>
				<input
					type="text"
					id="name"
					name="name"
					onChange={selectedCard}
					value={guessedCard}
				/>
				<input onClick={checkCard} type="submit" value="Check Card" />
			</div>
		</>
	);
};

export default GameBoard;
