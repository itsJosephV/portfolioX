import {
  BananaIcon,
  PenIcon,
  PosterIcon,
  BrushIcon,
  EmailMeIcon,
} from "@/icons";
import Link from "next/link";

const Intro = () => {
  return (
    <div
      className="flex gap-6 flex-col pt-12 pb-10 px-5 h-full mx-auto"
      // style={{border:"1px solid", borderColor:"gray", opacity:"50%"}}
    >
      <div>
        <h1 className="text-4xl font-bold text-white">Joseph V.</h1>
      </div>
      <article className="flex flex-col gap-5 slide-enter-content">
        <p className="text-base text-neutral-400 md:max-w-[650px] font-normal opacity-80 leading-7">
          Hey there!, I am Joseph Vento, a versatile full-stack web developer,
          designer, and occasional illustrator.
        </p>
        <p className="text-base text-neutral-400 md:max-w-[650px] font-normal opacity-80 leading-7">
          My journey is all about evolving into the best version of myself, with
          a strong emphasis on frontend development and design. I'm deeply
          immersed in technologies like JavaScript, ReactJS, NextJS,
          TailwindCSS, MongoDB, and NodeJS, crafting digital experiences that
          captivate and engage.
        </p>
        <p className="text-base text-neutral-400 md:max-w-[650px] font-normal opacity-80 leading-7">
          Beyond the screen, I find my creative outlet through drawing.
          Constantly improving my skills, You can catch a glimpse of my artwork
          on Instagram, where I share my visual creations.
        </p>

        <div className="flex flex-col gap-2 md:max-w-[650px] mt-8">
          <p className="text-base text-neutral-400  font-normal">
            Some description about the links
          </p>
          <div className="flex flex-col gap-1.5">
            <div className="inline-flex items-center gap-1">
              <PenIcon height={16} width={16} />
              <a href="" className="hover:underline">
                Design
              </a>
            </div>
            <div className="inline-flex items-center gap-1">
              <BrushIcon height={16} width={16} />
              <a href="" className="hover:underline">
                Illustrations
              </a>
            </div>
            <div className="inline-flex items-center gap-1">
              <PosterIcon height={16} width={16} />
              <a href="" className="hover:underline">
                Posters
              </a>
            </div>
          </div>
        </div>

        <small className="w-60 mt-10">
          <Link
            href={{ pathname: "contact", query: { focusTextarea: true } }}
            className="py-1 px-2 bg-neutral-800 rounded-md flex items-center gap-1 text-neutral-400 cursor-pointer hover:text-neutral-100 duration-200"
          >
            <span>
              <EmailMeIcon height={12} width={12} />
            </span>
            Email me at jvp.2703@gmail.com
          </Link>
        </small>
        <small className="text-neutral-400 flex items-center gap-1">
          Based in Gran Canaria{" "}
          <span className="inline-block">
            <BananaIcon height={13} width={13} />
          </span>{" "}
          Spain.
        </small>
        <small className="text-neutral-400">2023-Present.</small>
      </article>
    </div>
  );
};

export default Intro;
