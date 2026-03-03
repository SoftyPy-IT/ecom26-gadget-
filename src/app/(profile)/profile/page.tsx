/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { 
  ShoppingBag, 
  User, 
  MapPin, 
  LogOut, 
  ChevronRight, 
  PackageCheck, 
  Clock, 
  Truck 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SimpleProfile = () => {
  return (
    <div className="bg-[#f4f4f4] min-h-screen pb-20">
      {/* 1. SIMPLE HEADER */}
      <div className="bg-white border-b border-zinc-200 pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center md:items-start md:flex-row gap-6">
          <div className="w-24 h-24 bg-[#111416] rounded-full flex items-center justify-center text-white text-3xl font-bold">
            JD
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-zinc-900">Hello, John Doe!</h1>
            <p className="text-zinc-500 text-sm">Welcome back to your account.</p>
            <Button variant="link" className="text-red-600 p-0 h-auto font-bold text-xs mt-2">
              <LogOut size={14} className="mr-1" /> Logout / Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-8">
        
        {/* 2. RECENT ORDER STATUS (BIG & CLEAR) */}
        <section>
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">Current Order Status</h2>
          <Card className="p-6 border-none shadow-md rounded-3xl bg-white overflow-hidden relative">
             <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                  <Truck size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Your order is on the way!</h3>
                  <p className="text-zinc-500 text-sm">Product: <span className="text-zinc-900 font-bold">Redmi Pad 2</span></p>
                </div>
             </div>
             <div className="mt-6 flex items-center justify-between border-t pt-4">
                <span className="text-xs font-bold text-zinc-400 italic">Order ID: #DAZ-12345</span>
                <Button size="sm" className="bg-[#c5a47e] hover:bg-[#111416] text-white font-bold rounded-xl px-6">
                  Track Package
                </Button>
             </div>
          </Card>
        </section>

        {/* 3. MENU BUTTONS (BIG TOUCH TARGETS) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <MenuButton 
            icon={<ShoppingBag className="text-blue-500" />} 
            title="All My Orders" 
            desc="See everything you bought" 
           />
           <MenuButton 
            icon={<User className="text-green-500" />} 
            title="Edit My Profile" 
            desc="Change name, email, or photo" 
           />
           <MenuButton 
            icon={<MapPin className="text-red-500" />} 
            title="My Address" 
            desc="Where we send your gadgets" 
           />
           <MenuButton 
            icon={<Clock className="text-purple-500" />} 
            title="Service History" 
            desc="Check your phone repairs" 
           />
        </section>

        {/* 4. PAST ORDERS LIST (VERY SIMPLE) */}
        <section className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
          <div className="p-6 border-b border-zinc-50">
            <h2 className="font-bold text-lg text-zinc-900">Previous Orders</h2>
          </div>
          <div className="divide-y divide-zinc-50">
            <SimpleOrderRow 
              item="Xiaomi 14 Ultra" 
              date="12 Jan 2026" 
              price="BDT 45,500" 
              status="Finished" 
            />
            <SimpleOrderRow 
              item="Redmi Buds 5" 
              date="05 Jan 2026" 
              price="BDT 3,200" 
              status="Finished" 
            />
          </div>
        </section>

      </div>
    </div>
  );
};

// --- VERY SIMPLE SUB-COMPONENTS ---

const MenuButton = ({ icon, title, desc }: any) => (
  <button className="flex items-center gap-4 bg-white p-6 rounded-[2rem] border border-transparent hover:border-[#c5a47e] hover:shadow-xl transition-all text-left w-full group shadow-sm">
    <div className="bg-zinc-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-black text-zinc-900 text-sm">{title}</h4>
      <p className="text-zinc-400 text-xs font-medium">{desc}</p>
    </div>
    <ChevronRight size={18} className="text-zinc-300 group-hover:text-[#c5a47e]" />
  </button>
);

const SimpleOrderRow = ({ item, date, price, status }: any) => (
  <div className="p-6 flex justify-between items-center hover:bg-zinc-50 transition-colors cursor-pointer">
    <div className="space-y-1">
      <p className="font-bold text-zinc-900">{item}</p>
      <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
        <span>{date}</span>
        <span className="w-1 h-1 bg-zinc-300 rounded-full" />
        <span className="text-[#c5a47e] font-bold">{price}</span>
      </div>
    </div>
    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1 rounded-full text-[10px] font-black uppercase">
      {status}
    </Badge>
  </div>
);

export default SimpleProfile;