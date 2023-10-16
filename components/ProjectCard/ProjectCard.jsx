import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import CardSkeleton from "./CardSkeleton";

const ProjectCard = ({ image, description, x }) => {
  return (
    <Card
      className="h-auto border border-neutral-700 slide-enter"
      style={{ "--enter-stage": x + 1 }}
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

      <CardFooter>
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;


