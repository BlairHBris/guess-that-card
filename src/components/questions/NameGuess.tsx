import React, { useState } from "react";

const NameGuess = () => {
	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedName, setSubmittedName] = useState("");

	const nameLog = (event: any) => {
		setSubmittedName(event.target.value);
	};

	const nameCheck = (event: any) => {
		if (submittedName === card.name) {
			alert("Correct! Select 'Get a Card!' to play again!");
		} else {
			alert("Incorrect! Keep going!");
		}
	};

	return (
		<div>
			<input
				type="text"
				id="name"
				name="name"
				onChange={nameLog}
				value={submittedName}
			/>
			<input onClick={nameCheck} type="submit" value="Guess" />
		</div>
	);
};

export default NameGuess;
