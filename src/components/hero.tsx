import { Mail, Linkedin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Contact {
  type: string;
  value: string;
}

interface HeroProps {
  data: {
    name: string;
    title: string;
    contacts: Contact[];
  };
}

const ContactIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "email":
      return <Mail className="h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4" />;
    case "phone":
      return <Phone className="h-4 w-4" />;
    default:
      return null;
  }
};

const ContactLink = ({ contact }: { contact: Contact }) => {
  const getHref = () => {
    switch (contact.type) {
      case "email":
        return `mailto:${contact.value}`;
      case "linkedin":
        return `https://${contact.value}`;
      case "phone":
        return `tel:${contact.value}`;
      default:
        return "#";
    }
  };

  const getAriaLabel = () => {
    switch (contact.type) {
      case "email":
        return `Enviar correo a ${contact.value}`;
      case "linkedin":
        return `Ver perfil de LinkedIn en ${contact.value}`;
      case "phone":
        return `Llamar al ${contact.value}`;
      default:
        return contact.value;
    }
  };

  return (
    <a
      href={getHref()}
      target={contact.type === "linkedin" ? "_blank" : undefined}
      rel={contact.type === "linkedin" ? "noopener noreferrer" : undefined}
      aria-label={getAriaLabel()}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all hover:scale-105 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg"
    >
      <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors" aria-hidden="true">
        <ContactIcon type={contact.type} />
      </div>
      <span className="font-medium">{contact.value}</span>
    </a>
  );
};

export function Hero({ data }: HeroProps) {
  return (
    <section className="mb-8 relative" aria-label="Información personal">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl blur-3xl" aria-hidden="true"></div>
      
      <div className="space-y-6 py-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {data.name}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" aria-hidden="true"></div>
            <Badge variant="secondary" className="text-base px-5 py-1.5 font-medium shadow-sm hover:shadow-md transition-shadow" role="status">
              {data.title}
            </Badge>
          </div>
        </div>

        <Separator className="my-6" aria-hidden="true" />

        <nav className="flex flex-wrap gap-6" aria-label="Información de contacto">
          {data.contacts.map((contact) => (
            <ContactLink key={contact.type} contact={contact} />
          ))}
        </nav>
      </div>
    </section>
  );
}

