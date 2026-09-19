import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, MenuItem } from "../data/siteConfig";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<"all" | "coffee" | "breakfast" | "dessert">("all");
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === "all"
      ? siteConfig.menu.items
      : siteConfig.menu.items.filter((item) => item.category === activeCategory);

  // Track mouse position within container for the floating preview effect on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Set initial hovered item for preview clarity
  useEffect(() => {
    if (filteredItems.length > 0 && !hoveredItem) {
      setHoveredItem(filteredItems[0]);
    }
  }, [filteredItems, hoveredItem]);

  return (
    <section
      id="menu"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 sm:py-32 md:py-40 bg-[#FCFAF6] relative border-t border-b border-[#171412]/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C4A482]" />
              <span className="text-[11px] tracking-[0.25em] text-[#695D54] uppercase font-semibold">
                Section 03 / Curated Offerings
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#171412] tracking-tight">
              {siteConfig.menu.heading}
            </h2>
            <p className="text-[#695D54] text-base font-light">
              {siteConfig.menu.subheading}
            </p>
          </div>

          {/* Category Tabs Filter */}
          <div
            id="menu-category-tabs"
            className="flex items-center gap-2 border border-[#171412]/15 p-1 rounded-none bg-[#F8F5EE] self-start md:self-auto"
            role="tablist"
            aria-label="Menu categories"
          >
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-[#171412] text-[#F8F5EE]"
                  : "text-[#695D54] hover:text-[#171412]"
              }`}
              role="tab"
              aria-selected={activeCategory === "all"}
            >
              All Items
            </button>
            {siteConfig.menu.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#171412] text-[#F8F5EE]"
                    : "text-[#695D54] hover:text-[#171412]"
                }`}
                role="tab"
                aria-selected={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial List Layout (NOT generic cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main List */}
          <div className="lg:col-span-8 divide-y divide-[#171412]/10 border-t border-b border-[#171412]/10">
            {filteredItems.map((item, idx) => (
              <article
                key={item.id}
                onMouseEnter={() => setHoveredItem(item)}
                className="group relative py-7 sm:py-8 transition-colors duration-300 hover:bg-[#F8F5EE]/70 cursor-pointer px-3 -mx-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-2">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[#8E8075] tracking-wider shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#171412] group-hover:translate-x-2 transition-transform duration-300 font-normal">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase px-2 py-0.5 border border-[#C4A482] text-[#8E6D48] font-mono">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-auto">
                    <span className="font-mono text-lg sm:text-xl font-medium text-[#171412] tracking-tight">
                      {item.price}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-[#171412]/15 flex items-center justify-center text-[#171412] opacity-40 group-hover:opacity-100 group-hover:bg-[#171412] group-hover:text-[#F8F5EE] group-hover:border-transparent transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

                <div className="pl-8 sm:pl-9 pr-12 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#695D54]">
                  <p className="font-light leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                  {item.originOrNotes && (
                    <span className="font-mono text-[11px] tracking-wider text-[#8E8075] shrink-0">
                      {item.originOrNotes}
                    </span>
                  )}
                </div>

                {/* Mobile Inline Thumbnail preview */}
                <div className="mt-4 sm:hidden pl-8">
                  <div className="w-full aspect-[16/9] overflow-hidden bg-[#EFE9DE]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop Right Column: Sticky Editorial Showcase Preview */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="p-6 bg-[#F8F5EE] border border-[#171412]/10 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#171412] mb-6 shadow-[0_12px_30px_rgba(23,20,18,0.06)]">
                {hoveredItem && (
                  <img
                    key={hoveredItem.id}
                    src={hoveredItem.image}
                    alt={hoveredItem.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 transform animate-fadeIn"
                    loading="lazy"
                  />
                )}
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#171412]/80 backdrop-blur-sm text-[#FAF8F5] text-[10px] tracking-widest font-mono uppercase">
                  {hoveredItem?.category}
                </div>
              </div>

              {hoveredItem && (
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-xl text-[#171412] font-medium">
                      {hoveredItem.name}
                    </span>
                    <span className="font-mono text-base font-semibold text-[#171412]">
                      {hoveredItem.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#695D54] leading-relaxed font-light">
                    {hoveredItem.description}
                  </p>
                  {hoveredItem.originOrNotes && (
                    <p className="font-mono text-[10px] tracking-widest text-[#8E8075] uppercase pt-2 border-t border-[#171412]/10">
                      {hoveredItem.originOrNotes}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dietary & Service Footnote */}
        <div className="mt-16 pt-8 border-t border-[#171412]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#695D54] gap-4">
          <p className="font-light">
            We happily offer organic oat milk, decaffeinated Swiss water options, and gluten-free pastries upon request.
          </p>
          <span className="font-mono tracking-widest uppercase text-[11px] text-[#8E8075]">
            Prices inclusive of all local taxes
          </span>
        </div>
      </div>
    </section>
  );
}
