"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  Headphones, 
  Truck, 
  Star, 
  Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/src/components/shared/Container";

const AboutPage = () => {
  return (
    <main className="bg-white overflow-hidden">
      {/* SECTION 1: WELCOME TO DAZZLE */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[650px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/img/about.webp"
                  alt="Dazzle Store"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 bg-[#c5a47e] p-8 rounded-3xl hidden md:block">
                <p className="text-white font-black text-4xl tracking-tighter">Est.<br/>2017</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h4 className="text-[#c5a47e] font-black uppercase tracking-[0.3em] text-sm">
                Established Excellence
              </h4>
              <h1 className="text-5xl md:text-7xl font-black text-[#111416] tracking-tighter leading-[0.9] uppercase">
                Welcome to <span className="text-zinc-300">Dazzle</span> <br /> 
                Our Perfect Store
              </h1>
              <div className="h-1.5 w-20 bg-[#c5a47e] rounded-full" />
              
              <p className="text-zinc-500 text-lg leading-relaxed font-medium pt-4">
                At Dazzle, we don&apos;t just sell gadgets; we curate experiences. Our journey began with a simple mission: to bring the world&apos;s most innovative technology to your doorstep with uncompromised authenticity.
              </p>
              <p className="text-zinc-500 text-md leading-relaxed">
                Our physical stores are designed to be &apos;Experience Centers&apos; where you can touch, feel, and test the latest tech before making it yours. From the newest flagship smartphones to niche audiophile gear, we are the perfect destination for every tech enthusiast.
              </p>
              
              <div className="pt-6">
                <Button className="bg-[#111416] hover:bg-[#c5a47e] text-white px-10 py-7 rounded-2xl font-black uppercase tracking-widest transition-all">
                  Visit Our Stores
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: WHY CHOOSE US */}
      <section className="py-24 bg-[#111416] text-white rounded-[2rem] md:rounded-[4rem] mx-4 mb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h4 className="text-[#c5a47e] font-black uppercase tracking-[0.3em] text-sm">
              The Dazzle Difference
            </h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Why Choose Us <br /> 
              <span className="text-zinc-600 italic">Over 9 Years of Experience</span>
            </h2>
            <p className="text-zinc-400 font-medium">
              A decade of trust, serving over 1 million happy customers with genuine products and world-class support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#c5a47e]/10 flex items-center justify-center mb-6 group-hover:bg-[#c5a47e] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="mt-20 pt-20 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="9+" label="Years Experience" />
            <StatItem number="15+" label="Retail Outlets" />
            <StatItem number="100%" label="Genuine Products" />
            <StatItem number="50k+" label="Positive Reviews" />
          </div>
        </Container>
      </section>
    </main>
  );
};

// Helper Components
const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div>
    <h3 className="text-4xl md:text-5xl font-black text-[#c5a47e] tracking-tighter">{number}</h3>
    <p className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mt-2">{label}</p>
  </div>
);

const features = [
  {
    icon: <ShieldCheck className="text-[#c5a47e] group-hover:text-white" size={32} />,
    title: "Official Warranty",
    description: "Every product comes with a brand-authorized warranty, ensuring your peace of mind with every purchase."
  },
  {
    icon: <Award className="text-[#c5a47e] group-hover:text-white" size={32} />,
    title: "100% Authentic",
    description: "We source directly from official distributors. No refurbished or cloned gadgets—ever."
  },
  {
    icon: <Headphones className="text-[#c5a47e] group-hover:text-white" size={32} />,
    title: "Expert Support",
    description: "Our tech-savvy team is available 24/7 to help you troubleshoot or choose your next upgrade."
  },
  {
    icon: <Truck className="text-[#c5a47e] group-hover:text-white" size={32} />,
    title: "Rapid Delivery",
    description: "Experience the fastest delivery in the country. Within 24 hours inside Dhaka city."
  },
  {
    icon: <Zap className="text-[#c5a47e] group-hover:text-white" size={32} />,
    title: "Easy Exchange",
    description: "Upgrade your lifestyle with our seamless exchange program. Trade old for new effortlessly."
  },
  {
    icon: <Star className="text-[#c5a47e] group-hover:text-white" size={32} />,
    title: "Premium Experience",
    description: "From unboxing to after-sales, we provide a luxury experience that tech lovers deserve."
  }
];

export default AboutPage;