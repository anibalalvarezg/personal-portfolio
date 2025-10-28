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
    <section className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Educación
      </h2>

      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl">{data.degree}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {data.institution}
              </p>
            </div>
            <Badge variant="outline">{data.period}</Badge>
          </div>
        </CardHeader>
      </Card>
    </section>
  );
}

