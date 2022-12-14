import React, { useState } from "react";
import NameGuess from "./questions/NameGuess";

const QuestionInput = () => {
	const questions = [
		{
			id: 1,
			name: "Card Name",
		},
		{
			id: 2,
			name: "Card Type (Monster, Spell, Trap, Effect Monster, XYZ)",
		},
	];

	const [selectedQuestion, setSelectedQuestion] = useState("");

	const handleChange = (event: any) => {
		setSelectedQuestion(event.target.value);
	};

	return (
		<>
			<h3>Ask your questions below! 20 questions.</h3>
			<label htmlFor="questionCategory">Question Category:</label>
			<input
				list="questionCategoryExamples"
				id="questionChoice"
				name="questionChoice"
				onChange={handleChange}
			></input>
			<datalist id="questionCategoryExamples">
				{questions && questions.length > 0 ? (
					questions.map((question) => {
						return (
							<option key={question.id} value={question.name}>
								{question?.name}
							</option>
						);
					})
				) : (
					<div>Data loading in progress...</div>
				)}
			</datalist>
			<br />
			<div>
				{(() => {
					switch (selectedQuestion) {
						case "Card Name":
							return <NameGuess />;
						case "Card Type (Monster, Spell, Trap, Effect Monster, XYZ)":
							return "hello";
						default:
							return "";
					}
				})()}
			</div>
		</>
	);
};

export default QuestionInput;
