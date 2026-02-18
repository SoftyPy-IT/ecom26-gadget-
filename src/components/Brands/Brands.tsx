"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../shared/Container";

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
    <section className="py-16 px-6 lg:px-20 bg-white">
      <Container>
        
        {/* Header with "See All" */}
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-[#111416] uppercase italic tracking-tighter">
              Shop By <span className="text-[#c5a47e]">Brands</span>
            </h2>
            <div className="h-1 w-12 bg-[#c5a47e] rounded-full" />
          </div>
          
          <Link href="/brands" className="group flex items-center gap-2 bg-[#111416] text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#c5a47e] transition-all duration-300">
            See All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group relative h-24 bg-[#fafafa] border border-zinc-100 rounded-xl flex items-center justify-center p-6 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#f3d4b1]/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Subtle background text for depth */}
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
          ))}
        </div>
      </Container>
    </section>
  );
}