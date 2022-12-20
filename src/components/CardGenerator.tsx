import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import QuestionInput from "./QuestionInput";
import QuestionDisplay from "./QuestionDisplay";
import CardImageFilter from "./CardImageFilter";

const CardGenerator = () => {
	const [data, setData] = useState<any>({ data: [] });
	const [cardFound, setCardFound] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState("");
	const [submittedCard, setSubmittedCard] = useState("");

	const createBlankCard = () => {
		localStorage.setItem("createdCard", "{}")
	}

	const createQuestionsList = () => {
		const questionsList: any = []
		localStorage.setItem("questionsList", JSON.stringify(questionsList))
	}

	const selectedCard = (event: any) => {
		setSubmittedCard(event.target.value);
	};

	const getCard = async () => {
		localStorage.clear();
		setIsLoading(true);
		setCardFound(false);
		try {
			const { data } = await axios.get(
				`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${submittedCard}`,
				{
					headers: {
						Accept: "application/json",
					},
				}
			);
			const chosenCard = data.data[0];
			localStorage.setItem("card", JSON.stringify(chosenCard));
			setData(chosenCard);
		} catch (err: any) {
			setErr(err.message);
		} finally {
			setIsLoading(false);
			setCardFound(true);
		}
		createBlankCard()
		createQuestionsList()
	};

	const getRandomCard = async () => {
		localStorage.clear();
		setIsLoading(true);
		setCardFound(false);
		const randomID = Math.floor(Math.random() * (12456 + 1));
		try {
			const { data } = await axios.get(
				`https://db.ygoprodeck.com/api/v7/cardinfo.php`,
				{
					headers: {
						Accept: "application/json",
					},
				}
			);
			const chosenCard = data.data[randomID];
			localStorage.setItem("card", JSON.stringify(chosenCard));
			setData(chosenCard);
		} catch (err: any) {
			setErr(err.message);
		} finally {
			setIsLoading(false);
			setCardFound(true);
		}
		createBlankCard()
		createQuestionsList()
	};

	return (
		<>
			{err && <h2>{err}</h2>}

			<button onClick={getRandomCard}>Get a Card!</button>
			<h2>Or select your own!</h2>
			<input
				type="text"
				id="name"
				name="name"
				onChange={selectedCard}
				value={submittedCard}
			/>
			<input onClick={getCard} type="submit" value="Set Card" />

			{isLoading && <h2 className="App-header">Loading...</h2>}

			{cardFound && (
				<>
					<h2 className="App-header">Your Card has been chosen!</h2>
					<h3>{data?.name}</h3>
					<QuestionInput />
					<QuestionDisplay/>
					<CardImageFilter/>
				</>
			)}
		</>
	);
};

export default CardGenerator;
