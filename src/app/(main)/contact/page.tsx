/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  Instagram, 
  Facebook, 
  Twitter 
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/src/components/shared/Container";

const ContactUs = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#111416] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a47e] opacity-5 blur-[120px] -mr-48 -mt-48" />
        <Container>
          <div className="max-w-3xl space-y-6 text-center mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-[#c5a47e]"
            >
              <MessageSquare size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Get In Touch</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter"
            >
              Contact <span className="text-[#c5a47e]">gadget</span>
            </motion.h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
              Have questions about a gadget or need technical support? Our specialists are here to help you upgrade your tech lifestyle.
            </p>
          </div>
        </Container>
      </section>

      <Container className="-mt-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* --- LEFT: CONTACT INFO CARDS --- */}
          <div className="lg:col-span-4 space-y-4">
            <ContactInfoCard 
              icon={<Phone className="text-[#c5a47e]" size={20} />}
              title="Call Specialist"
              detail="+880 1XXX XXXXXX"
              sub="Sat - Thu, 10am - 8pm"
            />
            <ContactInfoCard 
              icon={<Mail className="text-[#c5a47e]" size={20} />}
              title="Official Support"
              detail="support@gadget.com"
              sub="Online 24/7 for tickets"
            />
            <ContactInfoCard 
              icon={<MapPin className="text-[#c5a47e]" size={20} />}
              title="Flagship Store"
              detail="Bashundhara City, Level 5"
              sub="Dhaka, Bangladesh"
            />
            
            {/* Social Links Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">Social Tech Hub</p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-[#111416] hover:text-[#c5a47e] transition-all duration-300">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: INTERACTIVE FORM --- */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 border border-zinc-100 shadow-2xl shadow-black/5"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-black text-[#111416] uppercase italic tracking-tighter">
                  Send a <span className="text-[#c5a47e]">Message</span>
                </h2>
                <div className="h-1 w-12 bg-[#c5a47e] mt-2 rounded-full" />
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 border border-transparent focus:border-[#c5a47e] focus:bg-white h-14 rounded-2xl px-6 outline-none transition-all font-bold text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-zinc-50 border border-transparent focus:border-[#c5a47e] focus:bg-white h-14 rounded-2xl px-6 outline-none transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Subject</label>
                  <select className="w-full bg-zinc-50 border border-transparent focus:border-[#c5a47e] focus:bg-white h-14 rounded-2xl px-6 outline-none transition-all font-bold text-sm appearance-none">
                    <option>Product Inquiry</option>
                    <option>Warranty Support</option>
                    <option>Bulk Order</option>
                    <option>Complaint</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-zinc-50 border border-transparent focus:border-[#c5a47e] focus:bg-white rounded-3xl p-6 outline-none transition-all font-bold text-sm resize-none"
                  />
                </div>

                <button className="w-full md:w-auto bg-[#111416] text-white px-12 h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 hover:bg-[#c5a47e] transition-all duration-500 shadow-xl shadow-black/10">
                  <Send size={18} />
                  Dispatch Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <div className="mt-12 w-full h-[450px] rounded-[3rem] overflow-hidden contrast-125 border border-zinc-100 shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902636750337!2d90.390234076127!3d23.75085448876106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd55309623%3A0x66c8979310cae742!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          />
        </div>
      </Container>
    </div>
  );
};

// --- HELPER COMPONENT ---
const ContactInfoCard = ({ icon, title, detail, sub }: any) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group">
    <div className="bg-zinc-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#111416] transition-colors duration-500">
      {icon}
    </div>
    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{title}</h4>
    <p className="text-lg font-black text-[#111416] tracking-tight">{detail}</p>
    <p className="text-xs text-zinc-500 mt-1 font-medium">{sub}</p>
  </div>
);

export default ContactUs;