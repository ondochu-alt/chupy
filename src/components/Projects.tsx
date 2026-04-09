import AnimatedSection from "./AnimatedSection";
import SnsReels from "./SnsReels";

const campaigns = [
  {
    href: "/oliveyoung",
    img: "/page004_img02.jpeg",
    alt: "올리브영 바디케어 인플루언서 마케팅",
    tag: "INFLUENCER",
    sub: "2023",
    title: "올리브영 바디케어 인플루언서 마케팅",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
    titleSize: "text-xl sm:text-2xl",
  },
  {
    href: "/expo",
    img: "/page005_img03.jpeg",
    alt: "일레븐휴즈데이 박람회 기획",
    tag: "BEAUTY EXPO",
    sub: "2024",
    title: "일레븐휴즈데이 박람회 기획",
    span: "md:col-span-4",
    aspect: "aspect-[16/9] sm:aspect-square",
    titleSize: "text-lg sm:text-xl",
  },
  {
    href: "/seeding",
    img: "/seeding_combined.jpeg",
    alt: "해외 인플루언서 마케팅",
    tag: "GLOBAL",
    sub: null,
    title: "해외 인플루언서 마케팅",
    span: "md:col-span-6",
    aspect: "aspect-[11/5]",
    titleSize: "text-lg sm:text-xl",
  },
  {
    href: "/live",
    img: "/naver_live_combined.jpeg",
    alt: "네이버 쇼핑 라이브 기획",
    tag: "LIVE",
    sub: null,
    title: "네이버 쇼핑 라이브 기획",
    span: "md:col-span-6",
    aspect: "aspect-[13/6]",
    titleSize: "text-xl sm:text-2xl",
  },
  {
    href: "/supporters",
    img: "/page013_img02.jpeg",
    alt: "디어도어 서포터즈 3회 운영",
    tag: "SUPPORTERS",
    sub: "2023",
    title: "디어도어 서포터즈 3회 운영",
    span: "md:col-span-5",
    aspect: "aspect-[16/9]",
    titleSize: "text-lg sm:text-xl",
  },
  {
    href: "/influencer",
    img: "/influencer_domestic.png",
    alt: "국내 인플루언서 마케팅",
    tag: "INFLUENCER",
    sub: "2023",
    title: "국내 인플루언서 마케팅",
    span: "md:col-span-7",
    aspect: "aspect-[16/9]",
    titleSize: "text-lg sm:text-xl",
  },
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-24" id="work">
      {/* 섹션 헤더 */}
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-16 gap-3">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tighter"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Selected Works | 주요 프로젝트
            </h2>
            <p className="text-[#514347] mt-2 text-sm sm:text-base">
              브랜드 성과를 직접 만들어낸 엄선된 프로젝트들입니다.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ── 섹션 1: SNS 콘텐츠 기획 제작 ── */}
      <AnimatedSection>
        <div className="mb-5 md:mb-8">
          <h3
            className="text-xl sm:text-2xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            SNS 콘텐츠 기획 제작
          </h3>
          <p className="text-[#514347] mt-1 text-sm">
            숏폼 영상 기획부터 제작까지, 직접 만든 릴스 콘텐츠
          </p>
        </div>
      </AnimatedSection>

      <div className="mb-16 md:mb-24">
        <SnsReels />
      </div>

      {/* ── 섹션 2: 마케팅 캠페인 & 이벤트 기획 ── */}
      <AnimatedSection>
        <div className="mb-8 md:mb-12">
          <h3
            className="text-xl sm:text-2xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            마케팅 캠페인 & 이벤트 기획
          </h3>
          <p className="text-[#514347] mt-1 text-sm">
            인플루언서 마케팅, 박람회 기획, 라이브 커머스 등 다양한 캠페인
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {campaigns.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 80} className={c.span}>
            <a
              href={c.href}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`${c.aspect} overflow-hidden bg-[#f3f4f5]`}
              >
                <img
                  src={c.img}
                  alt={c.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="px-4 py-4 md:px-5 md:py-5">
                <div className="flex gap-2 mb-2 md:mb-3">
                  <span
                    className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {c.tag}
                  </span>
                  {c.sub && (
                    <span
                      className="px-3 py-1 bg-[#e1e3e4] text-[#514347] rounded-full text-xs font-bold"
                      style={{ fontFamily: "var(--font-label)" }}
                    >
                      {c.sub}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className={`${c.titleSize} font-bold group-hover:text-[#8a4a65] transition-colors`}
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {c.title}
                  </h3>
                  <span className="shrink-0 text-[#8a4a65] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold">
                    →
                  </span>
                </div>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
