import React, { useState } from "react";

const ScaleGuess = () => {
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
		const fullSearch = mathValue + submittedValue;
		switch (mathValue) {
			case "Exists":
				if (card.scale !== undefined) {
					currentQuestions.push(`This card does have a scale`);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card does have an link rating`);
				} else {
					currentQuestions.push(`This card does not have a scale`);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card does NOT have a scale`);
				}
				break;
			case "lt":
				if (card.scale < submittedValue) {
					let existing = localStorage.getItem("createdCard");
					existing = existing ? JSON.parse(existing) : {};
					if (existing != null) {
						existing["scale"] = `${fullSearch}`;
					}
					localStorage.setItem("createdCard", JSON.stringify(existing));
					currentQuestions.push(
						`This card's scale is less than ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's scale is less than ${submittedValue}`);
				} else {
					currentQuestions.push(
						`This card's scale is not less than ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's scale is NOT less than ${submittedValue}`);
				}
				break;
			case "lte":
				if (card.scale <= submittedValue) {
					let existing = localStorage.getItem("createdCard");
					existing = existing ? JSON.parse(existing) : {};
					if (existing != null) {
						existing["scale"] = `${fullSearch}`;
					}
					localStorage.setItem("createdCard", JSON.stringify(existing));
					currentQuestions.push(
						`This card's scale is less than or equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's scale is less than or equal to ${submittedValue}`
					);
				} else {
					currentQuestions.push(
						`This card's scale is not less than or equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's scale is NOT less than or equal to ${submittedValue}`
					);
				}
				break;
			case "=":
				if (card.scale === Number(submittedValue)) {
					let existing = localStorage.getItem("createdCard");
					existing = existing ? JSON.parse(existing) : {};
					if (existing != null) {
						existing["scale"] = `${submittedValue}`;
					}
					localStorage.setItem("createdCard", JSON.stringify(existing));
					currentQuestions.push(
						`This card's scale is equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's scale is equal to ${submittedValue}`);
				} else {
					currentQuestions.push(
						`This card's scale is not equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's scale is NOT equal to ${submittedValue}`);
				}
				break;
			case "gt":
				if (card.scale > submittedValue) {
					let existing = localStorage.getItem("createdCard");
					existing = existing ? JSON.parse(existing) : {};
					if (existing != null) {
						existing["scale"] = `${fullSearch}`;
					}
					localStorage.setItem("createdCard", JSON.stringify(existing));
					currentQuestions.push(
						`This card's scale is greater than ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's scale is greater than ${submittedValue}`);
				} else {
					currentQuestions.push(
						`This card's scale is not greater than ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(`This card's scale is NOT greater than ${submittedValue}`);
				}
				break;
			case "gte":
				if (card.scale >= submittedValue) {
					let existing = localStorage.getItem("createdCard");
					existing = existing ? JSON.parse(existing) : {};
					if (existing != null) {
						existing["scale"] = `${fullSearch}`;
					}
					localStorage.setItem("createdCard", JSON.stringify(existing));
					currentQuestions.push(
						`This card's scale is greater than or equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's scale is greater than or equal to ${submittedValue}`
					);
				} else {
					currentQuestions.push(
						`This card's scale is not greater than or equal to ${submittedValue}`
					);
					localStorage.setItem(
						"questionsList",
						JSON.stringify(currentQuestions)
					);
					alert(
						`This card's scale is NOT greater than or equal to ${submittedValue}`
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

export default ScaleGuess;
