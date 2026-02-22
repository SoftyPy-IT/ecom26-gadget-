"use client";

import { useState } from "react";
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  Search, 
  MapPin, 
  Clock, 
  AlertCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Container from "@/src/components/shared/Container";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  // Mock status data
  const steps = [
    { title: "Order Placed", date: "20 Feb, 2026", status: "complete", icon: <Package size={18} /> },
    { title: "Processing", date: "21 Feb, 2026", status: "complete", icon: <Clock size={18} /> },
    { title: "On the Way", date: "Pending", status: "current", icon: <Truck size={18} /> },
    { title: "Delivered", date: "Expected 24 Feb", status: "upcoming", icon: <CheckCircle2 size={18} /> },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) setShowStatus(true);
  };

  return (
    <main className="bg-[#fafafa] min-h-screen py-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-black text-[#111416] tracking-tighter uppercase mb-4">
              Track <span className="text-zinc-300">Order</span>
            </h1>
            <p className="text-zinc-500 font-medium">
              Enter your Order ID and Email to track your shipment status.
            </p>
          </div>

          {/* Search Card */}
          <Card className="border-none shadow-2xl shadow-zinc-200/50 rounded-3xl overflow-hidden mb-8">
            <CardContent className="p-8 md:p-12 bg-white">
              <form onSubmit={handleTrack} className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <Input 
                    placeholder="Enter Order ID (e.g. #GAD-8829)" 
                    className="pl-12 py-7 rounded-2xl border-zinc-100 focus:ring-[#c5a47e] bg-zinc-50/50"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Billing Email" 
                  className="py-7 rounded-2xl border-zinc-100 focus:ring-[#c5a47e] bg-zinc-50/50"
                />
                <Button className="w-full bg-[#111416] hover:bg-[#c5a47e] text-white font-black uppercase tracking-widest py-7 rounded-2xl transition-all duration-300">
                  Track Now
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {showStatus && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="border-none shadow-xl rounded-3xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
                    <div>
                      <p className="text-[10px] font-black text-[#c5a47e] uppercase tracking-widest mb-1">Current Status</p>
                      <h3 className="text-2xl font-black text-[#111416]">Shipment in Transit</h3>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Expected Delivery</p>
                      <h3 className="text-xl font-bold text-[#111416]">Feb 24, 2026</h3>
                    </div>
                  </div>

                  {/* Vertical Timeline */}
                  <div className="space-y-8 relative before:absolute before:inset-0 before:left-[19px] before:w-[2px] before:bg-zinc-100">
                    {steps.map((step, idx) => (
                      <div key={idx} className="relative flex items-start gap-6 group">
                        <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white transition-colors duration-500 ${
                          step.status === 'complete' ? 'bg-[#c5a47e] text-white' : 
                          step.status === 'current' ? 'bg-[#111416] text-white shadow-[0_0_0_4px_rgba(197,164,126,0.2)]' : 
                          'bg-zinc-100 text-zinc-400'
                        }`}>
                          {step.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className={`font-black uppercase tracking-tight ${step.status === 'upcoming' ? 'text-zinc-300' : 'text-[#111416]'}`}>
                            {step.title}
                          </span>
                          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                            {step.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-10 opacity-50" />

                  {/* Delivery Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-[#c5a47e]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Shipping Address</p>
                        <p className="text-sm font-bold text-zinc-700 leading-snug">
                          House 12, Road 4, Sector 7<br />Uttara, Dhaka - 1230
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                        <AlertCircle size={18} className="text-[#c5a47e]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Courier Partner</p>
                        <p className="text-sm font-bold text-zinc-700">Pathao Courier (Domestic)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Help Support */}
              <div className="bg-[#111416] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                <div>
                  <h4 className="text-lg font-black tracking-tight mb-1">Need help with your order?</h4>
                  <p className="text-zinc-400 text-xs font-medium">Our support team is available 24/7 for your assistance.</p>
                </div>
                <Button className="bg-white text-[#111416] hover:bg-[#c5a47e] hover:text-white font-bold px-8 py-6 rounded-xl transition-all">
                  Contact Support
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default OrderTracking;