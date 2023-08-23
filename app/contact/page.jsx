"use client";
import React, { useEffect, useRef } from "react";
import Form from "../components/Form";
import { Divider } from "@nextui-org/react";

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
    <>
      <div className="max-w-containerxs mx-auto ">
        <h1 className="text-2xl font-bold text-white mb-8">Contact</h1>
      </div>
      <article>
        <div className="flex flex-col slide-enter-content max-w-containerxs mx-auto">
          <p className="text-base text-neutral-400 leading-7 max-w-containerxs text-start">
            If you have any questions, inquiries, or would like to discuss a
            potential project, don't hesitate to get in touch with me.
          </p>
          <Divider className="my-8" />
          <h1 className="font-semibold text-neutral-400 text-start mb-2">
            My info
          </h1>
          <p className="text-neutral-400 text-start text-[14px] mb-1">
            jvp.2703@gmail.com
          </p>
          <p className="text-neutral-400 text-start text-[14px] mb-1">
            +34 645-058-243
          </p>
          <p className="text-neutral-400 text-start text-[14px] mb-1">
            Las Palmas de G.C, Spain
          </p>
          <Divider className="my-8" />
          <p className="text-start text-neutral-400 mb-3">
            Send me a message {">"}
          </p>
          <Form textareaRef={textareaRef} />
        </div>
      </article>
    </>
  );
};

export default Contact;
