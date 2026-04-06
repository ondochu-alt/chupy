"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <span
          className="text-xl font-bold tracking-tighter text-zinc-900"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Portfolio
        </span>

        {/* Desktop links */}
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

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-[#8a4a65] text-white px-5 py-2 rounded-lg text-sm font-medium transition-transform active:scale-95 hover:opacity-90"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            연락하기
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            <span
              className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-48 border-t border-zinc-100" : "max-h-0"}`}
      >
        <div
          className="flex flex-col px-6 py-4 gap-4 bg-white/95 backdrop-blur-md text-sm font-medium"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          <a
            href="#work"
            className="text-zinc-900 hover:text-[#8a4a65] transition-colors"
            onClick={() => setOpen(false)}
          >
            프로젝트
          </a>
          <a
            href="#about"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setOpen(false)}
          >
            소개
          </a>
          <a
            href="#contact"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setOpen(false)}
          >
            연락처
          </a>
        </div>
      </div>
    </nav>
  );
}
