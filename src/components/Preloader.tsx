import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { siteConfig } from "../data/siteConfig";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // Quick smooth counter from 0 to 100
      const counterObj = { val: 0 };
      tl.to(counterObj, {
        val: 100,
        duration: 1.2,
        ease: "power2.inOut",
        onUpdate: () => {
          setProgress(Math.round(counterObj.val));
        },
      })
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          0
        )
        .to(textRef.current, {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        })
        .to(
          containerRef.current,
          {
            yPercent: -100,
            duration: 0.8,
            ease: "expo.inOut",
          },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      id="site-preloader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#171412] text-[#F8F5EE] pointer-events-none"
      aria-hidden="true"
    >
      <div ref={textRef} className="flex flex-col items-center text-center px-6 max-w-md">
        <span className="text-[11px] tracking-[0.25em] text-[#C4A482] uppercase mb-3 font-medium">
          {siteConfig.established} • SoHo, New York
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl tracking-wider text-[#F8F5EE] font-light mb-6">
          {siteConfig.name}
        </h2>
        <div className="w-48 h-[1px] bg-[#332C27] relative overflow-hidden mb-4">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 bottom-0 w-full bg-[#C4A482] origin-left scale-x-0"
          />
        </div>
        <div className="flex items-center justify-between w-48 text-[11px] tracking-widest text-[#8E8075] uppercase">
          <span>Specialty Coffee</span>
          <span ref={counterRef} className="font-mono text-[#C4A482]">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
