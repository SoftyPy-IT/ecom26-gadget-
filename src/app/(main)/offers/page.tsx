"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/src/components/shared/Container";


const offersData = [
  {
    id: 1,
    image: "/img/hero/sc-offer-main-banner.webp",
    dateRange: "15 Feb - 25 Feb, 2026",
    title: "Flash Sale: Gaming Setup",
    subTitle: "Get exclusive discounts on mechanical keyboards and high-refresh monitors.",
    link: "/offers/gaming-sale"
  },
  {
    id: 2,
    image: "/img/hero/exchange.webp",
    dateRange: "20 Feb - 05 Mar, 2026",
    title: "Smartphone Exchange",
    subTitle: "Trade in your old device and get up to ৳10,000 bonus on the new iPhone 17 series.",
    link: "/offers/exchange-fest"
  },
  {
    id: 3,
    image: "/img/hero/turbo-4-pro-v2.webp",
    dateRange: "01 Mar - 10 Mar, 2026",
    title: "Weekend Audio Blast",
    subTitle: "Flat 15% off on all premium noise-canceling earbuds and home theater systems.",
    link: "/offers/audio-deals"
  }
];

const OffersPage = () => {
  return (
    <main className="bg-[#fafafa] min-h-screen pb-20">
      <section className="bg-[#111416] py-16 text-white mb-12">
        <Container>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
            Exclusive <span className="text-[#c5a47e]">Offers</span>
          </h1>
          <p className="text-zinc-400 font-medium max-w-md">
            Unlock the best deals on premium gadgets. Limited time promotions just for you.
          </p>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offersData.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-zinc-100 overflow-hidden group hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500"
            >
              {/* 1. Image (Top) */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* 2. Date Range */}
                <div className="flex items-center gap-2 text-[#c5a47e] mb-4">
                  <Calendar size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {offer.dateRange}
                  </span>
                </div>

                {/* 3. Title */}
                <h3 className="text-2xl font-black text-[#111416] tracking-tighter uppercase mb-3 leading-tight group-hover:text-[#c5a47e] transition-colors">
                  {offer.title}
                </h3>

                {/* 4. Sub-title */}
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                  {offer.subTitle}
                </p>

                {/* 5. See Details Button */}
                <Link href={offer.link}>
                  <Button 
                    variant="outline" 
                    className="w-full py-6 rounded-xl border-zinc-200 font-bold uppercase tracking-widest text-xs group-hover:bg-[#111416] group-hover:text-white transition-all duration-300"
                  >
                    See Details <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default OffersPage;