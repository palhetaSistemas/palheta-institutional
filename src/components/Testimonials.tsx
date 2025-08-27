"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

/**
 * Testimonials (carrossel com controle de reprodução e transições suaves)
 * Ajustes nesta versão:
 * - ❌ Sem trocar o src do iframe ao sair do slide (evita flash preto e erros de src vazio).
 * - ✅ Para "parar" o vídeo ao navegar, é feito um remount do iframe do slide ANTERIOR (fora de tela),
 *   assim o próximo slide já está carregado e a transição fica suave.
 * - ✅ Autoplay continua desativado em slides de iframe (não avança sozinho nesses casos).
 * - ❌ Logo removida do depoimento.
 */

type Slide = {
  id: string;
  src: string; // mp4 direto ou URL de embed (preview)
  testimonial: string;
  author: string;
  role: string;
};

export function Testimonials() {
  const refTitle = useRef<HTMLDivElement>(null);
  const isVisibleTitle = useOnScreen(refTitle);

  // Slides (3 vídeos do Drive com /preview)
  const SLIDES: Slide[] = useMemo(
    () => [
      {
        id: "drive-jose-carlos",
        src: "https://drive.google.com/file/d/18sSneRBUjODA2k8qf22GrDLxJSb9E06l/preview",
        testimonial:
          "Sou o pastor José Carlos, da Rescue Church Miami. O Ed Palheta e sua equipe têm sido uma bênção, conduzindo com excelência o projeto do novo edifício da igreja. Minha gratidão e orações para que o trabalho dele seja reconhecido no Brasil e no mundo.",
        author: "Pr. José Carlos",
        role: "Rescue Church Miami",
      },
      {
        id: "drive-andre-reis",
        src: "https://drive.google.com/file/d/1RXgXKsUYNTtwARNJLGxglY0z5UBLVIOB/preview",
        testimonial:
          "Sou o pastor André Reis (Apostólica Templo da Fé – Sorocaba/SP). O Edi entendeu nossos sonhos e ideias e os transformou no projeto da igreja, com rapidez e atenção aos mínimos detalhes. Minha gratidão pelo excelente trabalho.",
        author: "Pr. André Reis",
        role: "Apostólica Templo da Fé – Sorocaba/SP",
      },
      {
        id: "drive-israel-suelen",
        src: "https://drive.google.com/file/d/1HOcG1WxErE4-GXiUNAsSF0DWpAIlaxMr/preview",
        testimonial:
          "Escolhemos o Edi por ser especialista em igrejas. Conhecemos pelo Instagram; o contato foi ágil e sério, e seus projetos têm a visão de mundo que buscávamos para atender os anseios do nosso ministério.",
        author: "Prs. Israel & Suelen",
        role: "Pastores",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [isPausedHover, setIsPausedHover] = useState(false); // pausa por hover/foco
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // HTML5 <video> apenas
  const total = SLIDES.length;

  // refs para <video> (caso use mp4 no futuro)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const setVideoRef = (id: string) => (el: HTMLVideoElement | null) => {
    videoRefs.current[id] = el;
  };

  // Mapa para forçar remount do iframe do slide que ficou para trás (pausa o vídeo sem causar flash no próximo)
  const [reloadKeyMap, setReloadKeyMap] = useState<Record<string, number>>({});

  const stopAllVideos = () => {
    Object.values(videoRefs.current).forEach((v) => {
      if (v) {
        try {
          v.pause();
          v.currentTime = 0;
        } catch {}
      }
    });
    setIsVideoPlaying(false);
  };

  const goTo = (i: number) => {
    const nextIdx = ((i % total) + total) % total;

    // Antes de trocar o slide, "parar" o do índice atual
    const current = SLIDES[index];
    // Força remount do iframe atual (ele ficará fora de tela após a troca)
    setReloadKeyMap((m) => ({
      ...m,
      [current.id]: (m[current.id] ?? 0) + 1,
    }));
    stopAllVideos();

    setIndex(nextIdx);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const pauseHandlers = {
    onMouseEnter: () => setIsPausedHover(true),
    onMouseLeave: () => setIsPausedHover(false),
    onFocus: () => setIsPausedHover(true),
    onBlur: () => setIsPausedHover(false),
  } as const;

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-[url('/testimonialsBg.png')] bg-cover bg-center bg-no-repeat pb-40 shadow-primary">
        <div className="absolute inset-0 h-full w-full bg-primary/70" />

        <div className="relative z-10 mx-auto flex w-11/12 flex-col gap-8 py-8 text-white">
          {/* Cabeçalho animado */}
          <div
            ref={refTitle}
            className={twMerge(
              "flex -translate-x-20 flex-col gap-4 text-white opacity-0 transition delay-300 duration-700",
              isVisibleTitle.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            <span className="text-xl font-semibold lg:text-4xl">
              O que os Pastores Dizem:
            </span>
            <span className="text-sm lg:w-1/2 lg:text-xl">
              Depoimentos reais de líderes e parceiros sobre o trabalho do Ed
              Palheta e equipe.
            </span>
          </div>

          {/* Carrossel */}
          <div
            className="flex w-full flex-col overflow-hidden rounded-3xl border-2 border-primary lg:h-[60vh]"
            {...pauseHandlers}
          >
            {/* Trilho de slides */}
            <div
              className="flex h-full w-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((s, i) => {
                const active = index === i;
                const iframeKey = `${s.id}:${reloadKeyMap[s.id] ?? 0}`;
                return (
                  <div
                    key={s.id}
                    className="min-w-full overflow-hidden rounded-lg"
                  >
                    <div className="flex h-full w-full flex-col lg:flex-row-reverse">
                      <div className="hidden w-[30%] items-center justify-center bg-primary lg:flex">
                        {" "}
                        <Image
                          src="/fullLogoWhite.png"
                          alt=""
                          width={1000}
                          height={200}
                          quality={100}
                          className="h-32 object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center lg:h-[60vh] lg:border-b-0 lg:border-r">
                        <div className="relative flex h-full w-full items-center justify-center bg-white/60 pb-4">
                          <iframe
                            key={iframeKey}
                            className="aspect-[9/16] h-max w-full rounded-lg lg:h-full lg:w-max"
                            src={s.src}
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            // sandbox ajuda a conter popups, não remove a UI do Drive (não é possível)
                            sandbox="allow-scripts allow-same-origin allow-presentation"
                          />
                        </div>
                      </div>

                      <div className="0 -mt-1 flex h-full w-full flex-1 flex-col justify-center gap-4 bg-white/60 p-4 text-primary backdrop-blur-sm lg:h-[60vh] lg:w-[52%] lg:gap-6 lg:border-t-0 lg:p-8">
                        <div className="flex w-full flex-row justify-between md:hidden">
                          <button
                            aria-label="Slide anterior"
                            onClick={prev}
                            type="button"
                            className="z-[999] rounded-full border border-white/30 bg-primary p-2 text-white backdrop-blur hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-white/60 lg:top-full lg:hidden"
                          >
                            <ChevronLeft />
                          </button>

                          <button
                            aria-label="Próximo slide"
                            onClick={next}
                            type="button"
                            className="z-[999] rounded-full border border-white/30 bg-primary p-2 text-white backdrop-blur hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-white/60 lg:top-full lg:hidden"
                          >
                            <ChevronRight />
                          </button>
                        </div>
                        <span className="w-11/12 text-sm leading-relaxed lg:text-xl">
                          “{s.testimonial}”
                        </span>
                        <div className="flex flex-col">
                          <span className="font-semibold lg:text-2xl">
                            {s.author}
                          </span>
                          <span className="text-sm lg:text-xl">{s.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controles */}
            <button
              aria-label="Slide anterior"
              onClick={prev}
              className="absolute left-3 top-1/2 z-[999] hidden -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-2 text-white backdrop-blur hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 lg:top-full lg:block"
            >
              <ChevronLeft />
            </button>

            <button
              aria-label="Próximo slide"
              onClick={next}
              className="absolute right-3 top-1/2 z-[999] hidden -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-2 text-white backdrop-blur hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 lg:top-full lg:block"
            >
              <ChevronRight />
            </button>

            {/* Bullets */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir para o slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={twMerge(
                    "h-2 w-2 rounded-full border border-white/60 transition",
                    index === i ? "bg-white" : "bg-white/30 hover:bg-white/50",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
