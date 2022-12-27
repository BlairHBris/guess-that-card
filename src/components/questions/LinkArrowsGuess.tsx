import React from "react";

const LinkArrowsGuess = () => {
	const linkArrows = [
		{
			id: 1,
			name: "Top",
		},
		{
			id: 2,
			name: "Bottom",
		},
		{
			id: 3,
			name: "Left",
		},
		{
			id: 4,
			name: "Right",
		},
		{
			id: 5,
			name: "Top-Right",
		},
		{
			id: 6,
			name: "Top-Left",
		},
		{
			id: 7,
			name: "Bottom-Right",
		},
		{
			id: 8,
			name: "Bottom-Left",
		},
	];

	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const qualityLog = (event: any) => {
		let existing = localStorage.getItem("linkArrows");
		let currentArrows = existing !== null ? JSON.parse(existing) : [];
		if (currentArrows.includes(event.target.value)) {
			currentArrows.pop(event.target.value);
		} else {
			currentArrows.push(event.target.value);
		}
		localStorage.setItem("linkArrows", JSON.stringify(currentArrows));
	};

	const exactMatch = (event: any) => {
		let guessed = localStorage.getItem("linkArrows");
		let submittedArrows = guessed !== null ? JSON.parse(guessed) : [];
		let sortedGuess = submittedArrows.sort();
		let questions = localStorage.getItem("questionsList");
		let currentQuestions = questions !== null ? JSON.parse(questions) : [];
		if (card.linkmarkers) {
			let sortedCard = card.linkmarkers.sort();
			if (JSON.stringify(sortedCard) === JSON.stringify(sortedGuess)) {
				let existing = localStorage.getItem("createdCard");
				existing = existing ? JSON.parse(existing) : {};
				if (existing != null) {
					existing["linkmarkers"] = `${sortedGuess}`;
				}
				currentQuestions.push(
					`This card's link arrows are exactly ${sortedGuess}`
				);
				localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
				localStorage.setItem("createdCard", JSON.stringify(existing));
				alert(`This card's link arrows are exactly ${sortedGuess}`);
			} else {
				currentQuestions.push(
					`This card's link arrows are NOT exactly ${sortedGuess}`
				);
				localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
				alert(`This card's link arrows are not exactly ${sortedGuess}`);
			}
		} else {
			currentQuestions.push(
				`This card's link arrows are NOT exactly ${sortedGuess}`
			);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card's link arrows are not exactly ${sortedGuess}`);
		}
	};

	const allGuess = (event: any) => {
		let guessed = localStorage.getItem("linkArrows");
		let submittedArrows = guessed !== null ? JSON.parse(guessed) : [];
		let sortedGuess = submittedArrows.sort();
		let questions = localStorage.getItem("questionsList");
		let currentQuestions = questions !== null ? JSON.parse(questions) : [];
		if (card.linkmarkers) {
			let sortedCard = card.linkmarkers.sort();
			const intersection = sortedGuess.filter((element: any) =>
				sortedCard.includes(element)
			);
			if (intersection.length !== 0) {
				currentQuestions.push(
					`At least one of the following link arrows are on the chosen card ${sortedGuess}`
				);
				localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
				alert(
					`At least one of the following link arrows are on the chosen card: ${sortedGuess}`
				);
			} else {
				currentQuestions.push(
					`None of the following link arrows are on the chosen card: ${sortedGuess}`
				);
				localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
				alert(
					`None of the following link arrows are on the chosen card: ${sortedGuess}`
				);
			}
		} else {
			currentQuestions.push(
				`None of the following link arrows are on the chosen card: ${sortedGuess}`
			);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(
				`None of the following link arrows are on the chosen card: ${sortedGuess}`
			);
		}
	};

	return (
		<>
			<form id="qualityExamples" className="linkArrows" action="">
				{linkArrows &&
					linkArrows.length > 0 &&
					linkArrows.map((linkArrow) => {
						return (
							<label className="container">
								<input
									onClick={qualityLog}
									key={linkArrow.id}
									type="checkbox"
									name={linkArrow.name}
									value={linkArrow.name}
								/>
								<span className="checkboxText">{linkArrow.name}</span>
							</label>
						);
					})}
			</form>
			<div className="dualButtons">
				<input onClick={allGuess} type="submit" value="Includes" />
				<input onClick={exactMatch} type="submit" value="Exact Match" />
			</div>
		</>
	);
};

export default LinkArrowsGuess;
