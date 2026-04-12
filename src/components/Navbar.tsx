"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/lib/i18n/types";

const LOCALES: { value: Locale; label: string }[] = [
  { value: "ko", label: "KR" },
  { value: "en", label: "ENG" },
];

function LangDropdown({ onClose }: { onClose: () => void }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className="absolute right-0 top-full mt-2 w-28 bg-white rounded-xl shadow-lg border border-zinc-100 overflow-hidden z-50">
      {LOCALES.map((l) => (
        <button
          key={l.value}
          onClick={() => { setLocale(l.value); onClose(); }}
          className={`w-full text-left px-4 py-2.5 text-sm font-bold flex items-center justify-between transition-colors ${
            locale === l.value
              ? "text-[#8a4a65] bg-[#ffd9e5]/40"
              : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
          }`}
          style={{ fontFamily: "var(--font-label)" }}
        >
          {l.label}
          {locale === l.value && (
            <span className="text-[#8a4a65] text-xs">✓</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale, t } = useLocale();

  const currentLabel = LOCALES.find((l) => l.value === locale)?.label ?? "KR";

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
            {t.nav.projects}
          </a>
          <a href="#about" className="text-zinc-500 hover:text-zinc-900 transition-colors">
            {t.nav.about}
          </a>
          <a href="#contact" className="text-zinc-500 hover:text-zinc-900 transition-colors">
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* 언어 드롭다운 — 데스크탑 */}
          <div ref={langRef} className="hidden md:block relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f3f4f5] hover:bg-[#e7e8e9] text-xs font-bold text-zinc-600 hover:text-zinc-900 transition-colors"
              style={{ fontFamily: "var(--font-label)" }}
            >
              {/* Globe SVG 아이콘 */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {currentLabel}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}>
                <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {langOpen && <LangDropdown onClose={() => setLangOpen(false)} />}
          </div>

          <a
            href="#contact"
            className="bg-[#8a4a65] text-white px-5 py-2 rounded-lg text-sm font-medium transition-transform active:scale-95 hover:opacity-90"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {t.nav.cta}
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 border-t border-zinc-100" : "max-h-0"}`}
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
            {t.nav.projects}
          </a>
          <a
            href="#about"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t.nav.about}
          </a>
          <a
            href="#contact"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t.nav.contact}
          </a>

          {/* 모바일 언어 선택 */}
          <div className="pt-1 border-t border-zinc-100">
            <p className="text-[10px] text-zinc-400 mb-2 font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-label)" }}>Language</p>
            <div className="flex items-center gap-2">
              {LOCALES.map((l) => (
                <button
                  key={l.value}
                  onClick={() => { setLocale(l.value); setOpen(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    locale === l.value
                      ? "bg-[#8a4a65] text-white"
                      : "text-zinc-500 hover:text-zinc-900 border border-zinc-200"
                  }`}
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
