"use client";
import { useGenerationStore } from "@/app/qstate";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import heart from "../../data/heart-animated.json"

const Footer = () => {
  const currentPath = usePathname();
  const { toggleQuote } = useGenerationStore();
  const year = new Date().getFullYear();

  const [secondsData, setSecondsData] = useState(getSecondsDeg());

  function getSecondsDeg() {
    const interval = 6;
    const seconds = new Date().getSeconds();
    const degrees = seconds * interval;
    return degrees;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsData(getSecondsDeg());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const startStyle = {
    display:"inline-block",
    transform: `rotate(${secondsData}deg)`,
  }  

  return (
    <footer className="w-full p-2 mt-auto px-[20px]">
      <div className="max-w-containerxs mx-auto flex justify-between items-center">
        <small className="text-muted-color font-mono">
          JOSEPHV / {year}-Present.
        </small>
        {currentPath === "/" && (
          <button
            className="text-muted-color cursor-crosshair"
            onClick={toggleQuote}
          >
            <span style={startStyle}>✦</span>
          </button>
        )}
        <a href="">
          <small className="cursor-pointer text-muted-color hover:text-primary-color duration-200 font-mono">
            Source
          </small>
        </a>
      </div>
    </footer>
  );
};

export default Footer;


