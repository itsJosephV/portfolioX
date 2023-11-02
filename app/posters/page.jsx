import Link from "next/link";
import React from "react";
import { UCPimage } from "./UCP_image";

const page = () => {
  return (
    <article className="max-w-containerSmall mx-auto">
      <div className="max-w-containerxs mx-auto mb-10">
        <h1 className="text-2xl font-semibold text-white">Posters</h1>
      </div>
      <section className="max-w-containerxs mx-auto">
        <div className="flex flex-col gap-2 items-center">
          <UCPimage width={"320"} height={"320"} stroke={"#71717a"} />
          <div className="block">
            <p className="text-zinc-500 mb-2">
              Oops!, Page under development
            </p>
            <Link
              href="/"
              className="text-white hover:text-white/70 duration-200"
            >
              {"←"} Back to home
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default page;
