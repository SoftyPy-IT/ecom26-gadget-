/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Heart,
  Share2,
  ShoppingCart,
  ShieldCheck,
  Eye,
  Box,
  CreditCard,
  Gift,
  MousePointerClick,
  GitCompareArrows,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IPhone17ProMaxDetails = () => {
  const [selectedColor, setSelectedColor] = useState("Cosmic Orange");
  const [selectedRegion, setSelectedRegion] = useState("JP/MEA (Dual e-Sim)");
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [isAgreed, setIsAgreed] = useState(true);

  // ✅ Zoom State
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const colorOptions = [
    { name: "Cosmic Orange", img: "/img/iPhone-17-Pro-Max.webp" },
    { name: "Black Titanium", img: "/img/iPhone-17-Pro-Max1.webp" },
    { name: "Silver Titanium", img: "/img/iPhone-17-Pro-Max-Pro2.webp" },
  ];

  const currentProductImage =
    colorOptions.find((c) => c.name === selectedColor)?.img ||
    "/img/iPhone-17-Pro-Max.webp";

  return (
    <div className="bg-white min-h-screen text-[#1d1d1f] font-sans antialiased">
      <div className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-8 flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3">
              {colorOptions.map((color, idx) => (
                <Button
                  key={idx}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-16 h-16 rounded-lg border p-1 overflow-hidden transition-all ${
                    selectedColor === color.name
                      ? "border-orange-400 ring-1 ring-orange-100"
                      : "border-zinc-200"
                  }`}
                >
                  <Image
                    src={color.img}
                    alt="thumb"
                    height={100}
                    width={100}
                    className="w-full h-full object-contain"
                  />
                </Button>
              ))}
            </div>

            {/* MAIN IMAGE WITH ZOOM */}
            <div
              className={`relative flex-1 aspect-square bg-[#fbfbfb] rounded-3xl border border-zinc-100 flex items-center justify-center p-8 overflow-hidden ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="absolute top-4 left-4 bg-[#c5a47e] text-white text-[11px] font-black px-3 py-1 rounded-md z-10 shadow-sm">
                36%
              </div>

              <Image
                src={currentProductImage}
                alt="iPhone 17 Pro Max"
                width={600}
                height={600}
                priority
                className="object-contain transition-transform duration-200 ease-out will-change-transform"
                style={{
                  transform: isZoomed ? "scale(2.2)" : "scale(1)",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: SCROLLABLE CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-[#f5f5f7] p-6 rounded-2xl border border-zinc-100">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase text-zinc-400 bg-white px-3 py-1 rounded border border-zinc-200">
                  Brand: Apple
                </span>
                <div className="flex gap-2">
                  <Link href={'/product-compare'}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 text-[10px] font-bold h-9 bg-white"
                  >
                    <GitCompareArrows size={14} /> Compare
                  </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 bg-white"
                  >
                    <Heart size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 bg-white"
                  >
                    <Share2 size={16} />
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-3">iPhone 17 Pro Max</h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge text={selectedColor} />
                <Badge text={selectedRegion} />
                <Badge text={selectedStorage} />
              </div>

              <div className="flex items-center gap-2 text-orange-600 font-bold text-[12px] mb-5">
                <Eye size={16} /> 20 people viewing this product now
              </div>

              <div className="space-y-3 text-[11px] leading-relaxed text-zinc-600 pt-4 border-t border-zinc-200/60">
                <p>
                  <strong>Display:</strong> 6.9" LTPO Super Retina XDR OLED,
                  120Hz with 3000 nits peak
                </p>
                <p>
                  <strong>Camera:</strong> 48MP triple camera with periscope
                  zoom, LiDAR, and 4K Dolby Vision
                </p>
                <p>
                  <strong>Processor:</strong> Apple A19 Pro (3nm) with 6-core
                  GPU for flagship performance
                </p>
                <p>
                  <strong>Battery:</strong> Up to 5088mAh with 50% charge in 20
                  minutes (wired) + MagSafe/Qi2
                </p>
              </div>
            </div>

            {/* Selection Grid */}
            <div className="bg-[#f5f5f7] p-6 rounded-2xl border border-zinc-100 space-y-6">
              <div>
                <Label text={`Color: ${selectedColor}`} />
                <div className="flex gap-3">
                  {colorOptions.map((c) => (
                    <Button
                      key={c.name}
                      variant="outline"
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-16 h-16 p-1 bg-white overflow-hidden transition-all ${selectedColor === c.name ? "border-orange-500 shadow-md ring-2 ring-orange-100" : "border-zinc-200"}`}
                    >
                      <Image
                        src={c.img}
                        alt={c.name}
                        height={100}
                        width={100}
                        className="w-full h-full object-contain"
                      />
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label text="Region/Variant:" />
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "JP/MEA (Dual e-Sim)",
                    "Global Variant (Sim + e-Sim)",
                    "HK / CH (Dual Sim)",
                    "USA (Dual e-Sim)",
                  ].map((r) => (
                    <SelectionButton
                      key={r}
                      active={selectedRegion === r}
                      text={r}
                      onClick={() => setSelectedRegion(r)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Label text="Storage:" className="mb-0 min-w-16" />
                <div className="flex flex-1 gap-2">
                  {["256GB", "512GB", "1TB", "2TB"].map((s) => (
                    <SelectionButton
                      key={s}
                      active={selectedStorage === s}
                      text={s}
                      onClick={() => setSelectedStorage(s)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Meta Bento */}
            <div className="grid grid-cols-3 gap-2">
              <MetaBox
                icon={<MousePointerClick size={18} />}
                label="Minimum Booking"
                value="15,000 BDT"
              />
              <MetaBox
                icon={<Gift size={18} />}
                label="Purchase Points"
                value="100 Points"
              />
              <MetaBox
                icon={<CreditCard size={18} />}
                label="EMI Available"
                value="Details"
                isLink
              />
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PriceCard
                active
                label="Offer Price"
                price="1,66,990"
                desc="Cash/Card/MFS Payment"
              />
              <PriceCard
                label="Regular Price"
                price="1,86,577"
                desc="EMI begin at BDT 15,548/mo"
              />
            </div>

            <div className="px-2 text-[11px] font-bold">
              Estimated delivery:{" "}
              <span className="underline decoration-dotted underline-offset-4 tracking-tighter">
                0-3 days
              </span>
            </div>

            {/* Dazzle Care */}
            <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="bg-[#111416] p-4 flex items-center gap-2">
                <ShieldCheck className="text-[#c5a47e]" size={20} />
                <span className="text-white font-bold text-[11px] uppercase tracking-widest">
                  Dazzle Care
                </span>
              </div>
              <div className="divide-y divide-zinc-100">
                <CareItem title="Dazzle Ultimate Care+ 1 year" price="25,031" />
                <CareItem
                  title="DC+ & DSC+ Bundle (1 year brand-new replacement)"
                  price="15,012"
                />
                <CareItem
                  title="Dazzle Screen Care+ : 730 days display"
                  price="10,002"
                />
                <CareItem
                  title="Dazzle Care+ for Apple (1 Year Guarantee)"
                  price="8,332"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                  className="w-4 h-4 accent-green-600 rounded"
                />
                <span className="text-[11px] text-zinc-500">
                  I agree to Dazzle's{" "}
                  <span className="text-blue-500 underline">
                    terms & conditions
                  </span>
                </span>
              </label>

              <div className="text-3xl font-black text-[#c5a47e]">
                BDT 1,66,990
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button className="h-14 bg-[#111416] text-white rounded-lg font-black uppercase text-[11px] hover:bg-black transition-all">
                  <ShoppingCart size={18} /> Add To Cart
                </Button>
                <Button
                  variant="secondary"
                  className="h-14 bg-[#f1e5d9] text-[#8a6d4d] rounded-lg font-black uppercase text-[11px] hover:bg-[#ebdccb]"
                >
                  Buy Now
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 pb-10">
                <div className="bg-[#4caf50] text-white p-3 rounded-xl flex flex-col items-center justify-center text-center">
                  <Box size={22} className="mb-1" />
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    In Stock
                  </span>
                </div>
                <div className="bg-zinc-100 text-zinc-800 p-3 rounded-xl flex flex-col items-center justify-center text-center border border-zinc-200">
                  <CreditCard size={22} className="mb-1 text-zinc-400" />
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    1 Year Apple
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---
const Label = ({ text, className = "" }: any) => (
  <span
    className={`text-[11px] font-black uppercase text-zinc-400 mb-3 block ${className}`}
  >
    {text}
  </span>
);

const Badge = ({ text }: { text: string }) => (
  <span className="bg-[#fdf0e6] text-[#c5a47e] text-[10px] font-black px-3 py-1 rounded border border-[#f3d4b1] uppercase">
    {text}
  </span>
);

const SelectionButton = ({ active, text, onClick }: any) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className={`flex-1 py-2 px-3 text-[10px] font-bold rounded-lg border transition-all h-auto ${active ? "bg-[#fdf0e6] border-[#c5a47e] text-[#8a6d4d] hover:bg-[#fdf0e6]" : "bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300"}`}
  >
    {text}
  </Button>
);

const MetaBox = ({ icon, label, value, isLink }: any) => (
  <div className="bg-[#f5f5f7] p-4 rounded-xl flex flex-col items-center text-center border border-zinc-100 shadow-sm">
    <div className="text-zinc-400 mb-2">{icon}</div>
    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter mb-1 leading-none">
      {label}
    </span>
    <span
      className={`text-[11px] font-black ${isLink ? "text-blue-500 underline" : "text-zinc-800"}`}
    >
      {value}
    </span>
  </div>
);

const PriceCard = ({ active, label, price, desc }: any) => (
  <label
    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${active ? "bg-white border-orange-200 shadow-sm" : "bg-transparent border-transparent opacity-60"}`}
  >
    <div className="flex items-center gap-2 mb-1">
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${active ? "border-orange-500" : "border-zinc-300"}`}
      >
        {active && <div className="w-2 h-2 bg-orange-500 rounded-full" />}
      </div>
      <span className="text-[11px] font-bold text-zinc-500 uppercase">
        {label}: <span className="text-orange-600 font-black">৳ {price}</span>
      </span>
    </div>
    <p className="text-[9px] text-zinc-400 pl-6">{desc}</p>
  </label>
);

const CareItem = ({ title, price }: any) => (
  <label className="flex items-center justify-between p-4 hover:bg-zinc-50 cursor-pointer group">
    <div className="flex items-start gap-3 flex-1">
      <input
        type="checkbox"
        className="mt-1 w-4 h-4 accent-zinc-800 rounded border-zinc-300"
      />
      <span className="text-[10px] font-bold text-zinc-700 leading-tight uppercase tracking-tighter">
        {title}
      </span>
    </div>
    <div className="text-right min-w-[70px] ml-4">
      <span className="text-[10px] font-black text-zinc-900 block leading-none">
        BDT
      </span>
      <span className="text-[11px] font-black text-zinc-900">{price}</span>
    </div>
  </label>
);

export default IPhone17ProMaxDetails;
