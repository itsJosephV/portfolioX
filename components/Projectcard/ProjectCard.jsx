import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
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
      className="h-auto w-full slide-enter border border-[#52525b] border-opacity-20 cursor-pointer"
      style={{ "--enter-stage": x + 1 }}
      radius="sm"
    >
      {image ? (
        <Image src={image} radius="none" width="100%" />
      ) : (
        <CardSkeleton />
      )}

      <CardFooter className="flex flex-col gap-3 border-t-1 border-[#52525b] border-opacity-30 bg-main-bg-color">
        <div className="w-full">
          <h3 className="text-[17px] font-medium tracking-wide mb-2">
            {capitalize(title)}
          </h3>
          <p className="w-full text-secondary-color">{description}</p>
        </div>

        <div className="w-full flex flex-row gap-2 ">
          {technologies.map((tech, i) => (
            <TechPill key={i} tech={tech} />
          ))}
        </div>
        <time className="w-full text-[12px] font-mono text-muted-color">
          {createdAt}
        </time>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
