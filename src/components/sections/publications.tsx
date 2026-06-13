"use client"

import { motion } from "framer-motion"
import { useLocalizedData } from "@/lib/use-localized-data"
import { useI18n } from "@/lib/i18n"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { Badge } from "@/components/ui/badge"
import { FileText, ArrowUpRight } from "lucide-react"

export function Publications() {
  const { publicationsData } = useLocalizedData()
  const { t } = useI18n()
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="publicaciones"
      className="py-24 md:py-32"
      aria-labelledby="publications-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, x: -30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 id="publications-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#e2e8f0]">
            {t("publications.title")}
          </h2>
          <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-[#06b6d4] to-transparent rounded-full" aria-hidden="true" />
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {publicationsData.map((publication, index) => (
            <motion.article
              key={publication.link}
              initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-6 md:p-8 rounded-2xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant="outline"
                      className="bg-[rgba(6,182,212,0.1)] border-[rgba(6,182,212,0.2)] text-[#06b6d4]"
                    >
                      {publication.type}
                    </Badge>
                    <span className="text-sm text-[#94a3b8]">{publication.date}</span>
                    {publication.venue && (
                      <span className="text-sm text-[#94a3b8]">{publication.venue}</span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#e2e8f0] group-hover:text-[#06b6d4] transition-colors leading-tight">
                    {publication.title}
                  </h3>

                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {publication.authors}
                  </p>
                </div>

                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[rgba(6,182,212,0.1)] text-[#06b6d4] border border-[rgba(6,182,212,0.2)] hover:bg-[rgba(6,182,212,0.2)] transition-colors shrink-0"
                  aria-label={`Ver en ResearchGate: ${publication.title}`}
                >
                  <FileText className="w-4 h-4" />
                  ResearchGate
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
