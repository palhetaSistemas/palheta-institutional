"use client";
import { motion } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";
import Image from "next/image";

/**
 * Seção: Tecnologia / App (máximo 80vh)
 * - ID: "tecnologi" (para casar com o Header atual)
 * - Dois mockups de telefone com imagens /public/phone/1.png e /public/phone/2.png
 * - Botões para App Store e Google Play com links default
 * - Design compacto, animado, com glass + gradiente e sem estourar 80vh
 */

const APP_STORE_URL = "https://apps.apple.com/"; // ajuste quando tiver o link final
const GOOGLE_PLAY_URL = "https://play.google.com/store"; // ajuste quando tiver o link final

export default function TechnologySection() {
  return (
    <section
      id="tecnologi"
      className="relative mx-auto my-12 w-11/12 overflow-hidden rounded-3xl shadow-primary/40 lg:my-16"
      style={{ maxHeight: "80vh" }}
    >
      {/* Fundo com imagem/gradiente opcional */}
      <div className="absolute inset-0 -z-10 bg-[url('/testimonialsBg.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-primary/70" />

      <div className="flex flex-col items-center justify-between gap-8 px-6 py-10 text-white lg:flex-row lg:gap-12 lg:px-12 lg:py-14">
        {/* Texto + CTAs */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight lg:text-5xl">
            Tecnologia que conecta o seu ministério
          </h2>
          <p className="mt-4 text-white/90 lg:text-lg">
            Nosso aplicativo facilita a comunicação, a gestão e o acompanhamento
            de projetos — tudo na palma da mão.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar na Google Play"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:scale-[1.01] hover:border-white/50 hover:bg-white/20"
            >
              <PlayCircle className="transition group-hover:scale-105" />
              <span>Disponível na Google Play</span>
            </a>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar na App Store"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:scale-[1.01] hover:border-white/50 hover:bg-white/20"
            >
              <Apple className="transition group-hover:scale-105" />
              <span>Baixar na App Store</span>
            </a>
          </div>
        </div>

        {/* Mockups dos telefones */}
        <div className="relative grid w-full place-items-center lg:w-auto">
          {/* Blob decorativo */}
          <div className="pointer-events-none absolute -top-10 right-10 h-56 w-56 rounded-full bg-white/15 blur-[80px]" />

          <div className="relative h-[46vh] w-[44vh] min-w-[260px] max-w-[520px] lg:h-[54vh] lg:w-[52vh]">
            {/* Telefone 1 */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute left-0 top-6 w-[58%] rotate-[-8deg] rounded-[2.2rem] p-2 shadow-2xl"
            >
              <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/phone/1.png"
                  alt="Prévia do app — tela 1"
                  fill
                  sizes="(min-width:1024px) 28vw, 60vw"
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>

            {/* Telefone 2 */}
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="absolute right-0 top-0 w-[62%] rotate-[6deg] rounded-[2.2rem] p-2 shadow-2xl"
            >
              <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/phone/2.png"
                  alt="Prévia do app — tela 2"
                  fill
                  sizes="(min-width:1024px) 32vw, 60vw"
                  className="object-cover"
                  quality={90}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
