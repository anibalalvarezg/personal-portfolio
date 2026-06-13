import { useReducedMotion as useReducedMotionContext } from "@/components/reduced-motion-provider"

export function useReducedMotion() {
  return useReducedMotionContext()
}
