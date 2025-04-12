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
        <Link
          href="/institutions"
          className="flex items-center bg-white text-gray-800 rounded-full py-2 px-5 sm:py-3 sm:px-6 text-lg sm:text-xl font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 group"
        >
          Our Institutions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
        </Link>
      </div>
    </div>
  );
}
