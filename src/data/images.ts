/**
 * Curated high-resolution imagery for NOIR & BEAN.
 * Carefully selected for warm ivory, deep espresso, rich timber, and natural daylight aesthetics.
 * Replaceable at any time for another café commercial brand.
 */

export interface CafeImage {
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export const siteImages = {
  // Hero cinematic imagery
  hero: {
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85",
    alt: "Warm minimalist café counter with espresso machine and soft morning light",
    caption: "The flagship counter on Mercer St.",
  },

  // Intro section side image
  intro: {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    alt: "Ceramic cup of freshly brewed artisan flat white with delicate foam art",
    caption: "Single-origin Ethiopian Yirgacheffe",
  },

  // Experience large parallax feature
  experience: {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85",
    alt: "Calm, spacious café interior with timber benches, warm lighting and quiet patrons",
    caption: "A sanctuary crafted for quiet thought and conversation",
  },

  // Final CTA banner
  finalCta: {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=85",
    alt: "Cozy corner table with pour-over coffee and morning light",
    caption: "Table 04, bathed in morning amber",
  },

  // Menu item preview images
  menu: {
    espresso: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    pourover: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    cortado: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    coldBrew: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    avocadoTartine: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    croqueMonsieur: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    cannele: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    oliveOilCake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },

  // Gallery images with varying aspect ratios for asymmetric editorial layout
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
      alt: "Barista precisely pouring steaming water into a V60 ceramic dripper",
      caption: "Precision in every pour",
      aspectRatio: "aspect-[4/5]",
      category: "Craft",
    },
    {
      url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
      alt: "Architectural corner with oak shelving and Japanese ceramic cups",
      caption: "Custom ceramic ware by Studio Kinto",
      aspectRatio: "aspect-[16/10]",
      category: "Design",
    },
    {
      url: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
      alt: "Freshly pulled espresso with rich hazelnut crema",
      caption: "Our seasonal Noir Blend No. 3",
      aspectRatio: "aspect-[1/1]",
      category: "Origin",
    },
    {
      url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=85",
      alt: "Golden morning light filtering through café window with newspapers",
      caption: "Slow mornings on Mercer",
      aspectRatio: "aspect-[3/4]",
      category: "Atmosphere",
    },
    {
      url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85",
      alt: "Fresh golden pastries cooling on baker's wire rack",
      caption: "Small-batch viennoiserie, baked 6am daily",
      aspectRatio: "aspect-[4/5]",
      category: "Bakery",
    },
    {
      url: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=85",
      alt: "Table setting with open book, warm espresso and linen napkin",
      caption: "Space for quiet rituals",
      aspectRatio: "aspect-[16/11]",
      category: "Lifestyle",
    },
  ],

  // Contact page visual representation
  contact: {
    hero: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=85",
    alt: "Exterior façade of NOIR & BEAN with warm glowing sign and brass details",
  },
};
