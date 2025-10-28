"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollAnimation<T extends HTMLElement>(
  animation: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "stagger" = "fadeInUp",
  options?: {
    delay?: number
    duration?: number
    start?: string
    stagger?: number
  }
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const defaultOptions = {
      delay: options?.delay || 0,
      duration: options?.duration || 0.5,
      start: options?.start || "top 85%",
    }

    let ctx: gsap.Context

    const animations = {
      fadeInUp: {
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
      },
      fadeInLeft: {
        from: { opacity: 0, x: -20 },
        to: { opacity: 1, x: 0 },
      },
      fadeInRight: {
        from: { opacity: 0, x: 20 },
        to: { opacity: 1, x: 0 },
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.95 },
        to: { opacity: 1, scale: 1 },
      },
      stagger: {
        from: { opacity: 0, y: 15 },
        to: { opacity: 1, y: 0 },
      },
    }

    const selectedAnimation = animations[animation]

    ctx = gsap.context(() => {
      if (animation === "stagger" && element.children.length > 0) {
        gsap.fromTo(
          element.children,
          selectedAnimation.from,
          {
            ...selectedAnimation.to,
            duration: defaultOptions.duration,
            delay: defaultOptions.delay,
            stagger: options?.stagger || 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: defaultOptions.start,
              toggleActions: "play none none none",
            },
          }
        )
      } else {
        gsap.fromTo(
          element,
          selectedAnimation.from,
          {
            ...selectedAnimation.to,
            duration: defaultOptions.duration,
            delay: defaultOptions.delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: defaultOptions.start,
              toggleActions: "play none none none",
            },
          }
        )
      }
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [animation, options?.delay, options?.duration, options?.start, options?.stagger])

  return ref
}

