import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-28 flex flex-col md:flex-row items-center gap-10 md:gap-16"
      id="about"
    >
      <div className="flex-1 space-y-6 md:space-y-8 w-full">
        <div className="space-y-2 hero-animate">
          <span
            className="text-[#8a4a65] text-xs sm:text-sm font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-label)" }}
          >
            MARKETER &amp; STRATEGIST | 마케터 &amp; 전략가
          </span>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-none text-zinc-900"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            CHU YEEUN
          </h1>
        </div>

        <p
          className="text-lg sm:text-xl md:text-2xl text-[#514347] max-w-2xl leading-relaxed hero-animate-d1"
          style={{ fontFamily: "var(--font-body)" }}
        >
          데이터로 가설을 세우고, 감각적인 영상으로 성과를 증명하는 브랜드 전략 마케터 추예은입니다.
        </p>

        <div className="flex items-center gap-6 pt-2 hero-animate-d2">
          <a
            href="#contact"
            className="text-zinc-900 font-bold flex items-center gap-2 group"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            대화하기{" "}
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
          </a>
        </div>
      </div>

      <div className="flex-1 relative w-full hero-animate-d3">
        <div className="aspect-[3/4] w-56 sm:w-full sm:aspect-[4/5] sm:max-w-sm md:max-w-md mx-auto rounded-xl overflow-hidden bg-[#e1e3e4]">
          <Image
            src="/profile.jpg"
            alt="추예은 프로필 사진"
            width={600}
            height={750}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>
        <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-[#ffd9e5] p-4 sm:p-8 rounded-xl">
          <span
            className="block text-2xl sm:text-4xl font-extrabold text-[#390721]"
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
