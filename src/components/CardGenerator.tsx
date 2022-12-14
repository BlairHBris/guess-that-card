import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import QuestionInput from "./QuestionInput";

const CardGenerator = () => {
  const [data, setData] = useState<any>({ data: [] });
  const [cardFound, setCardFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const getRandomCard = async () => {
    localStorage.clear();
    setIsLoading(true);
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
  };

  return (
    <>
      {err && <h2>{err}</h2>}

      <button onClick={getRandomCard}>Get a Card!</button>

      {isLoading && <h2 className="App-header">Loading...</h2>}

      {cardFound && (
        <>
          <h2 className="App-header">Your Card has been chosen!</h2>
          <h3>{data?.name}</h3>
          <QuestionInput />
        </>
      )}
    </>
  );
};

export default CardGenerator;
