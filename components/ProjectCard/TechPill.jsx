import React from 'react'

const TechPill = ({ tech }) => {
  return (
    <p className="text-[13px] bg-neutral-700 text-neutral-200 py-[2px] px-[8px] rounded-full">
      {tech}
    </p>
  );
};

export default TechPill