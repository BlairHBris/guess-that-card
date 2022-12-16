import React, { useState } from "react";

const AttributeGuess = () => {
	const attributes = [
		{
			id: 1,
			name: "Albaz",
		},
		{
			id: 2,
			name: "Abyss Actor",
		},
		{
			id: 3,
			name: "Adamancipator",
		},
		{
			id: 4,
			name: "Adventurer Token",
		},
		{
			id: 5,
			name: "Aesir",
		},
		{
			id: 6,
			name: "Agent",
		},
		{
			id: 7,
			name: "Alien",
		},
        {
			id: 9,
			name: "Ally of Justice",
		},
		{
			id: 10,
			name: "Altergeist",
		},
		{
			id: 11,
			name: "Amazemment",
		},
		{
			id: 12,
			name: "Amazoness",
		},
		{
			id: 13,
			name: "Amorphage",
		},
		{
			id: 14,
			name: "Ancient Gear",
		},
		{
			id: 15,
			name: "Ancient Warriors",
		},
		{
			id: 16,
			name: "Appliancer",
		},
		{
			id: 17,
			name: "Aquaactress",
		},
		{
			id: 18,
			name: "Arcana Force",
		},
		{
			id: 19,
			name: "Archfiend",
		},
		{
			id: 20,
			name: "Aromage",
		},
		{
			id: 21,
			name: "Assault Mode",
		},
		{
			id: 22,
			name: "Atlantean",
		},
		{
			id: 23,
			name: "A-to-Z",
		},
		{
			id: 24,
			name: "Batteryman",
		},
		{
			id: 25,
			name: "Battlewasp",
		},
		{
			id: 26,
			name: "Battlin Boxer",
		},
		{
			id: 27,
			name: "Beetrooper",
		},
		{
			id: 28,
			name: "Black Luster",
		},
		{
			id: 29,
			name: "Blackwing",
		},
		{
			id: 30,
			name: "Blue-Eyes",
		},
		{
			id: 31,
			name: "Bounzer",
		},
		{
			id: 32,
			name: "Bujin",
		},
		{
			id: 33,
			name: "Burning Abyss",
		},
		{
			id: 34,
			name: "Buster Blader",
		},
		{
			id: 35,
			name: "Butterspy",
		},
		{
			id: 36,
			name: "Bystial",
		},
		{
			id: 37,
			name: "Chaos",
		},
		{
			id: 38,
			name: "Chemicritter",
		},
        {
			id: 39,
			name: "Chronomaly",
		},
        {
			id: 40,
			name: "Chrysalis",
		},
        {
			id: 41,
			name: "",
		},
		{
			id: 42,
			name: "Bystial",
		},
		{
			id: 43,
			name: "Chaos",
		},
		{
			id: 44,
			name: "Chemicritter",
		},
        {
			id: 45,
			name: "Chronomaly",
		},
        {
			id: 46,
			name: "Chrysalis",
		},
        {
			id: 47,
			name: "Butterspy",
		},
		{
			id: 48,
			name: "Bystial",
		},
		{
			id: 49,
			name: "Chaos",
		},
		{
			id: 50,
			name: "Chemicritter",
		},
        {
			id: 51,
			name: "Chronomaly",
		},
        {
			id: 52,
			name: "Chrysalis",
		},
        {
			id: 53,
			name: "Butterspy",
		},
		{
			id: 54,
			name: "Bystial",
		},
		{
			id: 55,
			name: "Chaos",
		},
		{
			id: 56,
			name: "Chemicritter",
		},
        {
			id: 57,
			name: "Chronomaly",
		},
        {
			id: 58,
			name: "Chrysalis",
		},
        {
			id: 59,
			name: "Butterspy",
		},
		{
			id: 60,
			name: "Bystial",
		},
		{
			id: 61,
			name: "Chaos",
		},
		{
			id: 62,
			name: "Chemicritter",
		},
        {
			id: 63,
			name: "Chronomaly",
		},
        {
			id: 64,
			name: "Chrysalis",
		},
        {
			id: 65,
			name: "Butterspy",
		},
		{
			id: 66,
			name: "Bystial",
		},
		{
			id: 67,
			name: "Chaos",
		},
		{
			id: 68,
			name: "Chemicritter",
		},
        {
			id: 69,
			name: "Chronomaly",
		},
        {
			id: 70,
			name: "Chrysalis",
		},
        {
			id: 71,
			name: "Butterspy",
		},
		{
			id: 72,
			name: "Bystial",
		},
		{
			id: 73,
			name: "Chaos",
		},
		{
			id: 74,
			name: "Chemicritter",
		},
        {
			id: 75,
			name: "Chronomaly",
		},
        {
			id: 76,
			name: "Chrysalis",
		},
        {
			id: 77,
			name: "Butterspy",
		},
		{
			id: 78,
			name: "Bystial",
		},
		{
			id: 79,
			name: "Chaos",
		},
		{
			id: 80,
			name: "Chemicritter",
		},
        {
			id: 81,
			name: "Chronomaly",
		},
        {
			id: 82,
			name: "Chrysalis",
		},
        {
			id: 83,
			name: "Butterspy",
		},
		{
			id: 84,
			name: "Bystial",
		},
		{
			id: 85,
			name: "Chaos",
		},
		{
			id: 86,
			name: "Chemicritter",
		},
        {
			id: 87,
			name: "Chronomaly",
		},
        {
			id: 88,
			name: "Chrysalis",
		},
        {
			id: 89,
			name: "Butterspy",
		},
		{
			id: 90,
			name: "Bystial",
		},
		{
			id: 91,
			name: "Chaos",
		},
		{
			id: 92,
			name: "Chemicritter",
		},
        {
			id: 93,
			name: "Chronomaly",
		},
        {
			id: 94,
			name: "Chrysalis",
		},
        {
			id: 95,
			name: "Butterspy",
		},
		{
			id: 96,
			name: "Bystial",
		},
		{
			id: 97,
			name: "Chaos",
		},
		{
			id: 98,
			name: "Chemicritter",
		},
        {
			id: 99,
			name: "Chronomaly",
		},
        {
			id: 100,
			name: "Chrysalis",
		},
        {
			id: 101,
			name: "Butterspy",
		},
		{
			id: 102,
			name: "Bystial",
		},
		{
			id: 103,
			name: "Chaos",
		},
		{
			id: 104,
			name: "Chemicritter",
		},
        {
			id: 105,
			name: "Chronomaly",
		},
        {
			id: 106,
			name: "Chrysalis",
		},
        {
			id: 107,
			name: "Butterspy",
		},
		{
			id: 108,
			name: "Bystial",
		},
		{
			id: 109,
			name: "Chaos",
		},
		{
			id: 110,
			name: "Chemicritter",
		},
        {
			id: 111,
			name: "Chronomaly",
		},
        {
			id: 112,
			name: "Chrysalis",
		},
        {
			id: 113,
			name: "Butterspy",
		},
		{
			id: 114,
			name: "Bystial",
		},
		{
			id: 115,
			name: "Chaos",
		},
		{
			id: 116,
			name: "Chemicritter",
		},
        {
			id: 117,
			name: "Chronomaly",
		},
        {
			id: 118,
			name: "Chrysalis",
		},
        {
			id: 119,
			name: "Butterspy",
		},
		{
			id: 120,
			name: "Bystial",
		},
		{
			id: 121,
			name: "Chaos",
		},
		{
			id: 122,
			name: "Chemicritter",
		},
        {
			id: 123,
			name: "Chronomaly",
		},
        {
			id: 124,
			name: "Chrysalis",
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