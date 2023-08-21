import { InstagramIcon, LinkedInIcon, GitHubIcon } from "@/icons";
import React from "react";

const LeftSide = () => {
  return (
    <div className="hidden lg:inline-flex w-32 h-full fixed bottom-0">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <a href="">
          <span className="w-8 h-8 text-xl text-neutral-400 bg-neutral-800 rounded-md inline-flex items-center hover:text-emerald-400 justify-center cursor-pointer hover:-translate-y-1 transition-all duration-200">
            <GitHubIcon height={23} width={23} />
          </span>
        </a>
        <a href="">
          <span className="w-8 h-8 text-xl text-neutral-400 bg-neutral-800 rounded-md inline-flex items-center hover:text-blue-400 justify-center cursor-pointer hover:-translate-y-1 transition-all duration-200">
            <LinkedInIcon height={23} width={23} />
          </span>
        </a>
        <a href="">
          <span className="w-8 h-8 text-xl text-neutral-400 bg-neutral-800 rounded-md inline-flex items-center hover:text-violet-400 justify-center cursor-pointer hover:-translate-y-1 transition-all duration-200">
            <InstagramIcon height={23} width={23} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default LeftSide;
