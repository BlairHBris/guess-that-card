import React from "react";

const QuestionDisplay = () => {

	const showKnownInformation = () => {
		const knownInformation = document.querySelector(".knownInformation");
		let existing = localStorage.getItem("questionsList");
		let currentQuestions = existing !== null ? JSON.parse(existing) : [];
		knownInformation!.innerHTML = ""
		let ol = document.createElement("ol");
		currentQuestions.forEach((currentQuestion: string | Node) => {
			let li = document.createElement("li")
			li.append(currentQuestion)
			ol.append(li)
		});
		knownInformation!.append(ol);
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
