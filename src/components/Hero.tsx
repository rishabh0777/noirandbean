import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
  isReadyToAnimate?: boolean;
}

export function Hero({ onExploreMenu, onVisitUs, isReadyToAnimate = true }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const supportingRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isReadyToAnimate) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const words = headingRef.current?.querySelectorAll(".hero-word");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Hero image reveal using clip-path
      tl.fromTo(
        imageWrapperRef.current,
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.2,
          ease: "expo.inOut",
        }
      )
        .fromTo(
          imageRef.current,
          { scale: 1.15, filter: "brightness(0.7)" },
          { scale: 1, filter: "brightness(0.85)", duration: 1.6, ease: "power2.out" },
          "-=1.1"
        )
        // 2. Eyebrow reveal
        .fromTo(
          eyebrowRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.9"
        )
        // 3. Heading words reveal with stagger
        .fromTo(
          words || [],
          { y: 40, opacity: 0, rotate: 1.5 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.7"
        )
        // 4. Supporting text fades/slides in
        .fromTo(
          supportingRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        // 5. CTA buttons reveal
        .fromTo(
          ctaGroupRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        // 6. Scroll indicator
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isReadyToAnimate]);

  // Split heading into words for staggered animation
  const headingWords = siteConfig.hero.heading.split(" ");

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-12 sm:pb-16 md:pb-24 pt-28 sm:pt-36 overflow-hidden"
    >
      {/* Cinematic Background Image with Clip-Path Reveal */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 z-0 overflow-hidden bg-[#171412]"
      >
        <img
          ref={imageRef}
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          className="w-full h-full object-cover object-center transform"
          loading="eager"
          decoding="async"
        />
        {/* Editorial gradient overlays for legibility and warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/90 via-[#171412]/40 to-[#171412]/30" />
        <div className="absolute inset-0 bg-[#171412]/20 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
        <div className="max-w-3xl text-[#F8F5EE]">
          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            id="hero-eyebrow"
            className="text-[11px] sm:text-xs tracking-[0.25em] text-[#C4A482] uppercase font-medium mb-4 sm:mb-6"
          >
            {siteConfig.hero.eyebrow}
          </p>

          {/* Heading with staggered words */}
          <h1
            ref={headingRef}
            id="hero-heading"
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-light leading-[1.05] tracking-tight mb-6 sm:mb-8 text-[#FAF8F5]"
          >
            {headingWords.map((word, index) => (
              <span
                key={index}
                className="hero-word inline-block mr-[0.25em] origin-bottom"
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Supporting Text */}
          <p
            ref={supportingRef}
            id="hero-supporting"
            className="text-base sm:text-lg md:text-xl text-[#DCD4C7] font-light leading-relaxed max-w-xl mb-8 sm:mb-10"
          >
            {siteConfig.hero.supporting}
          </p>

          {/* CTA Group */}
          <div
            ref={ctaGroupRef}
            id="hero-cta-group"
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            {/* Primary CTA */}
            <button
              id="hero-primary-cta"
              onClick={onExploreMenu}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#C4A482] text-[#171412] text-xs sm:text-[13px] tracking-[0.18em] uppercase font-semibold overflow-hidden transition-all duration-300 hover:bg-[#FAF8F5] shadow-lg"
            >
              <span className="relative flex items-center gap-2">
                {siteConfig.hero.primaryCtaText}
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              id="hero-secondary-cta"
              onClick={onVisitUs}
              className="group relative inline-flex items-center justify-center px-8 py-4 border border-[#F8F5EE]/40 text-[#F8F5EE] text-xs sm:text-[13px] tracking-[0.18em] uppercase font-medium transition-all duration-300 hover:border-[#F8F5EE] hover:bg-[#F8F5EE]/10"
            >
              <span className="relative flex items-center gap-2">
                {siteConfig.hero.secondaryCtaText}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          id="hero-scroll-indicator"
          className="hidden lg:flex items-center gap-3 absolute bottom-8 right-8 text-[#FAF8F5]/60 text-[11px] uppercase tracking-[0.2em]"
        >
          <span>Scroll to uncover</span>
          <div className="w-12 h-[1px] bg-[#FAF8F5]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#C4A482] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
