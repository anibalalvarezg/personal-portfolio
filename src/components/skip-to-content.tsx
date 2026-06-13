"use client"

import { useI18n } from "@/lib/i18n"

export function SkipToContent() {
  const { t } = useI18n()
  
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#06b6d4] focus:text-[#0a0a0a] focus:rounded-lg focus:shadow-lg focus:font-medium focus:text-sm"
    >
      {t("skipToContent")}
    </a>
  )
}
