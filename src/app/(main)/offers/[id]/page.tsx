"use client";

import { CheckCircle2, Copy, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Container from "@/src/components/shared/Container";

const OfferDetails = () => {
  return (
    <main className="bg-white min-h-screen pb-20">
      <Container className="pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Offer Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/img/hero/sc-offer-main-banner.webp" alt="Offer Detail" fill className="object-cover" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-[#111416] tracking-tighter uppercase leading-none">
                Eid-Ul-Fitr <br /> <span className="text-[#c5a47e]">Mega Deal</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Celebrate this Eid with Gadget™! Grab your favorite smartphones, laptops, and accessories at an unbeatable price. Use the coupon code at checkout to avail the discount.
              </p>
            </div>

            <div className="bg-[#fafafa] p-8 rounded-3xl border border-zinc-100">
              <h3 className="font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                <Info size={18} className="text-[#c5a47e]" /> Terms & Conditions
              </h3>
              <ul className="space-y-3">
                {[
                  "Minimum purchase value ৳15,000.",
                  "Applicable on selected models only.",
                  "One customer can use the code once.",
                  "Offer valid until stock lasts.",
                  "Cannot be combined with other exchange offers."
                ].map((term, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 font-medium">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky Promo Action */}
          <div className="lg:col-span-5">
            <div className="sticky top-10 bg-[#111416] text-white p-10 rounded-[2.5rem] shadow-2xl">
              <div className="text-center space-y-6">
                <div>
                  <p className="text-[#c5a47e] text-sm font-black uppercase tracking-[0.2em] mb-2">Discount Code</p>
                  <div className="bg-white/5 border border-dashed border-white/20 p-6 rounded-2xl flex items-center justify-between">
                    <span className="text-3xl font-black tracking-widest">EID2026</span>
                    <Button variant="ghost" className="hover:bg-white/10 text-[#c5a47e]">
                      <Copy size={20} />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-4xl font-black tracking-tighter">UP TO 20% OFF</h4>
                  <p className="text-zinc-400 text-sm">Valid on all Credit Card transactions</p>
                </div>

                <Separator className="bg-white/10" />

                <Button className="w-full bg-[#c5a47e] hover:bg-white text-[#111416] font-black uppercase py-8 rounded-2xl text-lg transition-all">
                  Shop Eligible Products
                </Button>
                
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  *Offer expires February 25, 2026 at 11:59 PM
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
};

export default OfferDetails;