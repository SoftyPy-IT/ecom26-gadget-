"use client";

import Image from "next/image";
import { Heart, Repeat, Maximize2, Flame, ShoppingCart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  hoverImage?: string;
  price: number;
  oldPrice: number;
  discount: string;
  isHot?: boolean;
}

export default function ProductCard({
  name,
  image,
  hoverImage,
  price,
  oldPrice,
  discount,
  isHot = false,
}: ProductCardProps) {
  return (
     <motion.div
     whileHover={{ y: -10 }}
     className="group relative bg-white rounded-xl transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 hover:border-zinc-200"
   >
     {/* Badges */}

     <div className="flex justify-between items-start mb-1">
       <div className="bg-gradient-to-r from-[#c5a47e] to-[#8a6d4d] text-white text-[10px] md:text-[12px] text-xs p-1 md:p-1.5 rounded-br-2xl rounded-tl-xl  uppercase">
         {discount} OFF
       </div>

       {isHot && (
         <div className="bg-[#111416] text-[#e2c7a8] p-1 md:p-1.5 rounded-bl-lg rounded-tr-lg text-[10px] md:text-[12px] text-xs flex gap-1">
           <Flame size={14} className="fill-current" /> Hot Product
         </div>
       )}
     </div>

      {/* 2. Image Area with Hover-Swap */}
      <div className="relative aspect-square flex items-center justify-center overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className={`object-contain transition-all duration-700 p-2 
            ${hoverImage ? 'group-hover:opacity-0 group-hover:scale-90' : 'group-hover:scale-110'}`} 
        />
        
        {hoverImage && (
          <Image 
            src={hoverImage} 
            alt={`${name} hover`} 
            fill 
            className="object-contain p-2 transition-all duration-700 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110" 
          />
        )}
        
        {/* Sliding Side Icons */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30 translate-x-12 group-hover:translate-x-[-4px] transition-transform duration-500 ease-in-out">
          <button className="bg-white p-2 rounded-lg shadow-md text-zinc-600 hover:bg-[#111416] hover:text-white transition-all transform hover:scale-110">
            <Heart size={14} />
          </button>
          <button className="bg-white p-2 rounded-lg shadow-md text-zinc-600 hover:bg-[#111416] hover:text-white transition-all transform hover:scale-110">
            <Repeat size={14} />
          </button>
          <button className="bg-white p-2 rounded-lg shadow-md text-zinc-600 hover:bg-[#111416] hover:text-white transition-all transform hover:scale-110">
            <Maximize2 size={14} />
          </button>
        </div>
      </div>

      {/* 3. Product Info */}
      <div className="text-center flex-1">
        <h3 className="text-[13px] font-bold text-zinc-800 mb-2 line-clamp-1 uppercase tracking-tight group-hover:text-black transition-colors">
          {name}
        </h3>
        
        <div className="flex flex-col items-center mb-3">
          <span className="text-[18px] font-black text-[#111416] leading-none">
            ৳{price.toLocaleString()}
          </span>
          <span className="text-[11px] text-zinc-400 line-through mt-1 font-medium">
            ৳{oldPrice.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className="flex justify-center gap-2 mb-2">
        <Link href={"/productdetails"}>
        <Button className=" bg-[#111416] text-white md:rounded-lg text-[9px] font-black uppercase tracking-[0.15em] hover:bg-black transition-all flex items-center justify-center gap-1.5">
          <Eye size={14} /> View
        </Button>
        </Link>
        {/* <Link> */}
        <Button className=" bg-[#f3d4b1]/20 text-[#8b6d4d] border border-[#f3d4b1]/40 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] hover:bg-[#f3d4b1]/40 transition-all flex items-center justify-center gap-1.5">
          <ShoppingCart size={14} /> Add
        </Button>
        {/* </Link> */}
      </div>
    </motion.div>
  );
}