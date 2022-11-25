"use client";
import Link from "next/link";
import "./globals.css";
import { Inter, Abril_Fatface } from "@next/font/google";
import { createContext, useState } from "react";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en" className={inter.className} data-theme="cupcake">
      <body>
        <div className="relative z-50 flex flex-col">
          <div className="navbar flex flex-row justify-around bg-base-100 bg-transparent pl-8 md:fixed">
            <div className="flex-1">
              <Link
                href="/"
                className="btn-link btn text-xl normal-case text-black no-underline"
              >
                Denis Forigo
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-4">
                <li className="p-4">
                  <Link href="/work">Work</Link>
                </li>
                <li className="p-4">
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`-z-30 ${isOpen && "-h-[50vh] border border-red-500"}`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
