"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()

  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="relative w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={locale === "es" ? t("language.english") : t("language.spanish")}
      title={locale === "es" ? "EN" : "ES"}
    >
      <Languages className="h-5 w-5 text-foreground" />
      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
        {locale.toUpperCase()}
      </span>
    </button>
  )
}

