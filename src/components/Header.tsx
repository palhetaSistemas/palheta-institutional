"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="Header z-10 mx-auto flex h-20 w-11/12 items-center justify-between pt-4">
        <Image
          src="/fullLogo.png"
          alt=""
          width={500}
          height={100}
          quality={100}
          className="h-full w-max cursor-pointer object-contain"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <div className="hidden items-center justify-between lg:flex lg:gap-8 xl:gap-16">
          <span
            className="group relative text-primary transition duration-200 hover:cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="absolute bottom-0 h-px w-full -translate-x-5 bg-primary opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            Home
          </span>
          <span
            className="group relative text-primary transition duration-200 hover:cursor-pointer"
            onClick={() => scrollToSection("history")}
          >
            <div className="absolute bottom-0 h-px w-full -translate-x-5 bg-primary opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            História
          </span>
          <span
            className="group relative flex items-center gap-2 text-primary transition duration-200 hover:cursor-pointer"
            onClick={() => scrollToSection("tecnologi")}
          >
            <div className="absolute bottom-0 h-px w-full -translate-x-5 bg-primary opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            Tecnologia
          </span>
          <span
            className="group relative text-primary transition duration-200 hover:cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            <div className="absolute bottom-0 h-px w-full -translate-x-5 bg-primary opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            Ver nossos projetos
          </span>
          <a
            href="https://app.palhetaarquitetura.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-primary bg-transparent px-4 py-2 text-primary transition duration-300 hover:-translate-y-0.5 hover:scale-[1.005] hover:bg-primary hover:text-white hover:shadow-md"
          >
            Administrativo
          </a>
          <a
            href="https://orcamento.palhetaarquitetura.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-primary bg-primary px-4 py-2 text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.005] hover:border hover:bg-white hover:text-primary hover:shadow-md"
          >
            Fazer Orçamento
          </a>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="h-6 w-6 rounded-xl bg-transparent p-1 text-primary lg:hidden"
        >
          <Menu />
        </button>
      </div>

      {isSidebarOpen && (
        <>
          <div className="fixed z-[9999999] flex h-screen w-2/3 flex-col gap-8 bg-primary p-2 text-background lg:hidden">
            <Image
              src="/fullLogoWhite.png"
              alt="Logo"
              width={500}
              height={200}
              className="h-auto w-56 cursor-pointer object-contain"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsSidebarOpen(false);
              }}
            />

            <div className="flex flex-col items-center justify-between gap-8">
              <span
                className="group relative text-white transition duration-200 hover:cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsSidebarOpen(false);
                }}
              >
                <div className="absolute bottom-0 h-px w-full -translate-x-5 bg-white opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                Home
              </span>
              <span
                className="group relative text-white transition duration-200 hover:cursor-pointer"
                onClick={() => {
                  scrollToSection("history");
                  setIsSidebarOpen(false);
                }}
              >
                <div className="absolute bottom-0 h-px w-full -translate-x-5 bg-white opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                História
              </span>
              <span
                className="group relative flex items-center gap-2 text-white transition duration-200 hover:cursor-pointer"
                onClick={() => {
                  scrollToSection("tecnologi");
                  setIsSidebarOpen(false);
                }}
              >
                <div className="absolute bottom-0 h-px w-full -translate-x-5 bg-white opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                Tecnologia
              </span>
              <span
                className="group relative text-white transition duration-200 hover:cursor-pointer"
                onClick={() => {
                  scrollToSection("projects");
                  setIsSidebarOpen(false);
                }}
              >
                <div className="absolute bottom-0 h-px w-full -translate-x-5 bg-white opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                Ver nossos projetos
              </span>
              <button
                className="rounded-xl border border-white bg-transparent px-4 py-2 text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.005] hover:bg-white hover:text-primary"
                onClick={() =>
                  (window.location.href =
                    "https://app.palhetaarquitetura.com.br/")
                }
              >
                Administrativo
              </button>
              <button
                className="rounded-xl border border-white bg-white px-4 py-2 text-primary transition duration-300 hover:-translate-y-0.5 hover:scale-[1.005] hover:border hover:bg-transparent hover:text-white"
                onClick={() =>
                  (window.location.href =
                    "https://orcamento.palhetaarquitetura.com.br/")
                }
              >
                Fazer Orçamento
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="fixed right-0 z-[9999999] h-screen w-1/3 bg-black/50 lg:hidden"
          />
        </>
      )}
    </>
  );
}
