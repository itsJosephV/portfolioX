import "./globals.css";
import { Inter } from "next/font/google";

// import { NextUIProvider } from "@nextui-org/react"
import React from "react";
import Providers from "./providers";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JosephV",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} w-screen min-h-screen`}>
        <Providers>
          <NavBar />
          <main className="pt-[65px] pb-[25px] px-[20px] max-w-container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
