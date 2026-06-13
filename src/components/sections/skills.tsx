"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLocalizedData } from "@/lib/use-localized-data"
import { useI18n } from "@/lib/i18n"

function SkillTag({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-[rgba(148,163,184,0.08)] text-[#94a3b8] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(6,182,212,0.3)] hover:text-[#06b6d4] hover:shadow-[0_0_12px_rgba(6,182,212,0.08)] transition-all cursor-default"
    >
      {name}
    </motion.span>
  )
}

export function Skills() {
  const { skillsData } = useLocalizedData()
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#e2e8f0]">
            {t("skills.title")}
          </h2>
          <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-[#06b6d4] to-transparent rounded-full" aria-hidden="true" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: catIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 rounded-2xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] transition-all duration-500"
            >
              <h3 className="text-sm font-semibold text-[#06b6d4] uppercase tracking-wider mb-5">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <SkillTag
                    key={skill}
                    name={skill}
                    delay={catIndex * 0.1 + index * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        {skillsData.other && skillsData.other.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
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
          </motion.div>
        )}
      </div>
    </section>
  )
}
