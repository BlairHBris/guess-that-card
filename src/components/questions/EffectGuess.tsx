import axios from "axios";
import React, { useState } from "react";

const EffectGuess = () => {
	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedValue, setSubmittedValue] = useState("");

	const qualityLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};

	const qualityCheck = async (event: any) => {
		let existingQuestions = localStorage.getItem("questionsList");
		let currentQuestions =
			existingQuestions !== null ? JSON.parse(existingQuestions) : [];
		let existingCard = localStorage.getItem("createdCard");
		existingCard = existingCard ? JSON.parse(existingCard) : {};
		let formattedString = `has_effect=${submittedValue}`;
		const { data } = await axios.get(
			`https://db.ygoprodeck.com/api/v7/cardinfo.php?${formattedString}`,
			{
				headers: {
					Accept: "application/json",
				},
			}
		);
		let possibleCards = data.data;
		if (
			possibleCards.some(
				(possibleCard: { name: any }) => possibleCard.name === card.name
			)
		) {
			if (existingCard != null) {
				existingCard["has_effect"] = `${submittedValue}`;
			}
			localStorage.setItem("createdCard", JSON.stringify(existingCard));
            if (submittedValue === "0") {
                currentQuestions.push(`This card does not have an effect`);
                localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
                alert(`This card does not have an effect`);    
            } else {
                currentQuestions.push(`This card has an effect`);
                localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
                alert(`This card has an effect`);    
            }
		} else {
			if (existingCard != null) {
                if (submittedValue === "0") {
                    existingCard["has_effect"] = `1`;
                } else {
                    existingCard["has_effect"] = `0`;
                }
			}
			localStorage.setItem("createdCard", JSON.stringify(existingCard));
            if (submittedValue === "1") {
                currentQuestions.push(`This card does not have an effect`);
                localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
                alert(`This card does not have an effect`);    
            } else {
                currentQuestions.push(`This card has an effect`);
                localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
                alert(`This card has an effect`);    
            }
		}
	};

	return (
		<>
			<input
				list="qualityExamples"
				id="qualityChoice"
				name="qualityChoice"
				onChange={qualityLog}
			></input>
			<datalist id="qualityExamples">
				<option value="1">Yes</option>
				<option value="0">No</option>
			</datalist>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default EffectGuess;
