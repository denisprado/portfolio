"use client";
import { Abril_Fatface, Merriweather, Parisienne } from "@next/font/google";
import Image from "next/image";
import { useEffect } from "react";

const abril = Parisienne({ weight: "400", variable: "--font-abril" });

export default function Page() {
  let paused = false;
  let scrollerID: string | number | NodeJS.Timer | undefined;
  const speed = 20; // 1 - Fast | 2 - Medium | 3 - Slow
  const interval = speed * 5;

  function startScroll() {
    const id = setInterval(function () {
      window.scrollBy(0, 1);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Reached end of page
        stopScroll();
      }
    }, interval);
    return id;
  }

  function stopScroll() {
    clearInterval(scrollerID);
  }

  useEffect(() => {
    startScroll();
  });

  window.document.body.addEventListener(
    "mousedown",
    function (event) {
      // It's the 'Enter' key
      if (paused == true) {
        scrollerID = startScroll();
        paused = false;
      } else {
        stopScroll();
        paused = true;
      }
    },
    true
  );

  return (
    <div
      className="flex w-full flex-col-reverse gap-8 md:flex-row"
      onClick={() => stopScroll()}
    >
      <div className="w-full pl-0 md:w-1/2">
        <div className="grid min-h-screen w-full grid-cols-1 gap-8 sm:grid-cols-2">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className={
                "aspect-h-10 aspect-w-6	relative w-full flex-1 overflow-hidden odd:-mt-16 odd:mb-16"
              }
            >
              <Image
                src="https://placeimg.com/260/400/arch"
                alt={""}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex min-h-[640px] w-2/3 flex-col justify-center bg-base-300 p-8 md:min-h-screen md:w-1/2 md:flex-none md:justify-start">
        <div className="relative flex flex-col justify-around pt-56 md:fixed md:min-h-screen">
          <div className="flex w-2/3 flex-col items-start justify-start gap-36 p-8 md:min-h-screen md:w-full ">
            <h1
              className={
                "w-2/3 text-6xl font-light uppercase" + abril.className
              }
            >
              Design de Produto centrado no humano com método e competência.
            </h1>
            <div className="w-1/2 self-end border">
              User Experience, User Interface .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
