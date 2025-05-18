"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { gsap } from "gsap"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Navbar animation on load
    gsap.fromTo(
      ".navbar-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
    )

    // Scroll effect for navbar
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Mobile menu animation
    const menuTimeline = gsap.timeline({ paused: true })
    menuTimeline.fromTo(
      ".mobile-menu-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" },
    )

    if (isMenuOpen) {
      menuTimeline.play()
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 navbar-item">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Nirogya</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary navbar-item hover:scale-105 transition-transform duration-200"
          >
            Home
          </Link>
          <Link
            href="/analyze"
            className="text-sm font-medium transition-colors hover:text-primary navbar-item hover:scale-105 transition-transform duration-200"
          >
            Analyze
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary navbar-item hover:scale-105 transition-transform duration-200"
          >
            About
          </Link>
          <div className="navbar-item">
            <ModeToggle />
          </div>
          <Button asChild className="navbar-item hover:scale-105 transition-transform duration-200">
            <Link href="/analyze">Get Started</Link>
          </Button>
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <div className="navbar-item">
            <ModeToggle />
          </div>
          <button
            className="flex items-center justify-center rounded-md p-2 navbar-item"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary mobile-menu-item"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/analyze"
              className="text-sm font-medium transition-colors hover:text-primary mobile-menu-item"
              onClick={() => setIsMenuOpen(false)}
            >
              Analyze
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary mobile-menu-item"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button asChild className="w-full mobile-menu-item">
              <Link href="/analyze" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
