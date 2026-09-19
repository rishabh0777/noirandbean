import { useRef, useEffect } from "react";
import gsap from "gsap";
import { siteImages } from "../data/images";

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".gallery-item");
      if (items) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="py-24 sm:py-32 md:py-40 bg-[#F8F5EE] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Header with intentional generous whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C4A482]" />
              <span className="text-[11px] tracking-[0.25em] text-[#695D54] uppercase font-semibold">
                Section 05 / Visual Journal
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#171412] tracking-tight">
              Life at Mercer Street
            </h2>
          </div>
          <p className="text-sm text-[#695D54] font-light max-w-sm md:text-right leading-relaxed">
            Quiet rituals captured in natural morning light. Glimpses into our craft, materials, and community.
          </p>
        </div>

        {/* Asymmetric Editorial Grid (Intentional proportions and whitespace) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Item 1: Large portrait (span 7) */}
          <div className="gallery-item md:col-span-7 group relative overflow-hidden bg-[#EFE9DE]">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={siteImages.gallery[0].url}
                alt={siteImages.gallery[0].alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 sm:p-8 flex flex-col justify-end text-[#F8F5EE]" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] tracking-widest font-mono text-[#C4A482] uppercase block mb-1">
                  {siteImages.gallery[0].category}
                </span>
                <p className="font-serif text-xl sm:text-2xl font-light">
                  {siteImages.gallery[0].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Item 2: Landscape medium (span 5) */}
          <div className="gallery-item md:col-span-5 group relative overflow-hidden bg-[#EFE9DE] md:mt-16">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={siteImages.gallery[1].url}
                alt={siteImages.gallery[1].alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end text-[#F8F5EE]" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] tracking-widest font-mono text-[#C4A482] uppercase block mb-1">
                  {siteImages.gallery[1].category}
                </span>
                <p className="font-serif text-lg font-light">
                  {siteImages.gallery[1].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: Square detail (span 4) */}
          <div className="gallery-item md:col-span-4 group relative overflow-hidden bg-[#EFE9DE]">
            <div className="aspect-square overflow-hidden">
              <img
                src={siteImages.gallery[2].url}
                alt={siteImages.gallery[2].alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end text-[#F8F5EE]" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] tracking-widest font-mono text-[#C4A482] uppercase block mb-1">
                  {siteImages.gallery[2].category}
                </span>
                <p className="font-serif text-lg font-light">
                  {siteImages.gallery[2].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Item 4: Tall vertical (span 4) */}
          <div className="gallery-item md:col-span-4 group relative overflow-hidden bg-[#EFE9DE] md:-mt-12">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={siteImages.gallery[3].url}
                alt={siteImages.gallery[3].alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end text-[#F8F5EE]" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] tracking-widest font-mono text-[#C4A482] uppercase block mb-1">
                  {siteImages.gallery[3].category}
                </span>
                <p className="font-serif text-lg font-light">
                  {siteImages.gallery[3].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Item 5: Compact portrait (span 4) */}
          <div className="gallery-item md:col-span-4 group relative overflow-hidden bg-[#EFE9DE]">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={siteImages.gallery[4].url}
                alt={siteImages.gallery[4].alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end text-[#F8F5EE]" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] tracking-widest font-mono text-[#C4A482] uppercase block mb-1">
                  {siteImages.gallery[4].category}
                </span>
                <p className="font-serif text-lg font-light">
                  {siteImages.gallery[4].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
