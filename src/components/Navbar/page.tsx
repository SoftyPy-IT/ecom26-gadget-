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
} from "lucide-react";
import Container from "../shared/Container";
import CartDrawer from "../Cart/CartDrawer";
import { Button } from "@/components/ui/button";

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

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    console.log("isCartOpen:", isCartOpen);
  }, [isCartOpen]);

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

  // UPDATED: Categories now have sub-brands
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

      {/* 2. MAIN SEARCH BAR */}
      <div className="bg-[#111416] py-4">
        <Container>
          <div className="flex justify-between gap-6">
            <Link href="/" className="shrink-0">
              <span className="text-white text-2xl font-black tracking-tighter">
                GADGET™
              </span>
            </Link>

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

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/offer">
                <Button className="flex items-center gap-2 bg-[#1c1f22] border border-gray-700 text-white px-4 py-2 rounded-full text-xs uppercase hover:bg-gray-800 transition-all">
                  Offer <Gift size={14} className="text-[#e2c7a8]" />
                </Button>
              </Link>

              {/* FIX: Cart Drawer Trigger */}
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  console.log("Cart button clicked!");
                }}
                className="flex items-center gap-2 border border-gray-700 text-white px-4 py-2 rounded-md text-xs cursor-pointer uppercase hover:bg-gray-800 transition-all"
              >
                <ShoppingCart size={14} /> Cart
              </button>

              {/* <div className="fixed top-0 left-0 bg-black text-white p-2 z-50">
                Cart Open: {isCartOpen ? "Yes" : "No"}
              </div> */}

              <Link href="/login">
                <Button className="flex items-center gap-2 border border-gray-700 text-white px-4 py-2 rounded-md text-xs uppercase hover:bg-gray-800 transition-all">
                  <User size={14} /> Login
                </Button>
              </Link>
            </div>
            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-white cursor-pointer"
              >
                <ShoppingCart size={24} />
              </button>
              <button
                onClick={() => setIsClick(!isClick)}
                className="text-white cursor-pointer"
              >
                {isClick ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. CATEGORY BAR WITH HOVER DROPDOWN */}
      <div className="bg-white border-b border-gray-200 hidden lg:block shadow-sm">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="border-r border-gray-100 p-4 mr-2">
                <div className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer hover:opacity-70 border border-[#e2c7a8] p-1 rounded">
                  <MenuIcon />
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

                    {/* DROPDOWN MENU */}
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

      {/* MOBILE MENU DRAWER */}
      {isClick && (
        <div className="lg:hidden fixed inset-0 bg-white z-[9999] p-6 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-8">
            <span className="font-black text-xl">GADGET™</span>
            <X size={28} onClick={() => setIsClick(false)} />
          </div>
          <div className="flex flex-col gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                onClick={() => setIsClick(false)}
                className="flex items-center gap-4 text-lg font-bold border-b border-zinc-50 pb-3"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* {isCartOpen && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-xl">
      <p>Drawer works!</p>
      <button onClick={() => setIsCartOpen(false)}>Close</button>
    </div>
  </div>
)} */}

      {/* CART DRAWER */}
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />

      {/* <CartDrawer  /> */}
    </header>
  );
};

export default Navbar;
