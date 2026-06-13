"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLocalizedData } from "@/lib/use-localized-data"
import { useI18n } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin } from "lucide-react"

export function About() {
  const { personalData, educationData, interestAreas } = useLocalizedData()
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#e2e8f0]">
            {t("about.title")}
          </h2>
          <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-[#06b6d4] to-transparent rounded-full" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
              {t("about.summary")}
            </p>

            {/* Interest Areas */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[#e2e8f0] uppercase tracking-wider mb-4">
                {t("about.interestsTitle")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {interestAreas.map((area) => (
                  <Badge
                    key={area}
                    variant="outline"
                    className="text-sm px-4 py-2 bg-[rgba(6,182,212,0.1)] border-[rgba(6,182,212,0.2)] text-[#06b6d4] hover:bg-[rgba(6,182,212,0.2)] transition-colors"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-semibold text-[#e2e8f0] uppercase tracking-wider mb-4">
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#e2e8f0] font-medium">Español</span>
                  <span className="text-xs text-[#94a3b8] bg-[rgba(148,163,184,0.1)] px-2 py-1 rounded">Nativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#e2e8f0] font-medium">Inglés</span>
                  <span className="text-xs text-[#94a3b8] bg-[rgba(148,163,184,0.1)] px-2 py-1 rounded">Profesional</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-semibold text-[#e2e8f0] uppercase tracking-wider mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#06b6d4]" />
              {t("about.educationTitle")}
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="relative p-5 rounded-xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(6,182,212,0.2)] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="font-bold text-[#e2e8f0]">{edu.degree}</h4>
                      <p className="text-sm text-[#94a3b8] flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {edu.institution}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="shrink-0 bg-[rgba(6,182,212,0.05)] border-[rgba(6,182,212,0.2)] text-[#06b6d4]"
                    >
                      {edu.period}
                    </Badge>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-[#94a3b8] mt-2">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
