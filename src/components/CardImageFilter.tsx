import axios from "axios";
import React, { useState } from "react";

const CardImageFilter = () => {
	const [err, setErr] = useState("");
	const [show, setShow] = useState(false)

	const showPossibleCards = async () => {
		let existing = localStorage.getItem("createdCard");
		let currentCard = existing !== null ? JSON.parse(existing) : [];
		let part1 = Object.keys(currentCard);
		let part2 = Object.values(currentCard);
		let div = document.getElementById("filteredCards");
		div!.innerHTML = "";
		let searchString = "";
		for (let a = 0; a < part1.length; a++) {
			searchString += part1[a] + "=" + part2[a] + "&";
		}
		let formattedString = searchString.replace(/\s/g, "%20");
		try {
			const { data } = await axios.get(
				`https://db.ygoprodeck.com/api/v7/cardinfo.php?${formattedString}`,
				{
					headers: {
						Accept: "application/json",
					},
				}
			);
			let possibleCards = data.data;
			if (possibleCards.length > 150) {
				alert(
					"There are still over 150 cards this could be. Please learn a little more about the card before displaying the possibilities."
				);
			} else {
				setShow(!show)
				possibleCards.forEach((card: any) => {
					const image = document.createElement("img");
					image.src = card.card_images[0].image_url;
					image.alt = card.name;
					div!.appendChild(image);
				});
			}
		} catch (err: any) {
			setErr(err.message);
		}
	};

	const searchFunction = () => {
		let i;
		let input = (
			document.getElementById("myInput") as HTMLInputElement
		).value.toUpperCase();
		let location = document.getElementById("filteredCards");
		let elements = location?.getElementsByTagName("img");
		for (i = 0; i < elements!.length; i++) {
			let a = elements![i].alt;
			console.log(a);
			if (a.toUpperCase().indexOf(input) > -1) {
				elements![i].style.display = "";
			} else {
				elements![i].style.display = "none";
			}
		}
	};

	return (
		<>
			<button className="possibleCards" onClick={showPossibleCards}>
				Show All Potentially Valid Cards
			</button>
			<br />
			<br />
			{show && (
				<input
					type="text"
					id="myInput"
					onKeyUp={searchFunction}
					placeholder="Search for card names"
				/>
			)}
			<p id="filteredCards" className="filteredCards"></p>
		</>
	);
};

export default CardImageFilter;
