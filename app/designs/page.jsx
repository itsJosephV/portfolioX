import React from "react";
import { UCDimage } from "./UCD_image";
import Link from "next/link";

const page = () => {
  return (
    <article className="max-w-containerSmall mx-auto">
      <div className="max-w-containerxs mx-auto mb-10">
        <h1 className="text-2xl font-bold">Designs</h1>
      </div>
      <section className="max-w-containerxs mx-auto">
        <div className="flex flex-col gap-2 items-center">
          <UCDimage width={"320"} height={"320"} fill={"#71717a"} />
          <div className="block">
            <p className="text-muted-color mb-2">
              Oops!, page under development
            </p>
            <Link
              href="/"
              className="text-muted-color hover:text-primary-color duration-200"
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
