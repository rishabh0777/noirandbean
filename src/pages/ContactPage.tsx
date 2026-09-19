import { useEffect } from "react";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";

export function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main id="contact-page-content" className="w-full bg-[#F8F5EE] min-h-screen">
      <ContactHero />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Contact Form (Span 7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Location, Map Graphic, Hours, Socials (Span 5) */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>

        {/* Informational Guidance Band */}
        <div className="mt-20 pt-12 border-t border-[#171412]/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#695D54]">
          <div className="space-y-2">
            <h4 className="font-serif text-base text-[#171412] font-medium">
              Table Reservations
            </h4>
            <p className="leading-relaxed">
              We operate primarily on a welcoming walk-in basis. For parties of 6 or more for weekend brunch, please send a message 48 hours in advance.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-base text-[#171412] font-medium">
              Private Evening Bookings
            </h4>
            <p className="leading-relaxed">
              Our SoHo space is available for intimate private dinners, brand presentations, and cultural gatherings after 19:00.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-base text-[#171412] font-medium">
              Wholesale & Roastery
            </h4>
            <p className="leading-relaxed">
              We provide micro-lot roasted whole beans and custom barista education for specialty cafes, boutique hotels, and design studios.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
