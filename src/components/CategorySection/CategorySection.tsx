'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../shared/Container";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Phones", img: "/img/category/phones.webp", href: "/phones" },
  { name: "Tablet", img: "/img/category/tablet.webp", href: "/tablets" },
  { name: "Laptop", img: "/img/category/laptop.webp", href: "/laptops" },
  { name: "Smart Watch", img: "/img/category/watch.webp", href: "/watches" },
  { name: "AirPods", img: "/img/category/airpods.png", href: "/airpods" },
  { name: "Sounds", img: "/img/category/sounds.webp", href: "/sounds" },
  { name: "Accessories", img: "/img/category/accessories.webp", href: "/accessories" },
  { name: "Gadgets", img: "/img/category/gadget.webp", href: "/gadgets" },
  { name: "Earbuds", img: "/img/category/earbuds.webp", href: "/earbuds" },
  { name: "Phone Cases", img: "/img/category/cases.webp", href: "/cases" },
  { name: "Screen Protectors", img: "/img/category/screen.webp", href: "/screen-protectors" },
  { name: "Over-Ear Headphones", img: "/img/category/headphones.webp", href: "/headphones" },
  { name: "MacBook Case", img: "/img/category/macbook.webp", href: "/mac-cases" },
  { name: "Power Banks", img: "/img/category/powerbanks.webp", href: "/power-banks" },
  { name: "Adapters", img: "/img/category/adapters.webp", href: "/adapters" },
  { name: "Smart TV", img: "/img/category/tv.webp", href: "/tv" },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-xl md:text-2xl  text-[#111416] uppercase ">
              Shop by Categories
            </h2>
            <div className="h-1 w-20 bg-[#e2c7a8] mt-2 rounded-full" />
          </div>
          <Link 
            href="/categories" 
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-[#111416] transition-colors"
          >
            See All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
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