import React from "react";

const ExpItem = ({ date, title, description }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-[22.5px] border border-zinc-950 bg-zinc-500"></div>
      <time className="mb-1 text-sm font-mono leading-none text-zinc-500">
        {date}
      </time>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="mb-4 text-zinc-400">{description}</p>
    </li>
  );
};

export default ExpItem;
