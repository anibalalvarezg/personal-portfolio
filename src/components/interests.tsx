"use client"

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface InterestsProps {
  areas: string[];
}

export function Interests({ areas }: InterestsProps) {
  const { t } = useI18n()
  const titleRef = useScrollAnimation<HTMLDivElement>("fadeInLeft", { duration: 0.5 })
  const badgesRef = useScrollAnimation<HTMLDivElement>("stagger", { duration: 0.4, stagger: 0.05 })
  
  return (
    <section className="mb-16" aria-labelledby="interests-heading">
      <div ref={titleRef} className="flex items-center gap-3 mb-8">
        <h2 id="interests-heading" className="text-3xl font-bold tracking-tight">
          {t('interests.title')}
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </div>

      <div ref={badgesRef} className="flex flex-wrap gap-3" role="list" aria-label="Lista de áreas de interés">
        {areas.map((area) => (
          <Badge 
            key={area} 
            variant="default"
            role="listitem"
            className="text-sm px-4 py-2 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default bg-gradient-to-r from-primary to-accent"
          >
            {area}
          </Badge>
        ))}
      </div>
    </section>
  );
}

