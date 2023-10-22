import React from "react";
import { InstagramIcon, LinkedInIcon, GitHubIcon } from "@/icons/icons";

const SocialsHome = () => {
  const socialsClass =
    "text-xl text-primary-color inline-flex items-center justify-center cursor-pointer duration-200";

  return (
    <div className="flex flex-row gap-3 justify-start">
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
  );
};

export default SocialsHome;
