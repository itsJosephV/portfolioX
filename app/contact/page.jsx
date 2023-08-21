"use client";
import React, { useEffect, useRef } from "react";
import Form from "../components/Form";

const Contact = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("focusTextarea") === "true") {
      textareaRef.current.focus();
      const newUrl = window.location.href.split("?")[0];
      history.replaceState(null, document.title, newUrl);
    }
  }, []);

  return (
    <div
      className="max-w-containerSmall md:flex mx-auto"
      // style={{ border: "1px solid green" }}
    >
      <div
        className="flex flex-col pt-12 pb-10 px-5 gap-6 justify-between mx-auto"
        // style={{ border: "1px solid gray" }}
      >
        <div>
          <h1 className="text-2xl font-bold text-white text-start">Contact</h1>
        </div>
        <div
          className="flex flex-col gap-5 slide-enter-content"
          // style={{ border: "1px solid gray" }}
        >
          <p className="text-base text-neutral-400 leading-7 md:max-w-[650px]  text-start">
            Thank you for visiting my portfolio page.
          </p>
          <p className="text-base text-neutral-400 leading-7 md:max-w-[650px] text-start mb-10">
            If you have any questions, inquiries, or would like to discuss a
            potential project, please don't hesitate to get in touch with me.
            I'm here to help bring your web development ideas to life.
          </p>
          <div className="flex flex-col gap-2 mb-10">
            <h1 className="font-semibold text-neutral-400 text-start">
              My info
            </h1>
            <p className="text-neutral-400 text-start">jvp.2703@gmail.com</p>
            <p className="text-neutral-400 text-start">+34 645-058-243</p>
            <p className="text-neutral-400 text-start">
              Las Palmas de G.C, Spain
            </p>
          </div>
          <h1 className="text-start text-neutral-400">
            Or send me a quick message
          </h1>
          <Form textareaRef={textareaRef} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
