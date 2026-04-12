"use client";

import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/context/LocaleContext";

const careerPeriods = [
  "2024.09 — 2025.11",
  "2022.10 — 2023.11",
  "2021.06 — 2022.09",
  "2019.09 — 2021.06",
];

const careerCurrent = [true, false, false, false];

export default function Career() {
  const { t } = useLocale();

  return (
    <section className="bg-[#f3f4f5] py-14 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-3 gap-8 md:gap-16">
        <AnimatedSection>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight md:sticky md:top-32"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {t.career.title}
          </h2>
        </AnimatedSection>

        <div className="md:col-span-2 space-y-10 md:space-y-16">
          {t.career.items.map((career, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="relative pl-6 sm:pl-8 border-l border-[#d6c1c7]/40">
                <div
                  className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full transition-colors duration-300 ${
                    careerCurrent[i] ? "bg-[#8a4a65]" : "bg-[#d6c1c7]"
                  }`}
                />
                <span
                  className="text-[#514347] text-xs sm:text-sm tracking-widest font-bold block mb-1 md:mb-2 uppercase"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {careerPeriods[i]}
                </span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h4
                    className="text-xl sm:text-2xl font-bold"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {career.company}
                    {career.brand && (
                      <span className="text-base sm:text-lg font-semibold text-[#b0929c] ml-1.5">
                        ({career.brand})
                      </span>
                    )}
                  </h4>
                  <span
                    className="text-sm font-semibold text-[#837378]"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {career.role}
                  </span>
                </div>
                <p className="text-[#514347] mt-3 md:mt-4 leading-relaxed text-sm sm:text-base max-w-xl">
                  {career.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
