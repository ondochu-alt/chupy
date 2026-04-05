const skillGroups = [
  {
    category: "Creative Production",
    skills: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator"],
  },
  {
    category: "Product Strategy",
    skills: ["Figma", "Notion", "브랜드 아이덴티티 시각화"],
  },
  {
    category: "Business Efficiency",
    skills: ["MS Office", "데이터 분석", "제안서 작성"],
  },
];

const brands = ["디어도어", "일레븐휴즈데이", "L'ESSENTIAL", "아이나코", "뉴벨", "Luvum"];

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20">
      <div>
        <h2
          className="text-2xl font-bold mb-10"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Skills | 스킬
        </h2>
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p
                className="text-[#8a4a65] text-xs font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 bg-[#e7e8e9] rounded-lg text-sm font-semibold"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2
          className="text-2xl font-bold mb-10"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Brand Experience | 브랜드 경험
        </h2>
        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="px-5 py-2 bg-[#e7e8e9] rounded-lg text-sm font-semibold"
              style={{ fontFamily: "var(--font-label)" }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
