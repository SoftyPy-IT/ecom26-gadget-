"use client";

import React from "react";
import { Flame, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "../shared/ProductCard";

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
      name: "Belkin Boostcharge Compact USB-C",
      price: 1990,
      oldPrice: 2690,
      discount: "15%",
      isHot: true,
      image: "/img/Belkin-BoostCharge-Compact-USB-C-Wall-Charger-20W-price-in-Bangladesh.webp",
      hoverImage: "",
    },
  ];

  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="max-w-[1350px] mx-auto px-6">
        {/* Modern Header with Glass Effect */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="relative">
           
            <h2 className="text-5xl md:text-6xl font-black text-[#111416] tracking-tighter leading-[0.9]">
              Trending 
              <span className="text-zinc-300"> Products</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-4">
            
            <Button className="bg-[#111416] hover:bg-orange-600 text-white rounded-full px-8 h-14 group transition-all duration-500">
              EXPLORE ALL{" "}
              <ArrowRight
                className="ml-2 group-hover:translate-x-2 transition-transform"
                size={18}
              />
            </Button>
          </div>
        </div>

        {/* The Symmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Featured Hero Card (Span 5) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col">
              <div className="p-4 bg-orange-50/50 flex items-center justify-between border-b border-orange-100/50">
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest flex items-center gap-2">
                  <Flame size={12} className="fill-orange-600" /> Featured Drop
                </span>
                <span className="text-[10px] font-bold text-zinc-400">
                  #01 Trending
                </span>
              </div>
              <div className="flex-1 scale-110 md:scale-100">
                <ProductCard {...products[0]} />
              </div>
            </div>
          </div>

          {/* RIGHT: The Secondary Grid (Span 7) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 h-full">
              {products.slice(1, 6).map((product) => (
                <div
                  key={product.id}
                  className="h-full transform transition-all duration-500  rounded-xl"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
