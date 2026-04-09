import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";

const stats = [
  {
    prefix: "#", end: 1, suffix: "",
    label: "올리브영 바디케어 랭킹",
    sub: "올리브영 바디케어 랭킹 1위 달성\n(2023. 디어도어)",
  },
  {
    prefix: "", end: 2000, suffix: "%↑",
    label: "해외 리뷰 노출 상승",
    sub: "누적 조회수 기준",
  },
  {
    prefix: "", end: 20, suffix: "만",
    label: "네이버 라이브 최대 시청",
    sub: "방송 누적 조회수",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#f3f4f5] py-10 md:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 text-center">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 100}>
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
