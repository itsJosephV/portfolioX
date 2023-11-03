"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { navlist } from "./nav_list";
import MyAvatar from "../Avatar/MyAvatar";
import { useBreakpoint } from "use-breakpoint";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBrandNavToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      return;
    }

  };
  const location = usePathname();

  const BREAKPOINTS = { md: 768, lg: 1024 };

  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      //? (shouldHideOnScroll) works weird in Safari, shows up again when bottom is reached
      //? works perfectly on Firefox
      className={!isMenuOpen? "bg-transparent border-white/10" : "bg-zinc-950"}
      height={"3.4rem"}

    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand justify="start">
          <Link
            onClick={handleBrandNavToggle}
            href="/"
            className="font-bold text-[20px]"
          >
            {"{ JV }"}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        // style={{ backgroundColor: "gray" }}
        className="hidden lg:flex gap-5 mr-2"
        justify="end"
      >
        {navlist.map((item, index) => (
          <li key={`${item}-${index}`}>
            <Link
              // className="text-neutral-400 hover:text-neutral-100 duration-200"
              className={`duration-200 text-[15px] text-zinc-400 hover:text-white ${
                location === item.route && "current-page"
              }`}
              href={item.route}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </NavbarContent>
      <NavbarContent
        justify="center"
        // style={{ backgroundColor: "gray" }}
      >
        <NavbarItem className="flex">
          <MyAvatar breakpoint={breakpoint} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col gap-4 pt-3 slide-enter-content bg-zinc-950">
        {navlist.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-zinc-400 hover:text-white duration-200 font-semibold"
              href={item.route}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
