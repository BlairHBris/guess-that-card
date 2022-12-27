import React, { useState } from "react";

const CustomGuess = () => {
	const [submittedValue, setSubmittedValue] = useState("");
	const [booleanValue, setBooleanValue] = useState("");

	const booleanEvaluation = (event: any) => {
		setBooleanValue(event.target.value);
	};

	const qualityLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};

	const qualityCheck = (event: any) => {
		let existing = localStorage.getItem("questionsList");
		let currentQuestions = existing !== null ? JSON.parse(existing) : [];
		switch (booleanValue) {
			case "yes":
				currentQuestions.push(
					`The following statement is true: ${submittedValue}`
				);
				localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
				alert(`The following statement is true: ${submittedValue}`);
				break;
			case "no":
				currentQuestions.push(
					`The following statement is false: ${submittedValue}`
				);
				localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
				alert(`The following statement is false: ${submittedValue}`);
				break;
		}
	};

	return (
		<>
			<input type="text" onChange={qualityLog} />
			<input
				list="qualityExamples"
				id="qualityChoiceRight"
				name="qualityChoice"
				onChange={booleanEvaluation}
				type="text"
			></input>
			<datalist id="qualityExamples">
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</datalist>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default CustomGuess;
