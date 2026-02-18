"use client";
import Image from "next/image";
import shape from "../../../public/img/shape-04.svg";

const stats = [
  {
    count: "10k+",
    title: "Experienced Designers",
    desc: "Our company has 100 expert",
    
  },
  {
    count: "10k+",
    title: "Satisfied Customers",
    desc: "Our company satisfied customer",
    
  },
  {
    count: "120k+",
    title: "Completed Cases",
    desc: "We have done 1200 Cases",
    
  },
];

const AtAGlance = () => {
  return (
    <div className="bg-white py-12 text-white">
      <div className="container mx-auto p-6 max-w-6xl bg-black rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center relative py-8">
          {stats.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <h4 className="text-4xl font-bold text-red-500">{item.count}</h4>
              <span className="font-medium text-lg md:text-xl uppercase block mt-2 ">
                {item.title}
              </span>
              <span className="text-base opacity-60 mt-1 ">{item.desc}</span>

              {/* Shape image between items except last */}
              {index < stats.length - 1 && (
                <Image
                  src={shape}
                  alt="shape"
                  className="hidden md:block  absolute top-1/2 -right-20 transform -translate-y-1/2 h-[200px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
