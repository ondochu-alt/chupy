import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "추예은 | 콘텐츠 & 브랜드 전략 마케터",
  description:
    "데이터로 가설을 세우고, 감각적인 영상으로 성과를 증명하는 브랜드 전략 마케터 추예은의 포트폴리오입니다.",
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
    <html lang="ko" className={`${plusJakarta.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
