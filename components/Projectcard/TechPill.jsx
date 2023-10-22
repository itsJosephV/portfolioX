import React from 'react'

const TechPill = ({ tech }) => {
  return (
    <p className="text-[13px] bg-black py-[2px] px-[8px] rounded-full">
      {tech}
    </p>
  );
};

export default TechPill