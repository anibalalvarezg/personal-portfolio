import { Badge } from "@/components/ui/badge";

interface InterestsProps {
  areas: string[];
}

export function Interests({ areas }: InterestsProps) {
  return (
    <section className="mb-16" aria-labelledby="interests-heading">
      <div className="flex items-center gap-3 mb-8">
        <h2 id="interests-heading" className="text-3xl font-bold tracking-tight">
          Áreas de Interés
        </h2>
        <div className="h-1 flex-1 max-w-20 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
      </div>

      <div className="flex flex-wrap gap-3" role="list" aria-label="Lista de áreas de interés">
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

