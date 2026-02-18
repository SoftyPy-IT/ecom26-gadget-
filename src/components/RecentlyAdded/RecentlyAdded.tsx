"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "../shared/ProductCard";
import Image from "next/image";
import Container from "../shared/Container";

const RecentlyAdded = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const products = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      price: 166990,
      oldPrice: 214990,
      discount: "22%",
      isHot: true,
      image: "/img/iPhone-17-Pro-Max.webp",
      hoverImage: "/img/iPhone-17-Pro-Max1.webp",
    },
    {
      id: 2,
      name: "Mibro Earbuds 5",
      price: 1192,
      oldPrice: 1900,
      discount: "37%",
      isHot: false,
      image: "/img/Mibro-Earbuds-5-price-in-Bangladesh-black.webp",
      hoverImage: "/img/Mibro-Earbuds-5-price-in-Bangladesh-pink.webp",
    },
    {
      id: 3,
      name: "Anker Zolo 20W PD",
      price: 1250,
      oldPrice: 1499,
      discount: "16%",
      isHot: true,
      image:
        "/img/Anker-Zolo-20W-PD-30-3-Pin-UK-Fast-Charger-Price-in-bangladesh-1.webp",
      hoverImage:
        "/img/Anker-Zolo-Charger-20W-GaN-IQ-&-PD-price-in-bangladesh-(2).webp",
    },
    {
      id: 4,
      name: "iPhone 17",
      price: 72500,
      oldPrice: 85000,
      discount: "15%",
      isHot: true,
      image: "/img/iPhone-17-Price-in-Bangladesh-Lavender.webp",
      hoverImage: "/img/iPhone-17-Price-in-Bangladesh-Black.webp",
    },
    {
      id: 5,
      name: "iPhone 17 Pro",
      price: 72500,
      oldPrice: 85000,
      discount: "15%",
      isHot: true,
      image: "/img/iPhone-17-Pro-Price-in-Bangladesh.webp",
      hoverImage: "/img/iPhone-17-Pro-Price-in-Bangladesh1.webp",
    },
    {
      id: 6,
      name: "Belkin Boostcharge Compact USB-C",
      price: 1990,
      oldPrice: 2690,
      discount: "15%",
      isHot: true,
      image:
        "/img/Belkin-BoostCharge-Compact-USB-C-Wall-Charger-20W-price-in-Bangladesh.webp",
      hoverImage: "",
    },
  ];

  // 🔥 Update scroll button states
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

  // 🔥 Accurate card-by-card sliding
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstCard = container.querySelector(
      "[data-slider-card]",
    ) as HTMLElement;

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 15;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        <div className="flex justify-center py-10 ">
        <Image
          src={"/img/why-dazzle-care.webp"}
          alt="img"
          height={1000}
          width={1000}
          className=""
        />
        </div>
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
                Recently Added
              </h2>
              <div className="h-1 w-12 bg-[#c5a47e] mt-1 rounded-full" />
            </div>

            <Button
              variant="outline"
              className="rounded-lg border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:bg-[#111416] hover:text-white transition-all"
            >
              See All <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>

          <div className="relative ">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white shadow-lg border border-zinc-100 rounded-full flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "text-zinc-400 hover:bg-[#111416] hover:text-white opacity-100"
                  : "text-zinc-200 cursor-not-allowed opacity-50"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white shadow-lg border border-zinc-100 rounded-full flex items-center justify-center transition-all ${
                canScrollRight
                  ? "text-zinc-400 hover:bg-[#111416] hover:text-white opacity-100"
                  : "text-zinc-200 cursor-not-allowed opacity-50"
              }`}
            >
              <ChevronRight size={20} />
            </button>

            {/* Slider */}
            <div
              ref={scrollRef}
              className="flex gap-6 md:overflow-hidden overflow-x-auto no-scrollbar py-3 snap-x snap-mandatory scroll-smooth overscroll-x-contain"
              style={{ scrollBehavior: "smooth" }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  data-slider-card
                  className="min-w-[calc((100%-96px)/5)]"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RecentlyAdded;
