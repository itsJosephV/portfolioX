import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import CardSkeleton from "./CardSkeleton";
import TechPill from "./TechPill";

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
      className="h-auto w-full slide-enter border border-zinc-600/20 hover:border-zinc-600/60  duration-200 cursor-pointer"
      style={{ "--enter-stage": x + 1 }}
      radius="sm"
    >
      {image ? (
        <Image src={image} radius="none" width="100%" />
      ) : (
        <CardSkeleton />
      )}

      <CardFooter className="flex flex-col gap-3 border-t-1 border-zinc-600/20 bg-zinc-950">
        <div className="w-full">
          <h3 className="font-medium tracking-wide mb-2">
            {capitalize(title)}
          </h3>
          <p className="w-full text-zinc-400">{description}</p>
        </div>

        <div className="w-full flex flex-row gap-2 ">
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
