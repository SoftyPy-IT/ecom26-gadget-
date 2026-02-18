"use client";

import React from "react";
import Container from "../shared/Container";
import { Trash2, Plus, Minus, CreditCard, ShieldCheck,  ArrowRight } from "lucide-react";

export default function CartPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-12">
      <Container>
        <h1 className="text-3xl font-black text-[#111416] mb-8 uppercase italic tracking-tighter">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Product List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[11px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-50">
                    <th className="pb-4">Product</th>
                    <th className="pb-4 text-center">Quantity</th>
                    <th className="pb-4 text-right">Price</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {/* Single Item Row */}
                  <tr>
                    <td className="py-6 flex items-center gap-4">
                      <div className="w-16 h-16 bg-zinc-50 rounded-xl border border-zinc-100 shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-sm text-zinc-900">iPhone 15 Pro Max</h3>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase">Natural Titanium | 256GB</p>
                        <div className="mt-1 flex items-center gap-1 text-[10px] text-blue-600 font-black uppercase">
                          <ShieldCheck size={12} /> Dazzle Care+ Added
                        </div>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center justify-center border border-zinc-200 rounded-lg w-24 mx-auto overflow-hidden">
                        <button className="p-1 px-2 hover:bg-zinc-50"><Minus size={14}/></button>
                        <span className="px-2 font-bold text-sm">1</span>
                        <button className="p-1 px-2 hover:bg-zinc-50"><Plus size={14}/></button>
                      </div>
                    </td>
                    <td className="py-6 text-right font-black text-zinc-900">৳145,000</td>
                    <td className="py-6 text-right">
                      <button className="text-red-100 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* EMI Information Banner */}
            <div className="bg-zinc-900 rounded-2xl p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <CreditCard className="text-[#e2c7a8]" size={32} />
                <div>
                  <h4 className="font-bold text-sm uppercase">Available for EMI</h4>
                  <p className="text-xs text-zinc-400">Monthly installments starting from ৳4,027/month</p>
                </div>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest border border-zinc-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">
                Details
              </button>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm sticky top-24">
              <h2 className="text-lg font-black text-zinc-900 uppercase mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm font-bold text-zinc-500">
                  <span>Subtotal</span>
                  <span className="text-zinc-900 italic">৳145,000</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-zinc-500">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-black uppercase text-[10px]">Free Delivery</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-zinc-500">
                  <span>Warranty Plan</span>
                  <span className="text-zinc-900">৳0.00</span>
                </div>
                <div className="h-px bg-zinc-100 my-2"></div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-black uppercase text-zinc-900">Total</span>
                  <span className="text-2xl font-black text-[#111416]">৳145,000</span>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Coupon Code" 
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e2c7a8]"
                />
                <button className="absolute right-2 top-2 bg-zinc-900 text-[#e2c7a8] px-3 py-1 rounded-lg text-[10px] font-black uppercase">Apply</button>
              </div>

              <button className="w-full bg-[#111416] text-[#e2c7a8] py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-2xl hover:shadow-zinc-300 transition-all flex items-center justify-center gap-3">
                Proceed to Checkout <ArrowRight size={18} />
              </button>

              <div className="mt-6 flex justify-center gap-4 grayscale opacity-50">
                {/* Payment Icons Placeholder */}
                <div className="w-8 h-5 bg-zinc-200 rounded"></div>
                <div className="w-8 h-5 bg-zinc-200 rounded"></div>
                <div className="w-8 h-5 bg-zinc-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}