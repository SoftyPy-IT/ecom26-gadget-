"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../shared/Container";
import { Button } from "@/components/ui/button";
import { ReusableSlider } from "../shared/ReusableSlider";

const BRANDS = [
  { name: "Apple", logo: "/img/brand/apple.png" },
  { name: "Samsung", logo: "/img/brand/Samsung-emblem.png" },
  { name: "Google", logo: "/img/brand/Google__G__logo.svg.png" },
  { name: "Motorola", logo: "/img/brand/Motorola-logo-black-and-white.png" },
  { name: "Bose", logo: "/img/brand/Bose-logo.png" },
  { name: "JBL", logo: "/img/brand/JBL-Emblem.png" },
  { name: "Spigen", logo: "/img/brand/Spigen_logo_B&W.png" },
];

export default function ShopByBrands() {
  return (
    <section className="py-16 px-0 lg:px-20 bg-white">
      <Container>
        {/* Header with "See All" */}
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-1">
            <h2 className="text-4xl md:text-5xl font-black text-[#111416] tracking-tighter leading-none">
             Shop By <span className="text-zinc-300">Brands</span>
          </h2>
           
            <div className="h-1 w-12 bg-[#c5a47e] rounded-full" />
          </div>

          <Button
            variant="outline"
            className="rounded-lg border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:bg-[#111416] hover:text-white transition-all"
          >
            See All <ArrowRight size={14} className="ml-2" />
          </Button>
        </div>

        {/* Brand Grid */}
         <ReusableSlider gap={16}>
          {BRANDS.map((brand, index) => (
            <div
              key={index}
              data-slider-card
              className="min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-10.667px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(14.285%-13.714px)]"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-24 bg-[#fafafa] border border-zinc-100 rounded-xl flex items-center justify-center p-6 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#f3d4b1]/50 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <span className="absolute -bottom-2 -right-1 text-[25px] font-black text-black/[0.03] uppercase italic pointer-events-none group-hover:text-[#c5a47e]/10 transition-colors">
                  {brand.name}
                </span>

                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </ReusableSlider>
      </Container>
    </section>
  );
}