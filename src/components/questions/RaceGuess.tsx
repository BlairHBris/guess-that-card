import React, { useState } from "react";

const RaceGuess = () => {
	const races = [
		{
			id: 1,
			name: "Normal",
		},
		{
			id: 2,
			name: "Continuous",
		},
		{
			id: 3,
			name: "Counter",
		},
		{
			id: 4,
			name: "Field",
		},
		{
			id: 5,
			name: "Equip",
		},
		{
			id: 6,
			name: "Quick-Play",
		},
		{
			id: 7,
			name: "Ritual",
		},
		{
			id: 8,
			name: "Aqua",
		},
		{
			id: 9,
			name: "Beast",
		},
		{
			id: 10,
			name: "Beast-Warrior",
		},
		{
			id: 11,
			name: "Creator-God",
		},
		{
			id: 12,
			name: "Cyberse",
		},
		{
			id: 13,
			name: "Dinosaur",
		},
		{
			id: 14,
			name: "Divine-Beast",
		},
		{
			id: 15,
			name: "Dragon",
		},
		{
			id: 16,
			name: "Fairy",
		},
		{
			id: 17,
			name: "Fiend",
		},
		{
			id: 18,
			name: "Fish",
		},
		{
			id: 19,
			name: "Insect",
		},
		{
			id: 20,
			name: "Machine",
		},
		{
			id: 21,
			name: "Plant",
		},
		{
			id: 22,
			name: "Psychic",
		},
		{
			id: 23,
			name: "Pyro",
		},
		{
			id: 24,
			name: "Reptile",
		},
		{
			id: 25,
			name: "Rock",
		},
		{
			id: 26,
			name: "Sea Serpent",
		},
		{
			id: 27,
			name: "Spellcaster",
		},
		{
			id: 28,
			name: "Thunder",
		},
		{
			id: 29,
			name: "Warrior",
		},
		{
			id: 30,
			name: "Winged Beast",
		},
        {
			id: 31,
			name: "Wyrm",
		},
        {
			id: 32,
			name: "Zombie",
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
		if (submittedValue === card.race) {
			if (existingCard != null) {
				existingCard["race"] = `${submittedValue}`;
			}
			localStorage.setItem("createdCard", JSON.stringify(existingCard));
			currentQuestions.push(`This card is a ${submittedValue}`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card is a ${submittedValue}`);
		} else if (submittedValue.includes(card.race)) {
			currentQuestions.push(`This card's 'race' is one of the following: ${submittedValue}`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card's 'race' is one of the following: ${submittedValue}`);
		} else {
			currentQuestions.push(`This card's 'race' is not one of the following: ${submittedValue}`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card's 'race' is NOT one of the following: ${submittedValue}`);
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
				{races &&
					races.length > 0 &&
					races.map((race) => {
						return (
							<option key={race.id} value={race.name}>
								{race?.name}
							</option>
						);
					})}
			</datalist>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default RaceGuess;
