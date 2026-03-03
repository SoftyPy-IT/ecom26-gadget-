"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import Container from "@/src/components/shared/Container";
import ProductCard from "@/src/components/shared/ProductCard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import FilterContent from "../../products/_components/FilterContent";

interface Product {
  _id: string;
  name: string;
  price: number;
  productCost: number;
  is_featured: boolean;
  thumbnail: string;
  images: string[];
  category?: { name: string; slug: string };
  mainCategory?: { name: string; slug: string };
  tags?: string[];
  createdAt?: string;
}

const ProductCardSkeleton = () => (
  <div className="bg-white rounded-xl border border-zinc-100 p-4 animate-pulse">
    <div className="flex justify-between items-start mb-4">
      <div className="h-6 w-16 bg-zinc-200 rounded"></div>
      <div className="h-6 w-20 bg-zinc-200 rounded"></div>
    </div>
    <div className="relative aspect-square bg-zinc-200 rounded-lg mb-4"></div>
    <div className="h-5 w-3/4 bg-zinc-200 rounded mx-auto mb-2"></div>
    <div className="h-4 w-1/2 bg-zinc-200 rounded mx-auto mb-3"></div>
    <div className="flex justify-center gap-2">
      <div className="h-8 w-16 bg-zinc-200 rounded"></div>
      <div className="h-8 w-16 bg-zinc-200 rounded"></div>
    </div>
  </div>
);

export default function BrandPage() {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('cat'); 

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredByBrand, setFilteredByBrand] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 250000]);
  const [sortOption, setSortOption] = useState("newest");

  // Fetch all products
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/all`);
        const json = await res.json();
        setProducts(json.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // Filter by brand (and optionally by category)
  useEffect(() => {
    if (!slug || products.length === 0) return;
    const brandSlug = Array.isArray(slug) ? slug[0] : slug;
    
    let filtered = products.filter(p => {
      const brandMatch = p.category?.name?.toLowerCase() === brandSlug.toLowerCase();
      const tagMatch = p.tags?.some(tag => tag.toLowerCase() === brandSlug.toLowerCase());
      return brandMatch || tagMatch;
    });

    // Apply category filter if present
    if (categorySlug) {
      filtered = filtered.filter(p => 
        p.mainCategory?.slug?.toLowerCase() === categorySlug.toLowerCase()
      );
    }

    setFilteredByBrand(filtered);
  }, [slug, products, categorySlug]);

  // Apply price range filter and sort
  const filteredAndSorted = filteredByBrand
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
        default:
          // Sort by createdAt if available, otherwise fallback
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
      }
    });

  const brandName = typeof slug === 'string' ? slug.charAt(0).toUpperCase() + slug.slice(1) : '';

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Header */}
      <section className="bg-white border-b border-zinc-100 py-12">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-black text-[#111416] tracking-tighter uppercase">
                {brandName} {categorySlug && <span className="text-zinc-300">({categorySlug})</span>}
              </h1>
              <div className="h-1 w-12 bg-[#c5a47e] mt-1 rounded-full" />
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile filter sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden rounded-xl border-zinc-200 font-bold uppercase text-[10px] tracking-widest">
                    <SlidersHorizontal size={14} className="mr-2" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] overflow-y-auto">
                  <FilterContent priceRange={priceRange} setPriceRange={setPriceRange} />
                </SheetContent>
              </Sheet>

              {/* Sort dropdown */}
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px] rounded-xl border-zinc-200 font-bold text-xs uppercase tracking-widest">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest Added</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop filter sidebar */}
          <aside className="w-full lg:w-72 shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <FilterContent priceRange={priceRange} setPriceRange={setPriceRange} />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12">
                {Array.from({ length: 8 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredAndSorted.length === 0 ? (
              <p className="text-center text-zinc-500">No products found for this brand.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12">
                {filteredAndSorted.map((product) => {
                  const discountPercent =
                    product.price < product.productCost
                      ? Math.round(((product.productCost - product.price) / product.productCost) * 100)
                      : 0;
                  const discountText = discountPercent > 0 ? `${discountPercent}%` : '';

                  return (
                    <ProductCard
                      key={product._id}
                      name={product.name}
                      price={product.price}
                      oldPrice={product.productCost}
                      discount={discountText}
                      isHot={product.is_featured}
                      image={product.thumbnail}
                      hoverImage={product.images?.[1] || product.thumbnail}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}