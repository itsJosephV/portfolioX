"use client";
import { linksList } from "@/components/Home/links_list";
import { skillList } from "@/components/Home/skill_list";
import { BananaIcon, EmailMeIcon } from "@/icons/icons";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import SocialsHome from "./SocialsHome";
import { useGenerationStore } from "@/app/qstate";

const Intro = ({ quote }) => {
  const { isQuoteOpen } = useGenerationStore();

  return (
    <article>
      <div className="max-w-containerxs mx-auto mb-10">
        <h1 className="text-4xl font-semibold">Joseph V.</h1>
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
        <Divider className="my-8" />
        <section className="flex flex-col gap-2 mb-7">
          <p className="text-zinc-400 font-medium">Other links</p>
          <ul className="flex flex-row gap-3">
            {linksList.map((link) => (
              <li
                key={link.title}
                className="inline-flex items-center text-white"
              >
                {link.icon}
                <Link
                  href={link.route}
                  className="underline decoration-zinc-600 hover:decoration-white duration-200 underline-offset-4"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-zinc-400 font-medium">Socials</p>
          <SocialsHome />
        </section>
        <Divider className="my-8" />
        <small className="w-60 mb-5">
          <a
            href="mailto:jvp.2703@gmail.com"
            className="py-1 px-2 text-zinc-400 border border-zinc-600 hover:text-white bg-zinc-800 rounded-md flex items-center justify-center gap-1 cursor-pointer duration-200"
          >
            <span>
              <EmailMeIcon height={12} width={12} />
            </span>
            Email me at jvp.2703@gmail.com
          </a>
        </small>
        <small className="flex items-center text-zinc-400 gap-1">
          Based in Gran Canaria{" "}
          <span className="inline-block">
            <BananaIcon height={13} width={13} />
          </span>{" "}
          Spain.
        </small>
        {isQuoteOpen && (
          <>
            <span className="my-8 no-animation"></span>
            <section className="flex justify-center text-zinc-600 px-5 no-animation">
              <blockquote className="">
                <p className="mb-2">
                  <em>"{quote.quote}"</em>
                </p>
                <cite>
                  <small>- {quote.author}</small>
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
