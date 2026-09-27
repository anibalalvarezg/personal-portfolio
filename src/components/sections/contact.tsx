"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { useLocalizedData } from "@/lib/use-localized-data"
import { MagneticButton } from "@/components/magnetic-button"
import { Mail, ArrowUpRight } from "lucide-react"

export function Contact() {
  const { t } = useI18n()
  const { personalData } = useLocalizedData()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const email = personalData.contacts.find((c) => c.type === "email")?.value || ""
  const linkedin = personalData.contacts.find((c) => c.type === "linkedin")?.value || ""
  const github = personalData.contacts.find((c) => c.type === "github")?.value || ""

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-[#e2e8f0] mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-[#94a3b8] mb-2">
              {t("contact.getInTouch")}
            </p>
            <p className="text-sm text-[#06b6d4] mb-10">
              {t("contact.available")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticButton
              variant="primary"
              href={`mailto:${email}`}
              ariaLabel={t("contact.email", { email })}
            >
              <Mail className="w-4 h-4" />
              {email}
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] text-[#94a3b8] hover:text-[#06b6d4] hover:border-[rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group"
              aria-label={t("contact.linkedin", { url: linkedin })}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.556V9H3.56v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
              <ArrowUpRight className="w-3 h-3 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] text-[#94a3b8] hover:text-[#06b6d4] hover:border-[rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group"
              aria-label={`Ver perfil de GitHub en ${github}`}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.26.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.493.998.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 6.007 0c2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.221 0 4.61-2.807 5.625-5.48 5.921.43.372.814 1.102.814 2.222v3.293c0 .32.216.694.825.576A12.001 12.001 0 0 0 12 .297Z" />
              </svg>
              <ArrowUpRight className="w-3 h-3 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
