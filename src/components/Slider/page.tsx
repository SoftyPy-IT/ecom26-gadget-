"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";


// Import images
import img1 from "../../../public/img/hero/EXCHANGE-NOW-v2.webp";
import img2 from "../../../public/img/hero/sc-offer-main-banner.webp";
import img3 from "../../../public/img/hero/s25-series-.webp";
import img4 from "../../../public/img/hero/turbo-4-pro-v2.webp";
import img5 from "../../../public/img/hero/ipad-air-m3.webp";

// Side Banner Images (Replace with your actual paths)
// import sideImg1 from "../../../public/img/side-01.jpg";
// import sideImg2 from "../../../public/img/side-02.jpg";

import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Container from "../shared/Container";

const slides = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="py-6 bg-white">
      <Container>
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[300px] md:h-[450px] lg:h-[650px]">
          
          {/* LEFT SECTION: MAIN SLIDER (Occupies 8/12 columns) */}
          <div className="lg:col-span-8 rounded-lg overflow-hidden relative shadow-xl">
            <Swiper
              effect="fade"
              speed={1000}
              pagination={{
                clickable: true,
                bulletActiveClass: "swiper-pagination-bullet-active bg-white w-6 rounded-full transition-all",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, EffectFade]}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.img}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Dark Overlay for better visual depth */}
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT SECTION: TWO STACKED BANNERS (Occupies 4/12 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4 h-full">
            
            {/* Top Banner */}
            <Link 
              href="/offers/mega-sale" 
              className="relative flex-1 rounded-lg overflow-hidden group shadow-lg border border-zinc-100"
            >
              <Image 
                src={img4} // Replace with sideImg1
                alt="Mega Sale"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <span className="text-[#e2c7a8] font-black text-[10px] uppercase tracking-widest mb-1">Limited Time</span>
                <h3 className="text-white font-black text-xl uppercase italic leading-none">Mega Sale</h3>
              </div> */}
            </Link>

            {/* Bottom Banner */}
            <Link 
              href="/offers/ipad-air" 
              className="relative flex-1 rounded-lg overflow-hidden group shadow-lg border border-zinc-100"
            >
              <Image 
                src={img5} // Replace with sideImg2
                alt="iPad Air"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <span className="text-white/70 font-bold text-[10px] uppercase tracking-widest mb-1">Next Gen Tech</span>
                <h3 className="text-white font-black text-xl uppercase italic leading-none">iPad Air</h3>
              </div> */}
            </Link>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Slider;