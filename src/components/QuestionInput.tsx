import React, { useState } from "react";
import ArchetypeGuess from "./questions/ArchetypeGuess";
import AttackGuess from "./questions/AttackGuess";
import AttributeGuess from "./questions/AttributeGuess";
import DefenseGuess from "./questions/DefenseGuess";
import LevelGuess from "./questions/LevelGuess";
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
			name: "Card Archetype (Blue-Eyes, Dark Magician)",
		},
		{
			id: 3,
			name: "Card Attack Value",
		},
		{
			id: 4,
			name: "Card Attribute (Dark, Devine)",
		},
		{
			id: 5,
			name: "Card Defense Value",
		},
		{
			id: 6,
			name: "Card Level/Rank Value",
		},
		{
			id: 7,
			name: "Card Type (Monster, Spell, Trap, Effect Monster, XYZ)",
		},
		{
			id: 8,
			name: "Card 'Race' (Normal Spell/Trap, Aqua)",
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
						case "Card Archetype (Blue-Eyes, Dark Magician)":
							return <ArchetypeGuess />;
						case "Card Attack Value":
							return <AttackGuess />;
						case "Card Attribute (Dark, Devine)":
							return <AttributeGuess />;
						case "Card Defense Value":
							return <DefenseGuess />;
						case "Card Level/Rank Value":
							return <LevelGuess />;
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
