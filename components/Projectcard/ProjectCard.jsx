import React from "react";
import { Card, CardFooter } from "@nextui-org/react";
import CardSkeleton from "./CardSkeleton";
import TechPill from "./TechPill";
import NextImage from "next/image";

const ProjectCard = ({
  image,
  description,
  title,
  technologies,
  createdAt,
  x,
}) => {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <Card
      className="h-auto w-full slide-enter border border-white/5 hover:border-white/10  duration-200 cursor-pointer"
      style={{ "--enter-stage": x + 1 }}
      radius="sm"
    >
      {image ? (
        // <Image src={image} radius="none" width="100%" />
        <NextImage
          src={image}
          width={0}
          height={0}
          radius="none"
          sizes="100vw"
          alt="project-image"
          className="w-full h-auto"
        />
      ) : (
        <CardSkeleton />
      )}

      <CardFooter className="flex flex-col gap-3 border-t-1 border-white/10 bg-zinc-950 antialiased">
        <div className="w-full">
          <h3 className="font-medium tracking-wide mb-2">
            {capitalize(title)}
          </h3>
          <p className="w-full text-zinc-400">{description}</p>
        </div>

        <div className="w-full flex flex-wrap flex-row gap-2 ">
          {technologies.map((tech, i) => (
            <TechPill key={i} tech={tech} />
          ))}
        </div>
        <time className="w-full text-[12px] font-mono text-zinc-500">
          {createdAt}
        </time>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
