"use client";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

export function CTA() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useOnScreen(ref2);

  return (
    <div className="flex h-screen w-full flex-col lg:flex-row">
      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-primary text-white lg:h-full lg:w-1/2">
        <div className="mx-auto flex h-full w-3/4 flex-col justify-center gap-8 py-2">
          <span
            ref={ref1}
            className={twMerge(
              "-translate-x-full text-3xl font-semibold opacity-0 transition delay-300 duration-1000 lg:text-5xl",
              isVisible1.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            Utilize a Inteligência Artificial da Palheta Arquitetura
          </span>
          <div
            className={twMerge(
              "flex translate-y-20 flex-col gap-4 opacity-0 transition delay-300 duration-1000",
              isVisible1.isIntersecting && "translate-y-0 opacity-100",
            )}
          >
            <span className="lg:text-xl">
              Dê liberdade à sua criatividade junto à uma Inteligência
              Artificial que irá ajudar você a ter ideias e inspirações.
            </span>
            <button
              onClick={() =>
                window.open(
                  "https://orcamento.palhetaarquitetura.com.br/",
                  "_blank",
                )
              }
              className="w-max rounded-xl border border-white bg-white px-8 py-4 font-semibold text-primary transition duration-300 hover:-translate-y-0.5 hover:scale-[1.005] hover:bg-primary hover:text-white"
            >
              Fale com nosso time
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-white text-primary lg:h-full lg:w-1/2">
        <div className="mx-auto flex h-full w-3/4 flex-col justify-center gap-8 py-2">
          <span
            ref={ref2}
            className={twMerge(
              "translate-x-full text-3xl font-semibold opacity-0 transition delay-300 duration-1000 lg:text-5xl",
              isVisible2.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            Quer Acessar seu Projeto Arquitetônico?
          </span>
          <div
            className={twMerge(
              "flex translate-y-20 flex-col gap-4 opacity-0 transition delay-300 duration-1000",
              isVisible1.isIntersecting && "translate-y-0 opacity-100",
            )}
          >
            <span className="lg:text-xl">
              Para você compreender o passo a passo para contratar a Palhete
              Arquitetura basta clicar no botão abaixo.
            </span>
            <button
              onClick={() =>
                window.open("https://app.palhetaarquitetura.com.br/", "_blank")
              }
              className="w-max rounded-xl border border-primary bg-primary px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.005] hover:bg-white hover:text-primary"
            >
              Acessar Meu Projeto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
