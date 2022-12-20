import React, { useState } from "react";

const TypeGuess = () => {
	const types = [
		{
			id: 1,
			name: "Monster",
		},
		{
			id: 2,
			name: "Spell Card",
		},
		{
			id: 3,
			name: "Trap Card",
		},
		{
			id: 4,
			name: "Skill Card",
		},
		{
			id: 5,
			name: "Normal Monster",
		},
		{
			id: 6,
			name: "Effect Monster",
		},
		{
			id: 7,
			name: "Spirit Monster",
		},
		{
			id: 8,
			name: "Toon Monster",
		},
		{
			id: 9,
			name: "Gemini Monster",
		},
		{
			id: 10,
			name: "Tuner Monster",
		},
		{
			id: 11,
			name: "Normal Tuner Monster",
		},
		{
			id: 12,
			name: "Flip Effect Monster",
		},
		{
			id: 13,
			name: "Flip Tuner Effect Monster",
		},
		{
			id: 14,
			name: "Pendulum Effect Monster",
		},
		{
			id: 15,
			name: "Pendulum Flip Effect Monster",
		},
		{
			id: 16,
			name: "Pendulum Normal Monster",
		},
		{
			id: 17,
			name: "Pendulum Tuner Effect Monster",
		},
		{
			id: 18,
			name: "Ritual Effect Monster",
		},
		{
			id: 19,
			name: "Ritual Monster",
		},
		{
			id: 20,
			name: "Union Effect Monster",
		},
		{
			id: 21,
			name: "Fusion Monster",
		},
		{
			id: 22,
			name: "Link Monster",
		},
		{
			id: 23,
			name: "Pendulum Effect Fusion Monster",
		},
		{
			id: 24,
			name: "Synchro Monster",
		},
		{
			id: 25,
			name: "Synchro Pendulum Effect Monster",
		},
		{
			id: 26,
			name: "Synchro Tuner Monster",
		},
		{
			id: 27,
			name: "XYZ Monster",
		},
		{
			id: 28,
			name: "XYZ Pendulum Effect Monster",
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
		if (submittedValue === card.type) {
			if (existingCard != null) {
				existingCard["type"] = `${submittedValue}`;
			}
			localStorage.setItem("createdCard", JSON.stringify(existingCard));
			currentQuestions.push(`This card is a ${submittedValue}`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card is a ${submittedValue}`);
		} else if (submittedValue.includes(card.type)) {
			currentQuestions.push(`This card's type is one of the following: ${submittedValue}`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card's type is one of the following: ${submittedValue}`);
		} else {
			currentQuestions.push(`This card's type is not one of the following: ${submittedValue}`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card's type is NOT one of the following: ${submittedValue}`);
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
				{types &&
					types.length > 0 &&
					types.map((type) => {
						return (
							<option key={type.id} value={type.name}>
								{type?.name}
							</option>
						);
					})}
			</datalist>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default TypeGuess;
