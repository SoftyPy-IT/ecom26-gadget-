"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../shared/Container";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Phones", img: "/img/category/phones.webp", href: "/phones" },
  { name: "Tablet", img: "/img/category/tablet.webp", href: "/tablets" },
  { name: "Laptop", img: "/img/category/laptop.webp", href: "/laptops" },
  { name: "Smart Watch", img: "/img/category/watch.webp", href: "/watches" },
  { name: "AirPods", img: "/img/category/airpods.png", href: "/airpods" },
  { name: "Sounds", img: "/img/category/sounds.webp", href: "/sounds" },
  {
    name: "Accessories",
    img: "/img/category/accessories.webp",
    href: "/accessories",
  },
  { name: "Gadgets", img: "/img/category/gadget.webp", href: "/gadgets" },
  { name: "Earbuds", img: "/img/category/earbuds.webp", href: "/earbuds" },
  { name: "Phone Cases", img: "/img/category/cases.webp", href: "/cases" },
  {
    name: "Screen Protectors",
    img: "/img/category/screen.webp",
    href: "/screen-protectors",
  },
  {
    name: "Over-Ear Headphones",
    img: "/img/category/headphones.webp",
    href: "/headphones",
  },
  {
    name: "MacBook Case",
    img: "/img/category/macbook.webp",
    href: "/mac-cases",
  },
  {
    name: "Power Banks",
    img: "/img/category/powerbanks.webp",
    href: "/power-banks",
  },
  { name: "Adapters", img: "/img/category/adapters.webp", href: "/adapters" },
  { name: "Smart TV", img: "/img/category/tv.webp", href: "/tv" },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Header Section */}
    
          <div className="flex justify-between items-end mb-10">
            <div className="space-y-1">
              <h2 className="text-4xl md:text-5xl font-black text-[#111416] tracking-tighter leading-none">
                Shop By <span className="text-zinc-300">Categories</span>
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


        {/* Categories Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={cat.href}
                className="group flex flex-col items-center p-1 md:p-3 bg-zinc-100 rounded-lg border border-transparent hover:border-[#e2c7a8] hover:bg-white hover:shadow-xl transition-all duration-500 h-full"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square mb-4 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-contain md:p-2"
                  />
                </div>

                {/* Text */}
                <span className="text-[11px] font-bold text-zinc-500 group-hover:text-black uppercase tracking-tight text-center leading-tight">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
