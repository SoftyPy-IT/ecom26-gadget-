"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Container from "@/src/components/shared/Container";
import { Button } from "@/components/ui/button";

// Extended blog list for the full page
const allPosts = [
  // ... your existing blogPosts array here
  {
    id: 1,
    image: "/img/blog_01.webp",
    date: "28 Jan",
    author: "Admin",
    category: "Gaming",
    title: "PS5 Pro vs. PC: Which is Better for 4K Gaming?",
  },
  {
    id: 2,
    image: "/img/blog_02.webp",
    date: "20 Jan",
    author: "Rimon",
    category: "Smart Home",
    title: "The Ultimate Guide to Setting Up Your Matter Smart Home",
  },
];

const AllBlogsPage = () => {
  return (
    <main className="bg-[#fafafa] min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-white border-b border-zinc-100 py-16 mb-12">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-black text-[#111416] tracking-tighter uppercase">
                Our <span className="text-zinc-300">Blogs</span>
              </h1>
              <p className="text-zinc-500 font-medium max-w-md">
                In-depth reviews, tech news, and expert guides on the latest gadgets.
              </p>
            </div>

            {/* Simple Search Filter */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 py-6 rounded-xl border-zinc-200 focus:ring-[#c5a47e]"
              />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={post.id}
            >
              <Link href={`/blogs/${post.id}`} className="group block">
                <div className="bg-white rounded-3xl border border-zinc-100 overflow-hidden hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl">
                      <span className="block text-lg font-black text-[#111416]">{post.date.split(' ')[0]}</span>
                      <span className="text-[10px] font-bold uppercase text-zinc-400">{post.date.split(' ')[1]}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#c5a47e] bg-[#c5a47e]/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#111416] leading-tight mb-6 group-hover:text-[#c5a47e] transition-colors">
                      {post.title}
                    </h2>

                    <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[#c5a47e]">
                          <User size={14} />
                        </div>
                        <span className="text-xs font-bold text-zinc-500 uppercase">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-black uppercase text-[#111416]">
                        View <ArrowRight size={14} className="text-[#c5a47e]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
             {[1, 2, 3].map((n) => (
               <Button 
                 key={n} 
                 className={`w-12 h-12 rounded-xl font-bold transition-all ${n === 1 ? 'bg-[#111416] text-white' : 'bg-white text-zinc-400 hover:bg-zinc-100'}`}
               >
                 {n}
               </Button>
             ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default AllBlogsPage;