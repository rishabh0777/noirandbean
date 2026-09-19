import { siteImages } from "./images";

export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "breakfast" | "dessert";
  description: string;
  originOrNotes?: string;
  price: string;
  image: string;
  tag?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  outletOrCity: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  established: string;
  phone: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    formatted: string;
    googleMapsUrl: string;
  };
  openingHours: {
    weekdays: string;
    weekends: string;
    kitchen: string;
  };
  socialLinks: {
    instagram: string;
    journal: string;
    spotify: string;
    googleMaps: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    supporting: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    heading: string;
    description: string;
    secondaryText: string;
    curationPoints: Array<{ number: string; title: string; desc: string }>;
  };
  menu: {
    heading: string;
    subheading: string;
    categories: Array<{ id: "coffee" | "breakfast" | "dessert"; label: string }>;
    items: MenuItem[];
  };
  experience: {
    heading: string;
    quote: string;
    bodyParagraphs: string[];
    pillars: Array<{ title: string; description: string }>;
  };
  brandStatement: {
    quote: string;
    subtext: string;
  };
  testimonials: Testimonial[];
  visit: {
    subheading: string;
    title: string;
    transitInfo: string;
    seatingPolicy: string;
  };
  finalCta: {
    heading: string;
    subheading: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  footer: {
    blurb: string;
    newsletterTitle: string;
    newsletterSub: string;
    copyright: string;
  };
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    inquiryTopics: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "NOIR & BEAN",
  legalName: "Noir & Bean Specialty Roasters & Kitchen LLC",
  tagline: "Coffee worth slowing down for.",
  description: "Specialty coffee, thoughtful food and a space designed for good conversations.",
  established: "Est. 2021",
  phone: "+1 (212) 555-0194",
  email: "concierge@noirandbean.com",
  address: {
    street: "428 Mercer Street",
    neighborhood: "SoHo",
    city: "New York",
    state: "NY",
    zip: "10013",
    country: "United States",
    formatted: "428 Mercer Street, SoHo, New York, NY 10013",
    googleMapsUrl: "https://maps.google.com/?q=428+Mercer+Street+New+York+NY",
  },
  openingHours: {
    weekdays: "Monday – Friday: 07:00 – 18:00",
    weekends: "Saturday – Sunday: 08:00 – 19:00",
    kitchen: "Hot Kitchen until 15:30 daily",
  },
  socialLinks: {
    instagram: "https://instagram.com",
    journal: "https://substack.com",
    spotify: "https://spotify.com",
    googleMaps: "https://maps.google.com/?q=428+Mercer+Street+New+York+NY",
  },
  hero: {
    eyebrow: "SPECIALTY COFFEE • GOOD FOOD • SLOW MOMENTS",
    heading: "Coffee worth slowing down for.",
    supporting: "Specialty coffee, thoughtful food and a space designed for good conversations.",
    primaryCtaText: "Explore Menu",
    secondaryCtaText: "Visit Us",
    image: siteImages.hero.url,
    imageAlt: siteImages.hero.alt,
  },
  intro: {
    heading: "Made for slow mornings, long conversations and better coffee.",
    description:
      "We opened NOIR & BEAN with a quiet conviction: that the modern day moves too quickly, and that a truly exceptional cup of coffee demands time, reverence, and honest hospitality.",
    secondaryText:
      "Every bean is sustainably harvested from micro-lot farms across East Africa and Latin America, roasted lightly in small weekly batches to celebrate each origin's soil, rainfall, and heritage.",
    curationPoints: [
      {
        number: "01",
        title: "Direct Origin Partnerships",
        desc: "Sourced strictly from regenerative micro-lot farms with 100% price transparency above Fair Trade benchmarks.",
      },
      {
        number: "02",
        title: "Artisan Roasting Craft",
        desc: "Slow Scandinavian roast curves tailored to unlock bright floral top-notes, deep caramel base, and balanced acidity.",
      },
      {
        number: "03",
        title: "Architectural Serenity",
        desc: "Solid white oak, honed limestone, acoustic dampening, and warm indirect amber light for unhurried presence.",
      },
    ],
  },
  menu: {
    heading: "Signature Offerings",
    subheading: "A seasonal curation of micro-lot coffees, artisan breakfast, and house-made viennoiserie.",
    categories: [
      { id: "coffee", label: "Coffee" },
      { id: "breakfast", label: "Breakfast" },
      { id: "dessert", label: "Desserts" },
    ],
    items: [
      {
        id: "m1",
        name: "Noir Signature Reserve Espresso",
        category: "coffee",
        description: "Double extraction of heirloom Ethiopian Guji. Jasmine blossom, bergamot, dark chocolate finish.",
        originOrNotes: "Washed Process • 2,100m MASL",
        price: "$5.50",
        image: siteImages.menu.espresso,
        tag: "House Favorite",
      },
      {
        id: "m2",
        name: "Geisha Single Origin Pour-Over",
        category: "coffee",
        description: "Hand-poured V60 extraction. Delicate white peach, honeysuckle, and silken champagne body.",
        originOrNotes: "Panama Boquete • Hacienda La Esmeralda",
        price: "$11.00",
        image: siteImages.menu.pourover,
        tag: "Limited Lot",
      },
      {
        id: "m3",
        name: "Hokkaido Velvet Cortado",
        category: "coffee",
        description: "Equal parts ristretto and lightly textured organic Guernsey milk at precisely 62°C.",
        originOrNotes: "Espresso & Textured Milk • 130ml",
        price: "$6.00",
        image: siteImages.menu.cortado,
      },
      {
        id: "m4",
        name: "24-Hour Kyoto Slow Drip",
        category: "coffee",
        description: "Ice-cold filtered mountain water steeped drop by drop over 24 hours. Deep plum, roasted cacao, whiskey aroma.",
        originOrNotes: "Slow Tower Extraction • Served over hand-cut ice",
        price: "$7.50",
        image: siteImages.menu.coldBrew,
      },
      {
        id: "m5",
        name: "Heirloom Avocado Tartine",
        category: "breakfast",
        description: "Crushed Hass avocado, cold-pressed olive oil, Meyer lemon zest, French sea salt, organic seeded sourdough.",
        originOrNotes: "Optional Soft Poached Farm Egg (+$3)",
        price: "$16.00",
        image: siteImages.menu.avocadoTartine,
        tag: "Plant Based",
      },
      {
        id: "m6",
        name: "Truffled Croque Monsieur",
        category: "breakfast",
        description: "Artisan brioche, 18-month aged Comté, smoked jambon de Paris, black winter truffle béchamel, crisp cornichons.",
        originOrNotes: "Served with peppery wild arugula",
        price: "$19.50",
        image: siteImages.menu.croqueMonsieur,
      },
      {
        id: "m7",
        name: "Bordeaux Vanilla Bean Cannelé",
        category: "dessert",
        description: "Caramelized crunchy beeswax exterior with a tender, custardy center scented with dark rum and Madagascar vanilla.",
        originOrNotes: "Baked twice daily at 07:00 & 13:00",
        price: "$6.00",
        image: siteImages.menu.cannele,
        tag: "Daily Small Batch",
      },
      {
        id: "m8",
        name: "Citrus & Rosemary Olive Oil Cake",
        category: "dessert",
        description: "Moist Sicilian olive oil sponge, blood orange glaze, toasted Marcona almond crumble, fresh clotted cream.",
        originOrNotes: "Flourless & Naturally Sweetened",
        price: "$9.00",
        image: siteImages.menu.oliveOilCake,
      },
    ],
  },
  experience: {
    heading: "More than coffee.",
    quote: "A quiet sanctuary where daylight, tactile materials, and the aroma of roasted beans invite you to linger.",
    bodyParagraphs: [
      "In a city that measures every second in output and urgency, NOIR & BEAN was conceived as an intentional counterbalance. Every detail of our space — from the height of the oak stools to the custom unglazed ceramic cups — was shaped to encourage calm presence.",
      "We invite you to read undisturbed, share quiet conversation across the communal limestone table, or simply watch the sunlight crawl across Mercer Street while your pour-over brews.",
    ],
    pillars: [
      {
        title: "Acoustic Warmth",
        description: "Custom ceiling timber baffles soften room echoes, maintaining an intimate, serene listening atmosphere.",
      },
      {
        title: "Slow Hospitality",
        description: "No rushed turnover. We cherish regulars, curious travelers, and thoughtful coffee devotees alike.",
      },
      {
        title: "Tactile Craft",
        description: "Hand-thrown pottery, linen napkins, and custom Japanese brewing vessels designed for sensory delight.",
      },
    ],
  },
  brandStatement: {
    quote: "Good coffee doesn't need to be complicated.",
    subtext: "Only honest ingredients, patient craft, and a warm place to rest.",
  },
  testimonials: [
    {
      id: "t1",
      quote:
        "The most meditative coffee room in Manhattan. Their Geisha pour-over tastes like liquid poetry, and the silence of the room lets you actually taste it.",
      author: "Elena Rostova",
      role: "Architecture Critic",
      outletOrCity: "The New York Review",
    },
    {
      id: "t2",
      quote:
        "NOIR & BEAN manages what so few can: absolute culinary precision paired with unpretentious, deeply welcoming warmth. Their cannelé is unmatchable.",
      author: "Marcus Chen",
      role: "Food & Wine Editor",
      outletOrCity: "Cereal Magazine",
    },
    {
      id: "t3",
      quote:
        "In a neighborhood of endless rush, stepping through their brass doors feels like exhaling. The slow Kyoto drip alone is worth the cross-town pilgrimage.",
      author: "Sarah Lindqvist",
      role: "Industrial Designer",
      outletOrCity: "Stockholm / NYC",
    },
  ],
  visit: {
    subheading: "FIND US IN SOHO",
    title: "Visit Our Space",
    transitInfo: "Subway: Prince St (N, Q, R, W) or Spring St (6). 3 min walking distance.",
    seatingPolicy: "Walk-ins warmly welcomed. Weekend table waitlist available at the door.",
  },
  finalCta: {
    heading: "Come by for a cup.",
    subheading: "Whether it’s your first morning espresso or a late afternoon read, our doors are open.",
    primaryBtn: "Get Directions",
    secondaryBtn: "Contact Us",
  },
  footer: {
    blurb:
      "A specialty coffee house & kitchen celebrating unhurried mornings, seasonal micro-lots, and tactile design in SoHo, New York.",
    newsletterTitle: "The Morning Ledger",
    newsletterSub: "Occasional notes on new coffee arrivals, harvest journeys, and weekend tastings.",
    copyright: "© 2026 NOIR & BEAN LLC. All rights reserved.",
  },
  contact: {
    heroTitle: "Let’s talk.",
    heroSubtitle: "Inquiries regarding private events, wholesale coffee partnerships, press, or just saying hello.",
    inquiryTopics: [
      "General Question & Visiting",
      "Private Event & Space Rental",
      "Wholesale & Roasted Bean Orders",
      "Press & Media Inquiries",
    ],
  },
};
