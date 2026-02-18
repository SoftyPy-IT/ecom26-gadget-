import Image from "next/image"
import img1 from "@/public/img/work-process-1.png";
import img2 from "@/public/img/work-process-2.png";
import bgworkprocess from "@/public/img/work-process-bg.png";


const steps = [
  {
    number: "01",
    title: "Assess Requirements Precisely",
    description:
      "Begin by comprehensively understanding your business needs to ensure a perfect fit for tech solutions.",
  },
  {
    number: "02",
    title: "Develop Custom Solutions",
    description: "Engage in crafting tailor-made software designed meticulously to align with your specific targets.",
  },
  {
    number: "03",
    title: "Implement And Support",
    description: "Seamlessly integrate the new systems into framework with ongoing support for continual optimization.",
  },
]

export default function WorkProcess() {
  return (
    <section className="relative bg-linear-to-b from-[#0f1e3b] to-[#1a2e52] text-white overflow-hidden py-20 md:py-0 ">
      {/* Circuit pattern background */}
      <div className="">
        <Image src={bgworkprocess} className="absolute h-[800px]" alt="bg image"/>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Steps */}
          <div className="space-y-8 ">
            <div className="space-y-2">
              <p className="text-blue-400 text-sm font-semibold">Work Process</p>
              <h2 className="text-3xl md:text-4xl font-bold">Sustainable and Responsible Computing</h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Discuss strategies for reducing energy consumption in data centers, personal devices, and reduce power
              usage
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 border border-gray-400 rounded-2xl p-3">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Images */}
          <div className="relative space-y-4">
            {/* Top image */}
            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden">
              <Image src={img1} alt="Team working together" fill className="object-cover" />
            </div>

            {/* Bottom section with image and experience badge */}
            <div className="flex ">
                {/* Experience Badge */}
              <div className="bg-blue-600 p-6 flex flex-col justify-center w-[200px] rounded-l-lg">
                <div className="text-4xl font-bold">0+</div>
                <div className="text-sm text-blue-100">years of experience</div> 
              </div>
              <div className="relative  overflow-hidden">
                <Image src={img2} alt="Business meeting"  className=" rounded-r-lg" />
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
