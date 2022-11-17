import Link from "next/link";
import "./globals.css";
import { Inter, Abril_Fatface } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} data-theme="cupcake">
      <body>
        <div className="relative flex h-full min-h-screen flex-col">
          <div className="navbar z-50 flex flex-row justify-around bg-base-100 bg-transparent pl-8 md:fixed">
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

          <main>{children}</main>
          <div className="fixed bottom-[10%] flex w-full flex-row justify-center">
            <div className="z-50 h-20 w-20 rounded-full bg-primary shadow-xl"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
