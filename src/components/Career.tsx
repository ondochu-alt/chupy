import AnimatedSection from "./AnimatedSection";

const careers = [
  {
    period: "2024.09 — 2025.11",
    role: "브랜드 마케터",
    company: "티엠씨코리아",
    description:
      "일본 박람회 2억대 신규 계약 체결 기여, AI 이미지 제작(Luvum 브랜드), 브랜드 SNS 운영 및 콘텐츠 전략 총괄.",
    current: true,
  },
  {
    period: "2022.10 — 2023.11",
    role: "브랜드 마케터",
    company: "아이콘 비엑스",
    description:
      "인플루언서 마케팅으로 올리브영 바디케어 랭킹 1위 달성(23.07). 박람회 기획 및 SNS 바이럴 캠페인 운영. 해외 리뷰어 시딩으로 노출 2000% 상승.",
    current: false,
  },
  {
    period: "2021.06 — 2022.09",
    role: "콘텐츠 마케터",
    company: "맥브레인즈",
    description:
      "퍼포먼스 영상 콘텐츠 제작(입생로랑, 맥도날드, 디올 등). 네이버 쇼핑 라이브 방송 1회 최대 누적 시청 20만 달성. 상세페이지 기획으로 러시아 바이어 해외 거래 성사.",
    current: false,
  },
  {
    period: "2019.09 — 2021.06",
    role: "SNS 운영 및 영상 에디터",
    company: "인사이트 컴퍼니",
    description:
      "장편 인터뷰 영상 제작 — 정혁(14만뷰), 배인혁(11만뷰). 브랜드 SNS 채널 운영 및 콘텐츠 기획.",
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
            Experience | 경력
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
                <h4
                  className="text-lg sm:text-xl font-bold"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {career.role} @ {career.company}
                </h4>
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
