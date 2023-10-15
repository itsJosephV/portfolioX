import { MailIcon, UserIcon } from "@/icons/icons";
import { Textarea, Input } from "@nextui-org/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { createToast } from "vercel-toast";
import "vercel-toast/css";

const Form = ({ textareaRef }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          createToast('Message sent!', {
            timeout: 3000,
            type:"dark"
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-3 w-full"
    >
      <Input
        type="text"
        placeholder="Enter your name"
        name="user_name"
        variant="bordered"
        isRequired
        startContent={
          <UserIcon className="text-1xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Input
        type="email"
        name="user_email"
        variant="bordered"
        isRequired
        placeholder="Enter your email"
        startContent={
          <MailIcon className="text-1xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Textarea
        ref={textareaRef}
        labelPlacement="inside"
        placeholder="Enter your message"
        className="max-w-xs"
        variant="bordered"
        name="message"
      />
      <Input type="submit" value="Send" />
    </form>
  );
};

export default Form;
