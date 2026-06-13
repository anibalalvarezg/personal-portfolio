"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const handleToggle = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setLocale(locale === "es" ? "en" : "es")
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 300)
  }

  return (
    <button
      onClick={handleToggle}
      className="relative w-10 h-10 rounded-lg bg-[#1e293b] hover:bg-[rgba(6,182,212,0.15)] transition-colors flex items-center justify-center group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06b6d4]"
      aria-label={locale === "es" ? t("language.english") : t("language.spanish")}
      aria-live="polite"
      title={locale === "es" ? "Switch to English" : "Cambiar a español"}
    >
      <Languages className="h-5 w-5 text-[#94a3b8] group-hover:text-[#06b6d4] transition-colors" aria-hidden="true" />
      
      <AnimatePresence mode="wait">
        <motion.span
          key={locale}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-[#06b6d4] text-[#0a0a0a] rounded-full w-5 h-5 flex items-center justify-center shadow-sm"
          aria-hidden="true"
        >
          {locale.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
