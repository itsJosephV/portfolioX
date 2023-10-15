"use client";
import React, { useEffect, useRef } from "react";
import Form from "../../components/Form";
import { Divider } from "@nextui-org/react";
import { infoList } from "@/data/infoList";

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
    <article className="max-w-containerxs mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Contact</h1>
      </div>
      <section className="flex flex-col slide-enter-content">
        <p className="text-base text-neutral-400 leading-7 max-w-containerxs text-start">
          If you have any questions, inquiries, or would like to discuss a
          potential project, don't hesitate to get in touch with me.
        </p>
        <Divider className="my-8" />
        <h3 className="font-semibold text-neutral-400 text-start mb-2">
          My info
        </h3>
        {infoList.map((infoItem, idx) => {
          const infoText = infoItem[Object.keys(infoItem)[0]];
          return (
            <p key={idx} className="text-neutral-400 text-[14px] mb-1">
              {infoText}
            </p>
          );
        })}
        <Divider className="my-8" />
        <h3 className="font-semibold text-neutral-400 text-start mb-2">
          Send me a quick message
        </h3>
        <Form textareaRef={textareaRef} />
      </section>
    </article>
  );
};

export default Contact;
