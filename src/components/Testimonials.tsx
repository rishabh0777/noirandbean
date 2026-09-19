import { useRef, useEffect } from "react";
import gsap from "gsap";
import { siteConfig } from "../data/siteConfig";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".testimonial-item");
      if (items) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 35,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-24 sm:py-32 md:py-40 bg-[#F8F5EE] border-b border-[#171412]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16 sm:mb-20">
          <span className="w-8 h-[1px] bg-[#C4A482]" />
          <span className="text-[11px] tracking-[0.25em] text-[#695D54] uppercase font-semibold">
            Section 07 / Editorial Praise
          </span>
        </div>

        {/* 3 Testimonials: Premium Typography & Spacing, NO huge cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {siteConfig.testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="testimonial-item flex flex-col justify-between space-y-8"
            >
              <div>
                <span className="font-mono text-xs text-[#C4A482] block mb-4">
                  0{idx + 1}
                </span>
                <p className="font-serif text-xl sm:text-2xl text-[#171412] font-normal leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#171412]/10">
                <p className="font-medium text-sm text-[#171412] tracking-wide">
                  {t.author}
                </p>
                <p className="text-xs text-[#695D54] tracking-wider mt-0.5">
                  {t.role} • <span className="italic text-[#8E8075]">{t.outletOrCity}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
