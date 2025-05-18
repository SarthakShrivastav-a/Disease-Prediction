"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export function useGSAPScroll() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // Create the smooth scroller
    const smoother = ScrollSmoother.create({
      smooth: 1.5, // Adjust smoothness (higher = smoother)
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1, // Light smoothing for touch devices
    })

    return () => {
      // Clean up
      smoother.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

export function useElementAnimation(selector: string, options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    const defaults = {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }

    gsap.fromTo(elements, { opacity: 0, y: 50 }, { ...defaults, ...options })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [selector])
}
