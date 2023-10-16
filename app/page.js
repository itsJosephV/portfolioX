
import Intro from "../components/Intro";
import SocialsHome from "../components/SocialsHome";

// flex flex-col gap-5 slide-enter-content

export default function Home() {
  return (
    <div className="mx-auto max-w-containerSmall relative">
      <SocialsHome />
      <Intro />
    </div>
  );
}
