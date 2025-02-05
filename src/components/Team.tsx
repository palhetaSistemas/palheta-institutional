"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useOnScreen from "../utils/IsOnScreen";
import { twMerge } from "tailwind-merge";

export function Team() {
  const slides = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const sliderRef = useRef<SwiperType | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as SwiperType).slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as SwiperType).slideNext();
  }, []);

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-primary">
      <div className="relative h-full w-full py-8 lg:h-3/5">
        <Swiper
          className="h-3/5 lg:h-full"
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides
          loop
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative flex h-full w-60 items-center justify-center rounded-xl bg-white/30 px-8"
            >
              <Image
                src="/placeholder-1.png"
                alt=""
                width={200}
                height={200}
                className="absolute left-1/2 top-1/2 h-max w-20 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
              <Image
                src="/iconWhite.png"
                alt=""
                width={200}
                height={500}
                className="absolute bottom-0 right-8 w-20 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={ref1}
          className="mx-auto mt-8 flex w-11/12 items-center justify-between gap-8 text-primary"
        >
          <div
            className={twMerge(
              "flex translate-y-20 flex-col text-white opacity-0 transition delay-300 duration-700",
              isVisible1.isIntersecting && "translate-y-0 opacity-100",
            )}
          >
            <span className="text-xl font-semibold lg:text-5xl">
              Conheça Nossa Equipe
            </span>
            <span className="lg:w-2/3 lg:text-xl">
              Arquitetos com experiência e paixão pela fé, construção civil e
              principalmente mudar a vida de irmãos com o dom que Deus nos deu.
            </span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <div className="rounded-full bg-white p-2">
              <ArrowLeft
                size={32}
                onClick={handlePrev}
                className="cursor-pointer"
              />
            </div>
            <div className="rounded-full bg-white p-2">
              <ArrowRight
                size={32}
                onClick={handleNext}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
