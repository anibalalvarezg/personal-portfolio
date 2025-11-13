"use client"

import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export function useScrollAnimation<T extends HTMLElement>(
  animation: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "stagger" = "fadeInUp",
  options?: {
    delay?: number
    duration?: number
    amount?: number
    once?: boolean
  }
) {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.amount ?? 0.3,
  })

  return { ref, isInView }
}
