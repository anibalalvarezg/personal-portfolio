"use client"

import { useState, useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useActiveSection } from "@/hooks/use-active-section"
import { LanguageToggle } from "./language-toggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const { t } = useI18n()

  const navLinks = [
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#publicaciones", label: t("nav.publications") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#contacto", label: t("nav.contact") },
  ]

  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const lastScrollYRef = useRef(0)
  const scrollDistanceRef = useRef(0)
  const scrollDirectionRef = useRef(0)
  const progress = useScrollProgress()
  const activeSection = useActiveSection(navLinks.map((link) => link.href.slice(1)))

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = Math.max(0, window.scrollY)
      const delta = scrollY - lastScrollYRef.current
      lastScrollYRef.current = scrollY
      setIsScrolled(scrollY > 50)

      if (scrollY <= 80) {
        scrollDistanceRef.current = 0
        setIsHeaderVisible(true)
        return
      }

      if (delta === 0) return

      const direction = Math.sign(delta)
      if (direction !== scrollDirectionRef.current) {
        scrollDirectionRef.current = direction
        scrollDistanceRef.current = 0
      }

      scrollDistanceRef.current += Math.abs(delta)
      if (scrollDistanceRef.current < 12) return

      if (direction < 0) {
        setIsHeaderVisible(true)
      } else if (!isMobileMenuOpen) {
        const focusedElement = document.activeElement
        const hasKeyboardFocus = navRef.current?.contains(focusedElement) &&
          focusedElement?.matches(":focus-visible")

        if (!hasKeyboardFocus) setIsHeaderVisible(false)
      }
    }

    lastScrollYRef.current = Math.max(0, window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      ref={navRef}
      onFocusCapture={() => setIsHeaderVisible(true)}
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,box-shadow,opacity] duration-200 ease-out motion-reduce:transition-none ${
        isHeaderVisible || isMobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isScrolled 
          ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Scroll progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(148,163,184,0.1)]">
        <div
          className="h-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <a 
            href="#" 
            className="text-lg font-bold tracking-tight text-[#e2e8f0] hover:text-[#06b6d4] transition-colors"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <span className="text-[#06b6d4]">&lt;</span>
            Aníbal
            <span className="text-[#06b6d4]">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                className={`text-sm transition-colors relative group ${
                  activeSection === link.href.slice(1)
                    ? "text-[#06b6d4]"
                    : "text-[#94a3b8] hover:text-[#06b6d4]"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#06b6d4] transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#94a3b8] hover:text-[#06b6d4] hover:bg-[rgba(6,182,212,0.1)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass border-t border-[rgba(148,163,184,0.1)] overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block py-3 text-sm text-[#94a3b8] hover:text-[#06b6d4] transition-colors border-b border-[rgba(148,163,184,0.05)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
