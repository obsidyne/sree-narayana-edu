"use client";
import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "next/font/google";

// Initialize the Unbounded font
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-75"
        />
      </div>

      {/* Content Container */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-8 ${unbounded.className}`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider mb-2 sm:mb-4">
          <span className="block">SREE</span>
          <span className="block">NARAYANA</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-8 sm:mb-12">
          <span className="block">EDUCATIONAL</span>
          <span className="block">SOCIETY</span>
        </h2>

        {/* Button */}
        <div className="flex justify-center py-12 bg-transparent">
          <Link
            href="/institutions"
            className="group relative inline-flex items-center rounded-full overflow-hidden bg-white shadow-lg"
          >
            {/* Text container */}
            <div className="relative z-10 py-3 pl-8 pr-6">
              <span className="text-xl font-medium block transition-colors duration-500 text-[#444444] group-hover:text-[#EEDC82]">
                Our Institutions
              </span>
            </div>

            {/* Dark circle that expands on hover */}
            <div className="absolute top-0 right-0 bottom-0 rounded-full bg-[#333333] w-[54px] group-hover:w-full transition-all duration-500 ease-out"></div>

            {/* Circle with arrow (smaller radius) */}
            <div className="relative z-10 bg-[#333333] text-white rounded-full h-[54px] w-[54px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
