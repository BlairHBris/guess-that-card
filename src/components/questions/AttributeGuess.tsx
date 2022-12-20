import React, { useState } from "react";

const AttributeGuess = () => {
	const attributes = [
		{
			id: 1,
			name: "DARK",
		},
		{
			id: 2,
			name: "DEVINE",
		},
		{
			id: 3,
			name: "EARTH",
		},
		{
			id: 4,
			name: "FIRE",
		},
		{
			id: 5,
			name: "LIGHT",
		},
		{
			id: 6,
			name: "WATER",
		},
		{
			id: 7,
			name: "WIND",
		},
	];

	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedValue, setSubmittedValue] = useState("");

	const qualityLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};

	const qualityCheck = (event: any) => {
		let existingQuestions = localStorage.getItem("questionsList");
		let currentQuestions = existingQuestions !== null ? JSON.parse(existingQuestions) : [];
		let existingCard = localStorage.getItem("createdCard");
		existingCard = existingCard ? JSON.parse(existingCard) : {};
		if (submittedValue === card.attribute) {
			if (existingCard != null) {
				existingCard["attribute"] = `${submittedValue}`;
			}
			localStorage.setItem("createdCard", JSON.stringify(existingCard));
			currentQuestions.push(`This card is ${submittedValue} attribute`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card is a ${submittedValue} attribute`);
		} else if (submittedValue.includes(card.attribute)) {
			currentQuestions.push(`This card's attribute is one of the following: ${submittedValue}`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card's attribute is one of the following: ${submittedValue}`);
		} else {
			currentQuestions.push(`This card's attribute is not one of the following: ${submittedValue}`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card's attribute is NOT one of the following: ${submittedValue}`);
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
				{attributes &&
					attributes.length > 0 &&
					attributes.map((attribute) => {
						return (
							<option key={attribute.id} value={attribute.name}>
								{attribute?.name}
							</option>
						);
					})}
			</datalist>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default AttributeGuess;
