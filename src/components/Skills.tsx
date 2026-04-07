import AnimatedSection from "./AnimatedSection";

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

const brands = ["디어도어", "일레븐휴즈데이", "L'ESSENTIAL", "아이나코", "누벨르"];

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-24 grid md:grid-cols-2 gap-12 md:gap-20">
      <div>
        <AnimatedSection>
          <h2
            className="text-xl sm:text-2xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Skills | 스킬
          </h2>
        </AnimatedSection>
        <div className="space-y-7 md:space-y-8">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 100}>
              <p
                className="text-[#8a4a65] text-xs font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 sm:px-5 py-2 bg-[#e7e8e9] rounded-lg text-sm font-semibold hover:bg-[#ffd9e5] hover:text-[#390721] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div>
        <AnimatedSection delay={100}>
          <h2
            className="text-xl sm:text-2xl font-bold mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Brand Experience | 브랜드 경험
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {brands.map((brand, i) => (
              <span
                key={brand}
                className="px-4 sm:px-5 py-2 bg-[#e7e8e9] rounded-lg text-sm font-semibold hover:bg-[#ffd9e5] hover:text-[#390721] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-label)",
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
