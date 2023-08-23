"use client";
import {
  BananaIcon,
  PenIcon,
  PosterIcon,
  BrushIcon,
  EmailMeIcon,
} from "@/icons";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <div className="max-w-containerxs mx-auto">
        <h1
          className="text-4xl font-bold text-white mb-8"
          // style={{ border: "1px solid", borderColor: "red" }}
        >
          Joseph V.
        </h1>
      </div>
      <article>
        <div className="flex flex-col slide-enter-content max-w-containerxs mx-auto">
          <p className="text-base text-neutral-400 font-normal opacity-80 leading-7 mb-5">
            Hey there!, I am Joseph Vento, a{" "}
            <span className="font-semibold text-neutral-300">
              Full-Stack Web Developer.
            </span>
          </p>
          <p className="text-base text-neutral-400  font-normal opacity-80 leading-7 mb-5">
            My path is about getting better every day and becoming the best
            version of myself. I'm currently focused on improving my skills in
            frontend development, which involves creating appealing and
            user-friendly digital interfaces.
          </p>
          <p className="text-neutral-400 gap-2 mb-5">
            Current skills:{" "}
            <span className="font-semibold text-neutral-300">JavaScript</span>,{" "}
            <span className="font-semibold text-neutral-300">ReactJS</span>,{" "}
            <span className="font-semibold text-neutral-300">NextJS</span>,{" "}
            <span className="font-semibold text-neutral-300">TailwdindCSS</span>
            , <span className="font-semibold text-neutral-300">NodeJS</span>,{" "}
            <span className="font-semibold text-neutral-300">MongoDB</span>
          </p>
          <p className="text-base text-neutral-400 font-normal opacity-80 leading-7">
            Apart from coding, I express my creativity by drawing and designing,
            you can catch a glimpse of my artwork on Instagram, where I share my
            visual creations.
          </p>
          <Divider className="my-8" />
          <div className="flex flex-col gap-2">
            <p className="text-base text-neutral-400  font-normal">
              Another links
            </p>
            <div className="flex flex-row gap-2">
              <div className="inline-flex items-center gap-1">
                <PenIcon height={18} width={18} />
                <a href="" className="hover:underline">
                  Designs
                </a>
              </div>
              <div className="inline-flex items-center gap-1">
                <BrushIcon height={18} width={18} />
                <a href="" className="hover:underline">
                  Illustrations
                </a>
              </div>
              <div className="inline-flex items-center gap-1">
                <PosterIcon height={18} width={18} />
                <a href="" className="hover:underline">
                  Posters
                </a>
              </div>
            </div>
          </div>
          <Divider className="my-8" />
          <small className="w-60 mb-5">
            <Link
              href={{ pathname: "contact", query: { focusTextarea: true } }}
              className="py-1 px-2 bg-neutral-800 rounded-md flex items-center justify-center gap-1 text-neutral-400 cursor-pointer hover:text-neutral-100 duration-200"
            >
              <span>
                <EmailMeIcon height={12} width={12} />
              </span>
              Email me at jvp.2703@gmail.com
            </Link>
          </small>
          <small className="text-neutral-400 flex items-center gap-1 mb-5">
            Based in Gran Canaria{" "}
            <span className="inline-block">
              <BananaIcon height={13} width={13} />
            </span>{" "}
            Spain.
          </small>
          <small className="text-neutral-400">2023-Present.</small>
        </div>
      </article>
    </>
  );
};

export default Intro;
