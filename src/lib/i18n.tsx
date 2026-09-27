"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import esMessages from '../../messages/es.json'
import enMessages from '../../messages/en.json'

type Locale = 'es' | 'en'
type Messages = typeof esMessages

const messages: Record<Locale, Messages> = {
  es: esMessages,
  en: enMessages,
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string>) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale === 'es' || savedLocale === 'en') {
        setLocaleState(savedLocale)
        document.documentElement.lang = savedLocale
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale)
    setLocaleState(newLocale)
    document.documentElement.lang = newLocale
  }

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.')
    let value: unknown = messages[locale]
    
    for (const k of keys) {
      if (typeof value !== 'object' || value === null || !(k in value)) return key
      value = (value as Record<string, unknown>)[k]
    }
    
    if (typeof value !== 'string') return key
    
    if (params) {
      return Object.entries(params).reduce(
        (acc, [param, val]) => acc.replace(`{${param}}`, val),
        value
      )
    }
    
    return value
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
