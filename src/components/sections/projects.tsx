"use client"

import type { ReactNode, ComponentPropsWithoutRef } from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLocalizedData } from "@/lib/use-localized-data"
import { useI18n } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import { Globe, BarChart3, Network, ArrowUpRight } from "lucide-react"

const iconMap: Record<string, ReactNode> = {
  scraping: <Globe className="w-8 h-8" />,
  dashboard: <BarChart3 className="w-8 h-8" />,
  architecture: <Network className="w-8 h-8" />,
}

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    stack: string[]
    icon: string
    highlights: string[]
    link?: string
  }
  index: number
  isInView: boolean
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const baseClasses = "block relative h-full p-6 rounded-2xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:border-[rgba(6,182,212,0.3)]"
  const content = (
    <>
      <div className="mb-4 p-3 rounded-xl bg-[rgba(6,182,212,0.1)] text-[#06b6d4] w-fit group-hover:bg-[rgba(6,182,212,0.2)] transition-colors">
        {iconMap[project.icon] || <Globe className="w-8 h-8" />}
      </div>

      <h3 className="text-xl font-bold text-[#e2e8f0] mb-2 group-hover:text-[#06b6d4] transition-colors flex items-center gap-2">
        {project.title}
        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#06b6d4]" />
      </h3>

      <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.highlights.map((highlight) => (
          <span
            key={highlight}
            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[rgba(6,182,212,0.1)] text-[#06b6d4]"
          >
            {highlight}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-xs bg-[rgba(148,163,184,0.05)] border-[rgba(148,163,184,0.1)] text-[#94a3b8] hover:text-[#e2e8f0] hover:border-[rgba(6,182,212,0.3)] transition-colors"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          aria-label={`${project.title} - Ver en GitHub`}
        >
          {content}
        </a>
      ) : (
        <div className={baseClasses}>
          {content}
        </div>
      )}
    </motion.div>
  )
}

export function Projects() {
  const { projectsData } = useLocalizedData()
  const { t } = useI18n()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="proyectos"
      ref={ref}
      className="py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#e2e8f0]">
            {t("projects.title")}
          </h2>
          <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-[#06b6d4] to-transparent rounded-full" aria-hidden="true" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project as ProjectCardProps["project"]}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
