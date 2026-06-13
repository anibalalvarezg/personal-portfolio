"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useLocalizedData } from "@/lib/use-localized-data"
import { useI18n } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import { gsap } from "gsap"
import { highlightTechnologies } from "@/lib/highlight-tech"

export function Experience() {
  const { professionalExperience } = useLocalizedData()
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const triggers: ScrollTrigger[] = []
    const items = timelineRef.current.querySelectorAll(".timeline-item")
    
    items.forEach((item, index) => {
      const animation = gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      })
      if (animation.scrollTrigger) {
        triggers.push(animation.scrollTrigger)
      }
    })

    return () => {
      triggers.forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="py-24 md:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#e2e8f0]">
            {t("experience.title")}
          </h2>
          <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-[#06b6d4] to-transparent rounded-full" aria-hidden="true" />
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#06b6d4] via-[rgba(6,182,212,0.3)] to-transparent" aria-hidden="true" />

          <div className="space-y-12">
            {professionalExperience.map((exp, index) => (
              <div key={index} className="timeline-item relative flex gap-6 md:gap-8">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center ${
                    index === 0 
                      ? "bg-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                      : "bg-[#1e293b] border border-[rgba(148,163,184,0.2)]"
                  }`}>
                    <span className={`text-xs md:text-sm font-bold ${index === 0 ? "text-[#0a0a0a]" : "text-[#94a3b8]"}`}>
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 md:pt-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#e2e8f0] group-hover:text-[#06b6d4] transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-[#94a3b8] font-medium">
                        {exp.role}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit bg-[rgba(6,182,212,0.05)] border-[rgba(6,182,212,0.2)] text-[#06b6d4]"
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[rgba(148,163,184,0.08)] text-[#94a3b8] border border-[rgba(148,163,184,0.1)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Descriptions */}
                  <ul className="space-y-3" aria-label="Responsabilidades y logros">
                    {exp.descriptions.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-sm text-[#94a3b8] leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#06b6d4]/60"
                      >
                        {highlightTechnologies(desc)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
