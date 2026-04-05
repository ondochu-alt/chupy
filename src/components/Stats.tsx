const stats = [
  { value: "#1", label: "올리브영 바디케어 랭킹" },
  { value: "2000%↑", label: "해외 리뷰 노출 상승" },
  { value: "20만", label: "네이버 라이브 최대 시청" },
  { value: "2억+", label: "신규 계약 기여 (일본 박람회)" },
];

export default function Stats() {
  return (
    <section className="bg-[#f3f4f5] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <h3
              className="text-4xl md:text-5xl font-extrabold text-[#8a4a65]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {stat.value}
            </h3>
            <p
              className="text-[#514347] text-sm tracking-wide"
              style={{ fontFamily: "var(--font-label)" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
