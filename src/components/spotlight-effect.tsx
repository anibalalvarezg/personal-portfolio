"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function SpotlightEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const isMobile = window.matchMedia("(hover: none) and (pointer: coarse)").matches
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isActive) setIsActive(true)
    }

    const handleMouseLeave = () => setIsActive(false)
    const handleMouseEnter = () => setIsActive(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [reducedMotion, isActive])

  if (reducedMotion) return null

  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none transition-opacity duration-500"
      style={{
        opacity: isActive ? 1 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.07), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  )
}
