"use client";

import ProductCard from "../shared/ProductCard";
import Image from "next/image";
import Container from "../shared/Container";
import { ReusableSlider } from "../shared/ReusableSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RecentlyAdded = () => {
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

    {
      id: 7,
      name: "iPhone 17",
      price: 72500,
      oldPrice: 85000,
      discount: "15%",
      isHot: true,
      image: "/img/iPhone-17-Price-in-Bangladesh-Lavender.webp",
      hoverImage: "/img/iPhone-17-Price-in-Bangladesh-Black.webp",
    },
  ];

  return (
    <Container>
      <div className="flex justify-center py-10">
        <Image
          src="/img/why-dazzle-care.webp"
          alt="img"
          height={1000}
          width={1000}
        />
      </div>

      {/* Optional header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111416] tracking-tighter leading-none">
            Recently <span className="text-zinc-300">Added</span>
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

      {/* Slider */}
      <ReusableSlider gap={16}>
        {products.map((product) => (
          <div
            key={product.id}
            data-slider-card
            className="md:min-w-[calc((100%-96px)/6)]"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </ReusableSlider>
    </Container>
  );
};

export default RecentlyAdded;
