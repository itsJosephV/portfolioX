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
  color: "white",
  fontSize: "14px",
};

const MyAvatar = ({ breakpoint }) => {
  const notify = () =>
    toast.success("Number copied to clipboard!", {
      duration: 3000,
      style: toastStyles,
      icon: "📱",
      ariaProps: {
        role: "status",
      },
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
            className="block text-white text-start"
          >
            Resume/CV
          </a>
        </DropdownItem>
        <DropdownItem key="phone-number" shortcut="N" textValue="phone-number">
          <button
            className="w-full"
            onClick={handleCopyNumber}
            ref={copyNumber}
            variant="flat"
          >
            <p className="text-white text-start">Phone Number</p>
            <p className="text-zinc-400 text-start font-mono text-[11px] leading-snug">
              {phoneNumber}
            </p>
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyAvatar;
