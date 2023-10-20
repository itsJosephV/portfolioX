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

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className={!isMenuOpen ? "bg-transparent" : "bg-[#101014]"}
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
            className="font-bold text-inherit"
          >
            JV.
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        // style={{ backgroundColor: "gray" }}
        className="hidden lg:flex gap-4"
        justify="end"
      >
        {navlist.map((item, index) => (
          <li key={`${item}-${index}`}>
            <Link
              // className="text-neutral-400 hover:text-neutral-100 duration-200"
              className={`text-neutral-400 hover:text-neutral-100 duration-200 ${
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
          <a
            href="/assets/Joseph_Vento_CV.pdf"
            variant="flat"
            target="_blank"
            className="py-1.5 px-4 m-2 text-sm rounded-md border border-neutral-600 bg-neutral-900 hover:border-neutral-100 text-neutral-400 font-semibold hover:text-neutral-100 duration-200"
          >
            Resume
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col gap-4 pt-3 slide-enter-content bg-[#101014]">
        {navlist.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-neutral-400 hover:text-neutral-100 duration-200 font-semibold"
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
