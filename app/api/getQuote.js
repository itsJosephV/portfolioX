export const getQuote = async () => {
  const url = `https://api.api-ninjas.com/v1/quotes?category=${process.env.NEXT_PUBLIC_QUOTE_SUBJECT}&limit=1`;

  const data = await fetch(url, {
    cache: 'no-store',
    method: "GET",
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_NINJA_AKEY,
    },
  });
  const quoteData = await data.json();

  return quoteData[0]
};