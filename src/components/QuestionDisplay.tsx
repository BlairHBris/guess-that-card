import React from "react";

const QuestionDisplay = () => {

	const showKnownInformation = () => {
		const knownInformation = document.querySelector(".knownInformation");
		let existing = localStorage.getItem("questionsList");
		let currentQuestions = existing !== null ? JSON.parse(existing) : [];
		let div = document.createElement("div");
		div.innerHTML = currentQuestions[currentQuestions.length-1];
		knownInformation!.append(div);
	};

	return (
		<>
			<button className="knownQuestions" onClick={showKnownInformation}>
				Show Known Information
			</button>
			<p className="knownInformation"></p>
		</>
	);
};

export default QuestionDisplay;
