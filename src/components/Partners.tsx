"use client";
import Image from "next/image";
import { BR, US, UY, CL } from "country-flag-icons/react/3x2";

export function Partners() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 pb-16 pt-4">
      <Image
        src="/logo.png"
        alt=""
        width={1000}
        height={200}
        quality={100}
        className="h-32 object-contain opacity-50"
      />
      <span className="flex flex-col items-center gap-1 px-4 font-semibold lg:flex-row lg:text-xl">
        Parceiros em fé e construção em +170 Projetos em 4 países
        <div className="flex items-center gap-1 lg:flex-row">
          <BR title="Brazil" className="w-5" />
          <US title="United States" className="w-5" />
          <UY title="Uruguay" className="w-5" />
          <CL title="Chile" className="w-5" />
        </div>
      </span>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:w-1/2 lg:flex-row">
        <Image
          src="/google.png"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="h-6 w-max object-contain"
        />
        <Image
          src="/facebook.png"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="h-6 w-max object-contain"
        />
        <Image
          src="/youtube.png"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="h-6 w-max object-contain"
        />
        <Image
          src="/pinterest.png"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="h-6 w-max object-contain"
        />
      </div>
    </div>
  );
}
