import React, { useState } from "react";

const AttributeGuess = () => {
	const attributes = [
		{
			id: 1,
			name: "DARK",
		},
		{
			id: 2,
			name: "DEVINE",
		},
		{
			id: 3,
			name: "EARTH",
		},
		{
			id: 4,
			name: "FIRE",
		},
		{
			id: 5,
			name: "LIGHT",
		},
		{
			id: 6,
			name: "WATER",
		},
		{
			id: 7,
			name: "WIND",
		},
	];

	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedValue, setSubmittedValue] = useState("");

    const addToQuestionsList = () => {
        let existing = localStorage.getItem('questionsList')
        let currentQuestions = existing !== null ? JSON.parse(existing) : []
        if (card.attribute.includes(submittedValue)) {
            currentQuestions.push(`This card is ${submittedValue} attribute`)
            localStorage.setItem('questionsList', JSON.stringify(currentQuestions)) 
			alert(`This card is a ${submittedValue} attribute`)   
        } else {
            currentQuestions.push(`This card is not ${submittedValue} attribute`)
            localStorage.setItem('questionsList', JSON.stringify(currentQuestions)) 
			alert(`This card is NOT ${submittedValue} attribute`)        
        }
    }

	const qualityLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};

	const qualityCheck = (event: any) => {
		if (card.attribute.includes(submittedValue)) {
            let existing = localStorage.getItem('createdCard')
            existing = existing ? JSON.parse(existing) : {}
            if (existing != null) {
                existing['attribute'] = `${submittedValue}`
            }
            localStorage.setItem('createdCard', JSON.stringify(existing))
            addToQuestionsList()
        } else {
            addToQuestionsList()
        }
	};

	return (
		<>
			<input
				list="qualityExamples"
				id="qualityChoice"
				name="qualityChoice"
				onChange={qualityLog}
			></input>
			<datalist id="qualityExamples">
				{attributes &&
					attributes.length > 0 &&
					attributes.map((attribute) => {
						return (
							<option key={attribute.id} value={attribute.name}>
								{attribute?.name}
							</option>
						);
					})}
			</datalist>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default AttributeGuess;
