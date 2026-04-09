import AnimatedSection from "./AnimatedSection";

const careers = [
  {
    period: "2024.09 — 2025.11",
    role: "브랜드 마케터",
    company: "티엠씨코리아",
    brand: "일레븐휴즈데이",
    description:
      "브랜드 컨셉 빌딩 및 온·오프라인 통합 마케팅 운영: 브랜드 톤앤무드 확립을 통한 박람회 기획과 신제품 런칭 전략 수립, 인플루언서 시딩 및 숏폼 기반의 퍼포먼스 콘텐츠 제작 총괄.",
    current: true,
  },
  {
    period: "2022.10 — 2023.11",
    role: "브랜드 마케터",
    company: "아이콘비엑스",
    brand: "디어도어",
    description:
      "미디어 커머스 기반 매출 극대화 전략 실행: 뷰티·연예인 유튜버 PPL 및 네이버 쇼핑 라이브 기획을 주도했으며, SNS 채널별 최적화된 광고 콘텐츠 제작으로 브랜드 인지도와 판매 전환 동시 달성.",
    current: false,
  },
  {
    period: "2021.06 — 2022.09",
    role: "콘텐츠 마케터",
    company: "맥브레인즈",
    brand: null,
    description:
      "멀티 브랜드 퍼포먼스 마케팅: 뷰티 및 건기식 등 다각화된 브랜드 포트폴리오의 SNS 광고 콘텐츠를 기획·제작하여 직접적인 매출 견인 및 효율 중심의 영상 마케팅 전개.",
    current: false,
  },
  {
    period: "2019.09 — 2021.06",
    role: "SNS 운영 및 영상 에디터",
    company: "인사이트 컴퍼니",
    brand: null,
    description:
      "뉴미디어 콘텐츠 기획 및 영상 편집: 뉴스·정보성 콘텐츠부터 커머스 최적화 영상까지, SNS 트렌드를 반영한 고감도 영상 제작 및 브랜드 필름 기획.",
    current: false,
  },
];

export default function Career() {
  return (
    <section className="bg-[#f3f4f5] py-14 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-3 gap-8 md:gap-16">
        <AnimatedSection>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight md:sticky md:top-32"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Professional Experience | 경력
          </h2>
        </AnimatedSection>

        <div className="md:col-span-2 space-y-10 md:space-y-16">
          {careers.map((career, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="relative pl-6 sm:pl-8 border-l border-[#d6c1c7]/40">
                <div
                  className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full transition-colors duration-300 ${
                    career.current ? "bg-[#8a4a65]" : "bg-[#d6c1c7]"
                  }`}
                />
                <span
                  className="text-[#514347] text-xs sm:text-sm tracking-widest font-bold block mb-1 md:mb-2 uppercase"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {career.period}
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
