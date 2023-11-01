import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useHotkeys } from "react-hotkeys-hook";

const toastStyles = {
  backgroundColor: "#27272a",
  border: "1px solid #52525b",
  color: "white",
};

const MyAvatar = ({ breakpoint }) => {

  const notify = () =>
    toast("Copied to clipboard!", {
      duration: 3000,
      style: toastStyles,
      icon: "📋",
    });

  const openCVLink = useRef(null);
  const copyNumber = useRef(null);

  const phoneNumber = "+34 645 058 243";

  useHotkeys("r", () => openCVLink.current?.click());

  useHotkeys("n", () => copyNumber.current?.click());
  function handleCopyNumber() {
    navigator.clipboard.writeText(phoneNumber);
    notify();
  }

  // console.log(breakpoint);

  return (
    <Dropdown placement={breakpoint === "lg" ? "bottom-center" : "bottom-end"}>
      <DropdownTrigger>
        <Avatar
          as="button"
          isBordered
          className="transition-transform w-[30px] h-[30px]"
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
          <button onClick={handleCopyNumber} ref={copyNumber} variant="flat">
            <p className="text-[13px] font-mono">{phoneNumber}</p>
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyAvatar;
