"use client";
import { ArrowBigUpDash, Church, Flag, History } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";

export function Results() {
  return (
    <div className="mx-auto flex h-full w-11/12 flex-col gap-8 pb-16 pt-8 lg:h-[120vh] 2xl:h-screen">
      <div className="flex flex-col items-center justify-center gap-4 text-primary">
        <Image
          src="/fullLogo.png"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="h-32 object-contain"
        />
        <span className="text-3xl font-semibold xl:text-6xl">
          Resultados em Números
        </span>
        <span className="font-light lg:text-xl">Nossa história em números</span>
      </div>
      <div className="flex h-full w-full flex-col justify-between gap-8 lg:flex-row">
        <div className="relative flex h-full w-full flex-col justify-end rounded-xl bg-primary text-white lg:w-1/2">
          <Image
            src="/projects/3.png"
            alt=""
            width={5000}
            height={5000}
            quality={100}
            className="absolute z-10 h-full w-full object-cover opacity-40 blur-md"
          />
          <div className="z-20 flex flex-col gap-8 p-8">
            <span className="text-3xl font-semibold">Pastores Atendidos</span>
            <div className="flex flex-col">
              <span className="relative flex items-center gap-2 text-2xl font-bold lg:text-4xl">
                <CountUp end={160} suffix="+" enableScrollSpy scrollSpyOnce />
              </span>
              <span className="lg:text-2xl">
                pastores atendidos com excelência
              </span>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-2 lg:w-1/2 lg:gap-8">
          <div className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border p-2 lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#F9F9FF]">
              {/* <Image
                src="/placeholder-1.png"
                alt=""
                width={200}
                height={200}
                className="h-max w-10 object-contain"
              /> */}
              <Church className="h-max w-10 object-contain" color="#003365" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold lg:text-lg xl:text-2xl">
                Projetos entregues
              </span>
              <span className="text-2xl font-semibold lg:text-4xl">
                <CountUp end={170} prefix="+" enableScrollSpy scrollSpyOnce />
              </span>
              <span className="lg:text-xl">Igrejas Projetadas</span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border p-2 lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#F9F9FF]">
              <History className="h-max w-10 object-contain" color="#003365" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold lg:text-lg xl:text-2xl">
                História
              </span>
              <span className="text-2xl font-semibold lg:text-4xl">
                <CountUp end={20} prefix="+" enableScrollSpy scrollSpyOnce />
              </span>
              <span className="lg:text-xl">Anos de Jornada</span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border p-2 lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#F9F9FF]">
              <ArrowBigUpDash
                className="h-max w-10 object-contain"
                color="#003365"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold lg:text-lg xl:text-2xl">
                Crescimento
              </span>
              <span className="text-2xl font-semibold lg:text-4xl">
                <CountUp end={100} suffix="%" enableScrollSpy scrollSpyOnce />
              </span>
              <span className="lg:text-xl">em satisfação dos fiéis</span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border p-2 lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#F9F9FF]">
              <Flag className="h-max w-10 object-contain" color="#003365" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold lg:text-lg xl:text-2xl">
                Internacionalização
              </span>
              <span className="text-2xl font-semibold lg:text-4xl">
                <CountUp end={4} prefix="+" enableScrollSpy scrollSpyOnce />
              </span>
              <span className="lg:text-xl">Países atendidos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
