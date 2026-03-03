"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../shared/Container";
import { Button } from "@/components/ui/button";
import { ReusableSlider } from "../shared/ReusableSlider";

interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export default function ShopByBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brand/all`);
        if (!res.ok) throw new Error('Failed to fetch brands');
        const json = await res.json();
        setBrands(json.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-0 lg:px-20 bg-white">
        <Container>
          <div className="h-20 flex items-center justify-center">Loading brands...</div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-0 lg:px-20 bg-white">
        <Container>
          <div className="text-red-500">Error: {error}</div>
        </Container>
      </section>
    );
  }

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
          <Link href="/brands">
            <Button
              variant="outline"
              className="rounded-lg border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:bg-[#111416] hover:text-white transition-all"
            >
              See All <ArrowRight size={14} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Brand Grid */}
        <ReusableSlider gap={16}>
          {brands.map((brand) => (
            <div
              key={brand._id}
              data-slider-card
              className="min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-10.667px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(14.285%-13.714px)]"
            >
              <Link href={`/brands/${brand.slug}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative h-24 bg-[#fafafa] border border-zinc-100 rounded-xl flex items-center justify-center p-6 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#f3d4b1]/50 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <span className="absolute -bottom-2 -right-1 text-[25px] font-black text-black/[0.03] uppercase italic pointer-events-none group-hover:text-[#c5a47e]/10 transition-colors">
                    {brand.name}
                  </span>
                  <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </ReusableSlider>
      </Container>
    </section>
  );
}