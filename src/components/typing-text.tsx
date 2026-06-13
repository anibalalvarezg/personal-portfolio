"use client"

import { useState, useEffect, useRef } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface TypingTextProps {
  texts: string[]
  prefix?: string
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
  className?: string
}

export function TypingText({ 
  texts, 
  prefix = "> ", 
  speed = 60, 
  deleteSpeed = 30, 
  pauseDuration = 2000,
  className = "",
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const reducedMotion = useReducedMotion()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(texts[0] || "")
      return
    }

    const currentText = texts[currentIndex]

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deleteSpeed)
      }
    } else {
      if (displayText === currentText) {
        setIsPaused(true)
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, speed)
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration, reducedMotion])

  return (
    <span className={className}>
      <span className="text-[#06b6d4]">{prefix}</span>
      <span>{displayText}</span>
      <span className="animate-[cursorBlink_1s_step-end_infinite] text-[#06b6d4] ml-0.5">|</span>
    </span>
  )
}
