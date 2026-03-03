"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/src/components/shared/Container";
import ProductCard from "@/src/components/shared/ProductCard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FilterContent from "./_components/FilterContent";

interface Product {
  _id: string;
  name: string;
  price: number;
  productCost: number;
  discount_price: number;
  is_featured: boolean;
  thumbnail: string;
  images: string[];
  // other fields if needed
}

const AllProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 250000]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/all`);
        if (!res.ok) throw new Error('Failed to fetch products');
        const json = await res.json();
        setProducts(json.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <main className="bg-white min-h-screen pb-20">
        <Container className="pt-12 text-center">Loading products...</Container>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-white min-h-screen pb-20">
        <Container className="pt-12 text-center text-red-500">Error: {error}</Container>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      <section className="bg-white border-b border-zinc-100 py-12">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-black text-[#111416] tracking-tighter uppercase leading-none">
                All <span className="text-zinc-300">Products</span>
              </h1>
              <div className="h-1 w-12 bg-[#c5a47e] mt-1 rounded-full" />
            </div>

            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden rounded-xl border-zinc-200 font-bold uppercase text-[10px] tracking-widest">
                    <SlidersHorizontal size={14} className="mr-2" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] overflow-y-auto">
                  <div className="">
                    <FilterContent priceRange={priceRange} setPriceRange={setPriceRange} />
                  </div>
                </SheetContent>
              </Sheet>

              <Select defaultValue="newest">
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
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-24">
              <FilterContent priceRange={priceRange} setPriceRange={setPriceRange} />
            </div>
          </aside>

          <div className="flex-1">
            {products.length === 0 ? (
              <p className="text-center text-zinc-500">No products found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12">
                {products.map((product) => {
                  // Calculate discount percentage if price is less than cost
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
};

export default AllProductsPage;