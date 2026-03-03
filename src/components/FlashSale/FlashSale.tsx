

"use client";

import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";
import { ReusableSlider } from "../shared/ReusableSlider";

interface Product {
  _id: string;
  name: string;
  price: number;
  productCost: number; // used as old price
  discount_price: number;
  is_featured: boolean;
  thumbnail: string;
  images: string[];
  // other fields if needed
}

const FlashSale = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/product/all`,
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const json = await res.json();
        // Assuming API returns { success: true, data: [...] }
        setProducts(json.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products that have a discount (you can adjust criteria)
  const flashProducts = products.filter((p) => p.discount_price > 0);

 

  if (error) {
    return (
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 text-center text-red-500">
          Error: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header (unchanged) */}
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

        {/* Slider with real products */}
        <ReusableSlider gap={12}>
          {flashProducts.map((product) => {
            // Calculate discount percentage
            const discountPercent =
              product.productCost && product.productCost > product.price
                ? Math.round(
                    ((product.productCost - product.price) /
                      product.productCost) *
                      100,
                  )
                : 0;
            const discountText =
              discountPercent > 0 ? `${discountPercent}%` : "";

            return (
              <div
                key={product._id}
                data-slider-card
                className="w-[calc(50%-6px)] sm:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] lg:w-[calc(16.666%-10px)] flex-shrink-0"
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  oldPrice={product.productCost}
                  discount={discountText}
                  isHot={product.is_featured}
                  image={product.thumbnail}
                  hoverImage={product.images?.[1] || product.thumbnail}
                />
              </div>
            );
          })}
        </ReusableSlider>
      </div>
    </section>
  );
};

export default FlashSale;
