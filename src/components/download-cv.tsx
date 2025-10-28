"use client"

import { Download } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function DownloadCV() {
  const { t } = useI18n()

  const handleDownload = () => {
    // Track download event (preparado para analytics)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore - gtag is added by Google Analytics
      window.gtag('event', 'download', {
        event_category: 'CV',
        event_label: 'CV Download',
      })
    }

    // Crear un link temporal y hacer click
    const link = document.createElement('a')
    link.href = '/Anibal_Alvarez.pdf'
    link.download = 'CV-Anibal-Alvarez-Gonzalez.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleDownload}
      className="relative w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={t('cv.download')}
      title={t('cv.downloadButton')}
    >
      <Download className="h-5 w-5 text-foreground group-hover:scale-110 transition-transform" aria-hidden="true" />
      <span className="sr-only">{t('cv.downloadButton')}</span>
    </button>
  )
}

