"use client"

import { useRef, useEffect, useCallback } from "react"
import gsap from "gsap"

interface MagneticOptions {
  strength?: number
  radius?: number
}

export function useMagneticEffect<T extends HTMLElement>(options: MagneticOptions = {}) {
  const { strength = 0.3, radius = 100 } = options
  const ref = useRef<T>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    
    if (distance < radius) {
      const factor = 1 - distance / radius
      gsap.to(ref.current, {
        x: distanceX * strength * factor,
        y: distanceY * strength * factor,
        duration: 0.3,
        ease: "power2.out",
      })
    } else {
      gsap.to(ref.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      })
    }
  }, [strength, radius])

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const parent: HTMLElement | Window = element.parentElement || window
    const listener = handleMouseMove as EventListener
    parent.addEventListener("mousemove", listener)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      parent.removeEventListener("mousemove", listener)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}
