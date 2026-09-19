import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "../data/siteConfig";
import { siteImages } from "../data/images";

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal heading on scroll
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Reveal text content
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      // Reveal image card with subtle scale
      gsap.from(imageCardRef.current, {
        scrollTrigger: {
          trigger: imageCardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "power2.out",
      });

      // Reveal points stagger
      const pointItems = pointsRef.current?.querySelectorAll(".curation-point");
      if (pointItems) {
        gsap.from(pointItems, {
          scrollTrigger: {
            trigger: pointsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-32 md:py-40 bg-[#F8F5EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-8 h-[1px] bg-[#C4A482]" />
          <span className="text-[11px] tracking-[0.25em] text-[#695D54] uppercase font-semibold">
            Section 02 / Introduction
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Editorial Heading */}
          <div className="lg:col-span-7 space-y-8">
            <h2
              ref={headingRef}
              id="intro-heading"
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-[#171412] tracking-tight whitespace-pre-line"
            >
              {"Made for slow mornings,\nlong conversations\nand better coffee."}
            </h2>

            <div ref={textRef} className="space-y-6 pt-4 max-w-2xl">
              <p className="text-lg sm:text-xl text-[#25201D] font-light leading-relaxed">
                {siteConfig.intro.description}
              </p>
              <p className="text-sm sm:text-base text-[#695D54] leading-relaxed font-light">
                {siteConfig.intro.secondaryText}
              </p>
            </div>

            {/* 3 Editorial Curation Points */}
            <div
              ref={pointsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#171412]/10"
            >
              {siteConfig.intro.curationPoints.map((point) => (
                <div key={point.number} className="curation-point space-y-2">
                  <span className="font-mono text-xs tracking-widest text-[#C4A482] block">
                    {point.number}
                  </span>
                  <h3 className="font-serif text-lg text-[#171412] font-medium leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[#695D54] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Small Editorial Image & Contextual Detail */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div
              ref={imageCardRef}
              id="intro-image-wrapper"
              className="relative w-full max-w-md group"
            >
              <div className="relative overflow-hidden bg-[#EFE9DE] aspect-[4/5] shadow-[0_16px_40px_rgba(23,20,18,0.06)]">
                <img
                  src={siteImages.intro.url}
                  alt={siteImages.intro.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Editorial Caption Tag */}
              <div className="mt-4 flex items-center justify-between text-[11px] tracking-wider text-[#695D54]">
                <span className="font-mono uppercase">Batch Extraction No. 84</span>
                <span className="italic font-serif text-xs text-[#25201D]">
                  {siteImages.intro.caption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
