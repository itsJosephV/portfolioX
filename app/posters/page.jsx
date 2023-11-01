import Link from "next/link";
import React from "react";
import { UCPimage } from "./UCP_image";

const page = () => {
  return (
    <article className="max-w-containerSmall mx-auto">
      <div className="max-w-containerxs mx-auto mb-10">
        <h1 className="text-2xl font-bold">Illustrations</h1>
      </div>
      <section className="max-w-containerxs mx-auto">
        <div className="flex flex-col gap-2 items-center">
          <UCPimage width={"320"} height={"320"} stroke={"#71717a"} />
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
