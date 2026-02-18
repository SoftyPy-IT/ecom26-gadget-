import Image from "next/image"
import { ChevronRight, CircleCheckBig } from "lucide-react"
import img1 from "@/public/img/page-banner-img.png"
import img2 from "@/public/img/ppc-agencey-2.png"


const features = [
    { icon: "📊", title: "Data Management Experts", description: "" },
    { icon: "📱", title: "Mobile App Developments", description: "" },
    { icon: "🖥️", title: "IT Infrastructure Solutions", description: "" },
    { icon: "📈", title: "Data Analytics Consulting", description: "" },
]

export default function AboutContent() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Images */}
                    <div className="flex space-y-4">
                        <div>
                            <div className="relative">
                                <Image
                                    src={img1}
                                    alt="Team members collaborating"                                    
                                    className="relative rounded-lg"
                                />
                            </div>                            
                        </div>                        
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-6">
                        <div className="text-sm font-semibold text-red-500">About Us</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Transform Business to Technology</h2>

                        <p className="text-gray-600 leading-relaxed">
                            IT Technology Is A Broad Category Encompassing All Aspect Information Technology And The Application Of
                            Technology In Various Industries. It Includes Areas Such As Software Development
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                                    <div className="text-xl shrink-0"><CircleCheckBig className="text-red-500"/> </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-900">{feature.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Discover More Button */}
                        <button className="mt-6 px-6 py-3 border-2 border-red-400 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition flex items-center gap-2">
                            Discover More
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
