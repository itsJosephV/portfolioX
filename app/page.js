
import Intro from "../components/Home/Intro";
import SocialsHome from "../components/Home/SocialsHome";

// flex flex-col gap-5 slide-enter-content

export default function Home() {
  return (
    <div className="max-w-containerSmall mx-auto w-full relative">
      <SocialsHome />
      <Intro />
    </div>
  );
}
