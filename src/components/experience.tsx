import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Experiencia Profesional
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.company}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.role}
                  </p>
                </div>
                <Badge variant="outline" className="w-fit">
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {exp.descriptions.map((desc, descIndex) => (
                  <li
                    key={descIndex}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

