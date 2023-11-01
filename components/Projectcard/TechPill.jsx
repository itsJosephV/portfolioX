import React from "react";
import classNames from "classnames";

const TechPill = ({ tech }) => {
  const techClass = classNames({
    "bg-yellow-300": tech === "JavaScript",
    "bg-gray-300": tech === "Next.js",
    "bg-cyan-300": tech === "Tailwind CSS",
    "bg-green-300": tech === "MongoDB",
    "bg-blue-300": tech === "React.js",
  });
  return (
    <div className=" bg-zinc-800 py-[2px] px-[8px] rounded-full flex items-center gap-1">
      <div className={`h-[4px] w-[4px] p-1 rounded-full ${techClass}`} />
      <p className="text-[13px] text-zinc-400">{tech}</p>
    </div>
  );
};

export default TechPill;
