import { ko } from "./ko";

// 한국어 딕셔너리 구조를 타입으로 사용 — 언어 추가 시 이 타입을 만족해야 함
export type TranslationDict = typeof ko;

// 지원 언어 목록 — 향후 "ja" | "zh" 등 추가 가능
export type Locale = "ko" | "en";
