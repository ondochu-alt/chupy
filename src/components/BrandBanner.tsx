const logos = [
  { src: "/logos/logo_elevenhuesday.png", alt: "일레븐휴즈데이", invert: false, h: 52,  w: 140, px: "px-5" },
  { src: "/logos/logo_deardoer.png",      alt: "디어도어",       invert: false, h: 52,  w: 140, px: "px-5" },
  { src: "/logos/logo_lessential.jpg",    alt: "L'ESSENTIAL",    invert: false, h: 100, w: 220, px: "px-1" },
  { src: "/logos/logo_nubelle.png",       alt: "누벨르",         invert: false, h: 100, w: 200, px: "px-1" },
  { src: "/logos/logo_giorgioarmani.png", alt: "Giorgio Armani", invert: false, h: 100, w: 220, px: "px-1" },
  { src: "/logos/logo_ysl.webp",          alt: "YSL Beauté",     invert: true,  h: 80,  w: 80,  px: "px-5" },
  { src: "/logos/logo_hollys.webp",       alt: "Hollys",         invert: false, h: 100, w: 180, px: "px-5" },
  { src: "/logos/logo_klang.png",         alt: "Klang",          invert: false, h: 52,  w: 140, px: "px-5" },
  { src: "/logos/logo_clio.png",          alt: "CLIO",           invert: true,  h: 100, w: 180, px: "px-5" },
  { src: "/logos/logo_moonglass.png",     alt: "Moon Glass",     invert: false, h: 100, w: 180, px: "px-5" },
];

const BG = "#f4f5f6";

export default function BrandBanner() {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div
      className="w-full border-y border-[#e7e8e9] py-10 overflow-hidden"
      style={{ background: BG }}
    >
      {/* 헤더 */}
      <p
        className="text-center text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#837378] mb-8"
        style={{ fontFamily: "var(--font-label)" }}
      >
        Brands I've Worked With
      </p>

      {/* 롤링 로고 — 컨테이너에도 같은 배경색을 줘야 mix-blend-mode가 정확히 작동 */}
      <div
        className="flex items-center w-max"
        style={{
          animation: "brandScroll 45s linear infinite",
          background: BG,
        }}
      >
        {repeated.map((logo, i) => (
          <div
            key={i}
            className={`flex items-center justify-center shrink-0 ${logo.px}`}
            style={{ background: BG }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                height: `${logo.h}px`,
                width: `${logo.w}px`,
                objectFit: "contain",
                filter: logo.invert ? "invert(1)" : "none",
                mixBlendMode: "multiply",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes brandScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
