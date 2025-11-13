"use client"

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface InterestsProps {
  areas: string[];
}

export function Interests({ areas }: InterestsProps) {
  const { t } = useI18n()
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation<HTMLDivElement>("fadeInLeft")
  const { ref: badgesRef, isInView: badgesInView } = useScrollAnimation<HTMLDivElement>("stagger")
  
  return (
    <section className="mb-16" aria-labelledby="interests-heading">
      {/* Section title with animation */}
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, x: -30 }}
        animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 mb-8"
      >
        <h2 id="interests-heading" className="text-3xl font-bold tracking-tight">
          {t('interests.title')}
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </motion.div>

      {/* Interest badges with stagger animation */}
      <div ref={badgesRef} className="flex flex-wrap gap-3" role="list" aria-label="Lista de áreas de interés">
        {areas.map((area, index) => (
          <motion.div
            key={area}
            role="listitem"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={badgesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Badge 
              variant="default"
              className="text-sm px-4 py-2 shadow-sm hover:shadow-md transition-shadow cursor-default bg-gradient-to-r from-primary to-accent"
            >
              {area}
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
