/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react';
import { 
  X, Check, ShoppingCart, 
  ArrowLeft, Info, Star, 
  GitCompareArrows, ShieldCheck, Zap 
} from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const ProductCompare = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      price: "1,66,990",
      img: "/img/iPhone-17-Pro-Max.webp",
      rating: 4.9,
      specs: {
        "Processor": "A19 Pro (3nm)",
        "Display": "6.9-inch LTPO OLED",
        "Camera": "48MP Triple + Periscope",
        "Battery": "5088 mAh",
        "Weight": "221g",
        "Refresh Rate": "120Hz ProMotion",
        "Warranty": "1 Year Official"
      }
    },
    {
      id: 2,
      name: "iPhone 16 Pro Max",
      price: "1,45,500",
      img: "/img/iPhone-17-Pro-Max1.webp",
      rating: 4.8,
      specs: {
        "Processor": "A18 Pro (3nm)",
        "Display": "6.7-inch Super Retina XDR",
        "Camera": "48MP Triple + 5x Optical",
        "Battery": "4441 mAh",
        "Weight": "227g",
        "Refresh Rate": "120Hz ProMotion",
        "Warranty": "1 Year Official"
      }
    }
  ];

  const features = Object.keys(products[0].specs);

  return (
    <div className="bg-[#fbfbfb] min-h-screen text-[#1d1d1f] font-sans pb-20">
      {/* Navigation Header */}
      <div className="bg-white border-b border-zinc-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-lg font-bold flex items-center gap-2">
              <GitCompareArrows className="text-orange-500" size={20} /> 
              Compare Products
            </h1>
          </div>
          <span className="text-xs font-black uppercase text-zinc-400">2 Products Max</span>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 mt-8">
        
        {/* Sticky Product Identity Row */}
        <div className="grid grid-cols-12 gap-0 bg-white rounded-t-3xl border-x border-t border-zinc-100 shadow-sm sticky top-16 z-40">
          <div className="col-span-4 p-8 flex items-center border-r border-zinc-50">
            <div className="space-y-1">
              <h2 className="text-2xl font-black leading-tight">Comparison<br/>Matrix</h2>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Technical Audit</p>
            </div>
          </div>
          
          {products.map((product) => (
            <div key={product.id} className="col-span-4 p-6 border-r border-zinc-50 last:border-r-0 relative group">
              <button className="absolute top-2 right-2 p-1 text-zinc-300 hover:text-red-500 transition-colors">
                <X size={16} />
              </button>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4 transition-transform group-hover:scale-105 duration-500">
                  <Image src={product.img} alt={product.name} fill className="object-contain" />
                </div>
                <h3 className="text-sm font-black mb-1 uppercase tracking-tight">{product.name}</h3>
                <p className="text-[#c5a47e] font-black text-sm">৳ {product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="bg-white border-x border-zinc-100 shadow-sm overflow-hidden">
          {features.map((feature, idx) => (
            <div 
              key={feature} 
              className={`grid grid-cols-12 items-center group transition-colors hover:bg-zinc-50/50 ${idx !== features.length - 1 ? 'border-b border-zinc-50' : ''}`}
            >
              {/* Feature Name */}
              <div className="col-span-4 p-6 border-r border-zinc-50 bg-[#fafafa]/50">
                <span className="text-[11px] font-black uppercase text-zinc-400 tracking-wider flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {feature}
                </span>
              </div>

              {/* Product Values */}
              {products.map((product) => (
                <div key={product.id} className="col-span-4 p-6 border-r border-zinc-50 last:border-r-0 text-center">
                  <span className="text-xs font-bold text-zinc-700 tracking-tight">
                    {(product.specs as any)[feature]}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Special Row: Rating */}
          <div className="grid grid-cols-12 items-center border-b border-zinc-50 hover:bg-zinc-50/50">
            <div className="col-span-4 p-6 border-r border-zinc-50 bg-[#fafafa]/50">
               <span className="text-[11px] font-black uppercase text-zinc-400 tracking-wider flex items-center gap-2">
                  <Star size={14} className="text-orange-400 fill-orange-400" />
                  Customer Rating
                </span>
            </div>
            {products.map((product) => (
              <div key={product.id} className="col-span-4 p-6 border-r border-zinc-50 last:border-r-0 text-center flex justify-center items-center gap-1">
                <span className="text-sm font-black text-zinc-800">{product.rating}</span>
                <span className="text-[10px] text-zinc-400 font-bold">/ 5.0</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Row */}
        <div className="grid grid-cols-12 bg-white rounded-b-3xl border border-zinc-100 shadow-sm overflow-hidden">
          <div className="col-span-4 p-8 bg-[#f5f5f7] border-r border-zinc-200">
             <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-green-600">
                  <ShieldCheck size={14} /> 100% Authentic
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-600">
                  <Zap size={14} /> Fast Delivery
                </div>
             </div>
          </div>
          {products.map((product) => (
            <div key={product.id} className="col-span-4 p-8 border-r border-zinc-100 last:border-r-0">
               <Button className="w-full h-12 bg-[#111416] text-white rounded-xl font-black uppercase text-[11px] flex items-center justify-center gap-2 hover:bg-black transition-all">
                  <ShoppingCart size={18} /> Add To Cart
               </Button>
               <Button variant="link" className="w-full mt-2 text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                 View Details
               </Button>
            </div>
          ))}
        </div>

        {/* Comparison Disclaimer */}
        <div className="mt-8 flex items-start gap-3 p-4 bg-orange-50/50 border border-orange-100 rounded-2xl">
          <Info size={18} className="text-orange-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-orange-800/70 leading-relaxed font-medium">
            Specifications are gathered from official brand data. Technical variations might occur depending on the specific region variant chosen (e.g., Global vs USA vs HK). Please verify specific band support before purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCompare;