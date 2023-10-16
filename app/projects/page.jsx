"use client";
import React from "react";

// import { Masonry } from "@mui/lab";
// import { Box, Paper } from "@mui/material";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useBreakpoint } from "use-breakpoint";

const projectsData = [
  {
    title: "project1",
    id: 1,
    imageURL:
      "https://mosew.com/wp-content/uploads/2023/08/desktop-wallpaper-full-dark-black-screen-black-page.jpg",
    description:
      "Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet  consectetur adipisicing elit",
  },
  {
    title: "project2",
    id: 2,
    imageURL:
      "https://mosew.com/wp-content/uploads/2023/08/desktop-wallpaper-full-dark-black-screen-black-page.jpg",
    description:
      "Lorem ipsum dolor sit aLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet met consectetur adipisicing elit",
  },
  {
    title: "project3",
    id: 3,
    imageURL:
      "https://mosew.com/wp-content/uploads/2023/08/desktop-wallpaper-full-dark-black-screen-black-page.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "project4",
    id: 5,
    imageURL:
      "https://mosew.com/wp-content/uploads/2023/08/desktop-wallpaper-full-dark-black-screen-black-page.jpg",
    description:
      "Lorem iit amet consectetur adipisicingpsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "project4",
    id: 6,
    imageURL:
      "https://mosew.com/wp-content/uploads/2023/08/desktop-wallpaper-full-dark-black-screen-black-page.jpg",
    description:
      "Lorem ipsum dolor it ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  consectetur adipisicing sit amet consectetur adipisicing elit",
  },
  {
    title: "project4",
    id: 7,
    imageURL:
      "https://mosew.com/wp-content/uploads/2023/08/desktop-wallpaper-full-dark-black-screen-black-page.jpg",
    description:
      "LorLorem ipsum dolor sit amet it amet consectetur adipisicing elit",
  },
];

// const parts = () => {
//   const result = Array.from({ length: c });
// };

const Projects = () => {
  const BREAKPOINTS = { sm: 0, md: 768, lg: 1024 };

  const CurrentBreakpoints = () => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS);
    return breakpoint;
  };

  const breakpoints = CurrentBreakpoints();

  const cols = () => {
    if (breakpoints === "lg") {
      return 3;
    }
    if (breakpoints === "md") {
      return 2;
    }
    return 1;
  };

  // console.log(cols())
  const parts = () => {
    const result = Array.from({ length: cols() }, () => []);
    projectsData.forEach((item, i) => {
      result[i % cols()].push(item);
    });
    return result;
  };

  // console.log(parts());

  return (
    <article>
      <div className="max-w-containerxs mx-auto mb-8">
        <h1 className="text-2xl font-bold text-white mb-3">Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, ut.
        </p>
      </div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {parts().map((items, i) => (
            <div key={i} className="flex flex-col gap-4">
              {items.map(({ imageURL, description }, j) => (
                <Card
                  key={j}
                  className="h-auto border border-neutral-700 slide-enter"
                  style={{ "--enter-stage": j + 1 }}
                >
                  <Image
                    src={imageURL}
                    radius="none"
                    width="100%"
                    className="border-b border-neutral-700"
                  />
                  <CardFooter className="border">
                    <p className="border">{description}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Projects;
