"use client";
import React, { useEffect, useRef } from "react";
import Form from "../../components/Form/Form";
import { Divider } from "@nextui-org/react";

const Contact = () => {
  const inputNameRef = useRef(null);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("focusInputName") === "true") {
      inputNameRef.current.focus();
      //? DELETE THE "focusInputName" QUERY FROM URL
      const newUrl = window.location.href.split("?")[0];
      history.replaceState(null, document.title, newUrl);
    }
  }, []);

  return (
    <article className="max-w-containerSmall mx-auto">
      <div className="max-w-containerxs mx-auto mb-8">
        <h1 className="text-2xl font-bold text-white">Contact</h1>
      </div>
      <section className="flex flex-col max-w-containerxs mx-auto">
        <p className="text-base text-neutral-400 leading-7 text-start">
          If you have any questions, inquiries, or would like to discuss a
          potential project, don't hesitate to get in touch with me.
        </p>
        <Divider className="my-8" />
        <h3 className="font-semibold text-neutral-400 text-start mb-3">
          Connect
        </h3>
        <div>
          <p className="text-neutral-400 mb-1 text-[14px]">
            <a
              className="underline decoration-neutral-600 hover:decoration-neutral-400 duration-200"
              href="mailto:jvp.2703@gmail.com"
            >
              jvp_2703@gmail.com
            </a>
          </p>
          <p className="text-neutral-400 mb-1 text-[14px]">+34 645058243</p>
          <p className="text-neutral-400 text-[14px]">
            Las Palmas de G.C, Spain
          </p>
        </div>
        <Divider className="my-8" />
        <h3 className="font-semibold text-neutral-400 text-start mb-3">
          Send me a quick message
        </h3>
        <Form inputNameRef={inputNameRef} />
      </section>
    </article>
  );
};

export default Contact;
