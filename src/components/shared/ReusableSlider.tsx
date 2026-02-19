"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  gap?: number;
  className?: string;
  scrollContainerClassName?: string;
  buttonClassName?: string;
  leftButtonClassName?: string;
  rightButtonClassName?: string;
  children: ReactNode;
}

export const ReusableSlider = ({
  gap = 16,
  className = "",
  scrollContainerClassName = "",
  buttonClassName = "",
  leftButtonClassName = "",
  rightButtonClassName = "",
  children,
}: SliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update button states based on scroll position
  const updateScrollButtons = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  // Scroll by exactly one card + gap
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstCard = container.querySelector(
      "[data-slider-card]"
    ) as HTMLElement;

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Left navigation button */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white shadow-lg border border-zinc-100 rounded-full flex items-center justify-center transition-all ${
          canScrollLeft
            ? "text-zinc-400 hover:bg-[#111416] hover:text-white opacity-100"
            : "text-zinc-200 cursor-not-allowed opacity-50"
        } ${buttonClassName} ${leftButtonClassName}`}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right navigation button */}
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white shadow-lg border border-zinc-100 rounded-full flex items-center justify-center transition-all ${
          canScrollRight
            ? "text-zinc-400 hover:bg-[#111416] hover:text-white opacity-100"
            : "text-zinc-200 cursor-not-allowed opacity-50"
        } ${buttonClassName} ${rightButtonClassName}`}
      >
        <ChevronRight size={20} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className={`flex md:overflow-hidden overflow-x-auto no-scrollbar py-3 snap-x snap-mandatory scroll-smooth overscroll-x-contain ${scrollContainerClassName}`}
        style={{ gap: `${gap}px` }}
      >
        {children}
      </div>
    </div>
  );
};