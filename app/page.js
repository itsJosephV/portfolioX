
import Intro from "../components/Intro";
import LeftSide from "../components/LeftSide";

// flex flex-col gap-5 slide-enter-content

export default function Home() {
  return (
    <div className="mx-auto flex max-w-containerSmall h-full relative">
      <LeftSide />
      <Intro />
    </div>
  );
}
