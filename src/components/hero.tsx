"use client"

import { Mail, Linkedin, Phone, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { DownloadCV } from "@/components/download-cv";
import { useI18n } from "@/lib/i18n";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Contact {
  type: string;
  value: string;
}

interface HeroProps {
  data: {
    name: string;
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
    case "github":
      return <Github className="h-4 w-4" />;
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
      case "github":
        return `https://${contact.value}`;
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
      case "github":
        return `Ver perfil de GitHub en ${contact.value}`;
      default:
        return contact.value;
    }
  };

  const isExternal = contact.type === "linkedin" || contact.type === "github";

  return (
    <a
      href={getHref()}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={getAriaLabel()}
      className="inline-block p-3 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-sm hover:shadow-md"
    >
      <ContactIcon type={contact.type} />
    </a>
  );
};

export function Hero({ data }: HeroProps) {
  const { t } = useI18n()
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation<HTMLDivElement>("fadeInUp")
  const { ref: contactsRef, isInView: contactsInView } = useScrollAnimation<HTMLElement>("stagger")
  
  return (
    <section className="mb-8 relative" aria-label="Información personal">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl blur-3xl" aria-hidden="true"></div>
      
      {/* Controls */}
      <div className="absolute top-0 right-0 flex gap-2 z-10">
        <DownloadCV />
        <LanguageToggle />
        <ThemeToggle />
      </div>
      
      {/* Hero content with animation */}
      <motion.div 
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6 pt-14 pb-8"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {data.name}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-linear-to-r from-primary to-accent rounded-full" aria-hidden="true"></div>
            <Badge variant="secondary" className="text-base px-5 py-1.5 font-medium shadow-sm hover:shadow-md transition-shadow" role="status">
              {t('hero.title')}
            </Badge>
            <div className="h-1 flex-1 max-w-20 bg-linear-to-r from-primary to-transparent rounded-full" aria-hidden="true"></div>
          </div>
        </div>

        <Separator className="my-6" aria-hidden="true" />

        {/* Contact links with stagger animation */}
        <nav ref={contactsRef} className="flex flex-wrap gap-6" aria-label="Información de contacto">
          {data.contacts
            .filter(contact => contact.type !== "phone")
            .map((contact, index) => (
              <motion.span
                key={contact.type}
                initial={{ opacity: 0, y: 20 }}
                animate={contactsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <ContactLink contact={contact} />
              </motion.span>
            ))}
        </nav>
      </motion.div>
    </section>
  );
}
