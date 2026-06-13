"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HeroCanvas } from "@/components/hero-canvas"
import { MagneticButton } from "@/components/magnetic-button"
import { TypingText } from "@/components/typing-text"
import { useLocalizedData } from "@/lib/use-localized-data"
import { useI18n } from "@/lib/i18n"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { Download, ArrowRight, ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const { personalData, skillsTyping } = useLocalizedData()
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !titleRef.current) return

    const tl = gsap.timeline()
    tl.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.3,
    })

    return () => {
      tl.kill()
    }
  }, [reducedMotion])

  const handleScrollToProjects = () => {
    const element = document.querySelector("#proyectos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Anibal_Alvarez.pdf"
    link.download = "CV-Anibal-Alvarez-Gonzalez.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Hero Canvas Background (Network + Aurora combined) */}
      <HeroCanvas />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium bg-[rgba(6,182,212,0.1)] text-[#06b6d4] border border-[rgba(6,182,212,0.2)]">
            {personalData.location}
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[1.1] tracking-tighter mb-6 text-[#e2e8f0]"
        >
          {personalData.name}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <p className="text-lg md:text-xl text-[#94a3b8] font-medium">
            {personalData.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="inline-block px-4 py-3 rounded-lg bg-[rgba(15,23,42,0.8)] border border-[rgba(148,163,184,0.1)] font-mono text-sm md:text-base text-[#94a3b8]">
            <TypingText texts={skillsTyping} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton variant="primary" onClick={handleDownloadCV} ariaLabel={t("hero.ctaCv")}>
            <Download className="w-4 h-4" />
            {t("hero.ctaCv")}
          </MagneticButton>
          
          <MagneticButton variant="secondary" onClick={handleScrollToProjects} ariaLabel={t("hero.ctaProjects")}>
            {t("hero.ctaProjects")}
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => {
            const element = document.querySelector("#proyectos")
            if (element) element.scrollIntoView({ behavior: "smooth" })
          }}
          className="flex flex-col items-center gap-2 text-[#94a3b8] hover:text-[#06b6d4] transition-colors"
          aria-label={t("hero.scrollDown")}
        >
          <span className="text-xs font-medium">{t("hero.scrollDown")}</span>
          <ChevronDown className="w-5 h-5 animate-[bounceSlow_2s_ease-in-out_infinite]" />
        </button>
      </motion.div>
    </section>
  )
}
