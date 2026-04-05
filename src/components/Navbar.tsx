export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <span
          className="text-xl font-bold tracking-tighter text-zinc-900"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Portfolio
        </span>
        <div
          className="hidden md:flex items-center space-x-10 font-medium text-sm"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          <a
            href="#work"
            className="text-zinc-900 relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#8a4a65] after:rounded-full"
          >
            프로젝트
          </a>
          <a href="#about" className="text-zinc-500 hover:text-zinc-900 transition-colors">
            소개
          </a>
          <a href="#contact" className="text-zinc-500 hover:text-zinc-900 transition-colors">
            연락처
          </a>
        </div>
        <a
          href="#contact"
          className="bg-[#8a4a65] text-white px-5 py-2 rounded-lg text-sm font-medium transition-transform active:scale-95 hover:opacity-90"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          연락하기
        </a>
      </div>
    </nav>
  );
}
