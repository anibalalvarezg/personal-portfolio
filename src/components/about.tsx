import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AboutProps {
  summary: string[];
}

export function About({ summary }: AboutProps) {
  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sobre mí</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {summary.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

