import React from 'react'

const TechPill = ({ tech }) => {
  return (
    <p className="text-[13px] text-zinc-400 bg-zinc-800 py-[2px] px-[8px] rounded-full">
      {tech}
    </p>
  );
};

export default TechPill