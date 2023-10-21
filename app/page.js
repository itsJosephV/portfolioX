import Intro from "../components/Home/Intro";
import { getQuote } from "./api/getQuote";

export default async function Home() {

  const quote = await getQuote()

  return (
    <div className="max-w-containerSmall mx-auto w-full">
      <Intro quote={quote} />
    </div>
  );
}
