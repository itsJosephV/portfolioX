// 'use client'
// import { useEffect, useState } from "react";
import Intro from "../components/Home/Intro";
import { getQuote } from "./api/getQuote";

const quoteData = getQuote();

export default async function Home() {
  const quotes = await quoteData;

  console.log(quotes);

  // const [newQuote, setNewQuote] = useState(null);

  // useEffect(() => {
  //   const fetchQuote = () => {
  //     const quote = getQuote();
  //     setNewQuote(quote);
  //   };

  //   fetchQuote();
  // }, []);

  return (
    <div className="max-w-containerSmall mx-auto w-full">
      <Intro quote={quotes} />
    </div>
  );
}
