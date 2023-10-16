"use client";
import React from "react";
import { useBreakpoint } from "use-breakpoint";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const Projects = () => {
  const BREAKPOINTS = { md: 768, lg: 1024 };

  // console.log(projectsData[0].technologies)
  
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const cols = breakpoint === "lg" ? 3 : breakpoint === "md" ? 2 : 1;

  const dataParts = () => {
    const result = Array.from({ length: cols }, () => []);
    projectsData.forEach((item, i) => {
      result[i % cols].push(item);
    });
    return result;
  };

  const parts = dataParts();


  return (
    <article>
      <div className="max-w-containerxs mx-auto mb-8">
        <h1 className="text-2xl font-bold text-white mb-3">Projects</h1>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, ut.
        </p>
      </div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {parts.map((items, i) => (
            <div key={i} className="flex flex-col gap-4">
              {items.map(({ image, description, title, technologies, createdAt }, x) => (
                <ProjectCard
                  key={x}
                  image={image}
                  description={description}
                  title={title}
                  technologies={technologies}
                  createdAt={createdAt}
                  x={x}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Projects;
