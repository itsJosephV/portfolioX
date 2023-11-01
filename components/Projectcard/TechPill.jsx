import React from 'react'

const TechPill = ({ tech }) => {
  return (
    <p className="text-[13px] text-secondary-color bg-[#27272a] py-[2px] px-[8px] rounded-full">
      {tech}
    </p>
  );
};

export default TechPill