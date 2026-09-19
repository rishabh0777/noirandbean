import { MapPin, Clock, Phone, Mail, Navigation, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export function ContactInfo() {
  return (
    <div className="space-y-10">
      {/* Visual Stylized Map Card */}
      <div className="relative border border-[#171412]/10 bg-[#EFE9DE] overflow-hidden">
        {/* Stylized Architectural Map Graphic */}
        <div className="h-64 sm:h-72 relative bg-[#E8E1D5] flex items-center justify-center overflow-hidden">
          {/* Grid lines simulating Soho street plan */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#171412_1px,transparent_1px),linear-gradient(to_bottom,#171412_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Stylized Street Lines */}
          <div className="absolute w-full h-8 bg-[#DCD4C7] top-1/2 -translate-y-1/2 transform -rotate-6" />
          <div className="absolute h-full w-8 bg-[#DCD4C7] left-1/2 -translate-x-1/2 transform rotate-12" />

          {/* Central Pin */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#171412] text-[#F8F5EE] flex items-center justify-center shadow-xl animate-bounce">
              <MapPin className="w-5 h-5 text-[#C4A482]" />
            </div>
            <span className="mt-2 px-3 py-1 bg-[#171412] text-[#F8F5EE] text-[10px] font-mono tracking-widest uppercase">
              NOIR & BEAN • 428 MERCER
            </span>
          </div>

          {/* Coordinates Tag */}
          <div className="absolute bottom-3 left-3 bg-[#F8F5EE]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-[#695D54]">
            40.7243° N, 73.9972° W • SOHO
          </div>
        </div>

        {/* Action strip under map */}
        <div className="p-4 bg-[#FCFAF6] border-t border-[#171412]/10 flex items-center justify-between">
          <span className="text-xs text-[#695D54]">
            3 min walk from Prince St / Spring St
          </span>
          <a
            href={siteConfig.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171412] hover:text-[#C4A482] transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            Open Google Maps
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
        {/* Address */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#8E8075]">
            <MapPin className="w-4 h-4 text-[#C4A482]" />
            <span className="text-[11px] font-mono tracking-widest uppercase">
              Location
            </span>
          </div>
          <p className="font-serif text-xl text-[#171412]">
            {siteConfig.address.street}
          </p>
          <p className="text-xs text-[#695D54] leading-relaxed">
            {siteConfig.address.neighborhood}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
          </p>
        </div>

        {/* Hours */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#8E8075]">
            <Clock className="w-4 h-4 text-[#C4A482]" />
            <span className="text-[11px] font-mono tracking-widest uppercase">
              Hours
            </span>
          </div>
          <p className="text-xs text-[#171412] font-medium">
            {siteConfig.openingHours.weekdays}
          </p>
          <p className="text-xs text-[#171412] font-medium">
            {siteConfig.openingHours.weekends}
          </p>
          <p className="text-[11px] text-[#8E8075] pt-0.5">
            {siteConfig.openingHours.kitchen}
          </p>
        </div>

        {/* Direct Contacts */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#8E8075]">
            <Phone className="w-4 h-4 text-[#C4A482]" />
            <span className="text-[11px] font-mono tracking-widest uppercase">
              Telephone
            </span>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="font-serif text-lg text-[#171412] hover:text-[#C4A482] transition-colors block"
          >
            {siteConfig.phone}
          </a>
          <p className="text-[11px] text-[#8E8075]">
            Daily inquiries & table availability
          </p>
        </div>

        {/* Concierge Email */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#8E8075]">
            <Mail className="w-4 h-4 text-[#C4A482]" />
            <span className="text-[11px] font-mono tracking-widest uppercase">
              Electronic Mail
            </span>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-serif text-lg text-[#171412] hover:text-[#C4A482] transition-colors block break-all"
          >
            {siteConfig.email}
          </a>
          <p className="text-[11px] text-[#8E8075]">
            Event rentals, roastery, & media
          </p>
        </div>
      </div>

      {/* Socials & Media */}
      <div className="p-6 bg-[#F8F5EE] border border-[#171412]/10 space-y-3">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#8E8075] block">
          Channels & Soundtracks
        </span>
        <div className="flex flex-wrap gap-6 text-xs text-[#171412]">
          <a
            href={siteConfig.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C4A482] transition-colors inline-flex items-center gap-1 font-medium"
          >
            Instagram <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={siteConfig.socialLinks.journal}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C4A482] transition-colors inline-flex items-center gap-1 font-medium"
          >
            The Slow Journal <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={siteConfig.socialLinks.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C4A482] transition-colors inline-flex items-center gap-1 font-medium"
          >
            Café Spotify Sessions <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
