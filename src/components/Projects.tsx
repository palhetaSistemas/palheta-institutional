"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(m.matches);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

type SlotTimers = {
  startTimeout?: number;
  interval?: number;
  fadeTimeout?: number;
};

export function Projects() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  // imagens 1..10 de /public/projects
  const IMAGES = useMemo(
    () => Array.from({ length: 10 }, (_, i) => `/projects/${i + 1}.png`),
    [],
  );

  const isLg = useMediaQuery("(min-width: 1024px)");
  // mantém 5 cards como no layout original, alternando 1/3 entre lg e mobile
  const activeContainers = isLg ? [0, 1, 2, 4, 5] : [0, 2, 3, 4, 5];

  // estado: qual índice de imagem cada slot mostra (0..9)
  const [displayed, setDisplayed] = useState<number[]>(
    Array.from({ length: 5 }, (_, i) => i),
  );
  const [paused, setPaused] = useState<Record<number, boolean>>({});
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // fade por slot
  const [fading, setFading] = useState<Record<number, boolean>>({});

  // timers por slot (para stagger)
  const timersRef = useRef<SlotTimers[]>([]);

  // === parâmetros de animação (ajuste à vontade) ===
  const INTERVAL = 8000; // tempo base entre trocas por slot
  const STAGGER = 2900; // atraso entre slots (ms) -> "alguns segundos" somando os 5
  const JITTER = 5000; // variação aleatória para não sincronizar com o tempo
  const FADE_MS = 580; // duração do fade

  // helpers do grid
  const containers = [
    "col-span-2 row-span-2 flex items-center justify-center rounded-3xl bg-[#013466]/30 lg:col-span-1", // 0
    "col-span-2 row-span-4 hidden items-center justify-center rounded-3xl bg-[#013466]/30 lg:flex", // 1 (desktop)
    "col-span-2 row-span-2 flex items-center justify-center rounded-3xl bg-[#013466]/30 lg:col-span-1", // 2
    "col-span-4 row-span-4 flex items-center justify-center rounded-3xl bg-[#013466]/30 lg:col-span-2 lg:hidden", // 3 (mobile)
    "col-span-2 row-span-2 flex items-center justify-center rounded-3xl bg-[#013466]/30 lg:col-span-1", // 4
    "col-span-2 row-span-2 flex items-center justify-center rounded-3xl bg-[#013466]/30 lg:col-span-1", // 5
  ];
  const slotForContainer = (idx: number) => {
    const s = activeContainers.indexOf(idx);
    return s === -1 ? null : s;
  };

  // limpa todos os timers
  const clearAllTimers = () => {
    timersRef.current.forEach((t) => {
      if (t.startTimeout) window.clearTimeout(t.startTimeout);
      if (t.interval) window.clearInterval(t.interval);
      if (t.fadeTimeout) window.clearTimeout(t.fadeTimeout);
    });
    timersRef.current = [];
  };

  // troca apenas um slot, mantendo unicidade entre os 5
  const tickSlot = (slot: number) => {
    if (pausedRef.current[slot]) return;

    setFading((f) => ({ ...f, [slot]: true }));
    const fadeId = window.setTimeout(() => {
      setDisplayed((prev) => {
        const nextArr = [...prev];
        const used = new Set<number>(nextArr);
        // libera a atual do slot para poder escolher a próxima
        used.delete(nextArr[slot]);
        let next = (nextArr[slot] + 1) % IMAGES.length;
        while (used.has(next)) next = (next + 1) % IMAGES.length;
        nextArr[slot] = next;
        return nextArr;
      });
      setFading((f) => ({ ...f, [slot]: false }));
    }, FADE_MS) as unknown as number;

    // guarda para limpar depois
    timersRef.current[slot] = {
      ...timersRef.current[slot],
      fadeTimeout: fadeId,
    };
  };

  // inicializa / reinicia com stagger quando muda breakpoint
  useEffect(() => {
    // estado inicial: 5 slots, imagens 0..4
    setDisplayed(Array.from({ length: activeContainers.length }, (_, i) => i));
    setPaused({});
    setFading({});
    clearAllTimers();

    // cria timers por slot
    timersRef.current = Array.from(
      { length: activeContainers.length },
      () => ({}) as SlotTimers,
    );

    for (let i = 0; i < activeContainers.length; i++) {
      const startDelay = i * STAGGER + Math.floor(Math.random() * JITTER); // defasagem + jitter

      const startId = window.setTimeout(() => {
        tickSlot(i);
        const every =
          INTERVAL + (Math.floor(Math.random() * (2 * JITTER)) - JITTER);
        const intId = window.setInterval(
          () => tickSlot(i),
          Math.max(1200, every),
        ); // segurança: mínimo 1.2s
        timersRef.current[i].interval = intId;
      }, startDelay) as unknown as number;

      timersRef.current[i].startTimeout = startId;
    }

    return () => clearAllTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLg, IMAGES.length]);

  return (
    <div
      id="projects"
      className="mx-auto flex h-screen w-11/12 flex-col items-center gap-4 py-4 text-primary lg:gap-8 lg:py-8"
    >
      <Image
        src="/fullLogo.png"
        alt=""
        width={500}
        height={200}
        quality={100}
        className="h-32 object-contain"
        priority
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
        {containers.map((base, idx) => {
          const slot = slotForContainer(idx);
          const isActive = slot !== null;
          const onEnter = () =>
            isActive && setPaused((p) => ({ ...p, [slot!]: true }));
          const onLeave = () =>
            isActive && setPaused((p) => ({ ...p, [slot!]: false }));

          return (
            <div
              key={idx}
              className={twMerge(
                base,
                "group relative overflow-hidden transition will-change-transform",
                "hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-2xl hover:ring-2 hover:ring-primary/60 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-neutral-900",
              )}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              {isActive ? (
                <div className="absolute inset-0">
                  <Image
                    key={IMAGES[displayed[slot!]]}
                    src={IMAGES[displayed[slot!]]}
                    alt={`Projeto ${displayed[slot!] + 1}`}
                    fill
                    sizes="(min-width:1024px) 20vw, 50vw"
                    className={twMerge(
                      "object-cover transition-opacity duration-700",
                      fading[slot!] ? "opacity-0" : "opacity-100",
                    )}
                    priority={idx < 2}
                    quality={90}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <button
        onClick={() =>
          window.open("https://orcamento.palhetaarquitetura.com.br/", "_blank")
        }
        className="rounded-3xl border border-primary bg-primary px-20 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.005] hover:bg-transparent hover:text-primary lg:w-max"
      >
        Solicitar Orçamento
      </button>
    </div>
  );
}
