"use client"

import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { highlightTechnologies } from "@/lib/highlight-tech";

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
  const titleRef = useScrollAnimation<HTMLDivElement>("fadeInLeft", { duration: 0.5 })
  const educationRef = useScrollAnimation<HTMLDivElement>("stagger", { duration: 0.5, stagger: 0.08 })
  
  return (
    <section className="mb-16" aria-labelledby="education-heading">
      <div ref={titleRef} className="flex items-center gap-3 mb-8">
        <h2 id="education-heading" className="text-3xl font-bold tracking-tight">
          {t('education.title')}
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </div>

      <div ref={educationRef} className="space-y-6">
        {data.map((edu, index) => (
          <article 
            key={index} 
            className="group"
            role="article" 
            aria-label={`Formación académica: ${edu.degree}`}
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors shadow-sm" aria-hidden="true">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mt-2">
                  {edu.institution}
                </p>
              </div>
              <Badge 
                variant="outline" 
                className="shadow-sm bg-accent/5 border-accent/20" 
                role="status" 
                aria-label={`Período: ${edu.period}`}
              >
                {edu.period}
              </Badge>
            </div>
            {edu.description && (
              <p className="text-sm text-muted-foreground leading-relaxed pl-[4.5rem]">
                {highlightTechnologies(edu.description)}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

