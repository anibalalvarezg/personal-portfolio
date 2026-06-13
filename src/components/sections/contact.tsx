"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { useLocalizedData } from "@/lib/use-localized-data"
import { MagneticButton } from "@/components/magnetic-button"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

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
              className="p-4 rounded-xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] text-[#94a3b8] hover:text-[#06b6d4] hover:border-[rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group"
              aria-label={t("contact.linkedin", { url: linkedin })}
            >
              <Linkedin className="w-6 h-6" />
              <ArrowUpRight className="w-3 h-3 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-xl bg-[#0f172a] border border-[rgba(148,163,184,0.1)] text-[#94a3b8] hover:text-[#06b6d4] hover:border-[rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group"
              aria-label={`Ver perfil de GitHub en ${github}`}
            >
              <Github className="w-6 h-6" />
              <ArrowUpRight className="w-3 h-3 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
