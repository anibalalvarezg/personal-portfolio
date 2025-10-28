"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n()
  
  return (
    <section className="mb-12" aria-labelledby="about-heading">
      <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full" aria-hidden="true"></div>
            <CardTitle id="about-heading" className="text-2xl">{t('about.title')}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-base">
            {t('about.summary')}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

