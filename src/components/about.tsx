"use client"

import { useI18n } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { highlightTechnologies } from "@/lib/highlight-tech";

export function About() {
  const { t } = useI18n()
  const titleRef = useScrollAnimation<HTMLDivElement>("fadeInLeft", { duration: 0.5 })
  const contentRef = useScrollAnimation<HTMLParagraphElement>("fadeInUp", { duration: 0.5, start: "top 90%" })
  
  return (
    <section className="mb-16" aria-labelledby="about-heading">
      <div ref={titleRef} className="flex items-center gap-3 mb-8">
        <h2 id="about-heading" className="text-3xl font-bold tracking-tight">
          {t('about.title')}
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </div>
      <p ref={contentRef} className="text-muted-foreground leading-relaxed text-base">
        {highlightTechnologies(t('about.summary'))}
      </p>
    </section>
  );
}

