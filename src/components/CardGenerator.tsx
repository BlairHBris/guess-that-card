import React, { useState } from "react";
import axios from "axios";

const CardGenerator = () => {
  const [data, setData] = useState<any>({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const getRandomCard = async () => {
    localStorage.clear();
    setIsLoading(true);
    const randomID = Math.floor(Math.random() * (1100000 - 5000 + 1)) + 1;
    try {
      const { data } = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${randomID}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("card", JSON.stringify(data));
      console.log(data);
      setData(data);
    } catch (err: any) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {err && <h2>{err}</h2>}

      <button onClick={getRandomCard}>Get a Card!</button>

      {isLoading && <h2>Loading...</h2>}

      {data?.data[0]?.name }
    </>
  );
};

export default CardGenerator;
