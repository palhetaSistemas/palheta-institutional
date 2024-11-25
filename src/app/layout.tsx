import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "swiper/css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palheta Arquitetura",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${dmSans.className}`}>{children}</body>
    </html>
  );
}
