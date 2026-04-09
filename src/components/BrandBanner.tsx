const logos = [
  { src: "/logos/logo_elevenhuesday.png", alt: "일레븐휴즈데이", dark: false },
  { src: "/logos/logo_deardoer.png",      alt: "디어도어",       dark: false },
  { src: "/logos/logo_lessential.jpg",    alt: "L'ESSENTIAL",    dark: false },
  { src: "/logos/logo_nubelle.png",       alt: "누벨르",         dark: false },
  { src: "/logos/logo_giorgioarmani.png", alt: "Giorgio Armani Beauty", dark: false },
  { src: "/logos/logo_ysl.webp",          alt: "YSL Beauté",     dark: true  },
  { src: "/logos/logo_hollys.webp",       alt: "Hollys Coffee",  dark: false },
  { src: "/logos/logo_klang.png",         alt: "Klang",          dark: false },
  { src: "/logos/logo_clio.png",          alt: "CLIO",           dark: true  },
  { src: "/logos/logo_moonglass.png",     alt: "Moon Glass",     dark: false },
];

export default function BrandBanner() {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className="w-full border-y border-[#e7e8e9] py-6 overflow-hidden bg-white">
      <div
        className="flex items-center gap-0 w-max"
        style={{ animation: "brandScroll 35s linear infinite" }}
      >
        {repeated.map((logo, i) => (
          <div key={i} className="flex items-center shrink-0">
            {/* 구분선 */}
            <span className="w-px h-6 bg-[#e1e3e4] mx-8 shrink-0" />
            {/* 로고 */}
            <div
              className={`flex items-center justify-center rounded-lg px-3 py-2 ${logo.dark ? "bg-zinc-900" : ""}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-7 sm:h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ maxWidth: "120px" }}
              />
            </div>
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
