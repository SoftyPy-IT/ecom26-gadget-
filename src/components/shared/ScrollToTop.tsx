"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 400px
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[99] group cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#111416] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Go Up
          </span>

          {/* Button Body */}
          <div className="relative flex items-center justify-center w-14 h-14 bg-white/80 backdrop-blur-lg border border-zinc-200 rounded-2xl shadow-2xl shadow-black/10 group-hover:bg-[#111416] group-hover:border-[#c5a47e] transition-all duration-500">
            <ChevronUp 
              size={24} 
              className="text-[#111416] group-hover:text-[#c5a47e] group-hover:-translate-y-1 transition-all duration-500" 
            />
            
            {/* Animated Ring Decor */}
            <div className="absolute inset-0 border-2 border-[#c5a47e]/20 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;