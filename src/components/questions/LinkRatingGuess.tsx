import React, { useState } from "react";

const LinkRatingGuess = () => {
	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedValue, setSubmittedValue] = useState("");
	const [mathValue, setMathValue] = useState("");

	const mathComparison = (event: any) => {
		setMathValue(event.target.value);
	};

	const qualityLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};

	const qualityCheck = (event: any) => {
		let existing = localStorage.getItem("questionsList");
		let currentQuestions = existing !== null ? JSON.parse(existing) : [];
		let present = localStorage.getItem("createdCard");
		let currentCard = present !== null ? JSON.parse(present) : {};
		const fullSearch = mathValue + submittedValue;
		switch (mathValue) {
			case "Exists":
				if (card.linkval !== undefined) {
					currentQuestions.push(`This card does have a link rating`);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card does have an link rating`);
				} else {
					currentQuestions.push(`This card does not have a link rating`);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card does NOT have a link rating`);
				}
				break;
			case "lt":
				if (card.linkval < submittedValue) {
					currentCard["linkval"] = `${fullSearch}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is less than ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's link rating is less than ${submittedValue}`);
				} else {
					currentCard["linkval"] = `gte${submittedValue}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is not less than ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's link rating is NOT less than ${submittedValue}`);
				}
				break;
			case "lte":
				if (card.linkval <= submittedValue) {
					currentCard["linkval"] = `${fullSearch}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is less than or equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's link rating is less than or equal to ${submittedValue}`
					);
				} else {
					currentCard["linkval"] = `gt${submittedValue}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is not less than or equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's link rating is NOT less than or equal to ${submittedValue}`
					);
				}
				break;
			case "=":
				if (card.linkval === Number(submittedValue)) {
					currentCard["linkval"] = `${fullSearch}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's link rating is equal to ${submittedValue}`);
				} else {
					currentQuestions.push(
						`This card's link rating is not equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's link rating is NOT equal to ${submittedValue}`);
				}
				break;
			case "gt":
				if (card.linkval > submittedValue) {
					currentCard["linkval"] = `${fullSearch}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is greater than ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's link rating is greater than ${submittedValue}`);
				} else {
					currentCard["linkval"] = `lte${submittedValue}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is not greater than ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's link rating is NOT greater than ${submittedValue}`
					);
				}
				break;
			case "gte":
				if (card.linkval >= submittedValue) {
					currentCard["linkval"] = `${fullSearch}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is greater than or equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's link rating is greater than or equal to ${submittedValue}`
					);
				} else {
					currentCard["linkval"] = `lt${submittedValue}`;
					localStorage.setItem("createdCard", JSON.stringify(currentCard));
					currentQuestions.push(
						`This card's link rating is not greater than or equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's link rating is NOT greater than or equal to ${submittedValue}`
					);
				}
				break;
		}
	};

	return (
		<>
			<input
				list="qualityExamples"
				id="qualityChoice"
				name="qualityChoice"
				onChange={mathComparison}
			></input>
			<datalist id="qualityExamples">
				<option value="Exists">Exists</option>
				<option value="lt">Less Than</option>
				<option value="lte">Less Than or Equal to</option>
				<option value="=">Equal to</option>
				<option value="gt">Greater Than</option>
				<option value="gte">Greater Than or Equal to</option>
			</datalist>
			<input type="number" onChange={qualityLog} />
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default LinkRatingGuess;
