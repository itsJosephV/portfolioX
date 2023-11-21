'use client'
import { useEffect, useState } from "react";
import Intro from "../components/Home/Intro";
import { getQuote } from "./api/getQuote";

export default function Home() {

  const [newQuote, setNewQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = () => {
      const quote = getQuote();
      setNewQuote(quote);
    };

    fetchQuote();
  }, []); 

  useEffect(() => {
    console.log(newQuote)
  })

  return (
    <div className="max-w-containerSmall mx-auto w-full">
      <Intro quote={newQuote} />
    </div>
  );
}
