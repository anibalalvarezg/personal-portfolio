import { Badge } from "@/components/ui/badge";

interface InterestsProps {
  areas: string[];
}

export function Interests({ areas }: InterestsProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Áreas de Interés
      </h2>

      <div className="flex flex-wrap gap-3">
        {areas.map((area) => (
          <Badge key={area} variant="default" className="text-sm">
            {area}
          </Badge>
        ))}
      </div>
    </section>
  );
}

