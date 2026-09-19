import { ArrowUpRight, Navigation } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { siteImages } from "../data/images";

interface FinalCTAProps {
  onContactClick: () => void;
}

export function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      className="relative py-28 sm:py-36 md:py-44 bg-[#171412] text-[#F8F5EE] overflow-hidden"
    >
      {/* Background Image with warm dark treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteImages.finalCta.url}
          alt={siteImages.finalCta.alt}
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171412] via-[#171412]/60 to-[#171412]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-[11px] tracking-[0.3em] text-[#C4A482] uppercase font-mono block mb-4">
          A Warm Welcome Awaits
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF8F5] tracking-tight mb-6 sm:mb-8">
          {siteConfig.finalCta.heading}
        </h2>

        <p className="text-base sm:text-xl text-[#DCD4C7] font-light max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          {siteConfig.finalCta.subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={siteConfig.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#C4A482] text-[#171412] text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:bg-[#FAF8F5] shadow-lg"
          >
            <span className="flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              {siteConfig.finalCta.primaryBtn}
            </span>
          </a>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-[#F8F5EE]/40 text-[#F8F5EE] text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:border-[#FAF8F5] hover:bg-[#FAF8F5]/10"
          >
            <span className="flex items-center gap-2">
              {siteConfig.finalCta.secondaryBtn}
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
