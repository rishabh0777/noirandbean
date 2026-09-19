import { useState } from "react";
import { ArrowUpRight, Check, ArrowUp } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface FooterProps {
  onNavigate: (page: "home" | "contact", sectionId?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#171412] text-[#F8F5EE] pt-20 sm:pt-24 pb-12 border-t border-[#332C27]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Top Tier: Brand, Navigation & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#FAF8F5]/10">
          {/* Brand & Blurb (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-wider text-[#FAF8F5] font-light">
                {siteConfig.name}
              </h3>
              <p className="text-[10px] tracking-[0.25em] text-[#C4A482] uppercase mt-1 font-mono">
                {siteConfig.tagline}
              </p>
            </div>
            <p className="text-sm text-[#8E8075] font-light leading-relaxed max-w-sm">
              {siteConfig.footer.blurb}
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-serif text-[#FAF8F5] block mb-1">
                {siteConfig.footer.newsletterTitle}
              </span>
              <p className="text-[11px] text-[#8E8075] mb-3">
                {siteConfig.footer.newsletterSub}
              </p>
              <form onSubmit={handleSubscribe} className="flex max-w-sm">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-[#25201D] border border-[#332C27] px-3.5 py-2.5 text-xs text-[#FAF8F5] placeholder:text-[#695D54] focus:outline-none focus:border-[#C4A482]"
                />
                <button
                  type="submit"
                  className="px-4 bg-[#C4A482] text-[#171412] text-[11px] font-mono tracking-widest uppercase font-semibold hover:bg-[#FAF8F5] transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : "Join"}
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-[#C4A482] font-mono mt-1.5 block animate-fadeIn">
                  Thank you. You are enrolled in the next dispatch.
                </span>
              )}
            </div>
          </div>

          {/* Navigation Links (Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] tracking-[0.25em] text-[#C4A482] uppercase font-mono block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#DCD4C7]">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "about")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  About & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "menu")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Seasonal Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "experience")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  The Atmosphere
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "gallery")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Visual Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Business Hours & Contact (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] tracking-[0.25em] text-[#C4A482] uppercase font-mono block">
              Hours & Location
            </span>
            <div className="space-y-2 text-xs text-[#DCD4C7]">
              <p>{siteConfig.openingHours.weekdays}</p>
              <p>{siteConfig.openingHours.weekends}</p>
              <p className="text-[#8E8075] pt-1">{siteConfig.address.formatted}</p>
            </div>

            <div className="pt-4 space-y-1.5 text-xs">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="block text-[#DCD4C7] hover:text-[#C4A482] transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-[#DCD4C7] hover:text-[#C4A482] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#8E8075]">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1"
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.socialLinks.journal}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1"
              >
                Substack <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.socialLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1"
              >
                Soundtrack <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#695D54]">
          <p>{siteConfig.footer.copyright}</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#8E8075] hover:text-[#FAF8F5] transition-colors font-mono tracking-wider uppercase"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
