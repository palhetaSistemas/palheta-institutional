"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Church, EyeOff, GraduationCap, PenLine, Sparkles } from "lucide-react";
import { useRef } from "react";

type Step = {
  title: string;
  body: string;
  Icon: React.ComponentType<{ className?: string; size?: string | number }>;
};
const STEPS: Step[] = [
  {
    title: "O Primeiro Desenho",
    body: "Com apenas 11 anos, desenhei minha primeira fachada de igreja no interior do Piauí. Meu pai a construiu exatamente como eu havia imaginado. Ao ver a obra concluída, orei dizendo que queria ser arquiteto para projetar igrejas.",
    Icon: PenLine,
  },
  {
    title: "O Diagnóstico",
    body: "Pouco depois, descobri que era cego de um olho e tinha apenas 10% de visão no outro. O médico recomendou aposentadoria por invalidez, sugerindo que uma criança com essa deficiência no interior não teria futuro.",
    Icon: EyeOff,
  },
  {
    title: "A Palavra Profética",
    body: "Depois de anos orando por cura, ouvi de um pastor que Deus não me curaria porque Seu propósito era me usar com a deficiência para glorificar Seu nome. O verdadeiro milagre seria uma pessoa cega fazer tudo o que uma pessoa com visão faz.",
    Icon: Sparkles,
  },
  {
    title: "A Formação",
    body: "Dediquei-me intensamente aos estudos — cheguei a estudar 16 horas por dia. Entrei na faculdade e me formei entre os melhores da turma, superando todas as limitações.",
    Icon: GraduationCap,
  },
  {
    title: "O Retorno ao Chamado",
    body: "Após trabalhar com vários tipos de projetos, recebi uma palavra: Deus me escolheu desde o ventre para cuidar da Sua obra. Abandonei os outros trabalhos para me dedicar exclusivamente às igrejas evangélicas.",
    Icon: Church,
  },
];

export default function History() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 10%", "end 90%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section
      id="history"
      ref={sectionRef}
      className="relative mx-auto w-full overflow-hidden px-8 py-16 text-primary lg:py-24"
    >
      {/* Decor: blobs/gradients ao fundo */}
      <div className="pointer-events-none absolute left-1/2 top-32 h-32 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-[#013466]/20 blur-[90px]" />

      {/* Cabeçalho */}
      <div className="mb-10 flex flex-col items-center gap-4 text-center lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-semibold tracking-tight text-primary lg:text-6xl"
        >
          Nossa História
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-3xl text-base text-primary/80 lg:text-xl"
        >
          Uma jornada de chamado, resiliência e propósito — do primeiro desenho
          ao ministério através da arquitetura.
        </motion.p>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-8">
        {/* Barra de progresso sticky (desktop) */}
        <div className="absolute left-10 top-28 z-20 hidden h-[80%] w-20 lg:block">
          <div className="relative mx-auto h-full w-[6px] overflow-hidden rounded-full bg-primary/10">
            <motion.div
              style={{ scaleY: progress, originY: 0 }}
              className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-b from-primary via-primary/80 to-primary/40"
            />
          </div>
        </div>

        <div className="relative w-[80%] lg:col-span-10">
          <ul className="flex flex-col gap-6 lg:gap-10">
            {STEPS.map(({ title, body, Icon }, i) => (
              <li key={i} className="relative">
                {i !== STEPS.length - 1 && (
                  <div className="absolute left-5 top-12 h-[calc(100%-3rem)] w-px bg-primary/10 lg:hidden" />
                )}

                <motion.article
                  initial={{ opacity: 0, y: 32, rotateX: -6 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="group relative rounded-3xl bg-gradient-to-br from-white/70 to-white/50 p-[1px] shadow-xl shadow-primary/10 backdrop-blur-md dark:from-white/5 dark:to-white/0"
                >
                  <div className="relative rounded-3xl bg-white/80 p-5 ring-1 ring-primary/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-2xl group-hover:ring-primary/20 lg:p-8 dark:bg-white/10">
                    <div className="mb-4 flex items-center gap-3 text-primary">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="" />
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight lg:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-primary/80 lg:text-lg">{body}</p>

                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
