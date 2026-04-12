import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "국내 인플루언서 마케팅 | 추예은",
  description:
    "퍼널 단계별 KPI 기반 국내 인플루언서 마케팅으로 올리브영 바디케어 1위, 연 최고 매출을 달성한 캠페인.",
};

export default function InfluencerPage() {
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
                  INFLUENCER
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
                  아이콘비엑스
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  디어도어
                </span>
              </div>

              {/* Title */}
              <h1
                className="hero-animate-d1 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tighter leading-[1.1] text-zinc-900 mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                국내 인플루언서
                <br />
                마케팅
              </h1>

              {/* Subtitle */}
              <p
                className="hero-animate-d2 text-base sm:text-lg text-[#514347] leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                셀럽 PPL부터 마이크로 인플루언서까지 — 퍼널 단계별 KPI를 설정한
                <br className="hidden sm:block" />
                전략적 국내 인플루언서 운영으로 올리브영 1위를 달성한 캠페인
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
                  <p className="text-[#514347]">2022.10 — 2023.11</p>
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
                  <p className="text-[#514347]">아이콘비엑스</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hero-animate-d2 relative w-full lg:w-[48%] shrink-0">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#ffd9e5]">
                <img
                  src="/page004_img02.jpeg"
                  alt="국내 인플루언서 마케팅"
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
                  🏆 올리브영 바디케어 1위
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
                { value: "#1", label: "올리브영 바디케어 랭킹" },
                { value: "7위", label: "올리브영 전체 품목 랭킹" },
                { value: "5위", label: "유튜브 인기 급상승 동영상" },
                { value: "연 최고", label: "2023.07 역대 최고 매출" },
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
                  "국내 인플루언서 전략 수립 및 캠페인 총괄",
                  "채널별(인스타그램 / 틱톡 / 네이버 블로그 / 유튜브) 인플루언서 풀 구성 및 관리",
                  "셀럽 PPL 기획 — 리쥬라이크 협업으로 유튜브 인기 급상승 5위 달성",
                  "타 브랜드 콜라보레이션 기획 (이팅더즈매터 바터 콜라보)",
                  "인플루언서 콘텐츠 2차 퍼포먼스 소재 활용",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#f0a1bf] font-bold mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Instagram", "TikTok", "Naver Blog", "YouTube"].map((ch) => (
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
                <strong className="text-zinc-900">디어도어</strong>의 올리브영 입점 후 랭킹이 정체되는 상황에서,
                감 기반의 인플루언서 선정에서 벗어나 시즌 키워드와 퍼포먼스 데이터로 검증된
                인플루언서 전략을 수립했습니다. 마이크로 인플루언서부터 셀럽 PPL까지
                퍼널 단계별로 KPI를 세분화해 6개월 만에 바디케어 카테고리 1위를 달성했습니다.
              </p>
              <div
                className="bg-[#ffd9e5]/40 border border-[#ffd9e5] rounded-xl p-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p className="text-xs font-bold text-[#8a4a65] uppercase tracking-wider mb-1">
                  핵심 전략 한 줄 요약
                </p>
                <p className="text-sm text-[#514347] leading-relaxed italic">
                  "브랜드 이미지 자산 확보(셀럽 PPL)와 매출 부스팅(퍼포먼스 소재 2차 활용)을
                  동시에 실행해 올리브영 랭킹 1위와 연 최고 매출을 달성"
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Campaign Images ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-6 md:pb-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#f3f4f5]">
                <img src="/page004_img04.jpeg" alt="국내 인플루언서 마케팅" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#f3f4f5]">
                <img src="/page004_img05.jpeg" alt="국내 인플루언서 마케팅" className="w-full h-full object-cover" />
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
                  title: "시즌 키워드 & 스토리 기반 인플루언서 선정",
                  desc: "시즌에 맞는 키워드와 스토리로 구독자의 흥미를 유도했습니다. 소유 '연말 선물 추천템', 여름 바디케어 루틴 등 시즌성을 적극 활용한 콘텐츠를 기획해 자연스러운 구매 전환을 이끌었습니다.",
                },
                {
                  num: "02",
                  title: "셀럽 PPL — 브랜드 자산 확보",
                  desc: "브랜드 서포터즈와 연관된 셀럽 '리쥬라이크' PPL을 기획·집행했습니다. 유튜브 인기 급상승 동영상 5위 달성과 함께 네이버에서 '임산부 유튜버가 사용한~' 등 연관 키워드를 자연스럽게 확보했습니다.",
                },
                {
                  num: "03",
                  title: "인플루언서 콘텐츠 2차 퍼포먼스 활용",
                  desc: "1차 인플루언서 콘텐츠를 퍼포먼스 광고 소재와 커머스 채널에 2차 활용했습니다. 동일 예산으로 노출 범위를 극대화하고 올리브영 1위와 연 최고 매출 전환을 이끌었습니다.",
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
            <div className="absolute left-3 top-3 bottom-3 w-px bg-[#d6c1c7]/50 hidden sm:block" />

            <div className="flex flex-col gap-8 sm:gap-10">
              {[
                {
                  step: "STEP 01",
                  date: "2022.10",
                  title: "채널별 인플루언서 풀 구성 & 전략 수립",
                  desc: "SNS 채널별(인스타그램/틱톡/네이버 블로그/유튜브) 인플루언서 유형 및 효과 분석. 비건 바디케어 디어도어의 포지션에 맞는 인플루언서 풀 구성 및 퍼널 단계별 KPI 설계.",
                },
                {
                  step: "STEP 02",
                  date: "2022.11 – 2023.04",
                  title: "시즌별 마이크로·매크로 인플루언서 캠페인 실행",
                  desc: "시즌 키워드와 스토리를 중심으로 캠페인 기획. 소유 '연말 선물 추천', 여름 바디케어 루틴 등 시즌성 콘텐츠 집행. 이팅더즈매터와 바터 콜라보레이션 기획.",
                },
                {
                  step: "STEP 03",
                  date: "2023.04 – 2023.06",
                  title: "셀럽 PPL — 리쥬라이크 협업",
                  desc: "브랜드 서포터즈 타겟과 연관된 셀럽 '리쥬라이크' PPL 기획·집행. 유튜브 인기 급상승 동영상 5위 달성. 네이버 연관 키워드 자연 확보.",
                },
                {
                  step: "STEP 04",
                  date: "2023.07",
                  title: "올리브영 1위 & 연 최고 매출 달성",
                  desc: "인플루언서 콘텐츠 2차 퍼포먼스 소재 집행으로 전환 극대화. 올리브영 바디케어 카테고리 1위(전체 7위) 달성. 2023.07.03~04 역대 최고 매출 기록.",
                },
              ].map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 80}>
                  <div className="sm:pl-10 relative flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#ffd9e5] border-2 border-[#8a4a65] shrink-0 hidden sm:flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#8a4a65]" />
                    </div>

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
                  label: "RANKING",
                  value: "바디케어 1위",
                  detail: "올리브영 전체 7위 (23.07)",
                },
                {
                  label: "YOUTUBE",
                  value: "급상승 5위",
                  detail: "리쥬라이크 PPL 콘텐츠",
                },
                {
                  label: "REVENUE",
                  value: "연 최고 매출",
                  detail: "2023.07.03~04 역대 최고 기록",
                },
                {
                  label: "CONTENT",
                  value: "2차 활용",
                  detail: "인플루언서 소재 → 퍼포먼스 광고 재활용",
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

            <AnimatedSection>
              <p
                className="text-center text-sm sm:text-base text-[#514347] italic max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                "퍼널 단계별 KPI를 설정하고, 브랜드 이미지 자산을 확보하며 동시에 매출을
                부스팅한 통합 인플루언서 마케팅 전략이었습니다."
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
                title: "시즌성과 스토리텔링이 인플루언서 성과를 좌우합니다.",
                desc: "단순 제품 홍보보다 '연말 선물', '여름 루틴' 등 맥락이 있는 콘텐츠가 구독자의 공감과 구매 전환을 동시에 이끌어냈습니다.",
              },
              {
                num: "02",
                title: "인플루언서 콘텐츠는 끝이 아니라 시작입니다.",
                desc: "1차 인플루언서 콘텐츠를 퍼포먼스 소재와 커머스 채널에 2차 활용하면, 동일한 예산으로 훨씬 넓은 범위의 노출과 전환이 가능합니다.",
              },
              {
                num: "03",
                title: "브랜드 자산 확보와 매출은 동시에 노릴 수 있습니다.",
                desc: "셀럽 PPL로 브랜드 이미지를 구축하고, 퍼포먼스 소재로 즉각적 전환을 이끄는 투트랙 전략이 올리브영 1위와 연 최고 매출이라는 두 성과를 동시에 달성했습니다.",
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
                { tag: "GLOBAL", name: "해외 인플루언서 마케팅", href: "/seeding", img: "/seeding_combined.jpeg" },
                { tag: "SUPPORTERS", name: "디어도어 서포터즈 운영", href: "/supporters", img: "/page013_img02.jpeg" },
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
