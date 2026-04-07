"use client";

import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

// SNS 콘텐츠 데이터
// TODO: href를 실제 릴스 링크로 교체, video 경로 주석 해제 시 MP4로 전환
const SNS_ITEMS = [
  {
    id: 1,
    title: "디어도어 인스타그램 릴스",
    brand: "DEAR DOOR",
    image: "/page004_img02.jpeg",
    href: "#", // TODO: 실제 링크로 교체
    // video: "/sns_01.mp4",
  },
  {
    id: 2,
    title: "일레븐휴즈데이 SNS 콘텐츠",
    brand: "11HUES DAY",
    image: "/page005_img03.jpeg",
    href: "#",
    // video: "/sns_02.mp4",
  },
  {
    id: 3,
    title: "해외 인플루언서 시딩 릴스",
    brand: "GLOBAL",
    image: "/seeding_combined.jpeg",
    href: "#",
    // video: "/sns_03.mp4",
  },
  {
    id: 4,
    title: "퍼포먼스 영상 — 입생로랑",
    brand: "YSL",
    image: "/naver_live_combined.jpeg",
    href: "#",
    // video: "/sns_04.mp4",
  },
  {
    id: 5,
    title: "브랜드 영상 — 맥도날드",
    brand: "McDONALD'S",
    image: "/profile.jpg",
    href: "#",
    // video: "/sns_05.mp4",
  },
];

export default function SnsReels() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatedSection>
      <div className="relative">
        {/* 수평 스크롤 컨테이너 */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            .sns-scroll::-webkit-scrollbar { display: none; }
          `}</style>

          {SNS_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[220px] sm:w-[240px] block"
              style={{ textDecoration: "none" }}
            >
              {/* 카드 */}
              <div
                className="relative overflow-hidden rounded-2xl bg-[#e1e3e4]"
                style={{ aspectRatio: "9/16" }}
              >
                {/* 썸네일 이미지 — MP4 추가 시 아래 <video> 태그로 교체 */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/*
                  MP4 전환 시 위 <img>를 삭제하고 아래 <video>를 주석 해제:
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                */}

                {/* 하단 그라데이션 + 텍스트 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* 상단 브랜드 태그 */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-[10px] font-bold tracking-widest"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {item.brand}
                  </span>
                </div>

                {/* 하단 제목 */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    className="text-white text-sm font-bold leading-snug"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.title}
                  </p>
                  {/* 링크 힌트 아이콘 */}
                  <div className="flex items-center gap-1 mt-2 opacity-70">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span className="text-white text-[10px]">보러가기</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 우측 그라데이션 오버레이 — 스크롤 유도 */}
        <div
          className="absolute right-0 top-0 h-[calc(100%-8px)] w-28 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #f8f9fa 0%, #f8f9fa 20%, transparent 100%)",
          }}
        />
      </div>
    </AnimatedSection>
  );
}
