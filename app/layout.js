import "./globals.css";
import { Inter } from "next/font/google";

// import { NextUIProvider } from "@nextui-org/react"
import React from "react";
import Providers from "./providers";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";

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
            <NavBar />
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
