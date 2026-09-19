import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { Menu } from "../components/Menu";
import { Experience } from "../components/Experience";
import { Gallery } from "../components/Gallery";
import { BrandStatement } from "../components/BrandStatement";
import { Testimonials } from "../components/Testimonials";
import { VisitUs } from "../components/VisitUs";
import { FinalCTA } from "../components/FinalCTA";
import { scrollToTarget } from "../lib/animations";

interface HomePageProps {
  onNavigateToContact: () => void;
  isReadyToAnimate?: boolean;
}

export function HomePage({ onNavigateToContact, isReadyToAnimate = true }: HomePageProps) {
  const handleExploreMenu = () => {
    scrollToTarget("#menu", -70);
  };

  const handleVisitUs = () => {
    scrollToTarget("#visit", -70);
  };

  return (
    <main id="home-page-content" className="w-full">
      {/* SECTION 01 — HERO */}
      <Hero
        onExploreMenu={handleExploreMenu}
        onVisitUs={handleVisitUs}
        isReadyToAnimate={isReadyToAnimate}
      />

      {/* SECTION 02 — INTRODUCTION */}
      <Intro />

      {/* SECTION 03 — SIGNATURE MENU */}
      <Menu />

      {/* SECTION 04 — EXPERIENCE */}
      <Experience />

      {/* SECTION 05 — GALLERY */}
      <Gallery />

      {/* SECTION 06 — BRAND STATEMENT */}
      <BrandStatement />

      {/* SECTION 07 — TESTIMONIALS */}
      <Testimonials />

      {/* SECTION 08 — VISIT US */}
      <VisitUs onContactClick={onNavigateToContact} />

      {/* SECTION 09 — FINAL CTA */}
      <FinalCTA onContactClick={onNavigateToContact} />
    </main>
  );
}
