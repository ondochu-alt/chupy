"use client";

import AnimatedSection from "./AnimatedSection";
import WatercolorFlowers from "./WatercolorFlowers";
import { useLocale } from "@/context/LocaleContext";

export default function Philosophy() {
  const { t } = useLocale();
  const p = t.philosophy;

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-32 grid md:grid-cols-2 gap-10 md:gap-20 items-start">
      <div>
        <AnimatedSection>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {p.title}
          </h2>
        </AnimatedSection>

        <div className="space-y-10 md:space-y-12">
          <AnimatedSection delay={100}>
            <div className="space-y-4">
              <span
                className="text-[#f0a1bf] font-extrabold text-4xl opacity-50"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                01
              </span>
              <h4 className="text-xl font-bold" style={{ fontFamily: "var(--font-headline)" }}>
                {p.item1Title}
              </h4>
              <p className="text-[#514347] leading-relaxed">
                {p.item1Body}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-4">
              <span
                className="text-[#f0a1bf] font-extrabold text-4xl opacity-50"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                02
              </span>
              <h4 className="text-xl font-bold" style={{ fontFamily: "var(--font-headline)" }}>
                {p.item2Title}
              </h4>
              <p className="text-[#514347] leading-relaxed">
                {p.item2Body}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={150} className="hidden md:flex items-center justify-center">
        <div className="w-full h-[480px]">
          <WatercolorFlowers />
        </div>
      </AnimatedSection>
    </section>
  );
}
