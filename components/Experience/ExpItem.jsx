import React from 'react'

const ExpItem = ({date, title, description}) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-[22.5px] border border-neutral-900 bg-neutral-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-white">
       {title}
      </h3>
      <p className="mb-4 text-base font-normal text-neutral-400">
        {description}
      </p>
    </li>
  );
};

export default ExpItem