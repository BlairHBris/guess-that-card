import axios from "axios";
import React, { useState } from "react";

const CardImageFilter = () => {
	const [err, setErr] = useState("");

	const showPossibleCards = async () => {
		let existing = localStorage.getItem("createdCard");
		let currentCard = existing !== null ? JSON.parse(existing) : [];
		let part1 = Object.keys(currentCard);
		let part2 = Object.values(currentCard);
		let div = document.getElementById("filteredCards");
		if (part1.length < 3) {
			alert(
				"Please learn a little more about the card before displaying the possibilities or else the YGO API people will be mad."
			);
		} else {
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
                    alert("There are still over 150 cards this could be. Please learn a little more about the card before displaying the possibilities or else the YGO API people will be mad.")
                } else {
                    possibleCards.forEach((card: any) => {
                        const image = document.createElement("img");
                        image.src = card.card_images[0].image_url;
                        image.alt = card.name
                        div!.appendChild(image);
                    });    
                }
			} catch (err: any) {
				setErr(err.message);
			}
		}
	};

	return (
		<>
			<button className="possibleCards" onClick={showPossibleCards}>
				Show All Potentially Valid Cards
			</button>
			<p id="filteredCards" className="filteredCards"></p>
		</>
	);
};

export default CardImageFilter;
