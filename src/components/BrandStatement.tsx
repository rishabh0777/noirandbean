import { useRef, useEffect } from "react";
import gsap from "gsap";
import { siteConfig } from "../data/siteConfig";

export function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subtextRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="brand-statement"
      className="py-28 sm:py-36 md:py-48 bg-[#171412] text-[#F8F5EE] relative overflow-hidden border-t border-b border-[#332C27]"
    >
      {/* Subtle radial ambient warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,164,130,0.08),transparent_65%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <span className="text-[11px] tracking-[0.3em] text-[#C4A482] uppercase font-mono block mb-8">
          The Philosophy
        </span>

        <h2
          ref={textRef}
          className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.12] tracking-tight text-[#FAF8F5] mb-8 sm:mb-10 max-w-4xl mx-auto"
        >
          "{siteConfig.brandStatement.quote}"
        </h2>

        <p
          ref={subtextRef}
          className="font-light text-base sm:text-xl text-[#DCD4C7] max-w-xl mx-auto tracking-wide"
        >
          {siteConfig.brandStatement.subtext}
        </p>

        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="w-12 h-[1px] bg-[#C4A482]/40" />
          <span className="text-[10px] tracking-[0.25em] text-[#8E8075] uppercase font-mono">
            NOIR & BEAN • SOHO
          </span>
          <span className="w-12 h-[1px] bg-[#C4A482]/40" />
        </div>
      </div>
    </section>
  );
}
