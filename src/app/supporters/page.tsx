import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "디어도어 서포터즈 3회 운영 | 추예은",
  description:
    "구매 데이터 기반 서포터즈 분류로 충성 고객층을 확보하고 해당 월 매출 5배 상승을 달성한 CRM 프로젝트.",
};

export default function SupportersPage() {
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
              ← Selected Works | 주요 프로젝트
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
                  SUPPORTERS
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  2023
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  디어도어
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  CRM 마케팅
                </span>
              </div>

              {/* Title */}
              <h1
                className="hero-animate-d1 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tighter leading-[1.1] text-zinc-900 mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                디어도어
                <br />
                서포터즈 3회 운영
              </h1>

              {/* Subtitle */}
              <p
                className="hero-animate-d2 text-base sm:text-lg text-[#514347] leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                구매 데이터 기반 서포터즈 분류로 충성 고객층을 확보하고
                <br className="hidden sm:block" />
                해당 월 매출 5배 상승을 달성한 CRM 프로젝트
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
                  <p className="text-[#514347]">2023.04 — 2023.10</p>
                </div>
                <div>
                  <p className="text-[#8a4a65] font-bold uppercase tracking-widest text-xs mb-1">
                    Brand
                  </p>
                  <p className="text-[#514347]">디어도어 (비건 바디케어)</p>
                </div>
                <div>
                  <p className="text-[#8a4a65] font-bold uppercase tracking-widest text-xs mb-1">
                    Company
                  </p>
                  <p className="text-[#514347]">아이콘 비엑스</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hero-animate-d2 relative w-full lg:w-[48%] shrink-0">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#ffd9e5]">
                <img
                  src="/page004_img02.jpeg"
                  alt="디어도어 서포터즈 3회 운영"
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
                  🏆 해당 월 매출 5배 상승
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
                { value: "3회", label: "서포터즈 운영 횟수" },
                { value: "5배", label: "셀럽 PPL 연계 월 매출 상승" },
                { value: "키워드", label: "상단 노출 달성" },
                { value: "충성", label: "고객층 확보" },
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
                  "서포터즈 선별을 위한 구매 데이터 분석 및 서포터즈별 침투 플랜 기획",
                  "콘텐츠 기획·제작 및 서포터즈 모객 광고 집행",
                  "서포터즈 주차별 가이드 수립, 오프라인 미팅 진행",
                  "우수 서포터즈 선별 및 연관 인플루언서 광고 진행",
                  "인플루언서 대행사 커뮤니케이션",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#f0a1bf] font-bold mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Channel tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Instagram", "Offline Meeting", "Influencer AD"].map((ch) => (
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
                아이콘 비엑스의 비건 바디케어 브랜드 <strong className="text-zinc-900">디어도어</strong>의
                고객층을 깊게 파고들기 위해 연 3회 브랜드 서포터즈를 기획·운영했습니다. 단순한
                체험단이 아니라 구매 데이터를 기반으로 고객을 분류하고, 집단별 맞춤 전략을 수립해
                충성 고객층을 확보했습니다. 서포터즈 활동과 연계한 셀럽 PPL로 해당 월 매출 5배
                상승이라는 성과를 달성했습니다.
              </p>
              <div
                className="bg-[#ffd9e5]/40 border border-[#ffd9e5] rounded-xl p-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p className="text-xs font-bold text-[#8a4a65] uppercase tracking-wider mb-1">
                  핵심 전략 한 줄 요약
                </p>
                <p className="text-sm text-[#514347] leading-relaxed italic">
                  "가설 수립 → 실험 → 검증을 통해 제품 소구점을 효과적으로 찾고, 브랜드 인지도
                  제고 및 충성 고객 발굴"
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Campaign Images ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-6 md:pb-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#f3f4f5]">
                <img src="/page013_img01.jpeg" alt="디어도어 서포터즈" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#f3f4f5]">
                <img src="/page013_img06.jpeg" alt="디어도어 서포터즈" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#f3f4f5]">
                <img src="/page013_img08.jpeg" alt="디어도어 서포터즈" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimatedSection>
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
                  title: "LMF 테스트 기반 서포터즈 집단 분류",
                  desc: "제품 특성과 구매 데이터를 기반으로 한 LMF 테스트를 통해 서포터즈 집단을 과학적으로 분류했습니다. 감에 의존하지 않고 데이터로 타겟을 명확히 했습니다.",
                },
                {
                  num: "02",
                  title: "커뮤니티 공략 & SNS 콘텐츠 가이드 배포",
                  desc: "특정 집단 내 브랜드 인지도 제고를 위해 커뮤니티를 공략하고 연관 키워드 확보 및 구매 유도를 위한 콘텐츠 발행을 유도했습니다. 오프라인 미팅으로 서포터즈와의 유대감을 강화했습니다.",
                },
                {
                  num: "03",
                  title: "우수 서포터즈 연계 셀럽 PPL",
                  desc: "서포터즈 활동 타겟과 관련된 셀럽 PPL을 진행해 브랜드 인지도와 매출을 동시에 부스팅했습니다. 서포터즈 집단 분석에서 발굴한 인사이트를 광고 전략에 직접 연결했습니다.",
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
                  date: "2023.04",
                  title: "1회차 서포터즈 기획 & 모객",
                  desc: "구매 데이터 분석 기반 서포터즈 선별 기준 수립. 모객 광고 집행 및 서포터즈 선발.",
                },
                {
                  step: "STEP 02",
                  date: "2023.04~06",
                  title: "1~2회차 운영 & 오프라인 미팅",
                  desc: "주차별 활동 가이드 배포, 오프라인 미팅으로 유대감 형성. 커뮤니티 내 콘텐츠 발행 모니터링.",
                },
                {
                  step: "STEP 03",
                  date: "2023.07~09",
                  title: "3회차 & 셀럽 PPL 연계",
                  desc: "우수 서포터즈 선별 및 서포터즈 타겟과 연관된 셀럽 PPL 진행. 키워드 상단 노출 달성.",
                },
                {
                  step: "STEP 04",
                  date: "2023.10",
                  title: "성과 측정 & 마무리",
                  desc: "셀럽 PPL 연계 해당 월 매출 5배 상승 달성. 충성도 있는 고객층 확보 및 브랜드 자산화.",
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
                  label: "REVENUE",
                  value: "매출 5배↑",
                  detail: "셀럽 PPL 연계로 해당 월 매출 5배 상승",
                },
                {
                  label: "KEYWORD",
                  value: "상단 노출",
                  detail: "연관 키워드 검색 상단 노출 달성",
                },
                {
                  label: "CUSTOMER",
                  value: "충성 고객층",
                  detail: "서포터즈 활동 인원 증가로 브랜드 팬덤 확보",
                },
                {
                  label: "DATA",
                  value: "인사이트 확보",
                  detail: "LMF 테스트로 제품 소구점 및 타겟 집단 검증",
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
                "감이 아닌 데이터로 타겟을 분류하고, 오프라인 유대감이 온라인 바이럴로 이어지는
                서포터즈 마케팅이었습니다."
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
                title: "데이터 기반 타겟 분류가 마케팅 효율을 높입니다.",
                desc: "LMF 테스트로 고객 집단을 분류하면 획일적인 접근 대신 집단별 맞춤 전략이 가능해집니다.",
              },
              {
                num: "02",
                title: "오프라인 유대감이 온라인 바이럴을 만듭니다.",
                desc: "오프라인 미팅으로 형성된 서포터즈와의 유대감이 자발적인 SNS 콘텐츠 발행으로 이어졌습니다.",
              },
              {
                num: "03",
                title: "서포터즈 인사이트는 광고 전략의 원천입니다.",
                desc: "서포터즈 활동을 통해 파악한 타겟 인사이트를 셀럽 PPL 전략에 직접 연결해 매출 5배라는 결과를 만들었습니다.",
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
                { tag: "BEAUTY EXPO", name: "일레븐휴즈데이 박람회 기획", href: "/expo", img: "/page005_img03.jpeg" },
                { tag: "GLOBAL", name: "해외 리뷰어 시딩 캠페인", href: "/seeding", img: "/seeding_combined.jpeg" },
                { tag: "LIVE", name: "네이버 쇼핑 라이브 기획", href: "/live", img: "/naver_live_combined.jpeg" },
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
