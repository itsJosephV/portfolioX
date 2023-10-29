import "./globals.css";
// import { Open_Sans } from "next/font/google";

import React from "react";
import Providers from "./providers";
import Nav from "../components/Navbar/Nav";
import Footer from "@/components/Footer/Footer";
import { GeistSans, GeistMono } from "geist/font";

// const Os = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "JosephV",
  description: "Personal portfolio",
};

const defaultWeight = "font-light";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} ${GeistMono.variable} ${defaultWeight} dark`}
    >
      {" "}
      {/* dark */}
      <body className="bg-main-bg-color">
        <Providers>
          <div className={`w-screen min-h-screen flex flex-col`}>
            <Nav />
            <main className="py-[65px] px-[20px]">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
