export default function Footer() {
  return (
    <footer
      className="w-full py-12 mt-20 bg-zinc-50 border-t border-zinc-100"
      id="contact"
    >
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-12">
        <div className="text-center md:text-left space-y-4">
          <h2
            className="text-3xl font-bold text-zinc-900"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            함께 가치를 만들어가요.
          </h2>
          <p className="text-zinc-500">
            브랜드 전략 프로젝트 및 협업을 위한 연락은 언제든 환영합니다.
          </p>
          <a
            href="mailto:hello@chuyeeun.com"
            className="inline-block bg-[#8a4a65] text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity mt-4 shadow-lg shadow-[#8a4a65]/20"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            커피챗 시작하기
          </a>
        </div>

        <div className="flex flex-col md:items-end gap-6">
          <div
            className="font-bold text-zinc-900"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            CHU YEEUN
          </div>
          <div
            className="flex flex-col md:items-end text-sm tracking-wide gap-2"
            style={{ fontFamily: "var(--font-label)" }}
          >
            <a
              href="mailto:hello@chuyeeun.com"
              className="text-zinc-500 hover:text-[#8a4a65] transition-colors hover:underline decoration-[#f0a1bf] underline-offset-4"
            >
              hello@chuyeeun.com
            </a>
            <div className="flex gap-6 mt-4">
              <a
                href="#"
                className="text-zinc-500 hover:text-[#8a4a65] transition-colors hover:underline decoration-[#f0a1bf] underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-[#8a4a65] transition-colors hover:underline decoration-[#f0a1bf] underline-offset-4"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-[#8a4a65] transition-colors hover:underline decoration-[#f0a1bf] underline-offset-4"
              >
                Resume
              </a>
            </div>
          </div>
          <p className="text-xs text-zinc-400 mt-8">© 2025 추예은 포트폴리오.</p>
        </div>
      </div>
    </footer>
  );
}
