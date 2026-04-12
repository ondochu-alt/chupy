"use client";

import { useRef, useState, useEffect, useCallback, RefObject } from "react";
import AnimatedSection from "./AnimatedSection";

const SNS_ITEMS = [
  { id: 1,  video: "/videos/sns_01.mp4" },
  { id: 2,  video: "/videos/sns_02.mp4" },
  { id: 3,  video: "/videos/sns_03.mp4" },
  { id: 4,  video: "/videos/sns_04.mp4" },
  { id: 5,  video: "/videos/sns_05.mp4" },
  { id: 6,  video: "/videos/sns_06.mp4" },
  { id: 7,  video: "/videos/sns_07.mp4" },
  { id: 8,  video: "/videos/sns_08.mp4" },
  { id: 9,  video: "/videos/sns_09.mp4" },
  { id: 10, video: "/videos/sns_10.mp4" },
  { id: 11, video: "/videos/sns_11.mp4" },
  { id: 12, video: "/videos/sns_12.mp4" },
  { id: 13, video: "/videos/sns_13.mp4" },
  { id: 14, video: "/videos/sns_14.mp4" },
  { id: 15, video: "/videos/sns_15.mp4" },
  { id: 16, video: "/videos/sns_16.mp4" },
  { id: 17, video: "/videos/sns_17.mp4" },
  { id: 18, video: "/videos/sns_18.mp4" },
  { id: 19, video: "/videos/sns_19.mp4" },
  { id: 20, video: "/videos/sns_20.mp4" },
  { id: 21, video: "/videos/sns_21.mp4" },
  { id: 22, video: "/videos/sns_22.mp4" },
  { id: 23, video: "/videos/sns_23.mp4" },
  { id: 24, video: "/videos/sns_24.mp4" },
  { id: 25, video: "/videos/sns_25.mp4" },
  { id: 26, video: "/videos/sns_26.mp4" },
  { id: 27, video: "/videos/sns_27.mp4" },
  { id: 28, video: "/videos/sns_28.mp4" },
  { id: 29, video: "/videos/sns_29.mp4" },
  { id: 30, video: "/videos/sns_30.mp4" },
  { id: 31, video: "/videos/sns_31.mp4" },
  { id: 32, video: "/videos/sns_32.mp4" },
  { id: 33, video: "/videos/sns_33.mp4" },
];

// 각 카드가 자체 IntersectionObserver를 가져 화면에 보일 때만 재생
function ReelCard({
  item,
  scrollRoot,
  onOpen,
}: {
  item: { id: number; video: string };
  scrollRoot: RefObject<HTMLDivElement | null>;
  onOpen: (src: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const root = scrollRoot.current;
    if (!video || !root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        root,         // 뷰포트가 아닌 가로 스크롤 컨테이너 기준
        threshold: 0.3,
      }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [scrollRoot]);

  return (
    <button
      onClick={() => onOpen(item.video)}
      className="flex-shrink-0 w-[200px] sm:w-[220px] block cursor-pointer group/card"
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-[#e1e3e4] transition-transform duration-300 group-hover/card:scale-[1.03] group-hover/card:shadow-xl"
        style={{ aspectRatio: "9/16" }}
      >
        <video
          ref={videoRef}
          src={item.video}
          preload="none"
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* 재생 힌트 오버레이 */}
        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/0 group-hover/card:bg-white/30 transition-all duration-300 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover/card:opacity-100">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
              <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function SnsReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const ratio = el.clientWidth / el.scrollWidth;
    const tw = Math.max(track.clientWidth * ratio, 40);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const maxLeft = track.clientWidth - tw;
    const left = maxScroll > 0 ? (el.scrollLeft / maxScroll) * maxLeft : 0;
    setThumbWidth(tw);
    setThumbLeft(left);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateThumb();
    el.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb);
    return () => {
      el.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [updateThumb]);

  const onThumbPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0;
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onThumbPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const dx = e.clientX - dragStartX.current;
    const trackW = track.clientWidth;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const maxLeft = trackW - thumbWidth;
    el.scrollLeft = dragStartScroll.current + (dx / maxLeft) * maxScroll;
  };

  const onThumbPointerUp = () => {
    isDragging.current = false;
  };

  const onTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const el = scrollRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left - thumbWidth / 2;
    const maxLeft = track.clientWidth - thumbWidth;
    const ratio = Math.max(0, Math.min(1, clickX / maxLeft));
    el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth);
  };

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
              <ReelCard
                key={item.id}
                item={item}
                scrollRoot={scrollRef}
                onOpen={setActiveVideo}
              />
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

        {/* 커스텀 스크롤바 */}
        <div
          ref={trackRef}
          onClick={onTrackClick}
          className="relative mt-4 h-[6px] rounded-full bg-[#e1e3e4] cursor-pointer"
        >
          <div
            onPointerDown={onThumbPointerDown}
            onPointerMove={onThumbPointerMove}
            onPointerUp={onThumbPointerUp}
            onPointerCancel={onThumbPointerUp}
            className="absolute top-0 h-full rounded-full bg-[#8a4a65] cursor-grab active:cursor-grabbing transition-colors hover:bg-[#6f334d]"
            style={{ left: thumbLeft, width: thumbWidth }}
          />
        </div>
      </AnimatedSection>

      {/* 영상 모달 */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setActiveVideo(null)}
        >
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
