import Image from "next/image";

// 벌어진 수채화 튤립 (오른쪽 하단 데코)
function FlowerOpen() {
  return (
    <svg viewBox="330 148 110 132" className="w-full h-full" style={{ overflow: "visible" }}>
      <defs>
        <filter id="fo-wc" x="-35%" y="-35%" width="170%" height="170%">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="5" seed="12" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" result="d" />
          <feGaussianBlur in="d" stdDeviation="0.9" />
        </filter>
        <filter id="fo-wcM" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      {/* 오른쪽 잎 */}
      <path d="M 397,335 C 420,322 435,305 430,288 C 426,273 414,268 399,278 Z"
        fill="#58A030" opacity="0.55" filter="url(#fo-wcM)" />
      {/* 왼쪽 잎 */}
      <path d="M 395,348 C 370,337 356,315 362,296 C 367,280 379,274 394,284 Z"
        fill="#4A9028" opacity="0.5" filter="url(#fo-wcM)" />
      {/* 뒷면 중앙 꽃잎 */}
      <path d="M 391,272 C 377,254 370,226 374,202 C 377,182 385,170 392,170 C 399,170 407,182 410,202 C 414,226 407,254 391,272 Z"
        fill="#D850A0" opacity="0.5" filter="url(#fo-wc)" />
      {/* 왼쪽 꽃잎 */}
      <path d="M 389,272 C 363,262 345,240 348,214 C 351,194 362,182 376,188 C 379,172 383,162 387,165 L 389,272"
        fill="#E870B8" opacity="0.45" filter="url(#fo-wc)" />
      {/* 오른쪽 꽃잎 */}
      <path d="M 393,272 C 419,262 437,240 434,214 C 431,194 420,182 406,188 C 403,172 399,162 395,165 L 393,272"
        fill="#F0A060" opacity="0.42" filter="url(#fo-wc)" />
      {/* 맨 왼쪽 꽃잎 */}
      <path d="M 386,268 C 356,265 338,244 344,218 C 348,198 360,186 374,192 C 368,172 368,155 376,156 C 365,142 352,146 346,163 C 338,182 342,208 352,230 Z"
        fill="#F090C8" opacity="0.38" filter="url(#fo-wc)" />
      {/* 꽃 중심 */}
      <path d="M 391,255 C 379,244 373,225 377,210 C 380,198 386,192 391,192 C 396,192 402,198 405,210 C 409,225 403,244 391,255 Z"
        fill="#7040B0" opacity="0.5" filter="url(#fo-wcM)" />
    </svg>
  );
}

// 닫힌 봉오리 (왼쪽 상단 데코)
function FlowerBud() {
  return (
    <svg viewBox="155 160 100 118" className="w-full h-full" style={{ overflow: "visible" }}>
      <defs>
        <filter id="fb-wc" x="-35%" y="-35%" width="170%" height="170%">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="5" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" result="d" />
          <feGaussianBlur in="d" stdDeviation="0.9" />
        </filter>
        <filter id="fb-wcM" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      {/* 작은 잎 */}
      <path d="M 197,348 C 177,336 168,316 180,305 C 188,298 196,348"
        fill="#3A6020" opacity="0.6" filter="url(#fb-wcM)" />
      {/* 봉오리 뒷면 */}
      <path d="M 203,270 C 178,258 161,233 166,207 C 170,188 182,177 195,184 C 198,173 201,166 203,168 C 206,166 209,173 212,184 C 225,177 237,188 241,207 C 246,233 229,258 203,270 Z"
        fill="#8B2040" opacity="0.55" filter="url(#fb-wc)" />
      {/* 왼쪽 꽃잎 */}
      <path d="M 203,270 C 183,256 169,234 173,210 C 176,193 185,183 197,190 C 200,179 202,171 203,173 Z"
        fill="#C03060" opacity="0.6" filter="url(#fb-wcM)" />
      {/* 오른쪽 꽃잎 */}
      <path d="M 203,270 C 223,256 237,234 233,210 C 230,193 221,183 209,190 C 206,179 204,171 203,173 Z"
        fill="#D4708A" opacity="0.45" filter="url(#fb-wcM)" />
    </svg>
  );
}

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
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none hero-title-3d"
            style={{ fontFamily: "var(--font-bubble)" }}
          >
            CHU YEEUN
          </h1>
        </div>

        <p
          className="text-lg sm:text-xl md:text-2xl text-[#514347] max-w-2xl leading-relaxed hero-animate-d1"
          style={{ fontFamily: "var(--font-body)" }}
        >
          데이터로 가설을 세우고,<br />감각적인 영상으로 성과를 증명하는<br /><strong className="text-zinc-900">브랜드 전략 마케터 추예은</strong>입니다.
        </p>

        <div className="flex items-center gap-6 pt-2 hero-animate-d2">
          <a
            href="mailto:ondo.chu@gmail.com"
            className="inline-block bg-[#8a4a65] text-white px-7 py-3 rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all duration-150 shadow-lg shadow-[#8a4a65]/20"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            ☕ 커피챗 하기
          </a>
        </div>
      </div>

      {/* 프로필 이미지 영역 */}
      <div className="flex-1 relative w-full hero-animate-d3 flex justify-center md:justify-end">
        <div className="relative w-56 sm:w-72 md:w-80">

          {/* 말풍선 — 키치 스타일 */}
          <div
            className="absolute -top-20 -right-4 z-10 w-max max-w-[190px]"
            style={{ transform: "rotate(3deg)" }}
          >
            <div
              className="relative px-4 py-3 rounded-2xl shadow-lg"
              style={{
                background: "linear-gradient(135deg, #ffe0ef 0%, #ffd6f0 60%, #e8d5ff 100%)",
                border: "2.5px solid #e879b8",
                boxShadow: "3px 3px 0px #e879b8",
              }}
            >
              {/* 반짝이 데코 */}
              <span className="absolute -top-2 -left-2 text-sm select-none">✨</span>
              <span className="absolute -top-1 -right-3 text-xs select-none">⭐</span>

              <p
                className="text-[11px] font-extrabold leading-snug text-center"
                style={{
                  fontFamily: "var(--font-bubble)",
                  color: "#7d1a5e",
                  letterSpacing: "-0.01em",
                }}
              >
                이 홈페이지 제가 직접<br />
                <span style={{ color: "#c026a0" }}>클로드 코드</span>로
                만들었어요! 🩷
              </p>

              {/* 꼬리 — 왼쪽 하단 방향 */}
              <div
                className="absolute -bottom-[11px] left-6 w-5 h-5"
                style={{
                  background: "linear-gradient(135deg, #ffd6f0, #e8d5ff)",
                  border: "2.5px solid #e879b8",
                  borderTop: "none",
                  borderLeft: "none",
                  transform: "rotate(45deg)",
                  boxShadow: "2px 2px 0px #e879b8",
                }}
              />
            </div>
          </div>

          {/* 원형 프로필 이미지 */}
          <div className="rounded-full overflow-hidden aspect-square w-full ring-4 ring-white shadow-xl">
            <Image
              src="/profile.jpg"
              alt="추예은 프로필 사진"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>

          {/* 수채화 꽃 — 오른쪽 하단 */}
          <div className="absolute -bottom-10 -right-10 w-28 h-32 pointer-events-none">
            <FlowerOpen />
          </div>

          {/* 수채화 봉오리 — 왼쪽 상단 */}
          <div className="absolute -top-8 -left-8 w-20 h-24 pointer-events-none">
            <FlowerBud />
          </div>

          {/* 경력 뱃지 */}
          <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-[#ffd9e5] p-4 sm:p-6 rounded-xl shadow-sm">
            <span
              className="block text-2xl sm:text-3xl font-extrabold text-[#390721]"
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
      </div>
    </section>
  );
}
