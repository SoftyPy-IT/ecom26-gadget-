"use client"

import Marquee from "react-fast-marquee"

export default function ClientLogos() {
  const services = [
    { name: "Web Development", icon: "🌐" },
    { name: "Photoshop", icon: "🎨" },
    { name: "UI/UX Design", icon: "✨" },
    { name: "Digital Marketing", icon: "📱" },
    { name: "Branding", icon: "🏢" },
    { name: "Illustrator", icon: "🖌️" },
    { name: "Web Development", icon: "🌐" },
    { name: "Photoshop", icon: "🎨" },
  ]

  return (
    <section className="relative py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services & Expertise</h2>
          <p className="text-lg text-gray-600">Delivering excellence across multiple disciplines</p>
        </div>
      </div>

      <div className="relative">
        <Marquee gradient={true} gradientColor="white" gradientWidth={80} speed={40} pauseOnHover={true}>
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-center mx-8 min-w-max">
              <div className="group cursor-pointer">
                <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 shadow-sm hover:shadow-md min-w-[160px]">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-tight">{service.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 -z-10 blur-3xl"></div>
    </section>
  )
}
