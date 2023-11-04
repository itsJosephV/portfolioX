import React from "react";
import { UCDimage } from "./UCD_image";
import Link from "next/link";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
    <article className="max-w-containerSmall mx-auto">
      <div className="max-w-containerxs mx-auto mb-10">
        <h1 className="text-2xl font-semibold text-white">Designs</h1>
      </div>
      <section className="max-w-containerxs mx-auto">
        <div className="flex flex-col gap-2 items-center">
          <UCDimage width={"320"} height={"320"} fill={"#71717a"} />
          <div className="block"> {/** another approach to flex and child with w-fit */}
            <p className="text-zinc-500 mb-2">Oops!, Page under development</p>
            <Link
              href="/"
              className="text-white hover:text-white/70 duration-200 inline-block" // parent is a block container so we use inline-block
            >
              <p className="flex items-center gap-1">
                <span>
                  <ArrowSmallLeftIcon height={20} width={20} />
                </span>{" "}
                Back to home
              </p>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default page;
