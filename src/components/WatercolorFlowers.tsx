"use client";

import { useEffect, useRef, useState } from "react";

export default function WatercolorFlowers() {
  const [sway, setSway] = useState(0);
  const rafRef = useRef<number>(0);
  const swayRef = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const animate = () => {
      const cur = window.scrollY;
      const vel = (cur - lastScrollY.current) * 0.55;
      lastScrollY.current = cur;
      swayRef.current = (swayRef.current + vel) * 0.84;
      setSway(swayRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const s = Math.max(-20, Math.min(20, sway));

  // 각 요소 스웨이 계수
  const s1 = s * 0.85;   // 튤립1 꽃머리
  const s1m = s * 0.55;  // 튤립1 줄기 중간
  const s2 = s * 0.65;   // 튤립2 꽃머리
  const s2m = s * 0.42;  // 튤립2 줄기 중간
  const sl = s * 0.5;    // 큰 잎

  return (
    <div className="w-full h-full">
      <svg
        viewBox="0 0 600 520"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* 강한 수채화 번짐 */}
          <filter id="wc" x="-35%" y="-35%" width="170%" height="170%">
            <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="5" seed="12" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" result="d" />
            <feGaussianBlur in="d" stdDeviation="0.9" />
          </filter>
          {/* 중간 번짐 */}
          <filter id="wcM" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          {/* 약한 번짐 */}
          <filter id="wcL" x="-15%" y="-15%" width="130%" height="130%">
            <feTurbulence type="fractalNoise" baseFrequency="0.042" numOctaves="3" seed="9" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* ━━━ 파란 워시 (왼쪽 하단 장식) ━━━ */}
        <rect x={`${38+s*0.08}`} y="390" width="72" height="108" rx="4"
          fill="#60A0E0" opacity="0.28" filter="url(#wc)"
          transform={`rotate(${-4+s*0.04}, ${38+s*0.08}, 444)`} />
        <rect x={`${48+s*0.1}`} y="400" width="52" height="92" rx="4"
          fill="#90C8F0" opacity="0.18" filter="url(#wcM)"
          transform={`rotate(${-2+s*0.03}, ${48+s*0.1}, 446)`} />

        {/* ━━━ 큰 잎 (오른쪽 튤립 가까이 이동 +38) ━━━ */}
        <g transform="translate(38, 0) rotate(-10, 295, 510)">
          <path
            d={`M ${295+sl*0.3},510 C ${291+sl*0.35},460 ${287+sl*0.4},390 ${290+sl*0.45},320 C ${292+sl*0.48},270 ${294+sl*0.5},228 ${296+sl},192`}
            stroke="#4a6e28" strokeWidth="2" fill="none" opacity="0.4" filter="url(#wcL)"
          />
          <path
            d={`M ${296+sl},192 C ${268+sl*0.7},238 ${258+sl*0.6},298 ${272+sl*0.65},362 C ${281+sl*0.7},402 ${290+sl*0.75},452 ${295+sl*0.3},510 C ${300+sl*0.35},452 ${306+sl*0.55},402 ${314+sl*0.6},362 C ${326+sl*0.65},298 ${316+sl*0.7},238 ${296+sl},192 Z`}
            fill="#9DC23A" opacity="0.45" filter="url(#wc)"
          />
          <path
            d={`M ${296+sl},192 C ${288+sl*0.85},232 ${285+sl*0.82},290 ${293+sl*0.88},348 C ${298+sl*0.9},386 ${300+sl*0.32},444 ${295+sl*0.3},510 C ${302+sl*0.38},444 ${308+sl*0.58},386 ${315+sl*0.63},348 Z`}
            fill="#6B8C28" opacity="0.3" filter="url(#wcM)"
          />
        </g>

        {/* ━━━ 튤립 1: 닫힌 봉오리, 딥 크림슨/로즈 (왼쪽, 더 기울어짐) ━━━ */}
        {/* 줄기 — 베이스 x=200 → 상단 x=183 으로 왼쪽 기울기 */}
        <path
          d={`M 200,510 C ${195+s1m*0.4},465 ${189+s1m*0.7},410 ${185+s1m*0.85},355 C ${183+s1m*0.92},315 ${182+s1m*0.96},290 ${183+s1},268`}
          stroke="#4a7830" strokeWidth="3" fill="none" opacity="0.7" filter="url(#wcL)"
        />
        {/* 봉오리 + 작은 잎: 전체 -20px 이동 */}
        <g transform="translate(-10, 0) rotate(-5, 203, 270)">
          {/* 작은 잎 (줄기 중간) */}
          <path
            d={`M ${197+s1m*0.88},348 C ${177+s1m*0.7},336 ${168+s1m*0.6},316 ${180+s1m*0.68},305 C ${188+s1m*0.74},298 ${196+s1m*0.86},348`}
            fill="#3A6020" opacity="0.6" filter="url(#wcM)"
          />
          {/* 봉오리 - 뒷면 (마룬) */}
          <path
            d={`M ${203+s1},270 C ${178+s1*0.9},258 ${161+s1*0.82},233 ${166+s1*0.85},207 C ${170+s1*0.87},188 ${182+s1*0.92},177 ${195+s1*0.97},184 C ${198+s1*0.98},173 ${201+s1*0.99},166 ${203+s1},168 C ${206+s1},166 ${209+s1},173 ${212+s1},184 C ${225+s1},177 ${237+s1},188 ${241+s1},207 C ${246+s1},233 ${229+s1},258 ${203+s1},270 Z`}
            fill="#8B2040" opacity="0.55" filter="url(#wc)"
          />
          {/* 봉오리 - 왼쪽 꽃잎 (크림슨) */}
          <path
            d={`M ${203+s1},270 C ${183+s1*0.92},256 ${169+s1*0.84},234 ${173+s1*0.86},210 C ${176+s1*0.88},193 ${185+s1*0.93},183 ${197+s1*0.98},190 C ${200+s1*0.99},179 ${202+s1*0.99},171 ${203+s1},173 Z`}
            fill="#C03060" opacity="0.6" filter="url(#wcM)"
          />
          {/* 봉오리 - 오른쪽 꽃잎 (로즈) */}
          <path
            d={`M ${203+s1},270 C ${223+s1},256 ${237+s1},234 ${233+s1},210 C ${230+s1},193 ${221+s1},183 ${209+s1},190 C ${206+s1},179 ${204+s1},171 ${203+s1},173 Z`}
            fill="#D4708A" opacity="0.45" filter="url(#wcM)"
          />
          {/* 봉오리 - 중앙 밝은 줄 */}
          <path
            d={`M ${203+s1},270 C ${199+s1*0.99},250 ${197+s1*0.99},222 ${200+s1*0.99},198 C ${201+s1*0.99},185 ${202+s1*0.99},176 ${203+s1},173 C ${204+s1},176 ${205+s1},185 ${206+s1},198 C ${209+s1},222 ${207+s1},250 ${203+s1},270 Z`}
            fill="#ffffff" opacity="0.2"
          />
        </g>

        {/* ━━━ 튤립 2: 벌어진 꽃, 핑크+퍼플+피치 (오른쪽) ━━━ */}
        {/* 줄기 */}
        <path
          d={`M 395,510 C ${397+s2m*0.4},465 ${399+s2m*0.65},410 ${397+s2m*0.8},360 C ${395+s2m*0.88},325 ${393+s2m*0.94},300 ${391+s2},272`}
          stroke="#3a6a20" strokeWidth="3" fill="none" opacity="0.65" filter="url(#wcL)"
        />
        {/* 오른쪽 잎 - 밝은 그린 */}
        <path
          d={`M ${397+s2m*0.82},335 C ${420+s2m*0.9},322 ${435+s2m*0.95},305 ${430+s2m*0.93},288 C ${426+s2m*0.91},273 ${414+s2m*0.87},268 ${399+s2m*0.84},278 Z`}
          fill="#58A030" opacity="0.55" filter="url(#wcM)"
        />
        {/* 왼쪽 잎 */}
        <path
          d={`M ${395+s2m*0.8},348 C ${370+s2m*0.68},337 ${356+s2m*0.58},315 ${362+s2m*0.62},296 C ${367+s2m*0.65},280 ${379+s2m*0.72},274 ${394+s2m*0.79},284 Z`}
          fill="#4A9028" opacity="0.5" filter="url(#wcM)"
        />
        {/* 꽃 - 뒤쪽 중앙 꽃잎 (핑크/마젠타) */}
        <path
          d={`M ${391+s2},272 C ${377+s2*0.95},254 ${370+s2*0.92},226 ${374+s2*0.93},202 C ${377+s2*0.94},182 ${385+s2*0.97},170 ${392+s2},170 C ${399+s2},170 ${407+s2},182 ${410+s2},202 C ${414+s2},226 ${407+s2},254 ${391+s2},272 Z`}
          fill="#D850A0" opacity="0.5" filter="url(#wc)"
        />
        {/* 꽃 - 왼쪽 꽃잎 (라이트 핑크/마젠타) */}
        <path
          d={`M ${389+s2*0.98},272 C ${363+s2*0.88},262 ${345+s2*0.82},240 ${348+s2*0.83},214 C ${351+s2*0.84},194 ${362+s2*0.88},182 ${376+s2*0.93},188 C ${379+s2*0.94},172 ${383+s2*0.96},162 ${387+s2*0.97},165 L ${389+s2*0.98},272`}
          fill="#E870B8" opacity="0.45" filter="url(#wc)"
        />
        {/* 꽃 - 오른쪽 꽃잎 (피치/오렌지) */}
        <path
          d={`M ${393+s2},272 C ${419+s2},262 ${437+s2},240 ${434+s2},214 C ${431+s2},194 ${420+s2},182 ${406+s2},188 C ${403+s2},172 ${399+s2},162 ${395+s2},165 L ${393+s2},272`}
          fill="#F0A060" opacity="0.42" filter="url(#wc)"
        />
        {/* 꽃 - 맨 왼쪽 꽃잎 (연핑크) */}
        <path
          d={`M ${386+s2*0.96},268 C ${356+s2*0.84},265 ${338+s2*0.78},244 ${344+s2*0.8},218 C ${348+s2*0.82},198 ${360+s2*0.86},186 ${374+s2*0.92},192 C ${368+s2*0.9},172 ${368+s2*0.9},155 ${376+s2*0.93},156 C ${365+s2*0.88},142 ${352+s2*0.83},146 ${346+s2*0.81},163 C ${338+s2*0.78},182 ${342+s2*0.8},208 ${352+s2*0.83},230 Z`}
          fill="#F090C8" opacity="0.38" filter="url(#wc)"
        />
        {/* 꽃 중심 - 비비드 퍼플 */}
        <path
          d={`M ${391+s2},255 C ${379+s2*0.96},244 ${373+s2*0.93},225 ${377+s2*0.94},210 C ${380+s2*0.95},198 ${386+s2*0.97},192 ${391+s2},192 C ${396+s2},192 ${402+s2},198 ${405+s2},210 C ${409+s2},225 ${403+s2},244 ${391+s2},255 Z`}
          fill="#7040B0" opacity="0.5" filter="url(#wcM)"
        />

        {/* ━━━ 수채화 물방울/흔적 ━━━ */}
        <circle cx={`${162+s*0.18}`} cy="470" r="5" fill="#C03060" opacity="0.12" filter="url(#wcL)" />
        <circle cx={`${448+s*0.6}`} cy="445" r="4" fill="#D850A0" opacity="0.14" filter="url(#wcL)" />
        <circle cx={`${245+s*0.38}`} cy="488" r="3" fill="#9DC23A" opacity="0.12" filter="url(#wcL)" />
        <circle cx={`${500+s*0.72}`} cy="395" r="6" fill="#7040B0" opacity="0.1" filter="url(#wcL)" />
        <ellipse cx={`${130+s*0.12}`} cy="310" rx="8" ry="14" fill="#60A0E0" opacity="0.1"
          transform={`rotate(25, ${130+s*0.12}, 310)`} filter="url(#wcL)" />
        <ellipse cx={`${510+s*0.68}`} cy="260" rx="6" ry="10" fill="#F0A060" opacity="0.09"
          transform={`rotate(-18, ${510+s*0.68}, 260)`} filter="url(#wcL)" />
      </svg>
    </div>
  );
}
