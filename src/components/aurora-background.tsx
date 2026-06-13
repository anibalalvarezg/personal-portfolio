"use client"

import { useRef, useEffect } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface AuroraLayer {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
  speed: number
}

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const layersRef = useRef<AuroraLayer[]>([])
  const animationRef = useRef<number>(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const colors = [
      "rgba(6, 182, 212, 0.08)",
      "rgba(59, 130, 246, 0.06)",
      "rgba(139, 92, 246, 0.04)",
      "rgba(6, 182, 212, 0.05)",
    ]

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initLayers()
    }

    const initLayers = () => {
      layersRef.current = []
      for (let i = 0; i < 5; i++) {
        layersRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.1,
          radius: Math.random() * 400 + 200,
          opacity: Math.random() * 0.5 + 0.3,
          color: colors[i % colors.length],
          speed: Math.random() * 0.02 + 0.01,
        })
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001

      layersRef.current.forEach((layer) => {
        layer.x += layer.vx + Math.sin(time * layer.speed) * 0.5
        layer.y += layer.vy + Math.cos(time * layer.speed * 0.7) * 0.3

        if (layer.x < -layer.radius) layer.x = canvas.width + layer.radius
        if (layer.x > canvas.width + layer.radius) layer.x = -layer.radius
        if (layer.y < -layer.radius) layer.y = canvas.height * 0.5 + layer.radius
        if (layer.y > canvas.height * 0.5 + layer.radius) layer.y = -layer.radius

        const gradient = ctx.createRadialGradient(
          layer.x,
          layer.y,
          0,
          layer.x,
          layer.y,
          layer.radius
        )
        gradient.addColorStop(0, layer.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.arc(layer.x, layer.y, layer.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [reducedMotion])

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(6,182,212,0.03)] via-transparent to-[rgba(59,130,246,0.02)]"
        aria-hidden="true"
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      aria-hidden="true"
      style={{ touchAction: "none", mixBlendMode: "screen" }}
    />
  )
}
