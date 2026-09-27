"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function IntroLoader() {
  const { t } = useI18n()
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="intro-loader fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-5 bg-background px-6"
      role="status"
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        className="w-[min(19rem,85vw)] overflow-visible text-primary"
        viewBox="0 0 360 100"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 65 22 L 34 50 L 65 78"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reducedMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.text
          x="82"
          y="63"
          fill="var(--foreground)"
          fontFamily="var(--font-heading)"
          fontSize="38"
          fontWeight="700"
          letterSpacing="-1.5"
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.3, delay: reducedMotion ? 0 : 0.2 }}
        >
          Aníbal
        </motion.text>
        <motion.path
          d="M 246 22 L 226 78 M 263 22 L 294 50 L 263 78"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reducedMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
        {t("loader.loading")}
      </span>
    </motion.div>
  )
}
