"use client";

import Image from "next/image";
import { User, Folder, MessageCircle, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Container from "../shared/Container";
import { motion } from "framer-motion";

// Content updated for Gadgets & Tech
const blogPosts = [
  {
    id: 1,
    image: "/img/blog_01.webp", 
    date: "12 Feb",
    author: "Admin",
    category: "Smartphones",
    title: "iPhone 17 Pro: What We Know About the New Camera System",
    comments: 5,
  },
  {
    id: 2,
    image: "/img/blog_02.webp",
    date: "10 Feb",
    author: "Rimon",
    category: "Audio",
    title: "Best Noise Canceling Earbuds for Audiophiles in 2026",
    comments: 0,
  },
  {
    id: 3,
    image: "/img/blog_03.webp",
    date: "05 Feb",
    author: "Kamrul",
    category: "Wearables",
    title: "Smartwatch vs. Traditional: Why Tech is Winning the Wrist",
    comments: 12,
  },
  {
    id: 4,
    image: "/img/blog-img-1-1.png",
    date: "01 Feb",
    author: "Admin",
    category: "Laptops",
    title: "M3 MacBook Air: The Ultimate Performance Review",
    comments: 2,
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <Container>
        {/* Modern Header Design */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#c5a47e]">
               <span className="h-[2px] w-8 bg-[#c5a47e] rounded-full" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Tech Insights</span>
            </div>
            <h2 className="text-4xl font-black text-[#111416] uppercase italic tracking-tighter">
              Latest <span className="text-[#c5a47e]">Articles</span>
            </h2>
          </div>

          <Link
            href="/blogs"
            className="group flex items-center gap-3 bg-[#111416] text-white px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#c5a47e] transition-all duration-500 shadow-xl shadow-black/5"
          >
            Explore All
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards with Modern Hover Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Modern Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#111416] px-4 py-2 rounded-2xl shadow-lg">
                   <span className="block text-lg font-black leading-none">{post.date.split(' ')[0]}</span>
                   <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">{post.date.split(' ')[1]}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#c5a47e] uppercase tracking-wider bg-[#c5a47e]/10 px-2 py-1 rounded-md">
                    <Folder size={12} /> {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 uppercase">
                    <Clock size={12} /> 5 min read
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111416] leading-tight mb-6 group-hover:text-[#c5a47e] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="pt-4 border-t border-zinc-50 flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center">
                        <User size={12} className="text-[#c5a47e]" />
                      </div>
                      <span className="text-[11px] font-bold text-zinc-500 uppercase">{post.author}</span>
                   </div>
                   
                   <Link href={`/blog/${post.id}`} className="flex items-center gap-1 text-[10px] font-black uppercase text-[#111416] group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} className="text-[#c5a47e]" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;