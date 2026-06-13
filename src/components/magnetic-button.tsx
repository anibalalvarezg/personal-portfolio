"use client"

import { ReactNode, useRef } from "react"
import { useMagneticEffect } from "@/hooks/use-magnetic-effect"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline"
  onClick?: () => void
  href?: string
  ariaLabel?: string
}

export function MagneticButton({ 
  children, 
  className, 
  variant = "primary", 
  onClick, 
  href,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useMagneticEffect<HTMLButtonElement | HTMLAnchorElement>({ strength: 0.4, radius: 120 })

  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-lg transition-all duration-300"
  
  const variants = {
    primary: "bg-[#06b6d4] text-[#0a0a0a] hover:bg-[#06b6d4]/90 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] active:scale-95",
    secondary: "bg-[#1e293b] text-[#e2e8f0] hover:bg-[#1e293b]/80 border border-[rgba(148,163,184,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] active:scale-95",
    outline: "bg-transparent text-[#06b6d4] border-2 border-[#06b6d4] hover:bg-[#06b6d4]/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] active:scale-95",
  }

  const combinedClassName = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
