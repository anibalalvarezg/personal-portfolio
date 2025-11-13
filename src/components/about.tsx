"use client"

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { highlightTechnologies } from "@/lib/highlight-tech";

export function About() {
  const { t } = useI18n()
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation<HTMLDivElement>("fadeInLeft")
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation<HTMLParagraphElement>("fadeInUp")
  
  return (
    <section className="mb-16" aria-labelledby="about-heading">
      {/* Section title with animation */}
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, x: -30 }}
        animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 mb-8"
      >
        <h2 id="about-heading" className="text-3xl font-bold tracking-tight">
          {t('about.title')}
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </motion.div>

      {/* Content with animation */}
      <motion.p 
        ref={contentRef}
        initial={{ opacity: 0, y: 20 }}
        animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-muted-foreground leading-relaxed text-base"
      >
        {highlightTechnologies(t('about.summary'))}
      </motion.p>
    </section>
  );
}
