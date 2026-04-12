"use client";

import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";
import { useLocale } from "@/context/LocaleContext";

export default function Stats() {
  const { t } = useLocale();

  return (
    <section className="bg-[#f3f4f5] py-10 md:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 text-center">
        {t.stats.map((stat, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8a4a65]"
              style={{ fontFamily: "var(--font-bubble)" }}
            >
              <CountUp
                prefix={stat.prefix}
                end={stat.end}
                suffix={stat.suffix}
                duration={1800}
              />
            </h3>
            <p
              className="text-[#514347] text-xs sm:text-sm tracking-wide mt-2"
              style={{ fontFamily: "var(--font-label)" }}
            >
              {stat.label}
            </p>
            {stat.sub && (
              <p
                className="text-[#8a4a65] text-[10px] sm:text-xs mt-1.5 leading-snug whitespace-pre-line"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {stat.sub}
              </p>
            )}
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
