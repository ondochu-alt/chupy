"use client";

import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/context/LocaleContext";

const certData = [
  { name: "OPIc", grade: "IH", date: "2023.11" },
  { name: "SQLD", grade: null, date: "2024.09" },
];

export default function Skills() {
  const { t } = useLocale();
  const s = t.skills;

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-24 grid md:grid-cols-2 gap-12 md:gap-20">
      <div>
        <AnimatedSection>
          <h2
            className="text-xl sm:text-2xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {s.title}
          </h2>
        </AnimatedSection>
        <div className="space-y-7 md:space-y-8">
          {s.groups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 100}>
              <p
                className="text-[#8a4a65] text-xs font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 sm:px-5 py-2 bg-[#e7e8e9] rounded-lg text-sm font-semibold hover:bg-[#ffd9e5] hover:text-[#390721] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="space-y-10 md:space-y-12">
        <AnimatedSection delay={100}>
          <h2
            className="text-xl sm:text-2xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {s.brandTitle}
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {s.brands.map((brand, i) => (
              <span
                key={brand}
                className="px-4 sm:px-5 py-2 bg-[#e7e8e9] rounded-lg text-sm font-semibold hover:bg-[#ffd9e5] hover:text-[#390721] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-label)",
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2
            className="text-xl sm:text-2xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {s.certTitle}
          </h2>
          <div className="flex flex-col gap-3">
            {certData.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#e7e8e9] rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-bold text-[#191c1d]"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {cert.name}
                  </span>
                  <span
                    className="px-2 py-0.5 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {cert.grade ?? s.certAcquired}
                  </span>
                </div>
                <span
                  className="text-xs text-[#514347] font-semibold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
