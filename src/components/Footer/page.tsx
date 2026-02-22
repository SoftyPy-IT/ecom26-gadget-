"use client";

import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import Image from "next/image";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Brands", href: "/brands" },
      { label: "Blogs", href: "/blogs" },
      { label: "Order Tracking", href: "/order-tracking" },

    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Phones", href: "/phones" },
      { label: "Tablets", href: "/tablets" },
      { label: "Laptops", href: "/laptops" },
      { label: "Smart Watch", href: "/watches" },
      { label: "Gadgets", href: "/gadgets" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Dazzle Care", href: "#" },
      { label: "Warranty Policy", href: "#" },
      { label: "Replacement", href: "#" },
      { label: "Delivery Info", href: "#" },
      { label: "EMI Plans", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111416] text-white pt-10 md:pt-20 pb-10 px-6 lg:px-20 rounded-t-[30px] md:rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-[#e2c7a8]">
              Gadget
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Your ultimate destination for premium gadgets and authentic tech accessories in Bangladesh. Experience the future today.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#e2c7a8] group-hover:text-black transition-all">
                  <Mail size={18} />
                </div>
                <Link href="mailto:support@dazzle.com.bd" className="text-sm font-bold text-zinc-300 hover:text-white">
                  support@dazzle.com.bd
                </Link>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#e2c7a8] group-hover:text-black transition-all">
                  <Phone size={18} />
                </div>
                <Link href="tel:+880123456789" className="text-sm font-bold text-zinc-300 hover:text-white">
                  +880 1234 567 890
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {linkGroups.map((group, index) => (
              <div key={index} className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e2c7a8]">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e2c7a8]">
              Newsletter
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-[#e2c7a8] transition-colors"
              />
              <button className="absolute right-2 top-2 bg-[#e2c7a8] text-black p-2 rounded-xl hover:scale-105 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest">
            © 2026 Dazzle Gadget Store. All Rights Reserved.
          </p>
          <div className="flex gap-6">
             <Image src="/img/payment.webp" alt="Payments" width={250} height={30} className="transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}