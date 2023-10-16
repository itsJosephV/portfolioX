import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

const ProjectCard = ({imageURL, description, x}) => {
  return (
    <Card
      className="h-auto border border-neutral-700 slide-enter"
      style={{ "--enter-stage": x + 1 }}
    >
      <Image
        src={imageURL}
        radius="none"
        width="100%"
        className="border-b border-neutral-700"
      />
      <CardFooter>
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
