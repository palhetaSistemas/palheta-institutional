"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import useOnScreen from "../utils/IsOnScreen";
import { twMerge } from "tailwind-merge";

export function Testimonials() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-[url('/testimonialsBg.png')] bg-cover bg-center bg-no-repeat shadow-primary">
        <div className="absolute h-full w-full bg-primary/70" />
        <div className="z-10 mx-auto flex h-full w-11/12 flex-col gap-8 py-8 text-white">
          <div
            ref={ref1}
            className={twMerge(
              "flex -translate-x-20 flex-col gap-8 text-white opacity-0 transition delay-300 duration-700",
              isVisible1.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            <span className="text-xl font-semibold lg:text-4xl">
              O que os Pastores Dizem:
            </span>
            <span className="text-sm lg:w-1/3 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan.
            </span>
          </div>
          <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border-2 border-primary lg:h-3/5 lg:flex-row">
            <div className="flex h-1/3 w-full items-center justify-center border-r border-primary bg-white lg:h-full lg:w-[48%]">
              <div className="rounded-full bg-primary/50 p-2">
                <Play className="text-white" size={24} />
              </div>
            </div>
            <div className="flex h-2/3 w-full flex-col justify-center gap-4 border-l border-primary bg-white/50 p-4 text-primary lg:h-full lg:w-[52%] lg:gap-8 lg:p-8">
              <Image
                src="/facebookWhite.png"
                alt=""
                width={500}
                height={200}
                quality={100}
                className="h-10 w-max object-contain"
              />
              <span className="w-11/12 text-sm lg:text-xl">
                “Lorem ipsum dolor sit amet conse ctetur adipiscing elit Vel
                mauris turpis vel eget nec orci nec ipsum Elementum felis eu
                pellentesque velit vulputate. Blandit consequat facilisi
                sagittis ut quis Integer et faucibus elemen.”
              </span>
              <div className="flex flex-col">
                <span className="font-semibold lg:text-2xl">Êdi Palheta</span>
                <span className="text-sm lg:text-xl">Sócio Proprietário</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
