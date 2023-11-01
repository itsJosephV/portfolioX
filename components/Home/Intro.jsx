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
        <h1
          className="text-4xl text-primary-color font-semibold"
        >
          Joseph V.
        </h1>
      </div>
      <div className="flex flex-col slide-enter-content max-w-containerxs mx-auto">
        <p className=" mb-7 text-secondary-color">
          Hey There! 👋🏼 , I am Joseph Vento, a{" "}
          <span className="text-primary-color font-medium">
            Front-End Web Developer.
          </span>
        </p>
        <p className="mb-7 leading-7 text-secondary-color">
          My path is about getting better every day and becoming the best
          version of myself. Currently focused on improving my skills in
          Front-End development, which involves creating appealing and
          user-friendly digital interfaces.
        </p>
        <ul className="gap-2 mb-7 flex flex-wrap text-secondary-color">
          <p className="font-medium">Current stack:</p>{" "}
          {skillList.map((skill, index) => (
            <li key={skill.title}>
              <span className="font-medium text-primary-color">
                {skill.title}
                {index !== skillList.length - 1 ? ", " : "."}
              </span>
            </li>
          ))}
        </ul>
        <p className="leading-7 text-secondary-color">
          Apart from coding, I express my creativity by drawing and designing,
          you can catch a glimpse of my artwork on Instagram, where I share my
          visual creations.
        </p>
        <Divider className="my-8" />
        <section className="flex flex-col gap-2 mb-7">
          <p className="text-secondary-color font-medium">Other links</p>
          <ul className="flex flex-row gap-3">
            {linksList.map((link) => (
              <li
                key={link.title}
                className="inline-flex items-center text-primary-color"
              >
                {link.icon}
                <Link
                  href={link.route}
                  className="underline decoration-base-border-color hover:decoration-primary-color duration-200 underline-offset-4"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col font-medium gap-3">
          <p className="text-secondary-color">Socials</p>
          <SocialsHome />
        </section>
        <Divider className="my-8" />
        <small className="w-60 mb-5">
          <a
            href="mailto:jvp.2703@gmail.com"
            className="py-1 px-2 text-secondary-color border border-base-border-color hover:text-primary-color bg-secondary-bg-color rounded-md flex items-center justify-center gap-1 cursor-pointer duration-200"
          >
            <span>
              <EmailMeIcon height={12} width={12} />
            </span>
            Email me at jvp.2703@gmail.com
          </a>
        </small>
        <small className="flex items-center text-secondary-color gap-1">
          Based in Gran Canaria{" "}
          <span className="inline-block">
            <BananaIcon height={13} width={13} />
          </span>{" "}
          Spain.
        </small>
        {isQuoteOpen && (
          <>
            <span className="my-8 no-animation"></span>
            <section className="flex justify-center text-muted-quote-color px-5 no-animation">
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
