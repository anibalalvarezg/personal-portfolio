import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 mb-8">
      <Separator className="mb-6" />
      <div className="text-center text-sm text-muted-foreground">
        <p>© {currentYear} Aníbal Álvarez González. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

