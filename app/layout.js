import "./globals.css";
import { Open_Sans } from "next/font/google";

import React from "react";
import Providers from "./providers";
import Nav from "../components/_nav/Nav";
import Footer from "@/components/_footer/Footer";

const Os = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "JosephV",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className={`${Os.className} w-screen min-h-screen flex flex-col`}>
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
