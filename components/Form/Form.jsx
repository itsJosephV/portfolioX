import { MailIcon, UserIcon } from "@/icons/icons";
import { Textarea, Input, Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { createToast } from "vercel-toast";
import "vercel-toast/css";

const Form = ({ inputNameRef }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
          setIsLoading(false);
          createToast("Message sent!", {
            timeout: 3000,
            type: "dark",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="flex flex-col gap-3 w-full"
    >
      <Input
        ref={inputNameRef}
        variant="underlined"
        radius="sm"
        type="text"
        placeholder="Enter your name"
        name="user_name"
        isRequired
        startContent={
          <UserIcon className="text-1xl pointer-events-none flex-shrink-0" />
        }
      />
      <Input
        variant="underlined"
        type="email"
        radius="sm"

        name="user_email"
        isRequired
        placeholder="Enter your email"
        startContent={
          <MailIcon className="text-1xl pointer-events-none flex-shrink-0" />
        }
      />
      <Textarea
        radius="sm"
        placeholder="Enter your message"
        className="max-w-xs"
        name="message"
        variant="underlined"
      />
      <Button
        type="submit"
        isLoading={isLoading}
        className="font-semibold duration-200"
      >
        SEND
      </Button>
    </form>
  );
};

export default Form;
