import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "일레븐휴즈데이 박람회 기획 | 추예은",
  description:
    "브랜드 아이덴티티를 공간으로 구현한 K-뷰티 박람회 기획 및 운영. 인스타그램 바이럴 100건 이상 달성.",
};

export default function ExpoPage() {
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
                  BEAUTY EXPO
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
                  더마뷰티
                </span>
              </div>

              {/* Title */}
              <h1
                className="hero-animate-d1 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tighter leading-[1.1] text-zinc-900 mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                일레븐휴즈데이
                <br />
                박람회 기획
              </h1>

              {/* Subtitle */}
              <p
                className="hero-animate-d2 text-base sm:text-lg text-[#514347] leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                브랜드 아이덴티티를 공간으로 구현한
                <br className="hidden sm:block" />
                K-뷰티 박람회 기획 및 운영
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
                  <p className="text-[#514347]">2024.10.17 — 2024.10.19</p>
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
                  src="/page005_img03.jpeg"
                  alt="일레븐휴즈데이 박람회 기획"
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
                  🏆 인스타 바이럴 100건+
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
                { value: "100건+", label: "인스타그램 바이럴" },
                { value: "400명", label: "팔로워 증가" },
                { value: "300명", label: "카카오 채널 증가" },
                { value: "상단", label: "#k뷰티박람회 검색 상단 노출" },
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
                  "브랜드 아이덴티티를 보여줄 수 있는 컨셉 구상",
                  "박람회 부스 컨셉 및 디자인 기획",
                  "제작 업체 컨트롤 및 영상 자료 기획",
                  "신규 고객 증대를 위한 이벤트 기획",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#f0a1bf] font-bold mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Channel tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Instagram", "KakaoTalk Channel", "Offline Event"].map((ch) => (
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
                기능주의 더마뷰티 브랜드 <strong className="text-zinc-900">일레븐휴즈데이</strong>의
                2024년 K-뷰티 박람회 참가를 위해 부스 기획부터 현장 이벤트까지 전 과정을 담당했습니다.
                메인 제품의 핵심 USP에 맞는 공간 컨셉 '피부 회복 연구소'를 기획하고, 브랜드 이미지를
                각인시키는 시각 자료와 현장 이벤트로 100건 이상의 인스타그램 바이럴을 이끌어냈습니다.
              </p>
              <div
                className="bg-[#ffd9e5]/40 border border-[#ffd9e5] rounded-xl p-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p className="text-xs font-bold text-[#8a4a65] uppercase tracking-wider mb-1">
                  핵심 전략 한 줄 요약
                </p>
                <p className="text-sm text-[#514347] leading-relaxed italic">
                  "메인 제품 키 USP에 맞는 공간 컨셉 '피부 회복 연구소'로 브랜드 이미지를 각인시키고,
                  SNS 바이럴과 채널 확장을 동시에 달성"
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
                  title: "공간 컨셉 '피부 회복 연구소' 기획",
                  desc: "메인 제품 키 USP에 맞는 '피부 회복 연구소' 컨셉을 기획했습니다. 연구소에 어울리는 소품과 제품 기능을 극대화할 수 있는 시각 정보 자료를 함께 구성해 브랜드 이미지를 공간에 녹였습니다.",
                },
                {
                  num: "02",
                  title: "컬러 중심의 브랜드 이미지 각인",
                  desc: "컬러와 메인 제품이 중심이 되는 부스 디자인으로 방문객에게 브랜드를 강렬하게 각인시켰습니다. 통일된 비주얼 언어로 박람회 내 차별화된 존재감을 만들었습니다.",
                },
                {
                  num: "03",
                  title: "SNS & 카카오 채널 현장 이벤트",
                  desc: "마케팅 채널 확장을 위해 인스타그램 팔로우, 카카오 채널 추가 이벤트를 현장에서 동시 진행했습니다. 오프라인 트래픽을 온라인 채널로 연결하는 전략을 실행했습니다.",
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
                  date: "2024.08",
                  title: "박람회 컨셉 기획",
                  desc: "메인 제품 USP 분석을 기반으로 '피부 회복 연구소' 부스 컨셉 수립. 연구소 분위기에 맞는 소품과 컬러 팔레트 선정 및 제작 업체 컨트롤 시작.",
                },
                {
                  step: "STEP 02",
                  date: "2024.09",
                  title: "시각 자료 & 영상 기획",
                  desc: "제품 기능을 극대화할 수 있는 시각 정보 자료 기획 및 영상 소재 제작. 부스 내 디스플레이 레이아웃 최종 확정.",
                },
                {
                  step: "STEP 03",
                  date: "2024.10.17~19",
                  title: "박람회 현장 운영",
                  desc: "현장 이벤트(인스타그램 팔로우, 카카오 채널 추가) 진행. 방문객 응대 및 브랜드 경험 제공.",
                },
                {
                  step: "STEP 04",
                  date: "2024.10 이후",
                  title: "바이럴 성과 확인",
                  desc: "인스타그램 바이럴 100건 이상, 팔로워 400명·카카오 채널 300명 증가 확인. #k뷰티박람회 검색 시 브랜드 부스 이미지 상단 노출.",
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
                  label: "SNS VIRAL",
                  value: "인스타 100건+",
                  detail: "박람회 기간 중 자발적 SNS 바이럴 달성",
                },
                {
                  label: "FOLLOWER",
                  value: "팔로워 400명↑",
                  detail: "현장 이벤트를 통한 인스타그램 팔로워 순증",
                },
                {
                  label: "KAKAO",
                  value: "채널 300명↑",
                  detail: "카카오 채널 신규 추가 달성",
                },
                {
                  label: "EXPOSURE",
                  value: "검색 상단 노출",
                  detail: "#k뷰티박람회 검색 시 브랜드 이미지 최상단",
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
                "오프라인 공간에서의 브랜드 경험이 온라인 바이럴로 이어지는 선순환을 만든 박람회 기획이었습니다."
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
                title: "공간 자체가 강력한 마케팅 매체입니다.",
                desc: "잘 설계된 부스 공간은 방문객이 자발적으로 콘텐츠를 만들고 공유하게 만듭니다. '피부 회복 연구소'라는 명확한 컨셉이 100건 이상의 자발적 바이럴을 이끌었습니다.",
              },
              {
                num: "02",
                title: "오프라인 접점은 온라인 채널 확장의 기회입니다.",
                desc: "현장에서 SNS 팔로우와 카카오 채널 추가 이벤트를 병행해 오프라인 트래픽을 온라인 마케팅 자산으로 전환했습니다.",
              },
              {
                num: "03",
                title: "브랜드 USP를 공간 언어로 번역하는 것이 핵심입니다.",
                desc: "제품의 핵심 기능을 공간 컨셉으로 구현하면 설명 없이도 브랜드 메시지가 전달됩니다.",
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
                { tag: "GLOBAL", name: "해외 리뷰어 시딩 캠페인", href: "/seeding", img: "/seeding_combined.jpeg" },
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
