import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "../data/siteConfig";
import { siteImages } from "../data/images";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Subtle GSAP Parallax: image moves slightly (-8% to +8%) during scrolling
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Fade-in text overlay gently
      gsap.from(textContentRef.current, {
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-28 sm:py-36 md:py-48 overflow-hidden bg-[#171412] text-[#F8F5EE]"
    >
      {/* Background Image with Parallax Movement */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src={siteImages.experience.url}
          alt={siteImages.experience.alt}
          className="w-full h-[120%] -top-[10%] object-cover object-center relative filter brightness-75 contrast-95"
          loading="lazy"
        />
        {/* Deep espresso tint and gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171412]/90 via-[#171412]/60 to-[#171412]/80" />
        <div className="absolute inset-0 bg-[#171412]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div ref={textContentRef} className="max-w-3xl space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C4A482]" />
            <span className="text-[11px] tracking-[0.25em] text-[#C4A482] uppercase font-semibold">
              Section 04 / Experience
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FAF8F5]">
            {siteConfig.experience.heading}
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#EFE9DE] font-normal leading-relaxed border-l-2 border-[#C4A482] pl-6">
            "{siteConfig.experience.quote}"
          </p>

          <div className="space-y-4 pt-4 text-[#DCD4C7] font-light text-base sm:text-lg leading-relaxed">
            {siteConfig.experience.bodyParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#FAF8F5]/15">
            {siteConfig.experience.pillars.map((pillar, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-[10px] tracking-widest text-[#C4A482] font-mono uppercase">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="font-serif text-lg text-[#FAF8F5] font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#8E8075] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
