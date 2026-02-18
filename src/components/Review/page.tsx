"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Quote, User } from "lucide-react";
import b from "@/public/img/review/b.jpg";
import c from "@/public/img/review/c.jpg";
import d from "@/public/img/review/d.jpg";
import e from "@/public/img/review/e.jpg";
import f from "@/public/img/review/f.jpg";

const testimonials = [
  {
    text: "Lorem posuere in miss drana eliten in the nisan drana scerium miss etiam ornare in the miss rana duru fermen.",
    name: "G. MARTIN",
    role: "Customer",
    image: b,
  },
  {
    text: "Lorem posuere in miss drana eliten in the nisan drana scerium miss etiam ornare in the miss rana duru fermen.",
    name: "L. BROWN",
    role: "Customer",
    image: c,
  },
  {
    text: "Lorem posuere in miss drana eliten in the nisan drana scerium miss etiam ornare in the miss rana duru fermen.",
    name: "L. WHITE",
    role: "Customer",
    image: d,
  },
  {
    text: "Lorem posuere in miss drana eliten in the nisan drana scerium miss etiam ornare in the miss rana duru fermen.",
    name: "L. BROWN",
    role: "Customer",
    image: e,
  },
  {
    text: "Lorem posuere in miss drana eliten in the nisan drana scerium miss etiam ornare in the miss rana duru fermen.",
    name: "L. BROWN",
    role: "Customer",
    image: f,
  },
];

const Review = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#f5a623] tracking-wider uppercase text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-2 text-black">
            What Clients Say
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-20"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f0f0f3] rounded-2xl relative h-[300px] flex flex-col mb-16 ">
                <div className="p-10">
                <Quote className="w-10 h-10 text-[#f5a623]" />

                <p className="text-gray-700 mt-4 leading-relaxed flex-1">
                  {item.text}
                </p>
                </div>

                {/* Client Info */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-3  bg-white rounded-tr-3xl p-5">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />

                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#f5a623]">{item.name}</h4>
                    <span className="text-sm text-gray-500">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
