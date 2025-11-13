"use client"

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

interface EducationProps {
  data: Education[];
}

export function Education({ data }: EducationProps) {
  const { t } = useI18n()
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation<HTMLDivElement>("fadeInLeft")
  const { ref: educationRef, isInView: educationInView } = useScrollAnimation<HTMLDivElement>("stagger")
  
  return (
    <section className="mb-16" aria-labelledby="education-heading">
      {/* Section title with animation */}
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, x: -30 }}
        animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 mb-8"
      >
        <h2 id="education-heading" className="text-3xl font-bold tracking-tight">
          {t('education.title')}
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </motion.div>

      {/* Education items with stagger animation */}
      <div ref={educationRef} className="space-y-6">
        {data.map((edu, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="group"
            role="article" 
            aria-label={`Formación académica: ${edu.degree}`}
          >
            <div className="flex items-start gap-4">
              {/* Icon with animation */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={educationInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.12 + 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors shadow-sm" 
                aria-hidden="true"
              >
                <GraduationCap className="h-7 w-7 text-primary" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mt-2">
                  {edu.institution}
                </p>
              </div>

              {/* Period badge */}
              <Badge 
                variant="outline" 
                className="shadow-sm bg-accent/5 border-accent/20" 
                role="status" 
                aria-label={`Período: ${edu.period}`}
              >
                {edu.period}
              </Badge>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
