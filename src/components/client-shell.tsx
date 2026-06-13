"use client"

import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/custom-cursor"
import { SpotlightEffect } from "@/components/spotlight-effect"

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <SpotlightEffect />
      <Navbar />
      {children}
    </>
  )
}
