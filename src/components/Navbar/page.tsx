"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Gift,
  FileText,
  Menu,
  X,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Speaker,
  Tv,
  MenuIcon,
  PhoneCall,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import Container from "../shared/Container";
import CartDrawer from "../Cart/CartDrawer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IconGradient = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <linearGradient id="gold-to-black" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f3d4b1" />
        <stop offset="100%" stopColor="#374151" />
      </linearGradient>
    </defs>
  </svg>
);

const BrandItem = ({ logo, name }: { logo: string; name: string }) => (
  <Link
    href={`/brand/${name.toLowerCase()}`}
    className="flex flex-col items-center gap-2 group/brand"
  >
    <div className="h-12 flex items-center justify-center grayscale group-hover/brand:grayscale-0 transition-all">
      {/* Replace with actual <img> tags for logos */}
      <span className="font-black text-zinc-800 text-lg tracking-tighter">
        {logo}
      </span>
    </div>
    <span className="text-[11px] font-bold text-zinc-400 group-hover/brand:text-black transition-colors">
      {name}
    </span>
  </Link>
);
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const utilityItems = [
    { name: "Order Tracking", href: "/track" },
    {
      name: "Gift",
      href: "/gift",
      icon: <Gift size={14} className="text-[#c5a47e]" />,
    },
    { name: "Blogs", href: "/blogs" },
    { name: "EMI Policy", href: "/emi" },
    { name: "Store Location", href: "/location" },
  ];

  const categories = [
    {
      name: "Phones",
      icon: <Smartphone size={18} stroke="url(#gold-to-black)" />,
      href: "/phones",
      brands: ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus"],
    },
    {
      name: "Tablet",
      icon: <Tablet size={18} stroke="url(#gold-to-black)" />,
      href: "/tablets",
      brands: ["iPad", "Samsung Tab", "Xiaomi Pad"],
    },
    {
      name: "Laptop",
      icon: <Laptop size={18} stroke="url(#gold-to-black)" />,
      href: "/laptops",
    },
    {
      name: "Smart Watch",
      icon: <Watch size={18} stroke="url(#gold-to-black)" />,
      href: "/watches",
    },
    {
      name: "Gadget",
      icon: <Headphones size={18} stroke="url(#gold-to-black)" />,
      href: "/gadgets",
    },
    {
      name: "Accessories",
      icon: <FileText size={18} stroke="url(#gold-to-black)" />,
      href: "/accessories",
    },
    {
      name: "Sounds",
      icon: <Speaker size={18} stroke="url(#gold-to-black)" />,
      href: "/sounds",
    },
    {
      name: "Smart TV",
      icon: <Tv size={18} stroke="url(#gold-to-black)" />,
      href: "/tv",
    },
  ];

  return (
    <header className="w-full relative">
      <IconGradient />

      {/* 1. UTILITY TOP BAR */}
      <div className="hidden lg:block border-b border-gray-100 py-2 bg-white">
        <Container>
          <div className="flex justify-between items-center text-[12px] font-semibold text-gray-700 uppercase tracking-tight">
            <div className="flex items-center gap-2">
              <PhoneCall size={14} />
              <span>09638001122</span>
            </div>
            <div className="flex gap-6 items-center">
              {utilityItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-black flex items-center gap-1"
                >
                  {item.icon && item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* 2. MAIN SEARCH BAR SECTION */}
      <div className="bg-[#111416] py-4">
        <Container>
          <div className="flex justify-between items-center gap-6">
            <Link href="/" className="shrink-0">
              <span className="text-white text-2xl font-black tracking-tighter">
                GADGET™
              </span>
            </Link>

            {/* Desktop Search */}
            <div className="grow hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white rounded-l-md px-4 py-2.5 outline-none text-sm"
              />
              <button className="bg-[#e2c7a8] px-5 py-2.5 rounded-r-md hover:bg-[#d4b998] transition-colors cursor-pointer">
                <Search size={20} className="text-gray-800" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isSearchOpen ? <X size={24} /> : <Search size={24} />}
              </button>

              {/* Desktop Only Buttons */}
              <div className="hidden lg:flex items-center gap-2">
                <Link href="/offer">
                  <Button className="flex items-center gap-2 bg-[#1c1f22] border border-gray-700 text-white px-4 py-2 rounded-full text-xs uppercase hover:bg-gray-800 transition-all">
                    Offer <Gift size={14} className="text-[#e2c7a8]" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="flex items-center gap-2 border border-gray-700 text-white px-4 py-2 rounded-md text-xs uppercase hover:bg-gray-800 transition-all">
                    <User size={14} /> Login
                  </Button>
                </Link>
              </div>

              {/* Cart & Menu (Visible on Mobile) */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 lg:border lg:border-gray-700 text-white px-2 lg:px-4 py-2 rounded-md text-xs uppercase hover:bg-gray-800 transition-all"
              >
                <ShoppingCart size={24} className="lg:w-[14px] lg:h-[14px]" />
                <span className="hidden lg:inline">Cart</span>
              </button>

              <button
                onClick={() => setIsClick(!isClick)}
                className="lg:hidden text-white p-1"
              >
                {isClick ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. MOBILE SEARCH BAR (Slide Down) */}
      <div
        className={`lg:hidden bg-[#1c1f22] overflow-hidden transition-all duration-300 ease-in-out ${
          isSearchOpen ? "max-h-20 border-b border-gray-800" : "max-h-0"
        }`}
      >
        <Container>
          <div className="py-3 flex items-center relative">
            <input
              type="text"
              autoFocus={isSearchOpen}
              placeholder="Search for gadgets..."
              className="w-full bg-white rounded-md px-4 py-3 outline-none text-sm pr-12"
            />
            <button className="absolute right-2 p-2 bg-[#e2c7a8] rounded-md">
              <Search size={18} className="text-gray-800" />
            </button>
          </div>
        </Container>
      </div>

      {/* 4. DESKTOP CATEGORY BAR */}
      <div className="bg-white border-b border-gray-200 hidden lg:block shadow-sm">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="group relative border-r border-gray-100 p-4 mr-2">
                <div className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer hover:opacity-70 border border-[#e2c7a8] p-1 rounded">
                  <MenuIcon size={20} />
                </div>

                {/* THE MEGA MENU PANEL */}
                <div className="absolute top-full left-0 w-[800px] bg-white shadow-2xl border border-zinc-100 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] rounded-b-xl overflow-hidden">
                  {/* LEFT SIDEBAR: Categories */}
                  <div className="w-1/3 bg-zinc-50/50 border-r border-zinc-100 py-4">
                    {categories.map((cat) => (
                      <div
                        key={cat.name}
                        className="px-6 py-3 flex justify-between items-center cursor-pointer hover:bg-white hover:text-[#c5a47e] font-bold text-sm text-zinc-700 transition-colors group/item"
                      >
                        <div className="flex items-center gap-3">
                          <span className="opacity-70">{cat.icon}</span>
                          {cat.name}
                        </div>
                        <ChevronDown
                          size={14}
                          className="-rotate-90 opacity-40 group-hover/item:opacity-100"
                        />
                      </div>
                    ))}
                    {/* Additional Side Menu Items from Image */}
                    <div className="px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-white hover:text-[#c5a47e] font-bold text-sm text-zinc-700">
                      <FileText size={18} className="opacity-70" /> Phone Cases
                    </div>
                    <div className="px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-white hover:text-[#c5a47e] font-bold text-sm text-zinc-700">
                      <ShieldCheck size={18} className="opacity-70" /> Screen
                      Protectors
                    </div>
                  </div>

                  {/* RIGHT CONTENT: Brand Grid */}
                  <div className="w-2/3 p-8 grid grid-cols-3 gap-8 items-center justify-items-center bg-white">
                    {/* These would ideally be mapped based on the hovered category */}
                    <BrandItem logo="APPLE" name="Apple" />
                    <BrandItem logo="SAMSUNG" name="Samsung" />
                    <BrandItem logo="MOTOROLA" name="Motorola" />
                    <BrandItem logo="GARMIN" name="Garmin" />
                    <BrandItem logo="GOOGLE" name="Google" />
                    <BrandItem logo="HONOR" name="Honor" />
                    <BrandItem logo="HUAWEI" name="Huawei" />
                    <BrandItem logo="ONEPLUS" name="OnePlus" />
                    <BrandItem logo="OPPO" name="Oppo" />
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                {categories.map((cat) => (
                  <div key={cat.name} className="group relative">
                    <Link
                      href={cat.href}
                      className="flex items-center gap-2 text-gray-500 hover:text-black text-[12px] font-bold uppercase tracking-tight transition-colors py-5 border-b-2 border-transparent hover:border-black"
                    >
                      <span>{cat.icon}</span>
                      {cat.name}
                      {cat.brands && (
                        <ChevronDown
                          size={12}
                          className="ml-[-4px] group-hover:rotate-180 transition-transform"
                        />
                      )}
                    </Link>

                    {cat.brands && (
                      <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-zinc-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 rounded-b-xl">
                        {cat.brands.map((brand) => (
                          <Link
                            key={brand}
                            href={`${cat.href}/${brand.toLowerCase()}`}
                            className="block px-6 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-50 hover:text-black border-l-4 border-transparent hover:border-[#e2c7a8]"
                          >
                            {brand}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/online-exclusive"
              className="bg-[#111416] text-[#e2c7a8] px-6 py-2 rounded text-[11px] font-black uppercase tracking-wider hover:bg-black transition-all"
            >
              Online Exclusive
            </Link>
          </div>
        </Container>
      </div>

      {/* 5. MOBILE MENU DRAWER */}
      {isClick && (
        <div className="lg:hidden fixed inset-0 bg-white z-[9999] overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="font-black text-xl tracking-tighter text-[#111416]">
                GADGET™
              </span>
              <button
                onClick={() => setIsClick(false)}
                className="p-2 hover:bg-zinc-100 rounded-full"
              >
                <X size={28} />
              </button>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {categories.map((cat) => (
                <AccordionItem
                  key={cat.name}
                  value={cat.name}
                  className="border-b-zinc-100"
                >
                  {cat.brands ? (
                    <>
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4 text-sm font-black uppercase tracking-tight text-zinc-800">
                          <span className="p-2 bg-zinc-50 rounded-lg">
                            {cat.icon}
                          </span>
                          {cat.name}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-1 pl-14">
                          {cat.brands.map((brand) => (
                            <Link
                              key={brand}
                              href={`${cat.href}/${brand.toLowerCase()}`}
                              onClick={() => setIsClick(false)}
                              className="py-3 text-[13px] font-bold text-zinc-500 border-b border-zinc-50 last:border-0"
                            >
                              {brand}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </>
                  ) : (
                    <div className="py-4">
                      <Link
                        href={cat.href}
                        onClick={() => setIsClick(false)}
                        className="flex items-center gap-4 text-sm font-black uppercase text-zinc-800"
                      >
                        <span className="p-2 bg-zinc-50 rounded-lg">
                          {cat.icon}
                        </span>
                        {cat.name}
                      </Link>
                    </div>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </header>
  );
};

export default Navbar;
