import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import CardSkeleton from "./CardSkeleton";
import TechPill from "./TechPill";

const ProjectCard = ({ image, description, title, technologies, createdAt, x }) => {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <Card
      isHoverable
      className="h-auto border border-neutral-700 slide-enter cursor-pointer hover:border-neutral-600"
      style={{ "--enter-stage": x + 1 }}
      radius="md"
    >
      {image ? (
        <Image
          src={image}
          radius="none"
          width="100%"
          className="border-b border-neutral-700"
        />
      ) : (
        <CardSkeleton />
      )}

      <CardFooter className="flex flex-col gap-3">
        <div className="w-full">
          <h3 className="text-[17px] font-medium tracking-wide mb-2">
            {capitalize(title)}
          </h3>
          <p className="w-full text-neutral-400">{description}</p>
        </div>

        <div className="w-full flex flex-row gap-2 ">
          {technologies.map((tech, i) => (
            <TechPill key={i} tech={tech} />
          ))}
        </div>
        <time className="w-full text-[12px] font-mono text-neutral-500">{createdAt}</time>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;


