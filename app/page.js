import Intro from "./components/Intro";
import LeftSide from "./components/LeftSide";

export default function Home() {
  return (
    <>
      <LeftSide />
      <div
        className="md:flex mx-auto max-w-containerSmall"
        // style={{border:"1px solid", borderColor:"gray", opacity:"50%"}}

      >
        <Intro />
      </div>
    </>
  );
}
