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
      <span>
        Copyright © 2024 Palheta Arquitetura | Todos os Direitos Reservados
      </span>
    </div>
  );
}
