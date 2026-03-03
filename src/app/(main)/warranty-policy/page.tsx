/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { 
  ShieldCheck, 
  Smartphone, 
  Apple, 
  Laptop,  
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
} from "lucide-react";
import Container from "@/src/components/shared/Container";

const WarrantyPolicy = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#111416] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a47e] opacity-10 blur-[120px] -mr-48 -mt-48" />
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-[#c5a47e]">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">gadget Protection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
              Warranty <span className="text-[#c5a47e]">&</span> Service <br /> Policy
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
              gadget is committed to providing top-notch service and reliable product support. 
              Our warranty plans ensure your tech remains protected and high-performing.
            </p>
          </div>
        </Container>
      </section>

      {/* --- HIGHLIGHTS BAR --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <HighlightCard 
            icon={<Clock className="text-[#c5a47e]" />} 
            title="14-Day Replacement" 
            desc="Instant hardware replacement guarantee for all products."
          />
          <HighlightCard 
            icon={<Smartphone className="text-[#c5a47e]" />} 
            title="Network Unlock" 
            desc="Network-lock issues on any phone are fully covered by gadget."
          />
          <HighlightCard 
            icon={<CheckCircle2 className="text-[#c5a47e]" />} 
            title="Official Support" 
            desc="1-Year brand warranty included with official products."
          />
        </div>
      </div>

      <Container className="mt-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: MAIN CONTENT --- */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. Parts Warranty */}
            <PolicySection 
              title="1. Parts Warranty" 
              tag="Standard Coverage"
              price="4.25% - 7.99% of price"
            >
              <p className="text-zinc-600 mb-4">Available for all smartphones and gadgets. Covers internal and external parts including displays, batteries, motherboards, and cameras.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <ListGroup title="Inclusions" items={["Internal components", "Battery issues", "Full repair/parts replacement"]} />
                <ListGroup title="Process" items={["Original Box required", "1–21 working days turnaround"]} />
              </div>
            </PolicySection>

            {/* 2. gadget Care+ Apple */}
            <PolicySection 
              title="2. gadget Care+" 
              tag="Exclusive for Apple"
              price="4.99% of price"
              isPremium
            >
              <div className="flex items-center gap-2 mb-4 text-[#c5a47e]">
                <Apple size={18} fill="currentColor" />
                <span className="font-bold text-xs uppercase">iPhone, iPad, MacBook</span>
              </div>
              <p className="text-zinc-600 mb-4 font-bold">Brand-new product replacement (One Time) within 3–5 days.</p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Covers logic board & screen (green line)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Free software performance repairs</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" /> Maintains best resale value</li>
              </ul>
            </PolicySection>

            {/* 3. gadget Care+ Android/Laptop */}
            <PolicySection 
              title="3. gadget Care+" 
              tag="Android & Laptop"
              price="6.99% - 9.99% of price"
            >
              <div className="flex items-center gap-2 mb-4 text-[#c5a47e]">
                <Laptop size={18} />
                <span className="font-bold text-xs uppercase">Phones, Tablets & Laptops</span>
              </div>
              <p className="text-zinc-600">Includes brand-new replacement for hardware and screen issues. Processing is faster (3-5 days) than standard warranty cycles.</p>
            </PolicySection>

            {/* 4. gadget Ultimate Care+ */}
            <PolicySection 
              title="5. gadget Ultimate Care+" 
              tag="Full Protection"
              price="Fixed Premium"
              isPremium
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-black text-xs uppercase tracking-widest text-zinc-800">1 Year Brand New Replacement</h4>
                  <p className="text-xs text-zinc-500">Covers any hardware issues that arise during normal use.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-xs uppercase tracking-widest text-[#8a6d4d]">Accidental Damage Cover</h4>
                  <p className="text-xs text-zinc-500">Free parts replacement for cracked screens or broken back glass.</p>
                </div>
              </div>
            </PolicySection>

            {/* 5. Screen Care+ */}
            <PolicySection 
              title="7. gadget Screen Care+" 
              tag="Display Only"
              price="Fixed Fee"
            >
              <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100">
                 <h3 className="text-xl font-black text-zinc-900 mb-2">730 Days Coverage</h3>
                 <p className="text-sm text-zinc-600">Two years of one-time display replacement for non-physical issues like green lines or dead pixels.</p>
              </div>
            </PolicySection>

          </div>

          {/* --- RIGHT: SIDEBAR (TERMS & CLAIM) --- */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Claim Process */}
            <div className="bg-[#111416] text-white p-8 rounded-[2.5rem] sticky top-24">
              <h3 className="text-2xl font-black italic uppercase mb-6">How to Claim</h3>
              <div className="space-y-6">
                <Step number="01" text="Visit any gadget Service Center with your device." />
                <Step number="02" text="Present the Original Box and a valid photo ID." />
                <Step number="03" text="Our team will diagnose and confirm eligibility." />
                <Step number="04" text="Collect your repaired/replaced device within the promised time." />
              </div>
              <button className="w-full mt-8 bg-[#c5a47e] text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">
                Find Service Center
              </button>
            </div>

            {/* Exclusion Alerts */}
            <div className="bg-white border border-zinc-100 p-8 rounded-[2.5rem]">
              <div className="flex items-center gap-2 text-red-500 mb-4">
                <AlertTriangle size={20} />
                <span className="font-black uppercase text-xs tracking-widest">Important Exclusions</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-500 font-bold uppercase tracking-tight">
                <li className="flex gap-2">✕ Fire & Water Damage</li>
                <li className="flex gap-2">✕ Unauthorized Modifications</li>
                <li className="flex gap-2">✕ Accidental Damage (Except Ultimate Care+)</li>
                <li className="flex gap-2">✕ UV Glass Related Damage</li>
                <li className="flex gap-2">✕ Accessories (Cables/Chargers)</li>
              </ul>
            </div>

          </div>
        </div>

        {/* --- GENERAL TERMS TABLE --- */}
        <div className="mt-20 bg-white border border-zinc-100 rounded-[3rem] overflow-hidden">
          <div className="bg-[#f3d4b1]/20 p-8">
             <h2 className="text-2xl font-black uppercase italic tracking-tighter">General Terms & Conditions</h2>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-12 text-sm text-zinc-600">
            <div className="space-y-4">
              <p>• <strong>Deductions:</strong> 20% (Imported) or 30% (Official) deduction applies for model/color changes within 30 days.</p>
              <p>• <strong>Software:</strong> Update problems, third-party app bugs, and gaming bugs are not covered.</p>
              <p>• <strong>Region:</strong> Phones from USA/UK/Canada only have hardware warranty. No replacement for blacklist issues.</p>
            </div>
            <div className="space-y-4">
              <p>• <strong>Verification:</strong> Customers must check cosmetic condition before leaving. Claims for dents/scratches are not accepted later.</p>
              <p>• <strong>Warranty Activation:</strong> Plans must be activated at the exact time of purchase.</p>
              <p>• <strong>Data:</strong> gadget is not responsible for any data loss. Please back up your device.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const HighlightCard = ({ icon, title, desc }: any) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-black/5 border border-zinc-50 flex items-start gap-4">
    <div className="bg-[#fafafa] p-3 rounded-2xl">{icon}</div>
    <div>
      <h4 className="font-black uppercase text-xs tracking-widest text-zinc-800 mb-1">{title}</h4>
      <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const PolicySection = ({ title, tag, price, children, isPremium = false }: any) => (
  <div className={`p-8 rounded-[3rem] border transition-all ${isPremium ? 'bg-white border-[#c5a47e]/30 shadow-lg' : 'bg-white border-zinc-100'}`}>
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#c5a47e] mb-1 block">{tag}</span>
        <h2 className="text-2xl font-black italic uppercase tracking-tight text-zinc-900">{title}</h2>
      </div>
      <div className="bg-zinc-50 px-4 py-2 rounded-xl text-right">
        <span className="block text-[8px] font-black text-zinc-400 uppercase tracking-widest">Investment</span>
        <span className="text-xs font-bold text-zinc-800">{price}</span>
      </div>
    </div>
    <div className="prose prose-zinc max-w-none">{children}</div>
  </div>
);

const ListGroup = ({ title, items }: any) => (
  <div className="space-y-3">
    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{title}</h5>
    <ul className="space-y-2">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-center gap-2 text-xs font-bold text-zinc-700">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c5a47e]" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

const Step = ({ number, text }: any) => (
  <div className="flex gap-4">
    <span className="text-xl font-black text-[#c5a47e] italic">{number}</span>
    <p className="text-sm text-zinc-400 leading-snug">{text}</p>
  </div>
);

export default WarrantyPolicy;