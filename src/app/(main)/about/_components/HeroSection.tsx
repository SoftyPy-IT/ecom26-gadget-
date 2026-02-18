import Link from "next/link"
import Image from "next/image"
import bgabout from "@/public/img/4.jpg"

export default function HeroSection() {
    return (
        <section className="relative w-full h-[400px] md:h-[500px] text-white overflow-hidden flex items-center justify-center">
            <Image
                src={bgabout}
                alt="Hero background"
                fill
                className="absolute inset-0 object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />        

            <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">About Us</h1>
                <div className="space-y-2 text-sm">
                    <p className="text-gray-300">
                        <Link href="/" className="hover:text-blue-400 transition">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-500">|</span>
                        <span className="text-blue-400">Company About</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
