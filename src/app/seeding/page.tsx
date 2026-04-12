import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "국내 / 해외 리뷰어 시딩 | 추예은",
  description:
    "미국·캐나다·유럽 등 글로벌 리뷰어를 직접 발굴·관리해 브랜드 검색 노출 2000% 상승을 이끈 캠페인.",
};

export default function SeedingPage() {
  return (
    <>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100/60">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-0.5">
            <a
              href="/"
              className="text-xl font-bold tracking-tighter text-zinc-900"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Portfolio
            </a>
            <a
              href="/#work"
              className="text-xs text-[#8a4a65] hover:underline decoration-[#f0a1bf] underline-offset-2"
              style={{ fontFamily: "var(--font-label)" }}
            >
              ← Selected Works
            </a>
          </div>
          <a
            href="/#contact"
            className="bg-[#8a4a65] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            연락하기
          </a>
        </div>
      </nav>

      <main className="pt-24 bg-[#f8f9fa]">
        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
            {/* Left: Text */}
            <div className="flex-1 min-w-0">
              {/* Tags */}
              <div className="hero-animate flex flex-wrap gap-2 mb-6">
                <span
                  className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  GLOBAL
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  2024
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  일레븐휴즈데이
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  해외 마케팅
                </span>
              </div>

              {/* Title */}
              <h1
                className="hero-animate-d1 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tighter leading-[1.1] text-zinc-900 mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                국내 / 해외
                <br />
                리뷰어 시딩
              </h1>

              {/* Subtitle */}
              <p
                className="hero-animate-d2 text-base sm:text-lg text-[#514347] leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                미국·캐나다·유럽 등 글로벌 리뷰어를 직접 발굴·관리해
                <br className="hidden sm:block" />
                브랜드 검색 노출 2000% 상승을 이끈 캠페인
              </p>

              {/* Meta info */}
              <div
                className="hero-animate-d3 flex flex-col sm:flex-row gap-6 text-sm"
                style={{ fontFamily: "var(--font-label)" }}
              >
                <div>
                  <p className="text-[#8a4a65] font-bold uppercase tracking-widest text-xs mb-1">
                    Period
                  </p>
                  <p className="text-[#514347]">2024.09 — 현재</p>
                </div>
                <div>
                  <p className="text-[#8a4a65] font-bold uppercase tracking-widest text-xs mb-1">
                    Brand
                  </p>
                  <p className="text-[#514347]">일레븐휴즈데이 (기능주의 더마뷰티 브랜드)</p>
                </div>
                <div>
                  <p className="text-[#8a4a65] font-bold uppercase tracking-widest text-xs mb-1">
                    Company
                  </p>
                  <p className="text-[#514347]">티엠씨코리아</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hero-animate-d2 relative w-full lg:w-[48%] shrink-0">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#ffd9e5]">
                <img
                  src="/seeding_combined.jpeg"
                  alt="국내 / 해외 리뷰어 시딩"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/10">
                <p
                  className="text-xs text-[#8a4a65] font-bold uppercase tracking-wider mb-0.5"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Achievement
                </p>
                <p
                  className="text-sm font-bold text-zinc-900"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  📈 리뷰 노출 2000% 상승
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="w-full bg-[#f4f4f5] border-y border-[#e7e8e9] py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#e7e8e9]">
              {[
                { value: "2000%↑", label: "브랜드 리뷰 콘텐츠 노출" },
                { value: "140%↑", label: "SNS 인게이지먼트 (매월)" },
                { value: "5개국+", label: "미국·캐나다·유럽·네팔·인도네시아" },
                { value: "2차 활용", label: "박람회·브랜드 SNS 콘텐츠 재활용" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center md:px-6">
                  <p
                    className="text-3xl sm:text-4xl font-extrabold text-[#8a4a65] tracking-tighter mb-1"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs sm:text-sm text-[#514347]"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-20">
          <AnimatedSection>
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#8a4a65] mb-3"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Overview
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-10 md:mb-14"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Overview | 역할 및 배경
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <AnimatedSection delay={0}>
              <p
                className="text-xs font-bold uppercase tracking-widest text-[#8a4a65] mb-4"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Role &amp; Responsibilities
              </p>
              <ul
                className="space-y-3 text-[#514347] text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {[
                  "국내·해외 시딩 및 SNS 리뷰 캠페인 총괄",
                  "시즌별 주력 상품에 맞춰 미국·캐나다·유럽·네팔·인도네시아 등 리뷰어 컨택 및 관리",
                  "브랜드 톤앤무드와 어울리는 리뷰어 발굴",
                  "리뷰 가이드 제작 및 콘텐츠 방향 제시",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#f0a1bf] font-bold mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Channel tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["TikTok", "Instagram", "YouTube", "Global"].map((ch) => (
                  <span
                    key={ch}
                    className="px-3 py-1.5 bg-[#e7e8e9] text-[#514347] rounded text-xs font-semibold"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p
                className="text-xs font-bold uppercase tracking-widest text-[#8a4a65] mb-4"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Background
              </p>
              <p
                className="text-[#514347] text-sm sm:text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <strong className="text-zinc-900">일레븐휴즈데이</strong>의 글로벌 인지도 확장을 위해
                국내·해외 리뷰어 시딩 캠페인을 총괄 기획·운영했습니다. 각 국가의 인플루언서를 직접
                발굴하고 자유도 높은 가이드를 제공해 콘텐츠 다양성을 강화했으며, 수집된 콘텐츠를 브랜드
                SNS와 박람회에 2차 활용하는 전략으로 틱톡·인스타그램·유튜브 전반에서 브랜드 리뷰 노출
                2000% 상승을 달성했습니다.
              </p>
              <div
                className="bg-[#ffd9e5]/40 border border-[#ffd9e5] rounded-xl p-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p className="text-xs font-bold text-[#8a4a65] uppercase tracking-wider mb-1">
                  핵심 전략 한 줄 요약
                </p>
                <p className="text-sm text-[#514347] leading-relaxed italic">
                  "자유도 높은 가이드로 콘텐츠 다양성을 확보하고, 글로벌 리뷰어 콘텐츠를 2차 자산으로
                  활용해 브랜드 검색 노출 2000% 상승 달성"
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Strategy (How) ── */}
        <section className="w-full bg-[#f4f4f5] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <AnimatedSection>
              <p
                className="text-xs font-bold uppercase tracking-widest text-[#8a4a65] mb-3"
                style={{ fontFamily: "var(--font-label)" }}
              >
                How
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-10 md:mb-14"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Strategy | 전략 및 방법
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  num: "01",
                  title: "국가별 리뷰어 직접 발굴 & 섭외",
                  desc: "미국·캐나다·유럽·네팔·인도네시아 등 각 국가의 인플루언서를 직접 서치하고 커뮤니케이션했습니다. 브랜드 톤앤무드에 맞는 리뷰어를 선별해 캠페인의 일관성을 유지했습니다.",
                },
                {
                  num: "02",
                  title: "자유도 높은 리뷰 가이드 제공",
                  desc: "리뷰어 개성을 살릴 수 있도록 자유도가 높은 가이드를 제작했습니다. 획일적인 광고 느낌을 탈피하고 자연스러운 리뷰 콘텐츠 다양성을 강화해 신뢰도 높은 콘텐츠를 확보했습니다.",
                },
                {
                  num: "03",
                  title: "리뷰 콘텐츠 2차 활용",
                  desc: "수집된 글로벌 콘텐츠를 브랜드 SNS 계정과 박람회 자료로 2차 활용했습니다. 마케팅 자산으로서의 콘텐츠 가치를 극대화했습니다.",
                },
              ].map((card, i) => (
                <AnimatedSection key={card.num} delay={i * 80}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 h-full flex flex-col gap-4 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <span
                      className="text-3xl font-extrabold text-[#f0a1bf]"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {card.num}
                    </span>
                    <h3
                      className="text-base sm:text-lg font-bold text-zinc-900 leading-snug"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm text-[#514347] leading-relaxed flex-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-20">
          <AnimatedSection>
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#8a4a65] mb-3"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Process
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-10 md:mb-14"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Process | 진행 과정
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-3 bottom-3 w-px bg-[#d6c1c7]/50 hidden sm:block" />

            <div className="flex flex-col gap-8 sm:gap-10">
              {[
                {
                  step: "STEP 01",
                  date: "2024.09",
                  title: "글로벌 리뷰어 발굴 & 기획",
                  desc: "주력 제품 선정 및 시즌 전략 수립. 미국·캐나다·유럽·네팔·인도네시아 인플루언서 리스트업 및 브랜드 적합성 검토.",
                },
                {
                  step: "STEP 02",
                  date: "2024.09~10",
                  title: "섭외 & 가이드 제공",
                  desc: "국가별 리뷰어 직접 컨택 및 계약. 자유도 높은 리뷰 가이드 제작 및 제품 발송.",
                },
                {
                  step: "STEP 03",
                  date: "2024.10~11",
                  title: "콘텐츠 업로드 & 모니터링",
                  desc: "틱톡·인스타그램·유튜브 업로드 현황 모니터링. 브랜드 검색 노출 변화 추적 및 2차 활용 소재 수집.",
                },
                {
                  step: "STEP 04",
                  date: "2024.11~",
                  title: "성과 측정 & 2차 활용",
                  desc: "브랜드 검색 시 리뷰 노출 2000% 상승 확인. 글로벌 콘텐츠를 브랜드 SNS·박람회 자료로 2차 활용. 매월 인게이지먼트 140% 증가 달성.",
                },
              ].map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 80}>
                  <div className="sm:pl-10 relative flex flex-col sm:flex-row gap-4 sm:gap-8">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#ffd9e5] border-2 border-[#8a4a65] shrink-0 hidden sm:flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#8a4a65]" />
                    </div>

                    {/* Date & step */}
                    <div className="shrink-0 sm:w-40">
                      <span
                        className="inline-block px-2.5 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold mb-1"
                        style={{ fontFamily: "var(--font-label)" }}
                      >
                        {s.date}
                      </span>
                      <p
                        className="text-xs font-bold text-[#8a4a65] uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-label)" }}
                      >
                        {s.step}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="text-base sm:text-lg font-bold text-zinc-900 mb-2"
                        style={{ fontFamily: "var(--font-headline)" }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-sm text-[#514347] leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {i < 3 && (
                    <div className="sm:ml-10 mt-8 sm:mt-10 border-t border-[#d6c1c7]/30" />
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Results ── */}
        <section className="w-full bg-[#fdf0f5] border-y border-[#f0c8d8] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <AnimatedSection>
              <p
                className="text-xs font-bold uppercase tracking-widest text-[#8a4a65] mb-3"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Results
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-10 md:mb-14"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Results | 성과
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 md:mb-14">
              {[
                {
                  label: "EXPOSURE",
                  value: "2000%↑",
                  detail: "틱톡·인스타·유튜브 브랜드 리뷰 노출 상승",
                },
                {
                  label: "ENGAGEMENT",
                  value: "140%↑",
                  detail: "SNS 인게이지먼트 매월 증가",
                },
                {
                  label: "GLOBAL",
                  value: "5개국+",
                  detail: "미국·캐나다·유럽·네팔·인도네시아 리뷰어 운영",
                },
                {
                  label: "CONTENT",
                  value: "2차 자산화",
                  detail: "마케팅 활용 가능한 글로벌 콘텐츠 확보",
                },
              ].map((r, i) => (
                <AnimatedSection key={r.label} delay={i * 80}>
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <p
                      className="text-xs font-bold text-[#8a4a65] uppercase tracking-wider mb-3"
                      style={{ fontFamily: "var(--font-label)" }}
                    >
                      {r.label}
                    </p>
                    <p
                      className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight mb-2"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {r.value}
                    </p>
                    <p
                      className="text-xs sm:text-sm text-[#514347] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {r.detail}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Summary quote */}
            <AnimatedSection>
              <p
                className="text-center text-sm sm:text-base text-[#514347] italic max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                "직접 발굴한 글로벌 리뷰어들의 콘텐츠가 브랜드 검색 생태계를 바꾸고, 다시 마케팅 자산으로 순환되는 전략이었습니다."
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Learnings ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-20">
          <AnimatedSection>
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#8a4a65] mb-3"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Learnings
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-10 md:mb-14"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Learnings | 배운 점
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-8 md:gap-10">
            {[
              {
                num: "01",
                title: "자유도가 콘텐츠의 신뢰도를 만듭니다.",
                desc: "빡빡한 가이드보다 리뷰어 개성을 살린 자유도 높은 가이드가 더 자연스럽고 신뢰도 높은 콘텐츠를 만들었습니다.",
              },
              {
                num: "02",
                title: "콘텐츠는 한 번 쓰고 끝나지 않습니다.",
                desc: "리뷰어 콘텐츠를 브랜드 SNS와 박람회 자료로 2차 활용하면 동일 예산으로 마케팅 자산이 지속적으로 쌓입니다.",
              },
              {
                num: "03",
                title: "국가별 직접 커뮤니케이션이 퀄리티를 높입니다.",
                desc: "대행사 없이 직접 국가별 인플루언서와 소통해 브랜드 메시지 전달의 정확도와 콘텐츠 퀄리티를 높였습니다.",
              },
            ].map((l, i) => (
              <AnimatedSection key={l.num} delay={i * 80}>
                <div className="flex gap-6 md:gap-8">
                  <div className="shrink-0 flex flex-col items-center">
                    <span
                      className="text-2xl font-extrabold text-[#f0a1bf]"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {l.num}
                    </span>
                    <div className="w-px flex-1 mt-3 bg-[#d6c1c7]/50 min-h-[40px]" />
                  </div>
                  <div className="flex-1 pb-2">
                    <h3
                      className="text-base sm:text-lg font-bold text-zinc-900 mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {l.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base text-[#514347] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {l.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ── Other Projects ── */}
        <section className="w-full bg-[#f4f4f5] border-t border-[#e7e8e9] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <AnimatedSection>
              <h2
                className="text-lg sm:text-xl font-bold text-zinc-900 mb-6 md:mb-8"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                다른 프로젝트 보기
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { tag: "INFLUENCER", name: "올리브영 바디케어 인플루언서 마케팅", href: "/oliveyoung", img: "/page004_img02.jpeg" },
                { tag: "BEAUTY EXPO", name: "일레븐휴즈데이 박람회 기획", href: "/expo", img: "/page005_img03.jpeg" },
                { tag: "SUPPORTERS", name: "디어도어 서포터즈 운영", href: "/supporters", img: "/page004_img02.jpeg" },
              ].map((p, i) => (
                <AnimatedSection key={p.name} delay={i * 80}>
                  <a
                    href={p.href}
                    className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-[#f4f4f5]">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span
                        className="inline-block px-2.5 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold mb-2"
                        style={{ fontFamily: "var(--font-label)" }}
                      >
                        {p.tag}
                      </span>
                      <p
                        className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#8a4a65] transition-colors"
                        style={{ fontFamily: "var(--font-headline)" }}
                      >
                        {p.name} →
                      </p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
