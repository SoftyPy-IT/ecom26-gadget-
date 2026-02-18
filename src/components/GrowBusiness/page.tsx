"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import videobg from "../../../public/img/bg-02.jpg";

const GrowBusiness = () => {
    const [isOpen, setIsOpen] = useState(false);

    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; 

    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-gray-900">
            {/* Background Image */}
            <Image
                src={videobg}
                alt="Video Background"
                fill
                className="object-cover brightness-50"
                priority
            />

            {/* Overlay content */}
            <div className="absolute flex flex-col items-center text-center px-4">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                    Making Your Business Unique
                </h2>
                <p className="text-gray-300 max-w-xl mb-8">
                    Discover how our strategies and creative solutions can help your brand stand out in the digital world.
                </p>

                {/* Play Icon */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-white/20 hover:bg-white/40 text-white rounded-full p-6 flex items-center justify-center transition"
                >
                    <Play className="w-12 h-12" />
                </button>
            </div>

            {/* Modal for Video */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="relative w-full max-w-4xl mx-4 md:mx-0">
                        <iframe
                            width="100%"
                            height="500"
                            src={videoUrl}
                            title="Video Player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white bg-gray-800/70 hover:bg-gray-800/90 rounded-full p-2 transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GrowBusiness;
