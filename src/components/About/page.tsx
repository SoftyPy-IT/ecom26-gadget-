"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../public/img/about-01.webp";
import { CircleCheckBig } from "lucide-react";

const About = () => {
  const listItems = [
    "For marketing professionals",
    "The New Event Marketing Opportunity",
    "The New Event Marketing Opportunity",
  ];

  return (
    <section className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE (Full BG) */}
        <div className="bg-[#FFF7F2] flex items-center justify-center md:justify-end content-end md:px-20">
          <div className="w-[70%] py-10">
            <Image src={img1} alt="About Image" className="rounded-md w-[500px] h-[500px] shadow-md" />

            <h2 className="mt-8 text-5xl font-semibold text-gray-900 leading-snug">
              Incredibly fast and <br /> amazing features
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We provide digital experience services to startups and small businesses velit purus
              aliquet, massa fringilla.
            </p>

            <Link
              href="#"
              className="inline-block mt-6 px-6 py-3 border-2 border-[#f57c00] text-[#f57c00] rounded-full hover:bg-[#f57c00] hover:text-white transition font-medium uppercase"
            >
              About us
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (Full White BG) */}
        <div className="bg-white flex items-center px-20">
          <div className="w-[60%]  py-10">

            <span className="uppercase text-sm tracking-widest text-[#f57c00] font-medium">
              Business Growth
            </span>

            <h3 className="text-4xl font-bold mt-4 leading-tight text-black">
              Best Digital <br />
              <span className="relative inline-block">
                Creative Agency
                <span className="absolute left-0 bottom-0 w-full h-[6px] bg-yellow-300 -z-10"></span>
              </span>
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed ">
              Variations of passages of lorem in free market to available, but the majority have suffered alteration in some form, by injected humour, or randomised words
            </p>

            <ul className="mt-8 space-y-4 text-lg font-medium text-black">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 p-4 border border-gray-200 rounded-md">
                  <span className="text-[#f57c00] text-xl"><CircleCheckBig/></span> {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-500 leading-relaxed">
             Variations of passages of lorem in free market to available, but the majority have suffered alteration in some form, by injected humour, or randomised words
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
