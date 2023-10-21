"use client";
import { useGenerationStore } from "@/app/qstate";
import { QuoteIcon } from "@/icons/icons";

const Footer = () => {
  const year = new Date().getFullYear();

  const { toggleQuote } = useGenerationStore();

  return (
    <footer className="w-full p-2 mt-auto px-[20px]">
      <div className="max-w-containerxs mx-auto flex justify-between items-center">
        <small className="text-neutral-600">JOSEPHV / {year}-Present.</small>
        <button onClick={toggleQuote}>
          <QuoteIcon width={"1em"} height={"1em"} fill={"gray"} />
        </button>
        <a href="">
          <small className="text-neutral-600 font-mono hover:text-neutral-300 duration-200 cursor-pointer">
            Source
          </small>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
