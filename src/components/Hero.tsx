export default function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center gap-16"
      id="about"
    >
      <div className="flex-1 space-y-8">
        <div className="space-y-2">
          <span
            className="text-[#8a4a65] text-sm font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-label)" }}
          >
            MARKETER &amp; STRATEGIST | 마케터 &amp; 전략가
          </span>
          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-zinc-900"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            CHU YEEUN
          </h1>
        </div>
        <p
          className="text-xl md:text-2xl text-[#514347] max-w-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          데이터로 가설을 세우고, 감각적인 영상으로 성과를 증명하는 브랜드 전략 마케터 추예은입니다.
        </p>
        <div className="flex items-center gap-6 pt-4">
          <a
            href="#work"
            className="bg-zinc-900 text-white px-8 py-4 rounded-md font-bold hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="text-zinc-900 font-bold flex items-center gap-2 group"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            대화하기{" "}
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="aspect-[4/5] w-full max-w-md mx-auto rounded-xl overflow-hidden bg-[#e1e3e4]">
          {/* 프로필 사진 자리 */}
          <div className="w-full h-full flex items-center justify-center text-[#514347] text-sm">
            Profile Photo
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-[#ffd9e5] p-8 rounded-xl hidden md:block">
          <span
            className="block text-4xl font-extrabold text-[#390721]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            5.7+
          </span>
          <span
            className="text-[#6f334d] text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Years Experience
          </span>
        </div>
      </div>
    </section>
  );
}
