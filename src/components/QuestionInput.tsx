import React, { useState } from "react";
import BanlistGuess from "./questions/BanlistGuess";
import ArchetypeGuess from "./questions/ArchetypeGuess";
import AttackGuess from "./questions/AttackGuess";
import AttributeGuess from "./questions/AttributeGuess";
import CustomGuess from "./questions/CustomGuess";
import DefenseGuess from "./questions/DefenseGuess";
import LevelGuess from "./questions/LevelGuess";
import LinkArrowsGuess from "./questions/LinkArrowsGuess";
import LinkRatingGuess from "./questions/LinkRatingGuess";
import NameGuess from "./questions/NameGuess";
import RaceGuess from "./questions/RaceGuess";
import ScaleGuess from "./questions/ScaleGuess";
import TypeGuess from "./questions/TypeGuess";
import PrintDateGuess from "./questions/PrintDateGuess";
import EffectGuess from "./questions/EffectGuess";

const QuestionInput = () => {
	const questions = [
		{
			id: 1,
			name: "Archetype (Blue-Eyes, Dark Magician)",
		},
		{
			id: 2,
			name: "Attack Value",
		},
		{
			id: 3,
			name: "Attribute (Dark, Devine)",
		},
		{
			id: 4,
			name: "Banlist",
		},
		{
			id: 5,
			name: "Card Name",
		},
		{
			id: 6,
			name: "Defense Value",
		},
		{
			id: 7,
			name: "Has Effect (WIP)"
		},
		{
			id: 8,
			name: "Level/Rank Value",
		},
		{
			id: 9,
			name: "Link Arrows",
		},
		{
			id: 10,
			name: "Link Rating",
		},
		{
			id: 11,
			name: "Print Date (TCG Only)",
		},
		{
			id: 12,
			name: "Scale",
		},
		{
			id: 13,
			name: "Type (Monster, Spell, Trap, Effect Monster, XYZ)",
		},
		{
			id: 14,
			name: "'Race' (Normal Spell/Trap, Aqua)",
		},
		{
			is: 15,
			name: "Custom",
		},
	];

	const [selectedQuestion, setSelectedQuestion] = useState("");

	const handleChange = (event: any) => {
		setSelectedQuestion(event.target.value);
	};

	return (
		<>
			<h1 className="questionHeader">
				Ask your questions below! 20 questions.
			</h1>
			<label htmlFor="questionCategory">Question Category:</label>
			<input
				list="questionCategoryExamples"
				id="questionChoice"
				name="questionChoice"
				type="text"
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
						case "Banlist":
							return <BanlistGuess />;
						case "Card Name":
							return <NameGuess />;
						case "Archetype (Blue-Eyes, Dark Magician)":
							return <ArchetypeGuess />;
						case "Attack Value":
							return <AttackGuess />;
						case "Attribute (Dark, Devine)":
							return <AttributeGuess />;
						case "Defense Value":
							return <DefenseGuess />;
						case "Has Effect":
							return <EffectGuess />;
						case "Level/Rank Value":
							return <LevelGuess />;
						case "Link Arrows":
							return <LinkArrowsGuess />;
						case "Link Rating":
							return <LinkRatingGuess />;
						case "Print Date (TCG Only)":
							return <PrintDateGuess />;
						case "'Race' (Normal Spell/Trap, Aqua)":
							return <RaceGuess />;
						case "Scale":
							return <ScaleGuess />;
						case "Type (Monster, Spell, Trap, Effect Monster, XYZ)":
							return <TypeGuess />;
						case "Custom":
							return <CustomGuess />;
					}
				})()}
			</div>
		</>
	);
};

export default QuestionInput;
