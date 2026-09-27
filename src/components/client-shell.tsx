"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/custom-cursor"
import { SpotlightEffect } from "@/components/spotlight-effect"
import { SkipToContent } from "@/components/skip-to-content"
import { IntroContext } from "@/components/intro-context"
import { IntroLoader } from "@/components/intro-loader"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    let firstFrame = 0
    let secondFrame = 0
    let timer: ReturnType<typeof setTimeout>
    const watchdog = setTimeout(() => {
      setShowLoader(false)
      setIntroComplete(true)
    }, 7000)

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        timer = setTimeout(() => setShowLoader(false), reducedMotion ? 0 : 650)
      })
    })

    return () => {
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(secondFrame)
      clearTimeout(timer)
      clearTimeout(watchdog)
    }
  }, [reducedMotion])

  useEffect(() => {
    const content = contentRef.current
    if (!content || introComplete) return

    const previousOverflow = document.body.style.overflow
    content.inert = true
    document.body.style.overflow = "hidden"

    // Keep the page usable if the exit animation cannot complete.
    const fallback = setTimeout(() => {
      content.inert = false
      document.body.style.overflow = previousOverflow
    }, 7000)

    return () => {
      clearTimeout(fallback)
      content.inert = false
      document.body.style.overflow = previousOverflow
    }
  }, [introComplete])

  return (
    <>
      <CustomCursor />
      <SpotlightEffect />
      <IntroContext.Provider value={introComplete}>
        <div ref={contentRef}>
          <SkipToContent />
          <Navbar />
          {children}
        </div>
      </IntroContext.Provider>
      <AnimatePresence onExitComplete={() => setIntroComplete(true)}>
        {showLoader && <IntroLoader key="intro-loader" />}
      </AnimatePresence>
      <noscript>
        <style>{".intro-loader{display:none!important}#main-content [style*='opacity:0']{opacity:1!important;transform:none!important}"}</style>
      </noscript>
    </>
  )
}
