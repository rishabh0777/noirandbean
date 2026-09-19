import { useState } from "react";
import { ArrowUpRight, Copy, Check, MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface VisitUsProps {
  onContactClick: () => void;
}

export function VisitUs({ onContactClick }: VisitUsProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(siteConfig.address.formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="visit"
      className="py-24 sm:py-32 md:py-40 bg-[#FCFAF6] border-b border-[#171412]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="w-8 h-[1px] bg-[#C4A482]" />
          <span className="text-[11px] tracking-[0.25em] text-[#695D54] uppercase font-semibold">
            Section 08 / Location & Hours
          </span>
        </div>

        {/* Minimal Layout: Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#8E8075]">
              {siteConfig.visit.subheading}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#171412] tracking-tight">
              {siteConfig.visit.title}
            </h2>
            <p className="text-[#695D54] text-base leading-relaxed font-light max-w-md">
              Situated in the heart of SoHo on historic Mercer Street. Natural light, curated acoustics, and unhurried hospitality await you.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3.5 bg-[#171412] text-[#F8F5EE] text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300 hover:bg-[#332C27]"
              >
                <span className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              <button
                onClick={onContactClick}
                className="group inline-flex items-center justify-center px-6 py-3.5 border border-[#171412] text-[#171412] text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 hover:bg-[#171412] hover:text-[#F8F5EE]"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right: Detailed Minimal Specifications */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 border-t sm:border-t-0 sm:border-l border-[#171412]/10 pt-8 sm:pt-0 sm:pl-10 lg:pl-14">
            {/* Address */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8E8075]">
                <MapPin className="w-4 h-4 text-[#C4A482]" />
                <span className="text-[11px] font-mono tracking-widest uppercase">
                  Address
                </span>
              </div>
              <p className="font-serif text-2xl text-[#171412]">
                {siteConfig.address.street}
              </p>
              <p className="text-sm text-[#695D54]">
                {siteConfig.address.neighborhood}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
              <button
                onClick={copyAddress}
                className="inline-flex items-center gap-1.5 text-xs text-[#8E8075] hover:text-[#171412] transition-colors font-mono pt-1"
                aria-label="Copy address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy address</span>
                  </>
                )}
              </button>
            </div>

            {/* Opening Hours */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8E8075]">
                <Clock className="w-4 h-4 text-[#C4A482]" />
                <span className="text-[11px] font-mono tracking-widest uppercase">
                  Opening Hours
                </span>
              </div>
              <div className="space-y-1 text-sm text-[#25201D]">
                <p className="font-medium text-[#171412]">
                  {siteConfig.openingHours.weekdays}
                </p>
                <p className="font-medium text-[#171412]">
                  {siteConfig.openingHours.weekends}
                </p>
                <p className="text-xs text-[#8E8075] pt-1">
                  {siteConfig.openingHours.kitchen}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8E8075]">
                <Phone className="w-4 h-4 text-[#C4A482]" />
                <span className="text-[11px] font-mono tracking-widest uppercase">
                  Phone
                </span>
              </div>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="font-serif text-xl text-[#171412] hover:text-[#C4A482] transition-colors block"
              >
                {siteConfig.phone}
              </a>
              <p className="text-xs text-[#695D54]">
                Available during open business hours for reservations & orders.
              </p>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8E8075]">
                <Mail className="w-4 h-4 text-[#C4A482]" />
                <span className="text-[11px] font-mono tracking-widest uppercase">
                  Concierge
                </span>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-serif text-xl text-[#171412] hover:text-[#C4A482] transition-colors block break-all"
              >
                {siteConfig.email}
              </a>
              <p className="text-xs text-[#695D54]">
                General inquiries, private events & wholesale orders.
              </p>
            </div>

            {/* Transit & Accessibility Note */}
            <div className="sm:col-span-2 pt-4 border-t border-[#171412]/10 space-y-1 text-xs text-[#695D54]">
              <p>
                <strong className="text-[#171412] font-medium">Transit: </strong>
                {siteConfig.visit.transitInfo}
              </p>
              <p>
                <strong className="text-[#171412] font-medium">Seating: </strong>
                {siteConfig.visit.seatingPolicy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
