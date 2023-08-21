import { MailIcon, UserIcon } from "@/icons";
import { Textarea, Input } from "@nextui-org/react";
import React from "react";

const Form = ({ textareaRef }) => {
  return (
    <form
      className="flex flex-col gap-3 w-full"
      action="https://getform.io/f/8540cf1c-a91f-4376-a3f7-78f372725a81"
      method="POST"
      // style={{border:"1px solid", borderColor:"gray", opacity:""}}
    >
      <Input
        type="text"
        placeholder="Enter your name"
        name="name"
        variant="bordered"
        startContent={
          <UserIcon className="text-1xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Input
        type="email"
        name="email"
        variant="bordered"
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
