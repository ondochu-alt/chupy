const projects = [
  {
    id: 1,
    title: "올리브영 바디케어 인플루언서 마케팅",
    tag: "INFLUENCER",
    year: "2023",
    size: "large",
    description: "올리브영 바디케어 카테고리 랭킹 1위 달성",
  },
  {
    id: 2,
    title: "일레븐휴즈데이 박람회 기획",
    tag: "EVENT",
    size: "small",
    description: "인스타 바이럴 100건+, 팔로워 400명 증가",
  },
  {
    id: 3,
    title: "해외 리뷰어 시딩 캠페인",
    tag: "GLOBAL",
    size: "small",
    description: "리뷰 노출 2000% 상승, 인게이지먼트 140% 증가",
  },
  {
    id: 4,
    title: "네이버 쇼핑 라이브",
    tag: "LIVE",
    size: "large",
    description: "방송 1회 최대 누적 시청 20만 달성",
  },
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24" id="work">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2
            className="text-4xl font-extrabold tracking-tighter"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Selected Works | 주요 프로젝트
          </h2>
          <p className="text-[#514347] mt-2">
            브랜드 성과를 직접 만들어낸 엄선된 프로젝트들입니다.
          </p>
        </div>
        <a
          href="#"
          className="text-[#8a4a65] font-bold border-b-2 border-[#f0a1bf] pb-1 hover:border-[#8a4a65] transition-colors"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          전체 보기
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large: 올리브영 */}
        <div className="md:col-span-8 group">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#f3f4f5] mb-6 flex items-center justify-center text-[#514347] text-sm">
            Project Image
          </div>
          <div>
            <div className="flex gap-2 mb-3">
              <span
                className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
                style={{ fontFamily: "var(--font-label)" }}
              >
                INFLUENCER
              </span>
              <span
                className="px-3 py-1 bg-[#e1e3e4] text-[#514347] rounded-full text-xs font-bold"
                style={{ fontFamily: "var(--font-label)" }}
              >
                2023
              </span>
            </div>
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              올리브영 바디케어 인플루언서 마케팅
            </h3>
          </div>
        </div>

        {/* Small: 박람회 */}
        <div className="md:col-span-4 group">
          <div className="aspect-square rounded-xl overflow-hidden bg-[#f3f4f5] mb-6 flex items-center justify-center text-[#514347] text-sm">
            Project Image
          </div>
          <div className="flex gap-2 mb-3">
            <span
              className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
              style={{ fontFamily: "var(--font-label)" }}
            >
              EVENT
            </span>
          </div>
          <h3
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            일레븐휴즈데이 박람회 기획
          </h3>
        </div>

        {/* Small: 해외 시딩 */}
        <div className="md:col-span-4 group">
          <div className="aspect-square rounded-xl overflow-hidden bg-[#f3f4f5] mb-6 flex items-center justify-center text-[#514347] text-sm">
            Project Image
          </div>
          <div className="flex gap-2 mb-3">
            <span
              className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
              style={{ fontFamily: "var(--font-label)" }}
            >
              GLOBAL
            </span>
          </div>
          <h3
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            해외 리뷰어 시딩 캠페인
          </h3>
        </div>

        {/* Large: 네이버 라이브 */}
        <div className="md:col-span-8 group">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#f3f4f5] mb-6 flex items-center justify-center text-[#514347] text-sm">
            Project Image
          </div>
          <div className="flex gap-2 mb-3">
            <span
              className="px-3 py-1 bg-[#ffd9e5] text-[#390721] rounded-full text-xs font-bold"
              style={{ fontFamily: "var(--font-label)" }}
            >
              LIVE
            </span>
          </div>
          <h3
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            네이버 쇼핑 라이브
          </h3>
        </div>
      </div>
    </section>
  );
}
