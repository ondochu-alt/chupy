import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "네이버 쇼핑 라이브 기획 | 추예은",
  description:
    "기획부터 방송 진행까지 전 과정을 담당해 방송 1회 최대 누적 시청 20만을 달성한 라이브 커머스 운영.",
};

export default function LivePage() {
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
                  LIVE
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  2022
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  라이브 커머스
                </span>
                <span
                  className="px-3 py-1 bg-[#e7e8e9] text-[#514347] rounded-full text-xs font-bold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  네이버
                </span>
              </div>

              {/* Title */}
              <h1
                className="hero-animate-d1 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tighter leading-[1.1] text-zinc-900 mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                네이버 쇼핑
                <br />
                라이브 기획
              </h1>

              {/* Subtitle */}
              <p
                className="hero-animate-d2 text-base sm:text-lg text-[#514347] leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                기획부터 방송 진행까지 전 과정을 담당해
                <br className="hidden sm:block" />
                방송 1회 최대 누적 시청 20만을 달성한 라이브 커머스 운영
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
                  <p className="text-[#514347]">2022.01 — 2022.05</p>
                </div>
                <div>
                  <p className="text-[#8a4a65] font-bold uppercase tracking-widest text-xs mb-1">
                    Brand
                  </p>
                  <p className="text-[#514347]">바디케어 브랜드 (비건 바디스크럽)</p>
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
                  src="/naver_live_combined.jpeg"
                  alt="네이버 쇼핑 라이브 기획"
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
                  📺 누적 시청 20만 달성
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
                { value: "20만", label: "방송 1회 최대 누적 시청" },
                { value: "1위", label: "바디스크럽 검색 인기순" },
                { value: "월 1회", label: "정기 라이브 운영" },
                { value: "채널", label: "네이버 찜·카톡 플친 확보" },
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
                  "라이브 커머스 방송 기획·대본 구성·페이지 제작",
                  "네이버 쇼핑 라이브 쇼호스트 섭외 및 진행 관리",
                  "방송 전 자사 SNS 채널·네이버 푸시·카톡 플친 메시지를 활용한 사전 바이럴 콘텐츠 홍보 및 프로모션 기획",
                  "온에어 데이터 분석, 시청자 흥미 포인트 발굴",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#f0a1bf] font-bold mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Channel tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Naver Shopping Live", "KakaoTalk", "Instagram", "SNS"].map((ch) => (
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
                아이콘 비엑스의 바디케어 브랜드 라이브 커머스 채널을 처음부터 기획하고
                운영했습니다. 방송 기획·대본·쇼호스트 섭외·사전 홍보까지 전 과정을 주도했으며,
                브랜드 정체성을 담은 VMD와 시청자 참여 이벤트로 방송 1회 최대 누적 시청 20만이라는
                성과를 달성했습니다.
              </p>
              <div
                className="bg-[#ffd9e5]/40 border border-[#ffd9e5] rounded-xl p-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p className="text-xs font-bold text-[#8a4a65] uppercase tracking-wider mb-1">
                  핵심 전략 한 줄 요약
                </p>
                <p className="text-sm text-[#514347] leading-relaxed italic">
                  "브랜드 정체성 있는 VMD와 할인·참여 이벤트로 시청자 체류시간과 구매 전환을
                  동시에 잡은 라이브 커머스"
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
                  title: "브랜드 정체성 있는 VMD 기획",
                  desc: "브랜드 정체성을 나타내는 컬러와 소품으로 VMD를 기획했습니다. 라이브 화면에서 브랜드 이미지가 자연스럽게 전달되도록 공간 연출에 집중했습니다.",
                },
                {
                  num: "02",
                  title: "할인 프로모션 & 참여 이벤트로 시청자 락인",
                  desc: "할인 프로모션, 구매인증 이벤트, 댓글 이벤트, 랜덤 게임 등을 방송 중간중간 배치해 시청자들의 방송 참여와 흥미를 지속적으로 유도했습니다.",
                },
                {
                  num: "03",
                  title: "사전 바이럴로 시청자 사전 확보",
                  desc: "SNS 채널·네이버 푸시·카톡 플친 메시지를 활용한 사전 바이럴 콘텐츠로 방송 전부터 시청 예약을 유도했습니다. 마케팅 채널을 복합적으로 활용한 멀티채널 전략을 실행했습니다.",
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
                  date: "2022.01",
                  title: "첫 방송 기획 & 론칭",
                  desc: "방송 컨셉·대본 구성·VMD 기획·쇼호스트 섭외. 사전 SNS 바이럴 콘텐츠 제작 및 홍보. 첫 방송 진행 및 바디스크럽 검색 인기순 1위 달성.",
                },
                {
                  step: "STEP 02",
                  date: "2022.02~03",
                  title: "정기 운영 & 최적화",
                  desc: "온에어 데이터 분석으로 시청자 흥미 포인트 파악. 이벤트 구성 최적화 및 쇼호스트 피드백 반영. 네이버 찜·카톡 플친 추가 유도.",
                },
                {
                  step: "STEP 03",
                  date: "2022.04",
                  title: "최고 성과 달성",
                  desc: "방송 1회 최대 누적 시청 20만 달성. 프로모션 구성과 사전 홍보 전략의 시너지로 역대 최고 시청 기록.",
                },
                {
                  step: "STEP 04",
                  date: "2022.05",
                  title: "마무리 & 마케팅 채널 자산화",
                  desc: "마케팅 채널(네이버 찜·카톡 플친) 누적 확보. 운영 노하우 정리 및 향후 라이브 커머스 운영 전략 수립.",
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
                  label: "VIEWERS",
                  value: "누적 20만",
                  detail: "방송 1회 최대 누적 시청자 달성",
                },
                {
                  label: "RANKING",
                  value: "인기순 1위",
                  detail: "첫 방송 바디스크럽 검색 인기순 1위 노출",
                },
                {
                  label: "CHANNEL",
                  value: "채널 확보",
                  detail: "네이버 찜·카톡 플친 마케팅 채널 자산화",
                },
                {
                  label: "OPERATION",
                  value: "월 1회 정기",
                  detail: "안정적인 월 1회 정기 라이브 운영 체계 구축",
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
                "처음부터 끝까지 혼자 기획하고 운영한 라이브 커머스가 방송 1회 누적 시청 20만이라는
                성과로 돌아왔습니다."
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
                title: "라이브는 사전 준비가 성패를 가릅니다.",
                desc: "방송 중 즉흥으로 할 수 있는 것은 한계가 있습니다. 대본·VMD·이벤트 구성을 철저히 준비할수록 방송 퀄리티와 시청자 경험이 높아집니다.",
              },
              {
                num: "02",
                title: "시청자 참여 이벤트가 체류시간을 늘립니다.",
                desc: "댓글 이벤트·랜덤 게임 등 시청자가 직접 참여하는 요소가 방송 이탈을 줄이고 구매 전환으로 이어졌습니다.",
              },
              {
                num: "03",
                title: "라이브는 마케팅 채널을 쌓는 기회입니다.",
                desc: "매 방송마다 네이버 찜과 카톡 플친 추가를 유도해 단순 일회성 방송이 아닌 지속적인 마케팅 자산을 쌓는 채널로 만들었습니다.",
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
