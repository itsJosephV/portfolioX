import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center p-2 mt-auto relative">
      <div className="max-w-containerxs mx-auto flex justify-between">
        <small className="text-neutral-600">JOSEPHV / 2023-Present.</small>
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
