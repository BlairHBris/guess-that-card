import { useState } from "react";
import axios from "axios";
import "../App.css";

const GameBoard = () => {
	const [guessedCard, setGuessedCard] = useState("");
	const [checkCount, setCheckCount] = useState(0);
	const [adjustCount, setAdjustCount] = useState(0);
	const [playing, setPlaying] = useState(true);
	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	let guesses = 6;

	function selectedCard(event: any) {
		setGuessedCard(event.target.value);
	}

	async function getSubmittedCard() {
		try {
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
		} catch {
			alert("Card name not found, please check spelling.");
			window.localStorage.setItem("submittedCard", "{}");
		}
	}

	async function makeBoard() {
		await getSubmittedCard();

		let submittedCard = JSON.parse(
			window.localStorage.getItem("submittedCard") || "{}"
		);

		if (submittedCard.name) {
			let card = JSON.parse(window.localStorage.getItem("card") || "{}");

			let present = localStorage.getItem("createdCard");
			let currentCard = present !== null ? JSON.parse(present) : {};

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
				frame.textContent = submittedCard.frameType.toUpperCase();
				if (submittedCard.frameType === card.frameType) {
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					frame.style.backgroundColor = "green";
					currentCard["type"] = card.type;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
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
							currentCard["level"] = `${submittedCard.level}`;
							level.style.backgroundColor = "green";
						} else {
							level.style.backgroundColor = "red";
							if (submittedCard.level > card.level) {
								currentCard["level"] = `lt${submittedCard.level}`;
								localStorage.setItem(
									"createdCard",
									JSON.stringify(currentCard)
								);
								level.textContent += "(>)";
							} else if (submittedCard.level < card.level) {
								currentCard["level"] = `gt${submittedCard.level}`;
								localStorage.setItem(
									"createdCard",
									JSON.stringify(currentCard)
								);
								level.textContent += "(<)";
							}
						}
						break;
				}

				switch (submittedCard.linkval) {
					case undefined:
						break;
					default:
						if (submittedCard.linkval === card.linkval) {
							currentCard["linkval"] = `${submittedCard.linkval}`;
							localStorage.setItem("createdCard", JSON.stringify(currentCard));
							level.style.backgroundColor = "green";
						} else {
							level.style.backgroundColor = "red";
							if (submittedCard.linkval > card.linkval) {
								currentCard["linkval"] = `lt${submittedCard.linkval}`;
								localStorage.setItem(
									"createdCard",
									JSON.stringify(currentCard)
								);
								level.textContent += "(>)";
							} else if (submittedCard.linkval < card.linkval) {
								currentCard["linkval"] = `gt${submittedCard.linkval}`;
								localStorage.setItem(
									"createdCard",
									JSON.stringify(currentCard)
								);
								level.textContent += "(<)";
							}
						}
						break;
				}
			}

			if (attribute) {
				attribute.textContent = submittedCard.attribute;
				if (submittedCard.attribute === card.attribute) {
					currentCard["attribute"] = `${submittedCard.attribute}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					attribute.style.backgroundColor = "green";
				} else {
					attribute.style.backgroundColor = "red";
				}
			}

			if (race) {
				race.textContent = submittedCard.race;
				if (submittedCard.race === card.race) {
					currentCard["race"] = `${submittedCard.race}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					race.style.backgroundColor = "green";
				} else {
					race.style.backgroundColor = "red";
				}
			}

			if (attack) {
				attack.textContent = submittedCard.atk;
				if (submittedCard.atk === card.atk) {
					currentCard["atk"] = `${submittedCard.atk}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					attack.style.backgroundColor = "green";
				} else {
					attack.style.backgroundColor = "red";
					if (submittedCard.atk > card.atk) {
						currentCard["atk"] = `lt${submittedCard.atk}`;
						localStorage.setItem("createdCard", JSON.stringify(currentCard));
						attack.textContent += "(>)";
					} else if (submittedCard.atk < card.atk) {
						currentCard["atk"] = `gt${submittedCard.atk}`;
						localStorage.setItem("createdCard", JSON.stringify(currentCard));
						attack.textContent += "(<)";
					}
				}
			}

			if (defense) {
				defense.textContent = submittedCard.def;
				if (submittedCard.def === card.def) {
					currentCard["def"] = `${submittedCard.def}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					defense.style.backgroundColor = "green";
				} else {
					defense.style.backgroundColor = "red";
					if (submittedCard.def > card.def) {
						currentCard["def"] = `lt${submittedCard.def}`;
						localStorage.setItem("createdCard", JSON.stringify(currentCard));
						defense.textContent += "(>)";
					} else if (submittedCard.def < card.def) {
						currentCard["def"] = `gt${submittedCard.def}`;
						localStorage.setItem("createdCard", JSON.stringify(currentCard));
						defense.textContent += "(<)";
					}
				}
			}
		} else {
			setAdjustCount(adjustCount + 1);
		}
	}

	function checkCard() {
		makeBoard();
		setCheckCount(checkCount + 1);
		if (guessedCard.toUpperCase() === card.name.toUpperCase()) {
			alert(`Correct! The card was ${guessedCard}`);
			setPlaying(false);
		} else if (checkCount - adjustCount === 5) {
			alert(`You have run out of guesses, the answer was ${card.name}`);
			setPlaying(false);
		}
	}

	return (
		<>
			<h2 className="cards-guessed-header">Monsters Guessed</h2>
			<div>
				{guesses - checkCount + adjustCount === 1 ? (
					<h3>Final Guess!</h3>
				) : (
					<h3>{guesses - checkCount + adjustCount} Guesses Left</h3>
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
			{playing && (
				<>
					<input
						type="text"
						id="name"
						name="name"
						onChange={selectedCard}
						value={guessedCard}
					/>
					<br />
					<input onClick={checkCard} type="submit" value="Guess Card" />
				</>
			)}
		</>
	);
};

export default GameBoard;
