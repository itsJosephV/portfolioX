import React from 'react'

const ExpItem = ({date, title, description}) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-[22.5px] border"></div>
      <time className="mb-1 text-sm font-normal leading-none">
        {date}
      </time>
      <h3 className="text-lg font-semibold">
       {title}
      </h3>
      <p className="mb-4">
        {description}
      </p>
    </li>
  );
};

export default ExpItem