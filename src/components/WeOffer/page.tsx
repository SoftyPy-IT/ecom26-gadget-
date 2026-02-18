"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Users, Globe, Target, BarChart3 } from "lucide-react";

const servicesData = [
    {
        id: "01",
        title: "UI / UX Design",
        subtitle: "Creating intuitive and engaging interfaces",
        icon: <BarChart3 className="w-14 h-14 text-[#f5a623]" />,
    },
    {
        id: "02",
        title: "Digital Marketing",
        subtitle: "Boost your brand visibility online",
        icon: <Users className="w-14 h-14 text-[#f5a623]" />,
    },
    {
        id: "03",
        title: "SEO & SEM",
        subtitle: "Increase organic traffic and paid conversions",
        icon: <Globe className="w-14 h-14 text-[#f5a623]" />,
    },
    {
        id: "04",
        title: "Data Analytics",
        subtitle: "Turn data into actionable insights",
        icon: <Target className="w-14 h-14 text-[#f5a623]" />,
    },
    {
        id: "05",
        title: "Content Strategy",
        subtitle: "Craft compelling content for your audience",
        icon: <Users className="w-14 h-14 text-[#f5a623]" />,
    },
    {
        id: "06",
        title: "Social Media Management",
        subtitle: "Engage your audience across platforms",
        icon: <Globe className="w-14 h-14 text-[#f5a623]" />,
    },
    {
        id: "07",
        title: "Branding",
        subtitle: "Build a strong and memorable brand identity",
        icon: <Target className="w-14 h-14 text-[#f5a623]" />,
    },
    {
        id: "08",
        title: "Conversion Optimization",
        subtitle: "Maximize website and campaign performance",
        icon: <BarChart3 className="w-14 h-14 text-[#f5a623]" />,
    },
];

const WeOffer = () => {
    return (
        <section className="w-full py-32 bg-[#1c1f24] text-white">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="flex justify-between items-center gap-20 mb-12">
                    <div>
                        <h4 className="text-[#f5a623] tracking-widest text-sm font-semibold uppercase">
                            Our Expertise
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Services we provide to help your business grow
                        </h2>
                    </div>
                    <p className="text-gray-300 max-w-lg">
                        We offer a wide range of digital solutions designed to elevate your brand, engage your audience, and drive measurable results.
                    </p>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="pb-20"
                >
                    {servicesData.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div className="border border-gray-600 p-10 rounded-md bg-[#1c1f24] hover:border-[#f5a623] transition cursor-pointer flex flex-col justify-between h-[350px] mb-20">
                                <div className="mb-6">{service.icon}</div>
                                <p className="text-gray-400 text-sm">{service.id}</p>
                                <h3 className="text-2xl font-semibold mt-2">{service.title}</h3>
                                <p className="text-lg text-gray-300 mt-1">{service.subtitle}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default WeOffer;
