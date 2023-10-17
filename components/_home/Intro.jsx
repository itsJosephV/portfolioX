"use client";
import { linksList } from "@/components/_home/links_list";
import { skillList } from "@/components/_home/skill_list";
import { BananaIcon, EmailMeIcon } from "@/icons/icons";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

const Intro = () => {
  return (
    <article>
      <div className="max-w-containerxs mx-auto mb-8">
        <h1
          className="text-4xl font-bold text-white"
          // style={{ border: "1px solid", borderColor: "red" }}
        >
          Joseph V.
        </h1>
      </div>
      <div className="flex flex-col slide-enter-content max-w-containerxs mx-auto">
        <p className="text-base text-neutral-400 font-normal opacity-80 leading-7 mb-5">
          Hey there!, I am Joseph Vento, a{" "}
          <span className="font-semibold text-neutral-300">
            Front-End Web Developer.
          </span>
        </p>
        <p className="text-base text-neutral-400  font-normal opacity-80 leading-7 mb-5">
          My path is about getting better every day and becoming the best
          version of myself. I'm currently focused on improving my skills in
          Front-End development, which involves creating appealing and
          user-friendly digital interfaces.
        </p>
        <ul className="text-neutral-400 gap-2 mb-5 flex flex-wrap">
          Current skills:{" "}
          {skillList.map((skill) => (
            <li key={skill.title}>
              <span className="font-semibold text-neutral-300">
                {skill.title}
                {", "}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-base text-neutral-400 font-normal opacity-80 leading-7">
          Apart from coding, I express my creativity by drawing and designing,
          you can catch a glimpse of my artwork on Instagram, where I share my
          visual creations.
        </p>
        <Divider className="my-8" />
        <section className="flex flex-col gap-2">
          <p className="text-base text-neutral-400  font-normal">
            Another links
          </p>
          <ul className="flex flex-row gap-2">
            {linksList.map((link) => (
              <li key={link.title} className="inline-flex items-center gap-1">
                {link.icon}
                <a href="" className="hover:underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <Divider className="my-8" />
        <small className="w-60 mb-5">
          <Link
            href={{ pathname: "contact", query: { focusInputName: true } }}
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
      </div>
    </article>
  );
};

export default Intro;
