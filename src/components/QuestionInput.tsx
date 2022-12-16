import React, { useState } from "react";
import AttributeGuess from "./questions/AttributeGuess";
import NameGuess from "./questions/NameGuess";
import RaceGuess from "./questions/RaceGuess";
import TypeGuess from "./questions/TypeGuess";

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
		{
			id: 3,
			name: "Card 'Race' (Normal Spell/Trap, Aqua)",
		},
		{
			id: 4,
			name: "Card Attribute (Dark, Devine)",
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
			<div className="questions-section">
				{(() => {
					switch (selectedQuestion) {
						case "Card Name":
							return <NameGuess />;
						case "Card Attribute (Dark, Devine)":
							return <AttributeGuess />;
						case "Card 'Race' (Normal Spell/Trap, Aqua)":
							return <RaceGuess />; 
						case "Card Type (Monster, Spell, Trap, Effect Monster, XYZ)":
							return <TypeGuess />;
					}
				})()}
			</div>
		</>
	);
};

export default QuestionInput;
