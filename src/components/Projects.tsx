"use client";
import Image from "next/image";
import { useRef } from "react";
import useOnScreen from "../utils/IsOnScreen";
import { twMerge } from "tailwind-merge";

export function Projects() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  return (
    <div className="mx-auto flex h-screen w-11/12 flex-col items-center gap-4 py-4 text-primary lg:gap-8 lg:py-8">
      <Image
        src="/fullLogo.png"
        alt=""
        width={500}
        height={200}
        quality={100}
        className="h-32 object-contain"
      />
      <div ref={ref1} className="flex flex-col items-center gap-4">
        <span
          className={twMerge(
            "-translate-x-20 text-2xl font-semibold opacity-0 transition delay-300 duration-1000 lg:text-5xl",
            isVisible1.isIntersecting && "translate-x-0 opacity-100",
          )}
        >
          Veja nossos Projetos e Inspirações
        </span>
        <span
          className={twMerge(
            "translate-x-20 opacity-0 transition delay-300 duration-1000 lg:w-1/2 lg:text-center",
            isVisible1.isIntersecting && "translate-x-0 opacity-100",
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.
        </span>
      </div>
      <div className="grid h-full w-full grid-cols-4 grid-rows-8 gap-2 lg:grid-rows-4 lg:gap-8">
        <div className="col-span-2 row-span-2 rounded-3xl bg-primary/10 lg:col-span-1">
          a
        </div>
        <div className="col-span-2 row-span-4 hidden rounded-3xl bg-primary/10 lg:block">
          b
        </div>
        <div className="col-span-2 row-span-2 rounded-3xl bg-primary/10 lg:col-span-1">
          c
        </div>
        <div className="col-span-4 row-span-4 rounded-3xl bg-primary/10 lg:col-span-2 lg:hidden">
          d
        </div>
        <div className="col-span-2 row-span-2 rounded-3xl bg-primary/10 lg:col-span-1">
          e
        </div>
        <div className="col-span-2 row-span-2 rounded-3xl bg-primary/10 lg:col-span-1">
          f
        </div>
      </div>
      <button className="rounded-3xl border border-primary bg-primary px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.005] hover:bg-transparent hover:text-primary lg:w-max">
        Quanto custa para contratar a Palheta Arquitetura?
      </button>
    </div>
  );
}
