"use client"

import { createContext, useContext } from "react"

export const IntroContext = createContext(true)

export function useIntroComplete() {
  return useContext(IntroContext)
}
