import React from "react";

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="w-full text-center p-2 mt-auto relative">
      <div className="max-w-containerxs mx-auto flex justify-between">
        <small className="text-neutral-600">JOSEPHV / {year}-Present.</small>
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
