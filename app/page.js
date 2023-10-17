
import Intro from "../components/_home/Intro";
import SocialsHome from "../components/_home/SocialsHome";

// flex flex-col gap-5 slide-enter-content

export default function Home() {
  return (
    <div className="max-w-containerSmall mx-auto w-full relative">
      <SocialsHome />
      <Intro />
    </div>
  );
}
