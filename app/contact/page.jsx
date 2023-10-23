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
        <h1 className="text-2xl font-bold text-primary-color">Contact</h1>
      </div>
      <section className="flex flex-col max-w-containerxs mx-auto">
        <p className="leading-7 text-start text-secondary-color">
          If you have any questions, inquiries, or would like to discuss a
          potential project, don't hesitate to get in touch with me.
        </p>
        <Divider className="my-8" />
        <h3 className="font-semibold text-start mb-3 text-secondary-color">Connect</h3>
        <div>
          <p className="mb-1 text-[14px] text-secondary-color">
            <a
              className="underline decoration-base-border-color hover:decoration-secondary-color duration-200"
              href="mailto:jvp.2703@gmail.com"
            >
              jvp_2703@gmail.com
            </a>
          </p>
          <p className="mb-1 text-[14px] text-secondary-color">+34 645058243</p>
          <p className="text-[14px] text-secondary-color">Las Palmas de G.C, Spain</p>
        </div>
        <Divider className="my-8"/>
        <h3 className="font-semibold text-start mb-3 text-secondary-color">
          Send me a quick message
        </h3>
        <Form inputNameRef={inputNameRef} />
      </section>
    </article>
  );
};

export default Contact;
