import { siteConfig } from "../../data/siteConfig";

export function ContactHero() {
  return (
    <section className="pt-36 sm:pt-44 pb-12 sm:pb-16 bg-[#F8F5EE] border-b border-[#171412]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C4A482]" />
            <span className="text-[11px] tracking-[0.25em] text-[#695D54] uppercase font-semibold">
              Get in Touch
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#171412] tracking-tight">
            {siteConfig.contact.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl text-[#695D54] font-light max-w-2xl leading-relaxed">
            {siteConfig.contact.heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
