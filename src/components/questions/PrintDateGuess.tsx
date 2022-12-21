import axios from "axios";
import React, { useState } from "react";
import { start } from "repl";

const PrintDateGuess = () => {
	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const startLog = (event: any) => {
		setStartDate(event.target.value);
	};

	const endLog = (event: any) => {
		setEndDate(event.target.value);
	};

	const qualityCheck = async (event: any) => {
		let existingQuestions = localStorage.getItem("questionsList");
		let currentQuestions =
			existingQuestions !== null ? JSON.parse(existingQuestions) : [];
		let existingCard = localStorage.getItem("createdCard");
		existingCard = existingCard ? JSON.parse(existingCard) : {};
		let formattedString = `startdate=${startDate}&enddate=${endDate}&dateregion=tcg_date`;
		let searchableString = `${startDate}&enddate=${endDate}&dateregion=tcg_date`;
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
				existingCard["startdate"] = `${searchableString}`;
			}
			localStorage.setItem("createdCard", JSON.stringify(existingCard));
			currentQuestions.push(
				`This card was first printed between ${startDate} and ${endDate}`
			);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card was first printed between ${startDate} and ${endDate}`);
		} else {
			currentQuestions.push(
				`This card was not first printed between ${startDate} and ${endDate}`
			);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(
				`This card was NOT first printed between ${startDate} and ${endDate}`
			);
		}
	};

	return (
		<>
			<label htmlFor="startDate">Start Date:</label>
			<input
				list="qualityExamples"
				id="qualityChoice"
				name="qualityChoice"
				onChange={startLog}
				type="date"
			></input>
			<label htmlFor="endDAte">End Date:</label>
			<input
				list="qualityExamples"
				id="qualityChoice"
				name="qualityChoice"
				onChange={endLog}
				type="date"
			></input>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default PrintDateGuess;
