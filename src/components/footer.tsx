"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { useLocalizedData } from "@/lib/use-localized-data"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useI18n()
  const { personalData } = useLocalizedData()
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: "-50px" })

  const email = personalData.contacts.find((c) => c.type === "email")?.value || ""
  const linkedin = personalData.contacts.find((c) => c.type === "linkedin")?.value || ""
  const github = personalData.contacts.find((c) => c.type === "github")?.value || ""

  const navLinks = [
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#publicaciones", label: t("nav.publications") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#contacto", label: t("nav.contact") },
  ]

  const socialLinks = [
    { href: `https://${linkedin}`, label: "LinkedIn", external: true },
    { href: `https://${github}`, label: "GitHub", external: true },
    { href: `mailto:${email}`, label: "Email", external: false },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer ref={footerRef} className="relative pt-24 pb-8 border-t border-[rgba(148,163,184,0.1)]">
      {/* Aurora glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[rgba(6,182,212,0.05)] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {/* Brand */}
          <div className="space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-2xl font-bold tracking-tight text-[#e2e8f0] hover:text-[#06b6d4] transition-colors inline-block"
            >
              <span className="text-[#06b6d4]">&lt;</span>
              Aníbal
              <span className="text-[#06b6d4]">/&gt;</span>
            </a>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Frontend Developer especializado en construir aplicaciones SaaS escalables y sistemas de scraping distribuidos.
            </p>
            <p className="text-sm text-[#06b6d4]">
              {t("contact.available")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[#e2e8f0] uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[#94a3b8] hover:text-[#06b6d4] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-[#e2e8f0] uppercase tracking-wider mb-4">
              Social
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[#94a3b8] hover:text-[#06b6d4] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pt-8 border-t border-[rgba(148,163,184,0.1)] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-[#94a3b8]">
            © {currentYear} Aníbal Álvarez. {t("footer.rights")}
          </p>
          <p className="text-xs text-[rgba(148,163,184,0.5)]">
            {t("footer.builtWith")}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
