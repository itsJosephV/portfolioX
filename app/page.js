
import Intro from "../components/Home/Intro";
import SocialsHomeLG  from "../components/Home/SocialsHomeLG";

// flex flex-col gap-5 slide-enter-content

export default function Home() {
  return (
    <div className="max-w-containerSmall mx-auto w-full relative">
      <SocialsHomeLG />
      <Intro />
    </div>
  );
}
