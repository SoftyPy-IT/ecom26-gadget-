"use client";

import React from "react";
import { Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "../shared/ProductCard";
import Container from "../shared/Container";

const TrendingSection = () => {
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
      name: "Belkin Boostcharge",
      price: 1990,
      oldPrice: 2690,
      discount: "15%",
      isHot: true,
      image:
        "/img/Belkin-BoostCharge-Compact-USB-C-Wall-Charger-20W-price-in-Bangladesh.webp",
      hoverImage: "",
    },
  ];

  // Logic to fill the side grids if data is limited
  const leftSide = products.slice(1, 5);
  const rightSide = products.slice(2, 6);

  return (
    <section className="py-24 bg-[#fcfcfc]">
      <Container>
        <div className="">
          {/* Header */}
          <div className="flex flex-row justify-between items-end mb-12 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#111416] tracking-tighter leading-none">
                Trending <span className="text-zinc-300">Showcase</span>
              </h2>
              <div className="h-1 w-12 bg-[#c5a47e]  rounded-full" />
            </div>
            <Button
              variant="outline"
              className="rounded-lg border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:bg-[#111416] hover:text-white transition-all"
            >
              See All <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>

          {/* Triple Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mx-auto justify-center items-center">
            {/* 1. LEFT SIDE: 4 Small Cards (2x2 Grid) */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 h-full">
                {leftSide.map((product, idx) => (
                  <div
                    key={`left-${idx}`}
                    className="scale-95 hover:scale-95 transition-transform duration-300"
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. MIDDLE: Large Hero Card */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col">
                <div className="p-4 bg-orange-50/50 flex items-center justify-between border-b border-orange-100/50">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest flex items-center gap-2">
                    <Flame size={12} className="fill-orange-600" /> Featured
                    Drop
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                  {/* We wrap ProductCard in a container to handle the large scale */}
                  <div className="w-full max-w-md mx-auto">
                    <ProductCard {...products[0]} />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. RIGHT SIDE: 4 Small Cards (2x2 Grid) */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 h-full">
                {rightSide.map((product, idx) => (
                  <div
                    key={`right-${idx}`}
                    className="scale-95 hover:scale-95 transition-transform duration-300"
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrendingSection;
