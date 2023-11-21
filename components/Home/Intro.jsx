"use client";
import { linksList } from "@/components/Home/links_list";
import { useGenerationStore } from "@/app/qstate";
import { skillList } from "@/components/Home/skill_list";
import { Divider } from "@nextui-org/react";
import { BananaIcon } from "@/icons/icons";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import SocialsHome from "./SocialsHome";
import Link from "next/link";

const Intro = ({ quote }) => {
  const { isQuoteOpen } = useGenerationStore();
  
  return (
    <article>
      <div className="max-w-containerxs mx-auto mb-10">
        <h1 className="text-2xl font-semibold">Joseph Vento</h1>
      </div>
      <div className="flex flex-col slide-enter-content max-w-containerxs mx-auto">
        <p className=" mb-7 text-zinc-400">
          Hey There! 👋🏼 , I am Joseph Vento, a{" "}
          <span className="text-white font-medium">
            Front-End Web Developer.
          </span>
        </p>
        <p className="mb-7 leading-7 text-zinc-400">
          My path is about getting better every day and becoming the best
          version of myself. Currently focused on improving my skills in
          Front-End development, which involves creating appealing and
          user-friendly digital interfaces.
        </p>
        <ul className="gap-2 mb-7 flex flex-wrap text-zinc-400">
          <p className="font-medium">Current stack:</p>{" "}
          {skillList.map((skill, index) => (
            <li key={skill.title}>
              <span className="font-medium text-white">
                {skill.title}
                {index !== skillList.length - 1 ? ", " : "."}
              </span>
            </li>
          ))}
        </ul>
        <p className="leading-7 text-zinc-400">
          Apart from coding, I express my creativity by drawing and designing,
          you can catch a glimpse of my artwork on Instagram, where I share my
          visual creations.
        </p>
        <Divider className="my-8 bg-white/10" />
        <section className="mb-7">
          <p className="text-zinc-400 font-medium mb-2">Other crafts</p>
          <ul className="inline-flex flex-wrap gap-3"> {/** adjusting width to elements with inline-flex */}
            {linksList.map(({ title, route }) => (
              <li key={title} className=" text-white">
                <Link
                  href={route}
                  className="underline decoration-white/30 hover:decoration-white duration-200 underline-offset-4"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p className="text-zinc-400 font-medium mb-2">Socials</p>
          <SocialsHome />
        </section>
        <span
          role="spacer"
          aria-hidden="true"
          className="my-8 no-animation"
        ></span>
        <a
          href="mailto:jvp.2703@gmail.com"
          className="py-1 px-3 text-white hover:text-white/70 bg-zinc-800 rounded-md cursor-pointer duration-200 mb-5 w-fit flex items-center gap-1" //w-fit cuz parent is a flex container
        >
          <EnvelopeIcon height={13} width={13} />
          <small>jvp.2703@gmail.com</small>
        </a>
        <small className="flex items-center text-zinc-400 gap-1">
          Based in Gran Canaria{" "}
          <span>
            <BananaIcon height={13} width={13} />
          </span>{" "}
          Spain.
        </small>
        {isQuoteOpen && (
          <>
            <span
              role="spacer"
              aria-hidden="true"
              className="my-8 no-animation"
            ></span>
            <section className="flex justify-center text-zinc-600 px-5 no-animation">
              <blockquote className="">
                <p className="mb-2">
                  <em>"{quote?.quote}"</em>
                </p>
                <cite>
                  <small>- {quote?.author}</small>
                </cite>
              </blockquote>
            </section>
          </>
        )}
      </div>
    </article>
  );
};

export default Intro;
