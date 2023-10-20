import { InstagramIcon, LinkedInIcon, GitHubIcon } from "@/icons/icons";
import React from "react";
// import { useBreakpoint } from "use-breakpoint";

const SocialsHomeLG = () => {

  const socialsClass =
    "text-xl text-neutral-400 inline-flex items-center justify-center cursor-pointer duration-200";

  return (
      <aside className="hidden lg:inline-flex h-full absolute p-5 left-0">
        <div className="w-full slide-enter-content flex flex-col items-center justify-center gap-3">
          <a href="">
            <span className={`${socialsClass} hover:text-emerald-400 `}>
              <GitHubIcon height={23} width={23} />
            </span>
          </a>
          <a href="">
            <span className={`${socialsClass} hover:text-blue-400 `}>
              <LinkedInIcon height={23} width={23} />
            </span>
          </a>
          <a href="">
            <span className={`${socialsClass} hover:text-violet-400 `}>
              <InstagramIcon height={23} width={23} />
            </span>
          </a>
        </div>
      </aside>
  );
};

export default SocialsHomeLG;
