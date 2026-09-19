import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, Clock, MapPin } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface NavbarProps {
  currentPage: "home" | "contact";
  onNavigate: (page: "home" | "contact", sectionId?: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Transparent at top, background blur after scrolling 40px
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide smoothly when scrolling down, reveal when scrolling up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current + 10) {
          setIsVisible(false); // scrolling down
        } else if (currentScrollY < lastScrollY.current - 5) {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (page: "home" | "contact", sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#F8F5EE]/90 backdrop-blur-md border-b border-[#171412]/8 py-3 sm:py-4 shadow-[0_4px_20px_rgba(23,20,18,0.03)]"
          : "bg-transparent py-5 sm:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-brand-logo"
          onClick={() => handleLinkClick("home")}
          className="group flex flex-col items-start text-left focus:outline-none"
          aria-label={`${siteConfig.name} Home`}
        >
          <span className="font-serif text-xl sm:text-2xl tracking-[0.12em] font-medium text-[#171412] group-hover:text-[#695D54] transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[9px] tracking-[0.28em] text-[#8E8075] uppercase -mt-0.5">
            Specialty Coffee & Kitchen
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav-menu"
          className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.15em] uppercase font-medium text-[#25201D]"
          aria-label="Main Navigation"
        >
          <button
            id="nav-link-home"
            onClick={() => handleLinkClick("home")}
            className={`editorial-link transition-colors ${
              currentPage === "home" ? "text-[#171412] font-semibold" : "text-[#695D54] hover:text-[#171412]"
            }`}
          >
            Home
          </button>
          <button
            id="nav-link-about"
            onClick={() => handleLinkClick("home", "about")}
            className="editorial-link text-[#695D54] hover:text-[#171412] transition-colors"
          >
            About
          </button>
          <button
            id="nav-link-menu"
            onClick={() => handleLinkClick("home", "menu")}
            className="editorial-link text-[#695D54] hover:text-[#171412] transition-colors"
          >
            Menu
          </button>
          <button
            id="nav-link-experience"
            onClick={() => handleLinkClick("home", "experience")}
            className="editorial-link text-[#695D54] hover:text-[#171412] transition-colors"
          >
            Experience
          </button>
          <button
            id="nav-link-gallery"
            onClick={() => handleLinkClick("home", "gallery")}
            className="editorial-link text-[#695D54] hover:text-[#171412] transition-colors"
          >
            Gallery
          </button>
          <button
            id="nav-link-contact"
            onClick={() => handleLinkClick("contact")}
            className={`editorial-link transition-colors ${
              currentPage === "contact" ? "text-[#171412] font-semibold" : "text-[#695D54] hover:text-[#171412]"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-cta-visit"
            onClick={() => handleLinkClick("home", "visit")}
            className="group relative inline-flex items-center justify-center px-5 py-2 text-[12px] tracking-[0.18em] uppercase font-medium border border-[#171412] text-[#171412] overflow-hidden transition-all duration-300 hover:text-[#F8F5EE]"
          >
            <span className="absolute inset-0 w-full h-full bg-[#171412] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-1.5 z-10">
              Visit Us
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#171412] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Navigation */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 top-0 left-0 w-full h-screen bg-[#171412] text-[#F8F5EE] z-50 flex flex-col justify-between px-6 py-8 transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#332C27] pb-6">
          <button
            onClick={() => handleLinkClick("home")}
            className="font-serif text-2xl tracking-wider text-[#F8F5EE]"
          >
            {siteConfig.name}
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-[#C4A482] hover:text-[#F8F5EE] focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 my-auto text-left" aria-label="Mobile Navigation">
          <button
            onClick={() => handleLinkClick("home")}
            className="font-serif text-3xl sm:text-4xl tracking-wide text-[#F8F5EE] hover:text-[#C4A482] transition-colors text-left flex items-center justify-between border-b border-[#25201D] pb-3"
          >
            <span>Home</span>
            <span className="text-xs font-sans tracking-widest text-[#8E8075]">01</span>
          </button>
          <button
            onClick={() => handleLinkClick("home", "about")}
            className="font-serif text-3xl sm:text-4xl tracking-wide text-[#F8F5EE] hover:text-[#C4A482] transition-colors text-left flex items-center justify-between border-b border-[#25201D] pb-3"
          >
            <span>About</span>
            <span className="text-xs font-sans tracking-widest text-[#8E8075]">02</span>
          </button>
          <button
            onClick={() => handleLinkClick("home", "menu")}
            className="font-serif text-3xl sm:text-4xl tracking-wide text-[#F8F5EE] hover:text-[#C4A482] transition-colors text-left flex items-center justify-between border-b border-[#25201D] pb-3"
          >
            <span>Menu</span>
            <span className="text-xs font-sans tracking-widest text-[#8E8075]">03</span>
          </button>
          <button
            onClick={() => handleLinkClick("home", "experience")}
            className="font-serif text-3xl sm:text-4xl tracking-wide text-[#F8F5EE] hover:text-[#C4A482] transition-colors text-left flex items-center justify-between border-b border-[#25201D] pb-3"
          >
            <span>Experience</span>
            <span className="text-xs font-sans tracking-widest text-[#8E8075]">04</span>
          </button>
          <button
            onClick={() => handleLinkClick("home", "gallery")}
            className="font-serif text-3xl sm:text-4xl tracking-wide text-[#F8F5EE] hover:text-[#C4A482] transition-colors text-left flex items-center justify-between border-b border-[#25201D] pb-3"
          >
            <span>Gallery</span>
            <span className="text-xs font-sans tracking-widest text-[#8E8075]">05</span>
          </button>
          <button
            onClick={() => handleLinkClick("contact")}
            className="font-serif text-3xl sm:text-4xl tracking-wide text-[#F8F5EE] hover:text-[#C4A482] transition-colors text-left flex items-center justify-between border-b border-[#25201D] pb-3"
          >
            <span>Contact</span>
            <span className="text-xs font-sans tracking-widest text-[#8E8075]">06</span>
          </button>
        </nav>

        <div className="space-y-4 pt-4 border-t border-[#332C27] text-xs text-[#C4A482]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0 text-[#8E8075]" />
            <span className="text-[#EFE9DE]">{siteConfig.address.formatted}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0 text-[#8E8075]" />
            <span className="text-[#EFE9DE]">{siteConfig.openingHours.weekdays}</span>
          </div>
          <button
            onClick={() => handleLinkClick("home", "visit")}
            className="w-full mt-2 py-3 bg-[#C4A482] text-[#171412] text-xs uppercase tracking-[0.2em] font-semibold text-center hover:bg-[#B5936F] transition-colors"
          >
            Visit Our Space
          </button>
        </div>
      </div>
    </header>
  );
}
