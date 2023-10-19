import { InstagramIcon, LinkedInIcon, GitHubIcon } from "@/icons/icons";
import React from "react";

const SocialsHome = () => {
  return (
    <aside className="hidden lg:inline-flex h-full absolute p-5 left-0">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <a href="">
          <span className="text-xl text-neutral-400 inline-flex items-center hover:text-emerald-400 justify-center cursor-pointer hover:-translate-y-[2px] duration-200">
            <GitHubIcon height={23} width={23} />
          </span>
        </a>
        <a href="">
          <span className="text-xl text-neutral-400 inline-flex items-center hover:text-blue-400 justify-center cursor-pointer hover:-translate-y-[2px] duration-200">
            <LinkedInIcon height={23} width={23} />
          </span>
        </a>
        <a href="">
          <span className="text-xl text-neutral-400 inline-flex items-center hover:text-violet-400 justify-center cursor-pointer hover:-translate-y-[2px] duration-200">
            <InstagramIcon height={23} width={23} />
          </span>
        </a>
      </div>
    </aside>  );
};

export default SocialsHome;
