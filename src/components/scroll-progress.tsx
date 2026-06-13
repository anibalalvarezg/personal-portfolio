"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-[rgba(148,163,184,0.1)]"
      aria-hidden="true"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
