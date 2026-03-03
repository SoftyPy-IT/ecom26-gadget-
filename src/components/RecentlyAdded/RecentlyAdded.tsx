"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import { ReusableSlider } from "../shared/ReusableSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "../shared/ProductCard";
import { ProductCardSkeleton } from "../shared/ProductCardSkeleton";

interface Product {
  _id: string;
  name: string;
  price: number;
  productCost: number;
  is_featured: boolean;
  thumbnail: string;
  images: string[];
  createdAt: string;
  discount_price: number;
}

const RecentlyAdded = () => {
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
        const allProducts: Product[] = json.data || [];

        // Sort by createdAt descending and take first 6
        const sorted = [...allProducts].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        const recent = sorted.slice(0, 6);

        setProducts(recent);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  

  if (error) {
    return (
      <Container>
        <div className="text-red-500 text-center py-10">Error: {error}</div>
      </Container>
    );
  }

  return (
    <Container>
      {/* Banner image */}
      <div className="flex justify-center py-10">
        <Image
          src="/img/why-dazzle-care.webp"
          alt="img"
          height={1000}
          width={1000}
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111416] tracking-tighter leading-none">
            Recently <span className="text-zinc-300">Added</span>
          </h2>
          <div className="h-1 w-12 bg-[#c5a47e] mt-1 rounded-full" />
        </div>
        <Link href="/all-products">
          <Button
            variant="outline"
            className="rounded-lg border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:bg-[#111416] hover:text-white transition-all"
          >
            See All <ArrowRight size={14} className="ml-2" />
          </Button>
        </Link>
      </div>

      {/* Slider */}
      <ReusableSlider gap={16}>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              data-slider-card
              className="md:min-w-[calc((100%-96px)/6)]"
            >
              <ProductCardSkeleton />
            </div>
          ))
        ) : error ? (
          <div className="text-red-500 text-center py-10 col-span-full">
            Error: {error}
          </div>
        ) : (
          products.map((product) => {
            const discountPercent =
              product.price < product.productCost
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
                className="md:min-w-[calc((100%-96px)/6)]"
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
          })
        )}
      </ReusableSlider>
    </Container>
  );
};

export default RecentlyAdded;
