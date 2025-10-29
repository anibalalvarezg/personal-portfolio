"use client"

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
  const titleRef = useScrollAnimation<HTMLDivElement>("fadeInLeft", { duration: 0.5 })
  const experiencesRef = useScrollAnimation<HTMLDivElement>("stagger", { duration: 0.5, stagger: 0.08 })
  
  return (
    <section className="mb-16" aria-labelledby="experience-heading">
      <div ref={titleRef} className="flex items-center gap-3 mb-8">
        <h2 id="experience-heading" className="text-3xl font-bold tracking-tight">
          {t('experience.title')}
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </div>

      <div ref={experiencesRef} className="space-y-6">
        {experiences.map((exp, index) => (
          <article key={index} className="relative flex gap-6 group">
            <div className="hidden md:flex flex-col items-center" aria-hidden="true">
              <div className="w-4 h-4 rounded-full bg-primary shadow-lg group-hover:scale-125 transition-transform shrink-0 mt-6"></div>
              {index < experiences.length - 1 && (
                <div className="w-0.5 h-full bg-gradient-to-b from-primary to-primary/20 mt-2"></div>
              )}
            </div>

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
          </article>
        ))}
      </div>
    </section>
  );
}

