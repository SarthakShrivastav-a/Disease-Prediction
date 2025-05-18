"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Activity, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Footer animation
    const footerElements = footerRef.current?.querySelectorAll(".footer-item")
    gsap.fromTo(
      footerElements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        ease: "power2.out",
      },
    )

    // Social icons hover effect
    const socialIcons = document.querySelectorAll(".social-icon")
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          rotate: 5,
          duration: 0.3,
          ease: "back.out(1.7)",
        })
      })
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    // Footer links hover effect
    const footerLinks = document.querySelectorAll(".footer-link")
    footerLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          x: 5,
          duration: 0.3,
          ease: "power2.out",
        })
      })
      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Remove event listeners
      socialIcons.forEach((icon) => {
        icon.removeEventListener("mouseenter", () => {})
        icon.removeEventListener("mouseleave", () => {})
      })

      footerLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => {})
        link.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return (
    <footer className="border-t" ref={footerRef}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 footer-item">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Nirogya</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Using advanced AI technology to provide personalized health insights and analysis, helping you make
              informed decisions about your wellbeing.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="social-icon text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/SarthakShrivastav-a"
                className="social-icon text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sarthak-shrivastava-45b678297/"
                className="social-icon text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="footer-item">
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="footer-link text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/analyze"
                  className="footer-link text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Analyze Symptoms
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="footer-link text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@Nirogya.io"
                  className="footer-link hover:text-primary transition-colors inline-block"
                >
                  info@Nirogya.io
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="footer-link text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="footer-link text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t footer-item">
          <p className="text-center text-sm text-muted-foreground">Nirogya</p>
        </div>
      </div>
    </footer>
  )
}
