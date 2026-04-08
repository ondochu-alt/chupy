"use client";

import { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const SNS_ITEMS = [
  { id: 1,  video: "/videos/sns_01.mp4", href: "#" },
  { id: 2,  video: "/videos/sns_02.mp4", href: "#" },
  { id: 3,  video: "/videos/sns_03.mp4", href: "#" },
  { id: 4,  video: "/videos/sns_04.mp4", href: "#" },
  { id: 5,  video: "/videos/sns_05.mp4", href: "#" },
  { id: 6,  video: "/videos/sns_06.mp4", href: "#" },
  { id: 7,  video: "/videos/sns_07.mp4", href: "#" },
  { id: 8,  video: "/videos/sns_08.mp4", href: "#" },
  { id: 9,  video: "/videos/sns_09.mp4", href: "#" },
  { id: 10, video: "/videos/sns_10.mp4", href: "#" },
  { id: 11, video: "/videos/sns_11.mp4", href: "#" },
  { id: 12, video: "/videos/sns_12.mp4", href: "#" },
  { id: 13, video: "/videos/sns_13.mp4", href: "#" },
  { id: 14, video: "/videos/sns_14.mp4", href: "#" },
  { id: 15, video: "/videos/sns_15.mp4", href: "#" },
  { id: 16, video: "/videos/sns_16.mp4", href: "#" },
  { id: 17, video: "/videos/sns_17.mp4", href: "#" },
];

export default function SnsReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <AnimatedSection>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SNS_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveVideo(item.video)}
                className="flex-shrink-0 w-[220px] sm:w-[240px] block cursor-pointer"
              >
                <div
                  className="relative overflow-hidden rounded-2xl bg-[#e1e3e4]"
                  style={{ aspectRatio: "9/16" }}
                >
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* 우측 그라데이션 — 스크롤 유도 */}
          <div
            className="absolute right-0 top-0 h-[calc(100%-8px)] w-28 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #f8f9fa 0%, #f8f9fa 20%, transparent 100%)",
            }}
          />
        </div>
      </AnimatedSection>

      {/* 영상 모달 */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setActiveVideo(null)}
        >
          {/* X 버튼 */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-5 left-5 text-white/80 hover:text-white transition-colors"
            aria-label="닫기"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* 영상 — 클릭 이벤트 버블링 차단 */}
          <div
            className="h-[85vh] w-auto"
            style={{ aspectRatio: "9/16" }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
