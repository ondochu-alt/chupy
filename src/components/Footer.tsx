"use client";

import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();
  const f = t.footer;

  return (
    <footer
      className="w-full py-10 md:py-12 mt-12 md:mt-20 bg-zinc-50 border-t border-zinc-100"
      id="contact"
    >
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-5 sm:px-8 gap-10 md:gap-12">
        <AnimatedSection className="text-center md:text-left space-y-4 w-full md:w-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-zinc-900"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {f.heading}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            {f.sub}
          </p>
          <a
            href="mailto:ondo.chu@gmail.com"
            className="inline-block bg-[#8a4a65] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all duration-150 mt-4 shadow-lg shadow-[#8a4a65]/20"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {f.cta}
          </a>
        </AnimatedSection>

        <AnimatedSection delay={150} className="flex flex-col items-center md:items-end gap-4 md:gap-6 w-full md:w-auto">
          <div
            className="font-bold text-zinc-900"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            CHU YEEUN
          </div>
          <div
            className="flex flex-col items-center md:items-end text-sm tracking-wide gap-2"
            style={{ fontFamily: "var(--font-label)" }}
          >
            <a
              href="mailto:ondo.chu@gmail.com"
              className="text-zinc-500 hover:text-[#8a4a65] transition-colors hover:underline decoration-[#f0a1bf] underline-offset-4"
            >
              ondo.chu@gmail.com
            </a>
          </div>
          <p className="text-xs text-zinc-400 mt-4 md:mt-8">{f.copyright}</p>
        </AnimatedSection>
      </div>
    </footer>
  );
}
