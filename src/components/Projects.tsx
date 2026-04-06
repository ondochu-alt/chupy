import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-24" id="work">
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
          <a
            href="#"
            className="text-[#8a4a65] font-bold border-b-2 border-[#f0a1bf] pb-1 hover:border-[#8a4a65] transition-colors whitespace-nowrap text-sm"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            전체 보기
          </a>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Large: 올리브영 */}
        <AnimatedSection delay={0} className="md:col-span-8">
          <a href="/oliveyoung" className="group block">
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#f3f4f5] mb-4 md:mb-6 flex items-center justify-center text-[#514347] text-sm transition-transform duration-500 group-hover:scale-[1.01]">
              <img src="/page004_img02.jpeg" alt="올리브영 바디케어 인플루언서 마케팅" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 mb-2 md:mb-3">
              <span
                className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
                style={{ fontFamily: "var(--font-label)" }}
              >
                INFLUENCER
              </span>
              <span
                className="px-3 py-1 bg-[#e1e3e4] text-[#514347] rounded-full text-xs font-bold"
                style={{ fontFamily: "var(--font-label)" }}
              >
                2023
              </span>
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold group-hover:text-[#8a4a65] transition-colors"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              올리브영 바디케어 인플루언서 마케팅
            </h3>
          </a>
        </AnimatedSection>

        {/* Small: 박람회 */}
        <AnimatedSection delay={100} className="md:col-span-4">
          <div className="group">
            <div className="aspect-[16/9] sm:aspect-square rounded-xl overflow-hidden bg-[#f3f4f5] mb-4 md:mb-6 flex items-center justify-center text-[#514347] text-sm transition-transform duration-500 group-hover:scale-[1.01]">
              <img src="/page005_img03.jpeg" alt="일레븐휴즈데이 박람회 기획" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 mb-2 md:mb-3">
              <span
                className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
                style={{ fontFamily: "var(--font-label)" }}
              >
                BEAUTY EXPO
              </span>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              일레븐휴즈데이 박람회 기획
            </h3>
          </div>
        </AnimatedSection>

        {/* Small: 해외 시딩 */}
        <AnimatedSection delay={150} className="md:col-span-6">
          <div className="group">
            <div className="aspect-[11/5] rounded-xl overflow-hidden bg-[#f3f4f5] mb-4 md:mb-6 flex items-center justify-center text-[#514347] text-sm transition-transform duration-500 group-hover:scale-[1.01]">
              <img src="/seeding_combined.jpeg" alt="해외 리뷰어 시딩 캠페인" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 mb-2 md:mb-3">
              <span
                className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
                style={{ fontFamily: "var(--font-label)" }}
              >
                GLOBAL
              </span>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              해외 리뷰어 시딩 캠페인
            </h3>
          </div>
        </AnimatedSection>

        {/* Large: 네이버 라이브 */}
        <AnimatedSection delay={200} className="md:col-span-6">
          <div className="group">
            <div className="aspect-[13/6] rounded-xl overflow-hidden bg-[#f3f4f5] mb-4 md:mb-6 flex items-center justify-center text-[#514347] text-sm transition-transform duration-500 group-hover:scale-[1.01]">
              <img src="/naver_live_combined.jpeg" alt="네이버 쇼핑 라이브" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 mb-2 md:mb-3">
              <span
                className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
                style={{ fontFamily: "var(--font-label)" }}
              >
                LIVE
              </span>
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              네이버 쇼핑 라이브
            </h3>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
