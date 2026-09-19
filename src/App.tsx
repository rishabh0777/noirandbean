import { useState, useEffect, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Preloader } from "./components/Preloader";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import { useLenisScroll, scrollToTarget } from "./lib/animations";
import { siteConfig } from "./data/siteConfig";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "contact">("home");
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Initialize smooth scrolling with Lenis + GSAP ScrollTrigger
  useLenisScroll();

  // Listen to browser URL hash or popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === "/contact" || hash === "#contact") {
        setCurrentPage("contact");
      } else {
        setCurrentPage("home");
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  // Sync document title with current view
  useEffect(() => {
    if (currentPage === "contact") {
      document.title = `Contact & Inquiries — ${siteConfig.name}`;
    } else {
      document.title = `${siteConfig.name} — Specialty Coffee & Kitchen`;
    }
  }, [currentPage]);

  const handleNavigate = useCallback((page: "home" | "contact", sectionId?: string) => {
    if (page === "contact") {
      setCurrentPage("contact");
      window.history.pushState(null, "", "#contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentPage("home");
      if (sectionId) {
        window.history.pushState(null, "", `#${sectionId}`);
        // Give time for layout render before scrolling
        setTimeout(() => {
          scrollToTarget(`#${sectionId}`, -80);
        }, 80);
      } else {
        window.history.pushState(null, "", "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
    // Remove preloader from DOM after fade out
    setTimeout(() => {
      setShowPreloader(false);
    }, 900);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#171412] font-sans">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#171412] focus:text-[#F8F5EE] focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Preloader - Runs once on initial load */}
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Persistent Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content */}
      <div id="main-content" className="flex-grow">
        {currentPage === "home" ? (
          <HomePage
            onNavigateToContact={() => handleNavigate("contact")}
            isReadyToAnimate={preloaderDone}
          />
        ) : (
          <ContactPage />
        )}
      </div>

      {/* Persistent Minimal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
