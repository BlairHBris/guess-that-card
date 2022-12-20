import React, { useState } from "react";

const BanlistGuess = () => {
	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedValue, setSubmittedValue] = useState("");

	const qualityLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};
	const [format, setFormat] = useState("");

	const listFormat = (event: any) => {
		setFormat(event.target.value);
	};

	const qualityCheck = (event: any) => {
		let existingQuestions = localStorage.getItem("questionsList");
		let currentQuestions =
			existingQuestions !== null ? JSON.parse(existingQuestions) : [];
		let existingCard = localStorage.getItem("createdCard");
		existingCard = existingCard ? JSON.parse(existingCard) : {};
		switch (format) {
			case "ban_tcg":
				switch (submittedValue) {
					case "On List":
						if (
							card.banlist_info === undefined ||
							(card.banlist_info.length === 1 &&
								(card.banlist_info.contains("ban_ocg") ||
									card.banlist_info.contains("ban_goat")))
						) {
							currentQuestions.push(
								`This card is not ${submittedValue} in the TCG`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is NOT ${submittedValue} in the TCG`);
						} else if (card.banlist_info.ban_tcg !== undefined || null) {
							if (existingCard != null) {
								existingCard["banlist"] = `tcg`;
							}
							localStorage.setItem("createdCard", JSON.stringify(existingCard));
							currentQuestions.push(
								`This card is ${submittedValue} in the TCG and it is ${card.banlist_info.ban_tcg}`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(
								`This card is ${submittedValue} in the TCG and it is ${card.banlist_info.ban_tcg}`
							);
						}
						break;
					case "Unlimited":
						if (
							card.banlist_info === undefined ||
							(card.banlist_info.length === 1 &&
								(card.banlist_info.contains("ban_ocg") ||
									card.banlist_info.contains("ban_goat")))
						) {
							currentQuestions.push(
								`This card is ${submittedValue} in the TCG`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is ${submittedValue} in the TCG`);
						} else if (card.banlist_info.ban_tcg !== undefined || null) {
							if (existingCard != null) {
								existingCard["banlist"] = `tcg`;
							}
							localStorage.setItem("createdCard", JSON.stringify(existingCard));
							currentQuestions.push(
								`This card is not ${submittedValue} in the TCG`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is NOT ${submittedValue} in the TCG`);
						}
				}
				break;
			case "ban_ocg":
				switch (submittedValue) {
					case "On List":
						if (
							card.banlist_info === undefined ||
							(card.banlist_info.length === 1 &&
								(card.banlist_info.contains("ban_tcg") ||
									card.banlist_info.contains("ban_goat")))
						) {
							currentQuestions.push(
								`This card is not ${submittedValue} in the OCG`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is NOT ${submittedValue} in the OCG`);
						} else if (card.banlist_info.ban_ocg !== undefined || null) {
							if (existingCard != null) {
								existingCard["banlist"] = `ocg`;
							}
							localStorage.setItem("createdCard", JSON.stringify(existingCard));
							currentQuestions.push(
								`This card is ${submittedValue} in the OCG and it is ${card.banlist_info.ocg}`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(
								`This card is ${submittedValue} in the OCG and it is ${card.banlist_info.ban_ocg}`
							);
						}
						break;
					case "Unlimited":
						if (
							card.banlist_info === undefined ||
							(card.banlist_info.length === 1 &&
								(card.banlist_info.contains("ban_tcg") ||
									card.banlist_info.contains("ban_goat")))
						) {
							currentQuestions.push(
								`This card is ${submittedValue} in the OCG`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is ${submittedValue} in the OCG`);
						} else if (card.banlist_info.ban_tcg !== undefined || null) {
							if (existingCard != null) {
								existingCard["banlist"] = `ocg`;
							}
							localStorage.setItem("createdCard", JSON.stringify(existingCard));
							currentQuestions.push(
								`This card is not ${submittedValue} in the OCG`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is NOT ${submittedValue} in the OCG`);
						}
				}
				break;
			case "ban_goat":
				switch (submittedValue) {
					case "On List":
						if (
							card.banlist_info === undefined ||
							(card.banlist_info.length === 1 &&
								(card.banlist_info.contains("ban_tcg") ||
									card.banlist_info.contains("ban_ocg")))
						) {
							currentQuestions.push(
								`This card is not ${submittedValue} in GOAT format`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is NOT ${submittedValue} in GOAT format`);
						} else if (card.banlist_info.ban_goat !== undefined || null) {
							if (existingCard != null) {
								existingCard["banlist"] = `goat`;
							}
							localStorage.setItem("createdCard", JSON.stringify(existingCard));
							currentQuestions.push(
								`This card is ${submittedValue} in GOAT format and it is ${card.banlist_info.ban_goat}`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(
								`This card is ${submittedValue} in GOAT format and it is ${card.banlist_info.ban_goat}`
							);
						}
						break;
					case "Unlimited":
						if (
							card.banlist_info === undefined ||
							(card.banlist_info.length === 1 &&
								(card.banlist_info.contains("ban_tcg") ||
									card.banlist_info.contains("ban_ocg")))
						) {
							currentQuestions.push(
								`This card is ${submittedValue} in GOAT format`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is ${submittedValue} in GOAT format`);
						} else if (card.banlist_info.goat !== undefined || null) {
							if (existingCard != null) {
								existingCard["banlist"] = `goat`;
							}
							localStorage.setItem("createdCard", JSON.stringify(existingCard));
							currentQuestions.push(
								`This card is not ${submittedValue} in GOAT format`
							);
							localStorage.setItem(
								"questionsList",
								JSON.stringify(currentQuestions)
							);
							alert(`This card is NOT ${submittedValue} in GOAT format`);
						}
				}
		}
	};

	return (
		<>
			<input list="formats" onChange={listFormat} />
			<datalist id="formats">
				<option value="ban_tcg">TCG</option>
				<option value="ban_ocg">OCG</option>
				<option value="ban_goat">GOAT</option>
			</datalist>
			<input
				list="qualityExamples"
				id="qualityChoiceRight"
				name="qualityChoice"
				onChange={qualityLog}
			></input>
			<datalist id="qualityExamples">
				<option value="On List">On List</option>
				<option value="Unlimited">Unlimited</option>
			</datalist>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default BanlistGuess;
