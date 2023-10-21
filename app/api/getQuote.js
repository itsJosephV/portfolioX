import quotes from "../../data/quotes"

export  const getQuote = () => {
  const index = Math.floor(Math.random() * quotes.length)
  return quotes[index]
}