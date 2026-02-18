"use client"


import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/public/img/team/b.jpg";
import img2 from "@/public/img/team/d.jpg";
import img3 from "@/public/img/team/y.jpg";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


const OurTeam = () => {
  const workers = [
    { imageSrc: img1, name: "Robert Blake", role: "Developer" },
    { imageSrc: img2, name: "Elias Moore", role: "Designer" },
    { imageSrc: img3, name: "Danny Cranston", role: "IT Expert" },
  ];


  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Excellent Team</h2>
        <div className="flex gap-2 justify-center items-center">
          <div className="h-1 w-[70px] bg-red-500 my-4"></div>
          <div className="h-[15px] w-[15px] bg-black"></div>
          <div className="h-1 w-[70px] bg-red-500 my-4"></div>
        </div>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Our services, in the Digital Agency industry, stand apart for their quality and great taste.
        </p>
      </div>


      {/* Workers Grid */}
      <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {workers.map((worker, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative">
              <Image src={worker.imageSrc} alt={worker.name} className="w-full h-72 object-cover" />
             
              {/* Social Icons (Hidden by Default, Shown on Hover) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex gap-3">
                  <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                    <Facebook />
                  </a>
                  <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                    <Twitter />
                  </a>
                  <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                    <Linkedin />
                  </a>
                  <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                    <Instagram />
                  </a>
                </div>
              </motion.div>
            </div>


            {/* Worker Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{worker.name}</h3>
              <p className="text-gray-500">{worker.role}</p>
              <div className="h-1 w-12 bg-red-500 mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default OurTeam;
