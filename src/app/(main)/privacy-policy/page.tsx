/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { 
  Lock, 
  Eye, 
  Database, 
  ShieldCheck, 
  UserCheck, 
  Globe, 
  ChevronRight,
  FileText
} from "lucide-react";
import Container from "@/src/components/shared/Container";

const PrivacyPolicy = () => {
  const sections = [
    { id: "info", title: "Information We Collect", icon: <Database size={18} /> },
    { id: "usage", title: "How We Use It", icon: <Eye size={18} /> },
    { id: "protection", title: "Data Protection", icon: <Lock size={18} /> },
    { id: "cookies", title: "Cookie Policy", icon: <Globe size={18} /> },
    { id: "rights", title: "Your Rights", icon: <UserCheck size={18} /> },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#111416] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a47e] blur-[120px] -mr-48 -mt-48" />
        </div>
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#c5a47e] mb-4">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Privacy & Security</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">
              Privacy <span className="text-[#c5a47e]">Policy</span>
            </h1>
            <p className="text-zinc-400 text-sm font-medium max-w-xl">
              Last Updated: February 2026. Your trust is our most valuable asset. 
              Here is how Dazzle protects your personal and device data.
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: NAVIGATION --- */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 px-4">Policy Contents</p>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-100 transition-all group text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-400 group-hover:text-[#c5a47e] transition-colors">{section.icon}</span>
                    <span className="text-sm font-bold text-zinc-600 group-hover:text-black">{section.title}</span>
                  </div>
                  <ChevronRight size={14} className="text-zinc-300 group-hover:text-[#c5a47e]" />
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Introduction Card */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-zinc-100 shadow-sm leading-relaxed">
              <h2 className="text-2xl font-black text-[#111416] uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                <FileText className="text-[#c5a47e]" /> Introduction
              </h2>
              <p className="text-zinc-600 text-sm mb-4">
                Dazzle ("we", "us", or "our") operates the Dazzle e-commerce platform. This policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-zinc-600 text-sm">
                We use your data to provide and improve our service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Sections */}
            <PolicyContentSection 
              id="info" 
              title="Information We Collect" 
              items={[
                { label: "Personal Data", val: "Email, name, phone number, and shipping address during checkout." },
                { label: "Usage Data", val: "IP address, browser type, pages visited, and time spent on our gadget store." },
                { label: "Device Data", val: "Information about the device you use to access Dazzle." }
              ]}
            />

            <PolicyContentSection 
              id="usage" 
              title="How We Use Your Information" 
              items={[
                { label: "Order Fulfillment", val: "To process transactions and deliver your tech gear." },
                { label: "Support", val: "To provide customer care and warranty support." },
                { label: "Marketing", val: "To notify you of Flash Sales and Ramadan Festivals (with your consent)." }
              ]}
            />

            <div id="protection" className="bg-[#111416] p-8 md:p-12 rounded-[3rem] text-white overflow-hidden relative">
              <div className="absolute bottom-0 right-0 opacity-10 scale-150 transform translate-y-12 translate-x-12">
                <ShieldCheck size={200} />
              </div>
              <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-6 relative z-10">Data Protection</h2>
              <p className="text-zinc-400 text-sm mb-6 relative z-10">
                The security of your data is paramount. We implement industry-standard 256-bit SSL encryption to ensure that your payment information and personal details are encrypted before being sent over the internet.
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <span className="block text-[#c5a47e] font-black text-[10px] uppercase mb-1">Payment Security</span>
                  <span className="text-xs text-zinc-300">PCI-DSS Compliant</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <span className="block text-[#c5a47e] font-black text-[10px] uppercase mb-1">Account Access</span>
                  <span className="text-xs text-zinc-300">Two-Factor Ready</span>
                </div>
              </div>
            </div>

            <PolicyContentSection 
              id="cookies" 
              title="Cookie & Tracking Policy" 
              items={[
                { label: "Session Cookies", val: "To keep you logged in and manage your shopping cart." },
                { label: "Preference Cookies", val: "To remember your settings like Dark Mode or currency." },
                { label: "Analytics", val: "We use Google Analytics to understand user behavior and improve UX." }
              ]}
            />

            <div id="rights" className="bg-white p-8 md:p-12 rounded-[3rem] border border-zinc-100 shadow-sm">
              <h2 className="text-2xl font-black text-[#111416] uppercase italic tracking-tighter mb-6">Your Rights</h2>
              <p className="text-zinc-600 text-sm mb-8">Under modern data protection regulations, you have several rights regarding your data:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <RightCard title="Access" desc="Request a copy of your personal data." />
                <RightCard title="Correction" desc="Fix any incorrect or outdated info." />
                <RightCard title="Deletion" desc="Ask us to wipe your account data." />
                <RightCard title="Portability" desc="Transfer your data to another service." />
              </div>
            </div>

            <div className="text-center p-8">
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">Questions about your privacy?</p>
              <button className="bg-white border border-zinc-200 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#111416] hover:text-white transition-all">
                Contact Privacy Officer
              </button>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const PolicyContentSection = ({ id, title, items }: any) => (
  <div id={id} className="bg-white p-8 md:p-12 rounded-[3rem] border border-zinc-100 shadow-sm scroll-mt-24">
    <h2 className="text-2xl font-black text-[#111416] uppercase italic tracking-tighter mb-8">{title}</h2>
    <div className="space-y-6">
      {items.map((item: any, idx: number) => (
        <div key={idx} className="group">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-[#c5a47e] mb-2">{item.label}</h4>
          <p className="text-sm text-zinc-600 leading-relaxed font-medium">{item.val}</p>
          {idx !== items.length - 1 && <div className="h-[1px] w-full bg-zinc-50 mt-6" />}
        </div>
      ))}
    </div>
  </div>
);

const RightCard = ({ title, desc }: any) => (
  <div className="p-6 bg-zinc-50 rounded-2xl border border-transparent hover:border-[#c5a47e]/20 transition-all">
    <h5 className="font-black text-xs uppercase text-[#111416] mb-2">{title}</h5>
    <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

export default PrivacyPolicy;