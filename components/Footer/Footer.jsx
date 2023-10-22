"use client";
import { useGenerationStore } from "@/app/qstate";
import { QuoteIcon } from "@/icons/icons";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();
  const { toggleQuote } = useGenerationStore();
  const year = new Date().getFullYear();

  // console.log(isQuoteOpen)

  return (
    <footer className="w-full p-2 mt-auto px-[20px]">
      <div className="max-w-containerxs mx-auto flex justify-between items-center">
        <small className="text-muted-color">JOSEPHV / {year}-Present.</small>
        {currentPath === "/" && (
          <button
            className="text-muted-color cursor-default"
            onClick={toggleQuote}
          >
            <QuoteIcon width={"1em"} height={"1em"} />
          </button>
        )}
        <a href="">
          <small className="cursor-pointer text-muted-color hover:text-primary-color duration-200">Source</small>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
