import React, { useState } from "react";

const NameGuess = () => {
	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedValue, setSubmittedValue] = useState("");

	const nameLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};

	const addToQuestionsList = () => {
        let existing = localStorage.getItem('questionsList')
        let currentQuestions = existing !== null ? JSON.parse(existing) : []
        if (card.type.includes(submittedValue)) {
            currentQuestions.push(`This card is ${submittedValue}`)
            localStorage.setItem('questionsList', JSON.stringify(currentQuestions))    
        } else {
            currentQuestions.push(`This card is not ${submittedValue}`)
            localStorage.setItem('questionsList', JSON.stringify(currentQuestions))      
        }
    }

	const nameCheck = (event: any) => {
		if (submittedValue === card.name) {
			alert("Correct! Select 'Get a Card!' to play again!");
			addToQuestionsList()
		} else {
			alert("Incorrect! Keep going!");
			addToQuestionsList()
		}
	};

	return (
		<div>
			<input
				type="text"
				id="name"
				name="name"
				onChange={nameLog}
				value={submittedValue}
			/>
			<input onClick={nameCheck} type="submit" value="Guess" />
		</div>
	);
};

export default NameGuess;
