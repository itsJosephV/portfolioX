import "./globals.css";
import { Inter } from "next/font/google";

// import { NextUIProvider } from "@nextui-org/react"
import React from "react";
import Providers from "./providers";
import Nav from "../components/_nav/Nav";
import Footer from "@/components/_footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JosephV",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className={`${inter.className} w-screen min-h-screen flex flex-col`}>
            <Nav />
            <main className="pt-[65px] pb-[80px] px-[20px]">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
