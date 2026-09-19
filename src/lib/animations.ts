import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register GSAP ScrollTrigger plugin once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initializes Lenis smooth scrolling and synchronizes it with GSAP ScrollTrigger.
 * Respects user's prefers-reduced-motion preference.
 */
export function useLenisScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // In reduced motion mode, rely on standard native scrolling
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize GSAP ticker with Lenis
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}

/**
 * Scroll to target smoothly using Lenis or native scroll fallback
 */
export function scrollToTarget(target: string | HTMLElement, offset: number = -80) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({
    top: Math.max(0, y),
    behavior: "smooth",
  });
}
