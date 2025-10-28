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

  return (
    <a
      href={getHref()}
      target={contact.type === "linkedin" ? "_blank" : undefined}
      rel={contact.type === "linkedin" ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <ContactIcon type={contact.type} />
      <span>{contact.value}</span>
    </a>
  );
};

export function Hero({ data }: HeroProps) {
  return (
    <section className="mb-12">
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {data.name}
          </h1>
          <Badge variant="secondary" className="text-base px-4 py-1">
            {data.title}
          </Badge>
        </div>

        <Separator />

        <div className="flex flex-wrap gap-4">
          {data.contacts.map((contact) => (
            <ContactLink key={contact.type} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
}

