"use client"

import { useRef, useEffect } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: number
}

interface AuroraLayer {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  speed: number
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const auroraLayersRef = useRef<AuroraLayer[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const animationRef = useRef<number>(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 25 : 60
    const connectionDistance = isMobile ? 70 : 110
    const maxConnections = 3

    const auroraColors = [
      "rgba(6, 182, 212, 0.07)",
      "rgba(59, 130, 246, 0.05)",
      "rgba(139, 92, 246, 0.03)",
      "rgba(6, 182, 212, 0.04)",
    ]

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
      initAurora()
    }

    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5,
          connections: 0,
        })
      }
    }

    const initAurora = () => {
      auroraLayersRef.current = []
      for (let i = 0; i < 4; i++) {
        auroraLayersRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.08,
          radius: Math.random() * 350 + 200,
          color: auroraColors[i % auroraColors.length],
          speed: Math.random() * 0.015 + 0.008,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    const drawAurora = (time: number) => {
      auroraLayersRef.current.forEach((layer) => {
        layer.x += layer.vx + Math.sin(time * layer.speed) * 0.4
        layer.y += layer.vy + Math.cos(time * layer.speed * 0.7) * 0.2

        if (layer.x < -layer.radius) layer.x = canvas.width + layer.radius
        if (layer.x > canvas.width + layer.radius) layer.x = -layer.radius
        if (layer.y < -layer.radius) layer.y = canvas.height * 0.5 + layer.radius
        if (layer.y > canvas.height * 0.5 + layer.radius) layer.y = -layer.radius

        const gradient = ctx.createRadialGradient(
          layer.x, layer.y, 0,
          layer.x, layer.y, layer.radius
        )
        gradient.addColorStop(0, layer.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.arc(layer.x, layer.y, layer.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.globalCompositeOperation = "screen"
        ctx.fill()
        ctx.globalCompositeOperation = "source-over"
      })
    }

    const drawParticles = () => {
      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const force = (150 - dist) / 150 * 0.015
            p.vx += dx * force
            p.vy += dy * force
          }
        }

        p.vx *= 0.99
        p.vy *= 0.99

        p.connections = 0
      })

      ctx.strokeStyle = "rgba(6, 182, 212, 0.12)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance && particles[i].connections < maxConnections) {
            const opacity = (1 - dist / connectionDistance) * 0.25
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            particles[i].connections++
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(6, 182, 212, 0.5)"
        ctx.fill()

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4)
        gradient.addColorStop(0, "rgba(6, 182, 212, 0.15)")
        gradient.addColorStop(1, "rgba(6, 182, 212, 0)")
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001
      drawAurora(time)
      drawParticles()

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [reducedMotion])

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(6,182,212,0.03)] via-[rgba(6,182,212,0.02)] to-transparent"
        aria-hidden="true"
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      aria-hidden="true"
      style={{ touchAction: "none" }}
    />
  )
}
