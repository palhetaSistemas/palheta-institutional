"use client";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 bg-primary px-8 pb-4 text-white lg:h-32 lg:flex-row">
      <Image
        src="/fullLogoWhite.png"
        alt=""
        width={1000}
        height={400}
        className="h-20 w-max object-contain"
      />
      <div className="flex flex-col">
        <span>
          Copyright © 2024 Palheta Arquitetura | Todos os Direitos Reservados
        </span>
        <div className="flex items-center justify-end gap-1">
          <span
            onClick={() =>
              window.open("https://palhetaarquitetura.com.br/terms", "_blank")
            }
            className="cursor-pointer text-xs"
          >
            Termos de uso
          </span>
          |
          <span
            onClick={() =>
              window.open("https://palhetaarquitetura.com.br/privacy", "_blank")
            }
            className="cursor-pointer text-xs"
          >
            Política de Privacidade
          </span>
        </div>
      </div>
    </div>
  );
}
