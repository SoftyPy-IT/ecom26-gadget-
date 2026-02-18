"use client";

import {
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ProductCard from "../shared/ProductCard";

// 1. Updated JSON Data Array
const FLASH_SALE_PRODUCTS = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    price: 166990,
    oldPrice: 214990,
    discount: "22%",
    isHot: true,
    img: "/img/iPhone-17-Pro-Max.webp",
    img2: "/img/iPhone-17-Pro-Max1.webp",
  },
  {
    id: 2,
    name: "Mibro Earbuds 5",
    price: 1192,
    oldPrice: 1900,
    discount: "37%",
    isHot: false,
    img: "/img/Mibro-Earbuds-5-price-in-Bangladesh-black.webp",
    img2: "/img/Mibro-Earbuds-5-price-in-Bangladesh-pink.webp",
  },
  {
    id: 3,
    name: "Anker Zolo 20W PD",
    price: 1250,
    oldPrice: 1499,
    discount: "16%",
    isHot: true,
    img: "/img/Anker-Zolo-20W-PD-30-3-Pin-UK-Fast-Charger-Price-in-bangladesh-1.webp",
    img2: "/img/Anker-Zolo-Charger-20W-GaN-IQ-&-PD-price-in-bangladesh-(2).webp",
  },
  {
    id: 4,
    name: "iPhone 17",
    price: 72500,
    oldPrice: 85000,
    discount: "15%",
    isHot: true,
    img: "/img/iPhone-17-Price-in-Bangladesh-Lavender.webp",
    img2: "/img/iPhone-17-Price-in-Bangladesh-Black.webp",
  },
  {
    id: 5,
    name: "iPhone 17 Pro",
    price: 72500,
    oldPrice: 85000,
    discount: "15%",
    isHot: true,
    img: "/img/iPhone-17-Pro-Price-in-Bangladesh.webp",
    img2: "/img/iPhone-17-Pro-Price-in-Bangladesh1.webp",
  },
  {
    id: 6,
    name: "Belkin Boostcharge Compact USB-C",
    price: 1990,
    oldPrice: 2690,
    discount: "15%",
    isHot: true,
    img: "/img/Belkin-BoostCharge-Compact-USB-C-Wall-Charger-20W-price-in-Bangladesh.webp",
    img2: "",
  },
];

const FlashSale = () => {
  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Modern Header Container */}
        <div className="bg-gradient-to-br from-[#111416] via-[#1c1f22] to-[#111416] rounded-[2.5rem] p-8 md:p-10 mb-10 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#e2c7a8] opacity-10 blur-[100px]" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#e2c7a8]">
                <Zap size={20} className="fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Exclusive Deals
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter">
                Grand Ramadan <span className="text-[#e2c7a8]">Fest</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[2rem]">
                <div className="text-zinc-500 text-[9px] font-black uppercase hidden sm:block mr-1 leading-none">
                  Ends
                  <br />
                  In:
                </div>
                {[
                  { l: "Days", v: "29" },
                  { l: "Hrs", v: "07" },
                  { l: "Min", v: "00" },
                  { l: "Sec", v: "45" },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center min-w-[45px]"
                  >
                    <span className="text-2xl font-black text-white tabular-nums leading-none">
                      {t.v}
                    </span>
                    <span className="text-[8px] font-bold text-[#e2c7a8] uppercase tracking-widest mt-1">
                      {t.l}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/offers" className="group">
                <div className="flex items-center gap-3 bg-[#e2c7a8] hover:bg-white text-black px-6 py-5 rounded-[2rem] transition-all duration-300 shadow-lg shadow-[#e2c7a8]/10">
                  <span className="text-xs font-black uppercase tracking-widest">
                    See All
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Grid - Passing props correctly to our modern card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
         {FLASH_SALE_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              isHot={product.isHot}
              image={product.img}
              hoverImage={product.img2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default FlashSale;
