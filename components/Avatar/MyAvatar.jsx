import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { createToast } from "vercel-toast";
import "vercel-toast/css";

const MyAvatar = () => {
  const openCVLink = useRef(null);
  const copyNumber = useRef(null);

  const phoneNumber = "+34 645 058 243";

  useHotkeys("r", () => openCVLink.current?.click());

  useHotkeys("n", () => copyNumber.current?.click());
  function handleCopyNumber() {
    navigator.clipboard.writeText(phoneNumber);
    createToast('Phone number copied!', {
      timeout: 3000,
      type: "dark"
    })
  }

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Avatar
          size="sm"
          as="button"
          isBordered
          className="transition-transform"
          src="/mock/leonardo-da-vinci.jpg"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="josephv-cv" shortcut="R" textValue="cv">
          <a
            ref={openCVLink}
            href="/assets/Joseph_Vento_CV.pdf"
            variant="flat"
            target="_blank"
          >
            Resume
          </a>
        </DropdownItem>
        <DropdownItem key="phone-number" shortcut="N" textValue="phone-number">
          <button
            onClick={handleCopyNumber}
            ref={copyNumber}
            variant="flat"
          >
            <p className="text-[13px] font-mono">{phoneNumber}</p>
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyAvatar;
