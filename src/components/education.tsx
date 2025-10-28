import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

interface EducationProps {
  data: {
    institution: string;
    degree: string;
    period: string;
  };
}

export function Education({ data }: EducationProps) {
  return (
    <section className="mb-16" aria-labelledby="education-heading">
      <div className="flex items-center gap-3 mb-8">
        <h2 id="education-heading" className="text-3xl font-bold tracking-tight">
          Educación
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </div>

      <Card className="shadow-sm hover:shadow-lg transition-all duration-300 group border-l-4 border-l-accent/30 hover:border-l-accent" role="article" aria-label={`Formación académica: ${data.degree}`}>
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors shadow-sm" aria-hidden="true">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{data.degree}</CardTitle>
              <p className="text-sm font-medium text-muted-foreground mt-2">
                {data.institution}
              </p>
            </div>
            <Badge variant="outline" className="shadow-sm bg-accent/5 border-accent/20" role="status" aria-label={`Período: ${data.period}`}>
              {data.period}
            </Badge>
          </div>
        </CardHeader>
      </Card>
    </section>
  );
}

