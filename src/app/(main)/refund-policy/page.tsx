/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Banknote, 
  Truck, 
  FileSearch,
  ShieldAlert
} from "lucide-react";
import Container from "@/src/components/shared/Container";

const RefundPolicy = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#111416] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a47e] opacity-10 blur-[120px] -mr-48 -mt-48" />
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#c5a47e] mb-4">
              <RotateCcw size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Return & Refund</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">
              Refund <span className="text-[#c5a47e]">Policy</span>
            </h1>
            <p className="text-zinc-400 text-sm font-medium max-w-xl leading-relaxed">
              At Dazzle, we stand by the quality of our gadgets. If your purchase isn&apos;t quite right, 
              our streamlined refund process ensures your investment is protected.
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-12">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* --- LEFT: MAIN POLICY --- */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Eligibility Card */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-zinc-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-zinc-50 rounded-2xl text-[#c5a47e]">
                  <FileSearch size={24} />
                </div>
                <h2 className="text-2xl font-black text-[#111416] uppercase italic tracking-tighter">Eligibility for Returns</h2>
              </div>
              
              <div className="space-y-6">
                <EligibilityItem 
                  title="Timeframe" 
                  desc="Items must be returned within 14 days of the original purchase date." 
                />
                <EligibilityItem 
                  title="Condition" 
                  desc="Products must be unused, in the same condition as received, and in original packaging with all seals intact." 
                />
                <EligibilityItem 
                  title="Proof of Purchase" 
                  desc="An original invoice or digital receipt from Dazzle is mandatory for all claims." 
                />
              </div>
            </div>

            {/* 2. Refund Process Steps */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-zinc-100 shadow-sm">
              <h2 className="text-2xl font-black text-[#111416] uppercase italic tracking-tighter mb-10">The Refund Process</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ProcessStep 
                  number="01" 
                  title="Initiate Claim" 
                  desc="Contact our support team or visit a Dazzle outlet with your device and box." 
                />
                <ProcessStep 
                  number="02" 
                  title="Quality Check" 
                  desc="Our technicians will inspect the device for hardware issues or physical damage." 
                />
                <ProcessStep 
                  number="03" 
                  title="Approval" 
                  desc="Once approved, we will process your refund to the original payment method." 
                />
                <ProcessStep 
                  number="04" 
                  title="Credit Applied" 
                  desc="Funds typically appear in your account within 5–10 working days." 
                />
              </div>
            </div>

            {/* 3. Non-Refundable Items (Alert Style) */}
            <div className="bg-red-50 border border-red-100 p-8 md:p-12 rounded-[3rem]">
              <div className="flex items-center gap-3 mb-6 text-red-600">
                <ShieldAlert size={24} />
                <h2 className="text-2xl font-black uppercase italic tracking-tighter">Non-Refundable Items</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Opened Software/License keys",
                  "In-ear headphones (for hygiene)",
                  "Physical/Liquid damaged items",
                  "Items without original packaging",
                  "Consumables (Batteries/Cleaning kits)",
                  "Customized or engraved products"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-red-800/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- RIGHT: SUMMARY & QUICK LINKS --- */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Stats Card */}
            <div className="bg-[#111416] p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black italic uppercase text-[#c5a47e] mb-6">Policy at a Glance</h3>
              <div className="space-y-6">
                <QuickStat icon={<Truck size={18} />} label="Return Shipping" val="Customer Responsibility" />
                <QuickStat icon={<Banknote size={18} />} label="Restocking Fee" val="Up to 20% (If seal broken)" />
                <QuickStat icon={<CheckCircle2 size={18} />} label="Method" val="Original Payment Source" />
              </div>
            </div>

            {/* Contact Support CTA */}
            <div className="bg-white border border-zinc-100 p-8 rounded-[2.5rem] text-center">
              <div className="w-16 h-16 bg-[#f3d4b1]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="text-[#8a6d4d]" />
              </div>
              <h4 className="font-black text-sm uppercase mb-2">Need Help with a Return?</h4>
              <p className="text-[11px] text-zinc-500 mb-6">Our dedicated claims team is available Sat-Thu (10AM - 8PM).</p>
              <button className="w-full bg-zinc-100 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#111416] hover:text-white transition-all">
                Contact Support
              </button>
            </div>
          </div>

        </div>

        {/* --- DEDUCTION DISCLAIMER --- */}
        <div className="mt-8 bg-zinc-100/50 border border-zinc-100 p-8 rounded-[2.5rem]">
          <p className="text-xs text-zinc-500 leading-relaxed">
            <strong>Important Note on Deductions:</strong> As per our General Terms, if you choose to change a model, color, or storage size within 30 days of purchase without a hardware fault, a <strong>20% deduction</strong> (Imported products) or <strong>30% deduction</strong> (Official products) will be applied based on the current market price. This is to cover the depreciation of the device once the box seal is broken.
          </p>
        </div>
      </Container>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const EligibilityItem = ({ title, desc }: any) => (
  <div className="group">
    <div className="flex items-center gap-2 mb-1">
      <div className="w-2 h-2 rounded-full bg-[#c5a47e]" />
      <h4 className="font-black text-xs uppercase tracking-widest text-zinc-800">{title}</h4>
    </div>
    <p className="text-sm text-zinc-500 font-medium pl-4">{desc}</p>
  </div>
);

const ProcessStep = ({ number, title, desc }: any) => (
  <div className="relative pl-12">
    <span className="absolute left-0 top-0 text-3xl font-black italic text-[#f3d4b1]/40">{number}</span>
    <h4 className="font-black text-xs uppercase text-zinc-800 mb-1">{title}</h4>
    <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const QuickStat = ({ icon, label, val }: any) => (
  <div className="flex items-center gap-4">
    <div className="text-[#c5a47e]">{icon}</div>
    <div>
      <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-500">{label}</span>
      <span className="text-xs font-bold">{val}</span>
    </div>
  </div>
);

export default RefundPolicy;