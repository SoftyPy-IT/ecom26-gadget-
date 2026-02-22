"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink } from "lucide-react";
import Container from "@/src/components/shared/Container";
import Image from "next/image";

// Extended Brand List with Logo paths
const allBrands = [
  { name: "Apple", logo: "/img/brand/apple.png", count: 142 },
  { name: "Samsung", logo: "/img/brand/Samsung-emblem.png", count: 142 },
  { name: "Google", logo: "/img/brand/Google__G__logo.svg.png", count: 142 },

  { name: "Bose", logo: "/img/brand/Bose-logo.png", count: 142 },
  { name: "JBL", logo: "/img/brand/JBL-Emblem.png", count: 142 },
  { name: "Spigen", logo: "/img/brand/Spigen_logo_B&W.png", count: 142 },

  { name: "Xiaomi", logo: "/logos/xiaomi.png", count: 124 },
  { name: "Sony", logo: "/logos/sony.png", count: 67 },
  { name: "OnePlus", logo: "/logos/oneplus.png", count: 34 },
  { name: "Oppo", logo: "/logos/oppo.png", count: 56 },
  { name: "Vivo", logo: "/logos/vivo.png", count: 42 },
  { name: "Huawei", logo: "/logos/huawei.png", count: 38 },
  {
    name: "Motorola",
    logo: "/img/brand/Motorola-logo-black-and-white.png",
    count: 29,
  },

  { name: "Garmin", logo: "/logos/garmin.png", count: 15 },
  { name: "Amazfit", logo: "/logos/amazfit.png", count: 22 },
  { name: "Asus", logo: "/logos/asus.png", count: 48 },
  { name: "HP", logo: "/logos/hp.png", count: 35 },
  { name: "Lenovo", logo: "/logos/lenovo.png", count: 41 },
  { name: "Logitech", logo: "/logos/logitech.png", count: 95 },
  { name: "Razer", logo: "/logos/razer.png", count: 27 },
  { name: "Anker", logo: "/logos/anker.png", count: 110 },
];

const BrandPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = allBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="bg-[#fafafa] min-h-screen pb-20">
      {/* 1. THE TITLE BAR (Matches your established style) */}
      <section className="bg-[#111416] py-20 text-white relative overflow-hidden">
        {/* Decorative Gold Glow */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c5a47e] opacity-10 blur-[120px] rounded-full -mr-20" />

        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                All <span className="text-[#c5a47e]">Brands</span>
              </h1>
              <p className="text-zinc-400 max-w-md font-medium">
                Explore products from the world&apos;s leading technology 
                manufacturers and official partners.
              </p>
            </div>

            {/* Search Filter */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <Input
                placeholder="Search for a brand..."
                className="pl-12 py-7 rounded-2xl bg-white/5 border-white/10 text-white focus:border-[#c5a47e] transition-all outline-none"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. BRAND LOGO GRID */}
      <section className="mt-16">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredBrands.map((brand) => (
              <Link
                key={brand.name}
                href={`/brand/${brand.name.toLowerCase()}`}
                className="group relative bg-white aspect-square rounded-[2.5rem] border border-zinc-100 flex flex-col items-center justify-center p-8 hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500"
              >
                {/* Logo Container */}
                <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100">
                  {/* Using standard img for faster rendering of many small logos */}
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Brand Info Overlay */}
                <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-black text-[#c5a47e] uppercase tracking-widest">
                    {brand.count} Products
                  </span>
                </div>

                {/* Corner Icon */}
                <div className="absolute top-6 right-6 text-zinc-200 group-hover:text-[#c5a47e] transition-colors">
                  <ExternalLink size={16} />
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredBrands.length === 0 && (
            <div className="text-center py-40">
              <h3 className="text-2xl font-bold text-zinc-300 uppercase tracking-tighter">
                No Brands Found
              </h3>
              <p className="text-zinc-400 text-sm">
                Try searching for a different name.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default BrandPage;
