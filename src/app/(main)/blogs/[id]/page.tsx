"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  User, 
  Clock, 
  Calendar, 
  Share2, 
  ChevronLeft, 
  
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Container from "@/src/components/shared/Container";

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  // In a real app, fetch post by params.id
  const post = {
    title: "iPhone 17 Pro: What We Know About the New Camera System",
    category: "Smartphones",
    author: "Admin",
    date: "12 Feb 2026",
    readTime: "8 min read",
    image: "/img/blog_01.webp",
    content: `
      <p>The tech world is buzzing with anticipation as rumors about the iPhone 17 Pro's camera system begin to surface. Apple is reportedly planning a significant leap in optical technology, potentially introducing a specialized tetraprism lens across more models.</p>
      <br/>
      <h2 class="text-2xl font-black text-[#111416] mb-4">The New 48MP Telephoto Lens</h2>
      <p>Industry analysts suggest that the iPhone 17 Pro Max will feature a 48-megapixel Telephoto camera optimized for use with Apple Vision Pro. This move signifies Apple's commitment to spatial computing and high-resolution spatial video recording.</p>
      <br/>
      <blockquote class="border-l-4 border-[#c5a47e] pl-6 py-2 my-8 italic text-lg text-zinc-600">
        "The iPhone 17 Pro is set to redefine mobile photography by bridging the gap between professional DSLRs and smartphone portability."
      </blockquote>
      <p>Beyond the sensors, the internal lens structure is expected to undergo a redesign to reduce lens flare and improve performance in low-light environments, a consistent pain point for mobile photographers.</p>
    `
  };

  return (
    <main className="pb-20 bg-white">
      {/* 1. Header & Breadcrumb */}
      <section className="bg-[#fafafa] pt-10 pb-16 border-b border-zinc-100">
        <Container>
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#c5a47e] transition-colors mb-8"
          >
            <ChevronLeft size={16} /> Back to Blog
          </Link>

          <div className="max-w-4xl">
            <Badge className="bg-[#c5a47e]/10 text-[#c5a47e] hover:bg-[#c5a47e]/20 border-none px-3 py-1 mb-6">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black text-[#111416] tracking-tighter leading-[0.95] mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
                  <User size={14} className="text-[#c5a47e]" />
                </div>
                <span className="text-sm font-bold text-[#111416] uppercase">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Calendar size={16} /> {post.date}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock size={16} /> {post.readTime}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Featured Image */}
      <Container className="-mt-10">
        <div className="relative h-[300px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>
      </Container>

      {/* 3. Content Area */}
      <section className="mt-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article 
                className="prose prose-zinc lg:prose-xl max-w-none text-zinc-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <Separator className="my-12" />

              {/* Share & Tags */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black uppercase text-[#111416]">Share:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600"><Facebook size={16}/></Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-sky-50 hover:text-sky-500"><Twitter size={16}/></Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-700"><Linkedin size={16}/></Button>
                  </div>
                </div>
                <Button variant="ghost" className="gap-2 text-[#c5a47e] font-bold">
                  <Share2 size={16} /> Copy Link
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-10">
              {/* Newsletter Card */}
              <div className="bg-[#111416] p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-black tracking-tighter mb-4">Tech Weekly</h3>
                <p className="text-zinc-400 text-sm mb-6">Get the latest gadget reviews and tech news delivered to your inbox.</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#c5a47e] transition-all"
                  />
                  <Button className="w-full bg-[#c5a47e] hover:bg-[#d4b998] text-[#111416] font-black uppercase py-6 rounded-xl">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              <div>
                <h3 className="text-xl font-black text-[#111416] tracking-tighter mb-6 flex items-center gap-2">
                  Recent <span className="text-zinc-300">Updates</span>
                </h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                        <Image src={`/img/blog_0${i}.webp`} alt="recent" fill className="object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#111416] leading-tight group-hover:text-[#c5a47e] transition-colors line-clamp-2">
                          Evolution of Wearable Tech: Trends to Watch
                        </h4>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">05 Feb 2026</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </Container>
      </section>
    </main>
  );
};

export default BlogDetailsPage;