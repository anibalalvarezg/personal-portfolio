"use client"

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { highlightTechnologies } from "@/lib/highlight-tech";

interface Experience {
  company: string;
  role: string;
  period: string;
  descriptions: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

export function Experience({ experiences }: ExperienceProps) {
  const { t } = useI18n()
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation<HTMLDivElement>("fadeInLeft")
  const { ref: experiencesRef, isInView: experiencesInView } = useScrollAnimation<HTMLDivElement>("stagger")
  
  return (
    <section className="mb-16" aria-labelledby="experience-heading">
      {/* Section title with animation */}
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, x: -30 }}
        animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 mb-8"
      >
        <h2 id="experience-heading" className="text-3xl font-bold tracking-tight">
          {t('experience.title')}
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </motion.div>

      {/* Experience items with stagger animation */}
      <div ref={experiencesRef} className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={experiencesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative flex gap-6 group"
          >
            {/* Timeline */}
            <div className="hidden md:flex flex-col items-center" aria-hidden="true">
              <motion.div 
                initial={{ scale: 0 }}
                animate={experiencesInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.12 + 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="w-4 h-4 rounded-full bg-primary shadow-lg group-hover:scale-125 transition-transform shrink-0 mt-6"
              ></motion.div>
              {index < experiences.length - 1 && (
                <motion.div 
                  initial={{ scaleY: 0 }}
                  animate={experiencesInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.12 + 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{ originY: 0 }}
                  className="w-0.5 h-full bg-gradient-to-b from-primary to-primary/20 mt-2"
                ></motion.div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {exp.role}
                  </p>
                </div>
                <Badge variant="outline" className="w-fit shadow-sm bg-primary/5 border-primary/20" role="status" aria-label={`Período: ${exp.period}`}>
                  {exp.period}
                </Badge>
              </div>
              <ul className="space-y-3" aria-label="Responsabilidades y logros">
                {exp.descriptions.map((desc, descIndex) => (
                  <li
                    key={descIndex}
                    className="text-sm text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary/60"
                  >
                    {highlightTechnologies(desc)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
