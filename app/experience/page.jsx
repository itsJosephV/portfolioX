import ExpItem from "@/components/_experience/ExpItem";

import React from "react";
import experienceData from "../../data/experienceData.json"

const Exp = () => {
  return (
    <article className="max-w-containerSmall mx-auto">
      <div className="max-w-containerxs mx-auto mb-8">
        <h1 className="text-2xl font-bold text-white">Experience</h1>
      </div>
      <section className="max-w-containerxs mx-auto">
        <ol className="relative border-l border-gray-700 slide-enter-content">
          {experienceData.map((item, i) => (
            <ExpItem key={i} date={item.date} title={item.title} description={item.description} />
          ))
          }
        </ol>
      </section>
    </article>
  );
};

export default Exp;


