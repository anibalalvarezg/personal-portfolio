import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 mb-8">
      <Separator className="mb-8" />
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Aníbal Álvarez González. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Construido con Next.js, TailwindCSS y shadcn/ui
        </p>
      </div>
    </footer>
  );
}

