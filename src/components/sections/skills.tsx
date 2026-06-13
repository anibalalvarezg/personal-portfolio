"use client"

import { useLocalizedData } from "@/lib/use-localized-data"
import { useI18n } from "@/lib/i18n"

function SkillTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-[rgba(148,163,184,0.08)] text-[#94a3b8] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(6,182,212,0.3)] hover:text-[#06b6d4] hover:shadow-[0_0_12px_rgba(6,182,212,0.08)] transition-all cursor-default">
      {name}
    </span>
  )
}

export function Skills() {
  const { skillsData } = useLocalizedData()
  const { t } = useI18n()

  return (
    <section
      id="skills"
      className="py-24 md:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#e2e8f0]">
            {t("skills.title")}
          </h2>
          <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-[#06b6d4] to-transparent rounded-full" aria-hidden="true" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.categories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] transition-all duration-500"
            >
              <h3 className="text-sm font-semibold text-[#06b6d4] uppercase tracking-wider mb-5">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        {skillsData.other && skillsData.other.length > 0 && (
          <div className="mt-12">
            <h3 className="text-sm font-semibold text-[#06b6d4] uppercase tracking-wider mb-4">
              {t("skills.otherTitle")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.other.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-[rgba(148,163,184,0.08)] text-[#94a3b8] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(6,182,212,0.3)] hover:text-[#06b6d4] hover:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
