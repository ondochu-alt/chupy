import AnimatedSection from "./AnimatedSection";

export default function Philosophy() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-32 grid md:grid-cols-2 gap-10 md:gap-20 items-start">
      <div>
        <AnimatedSection>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Work Philosophy | 업무 철학
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
                데이터 기반 전략
              </h4>
              <p className="text-[#514347] leading-relaxed">
                감에만 의존하지 않습니다. 데이터를 통해 가설을 세우고, 수치로 결과를 검증합니다.
                리뷰 노출 2000% 상승, 인게이지먼트 140% 증가 같은 성과가 이 철학에서 나왔습니다.
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
                감각적인 크리에이티브
              </h4>
              <p className="text-[#514347] leading-relaxed">
                입생로랑, 맥도날드, 디올 등 글로벌 브랜드 영상 콘텐츠 제작 경험을 바탕으로,
                브랜드의 톤과 감성에 맞는 콘텐츠를 기획·제작합니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={150} className="hidden md:block">
        <div className="rounded-xl overflow-hidden shadow-sm bg-[#edeeef] aspect-video flex items-center justify-center text-[#514347] text-sm">
          Work Image
        </div>
      </AnimatedSection>
    </section>
  );
}
