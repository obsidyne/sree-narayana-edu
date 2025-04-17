"use client";
import Image from "next/image";
import Link from "next/link";
import { Raleway, Unbounded } from "next/font/google";

// Initialize the Unbounded font
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Centered container with spacing */}
      <div className="mx-auto max-w-[1400px] h-full px-5 sm:px-6 md:px-8">
        {/* Background Image */}
        <div className="absolute inset-x-0 top-0 h-full mx-auto max-w-[1400px] px-5 sm:px-6 md:px-1">
          <div className="relative w-full h-full rounded-b-3xl overflow-hidden">
            <Image
              src="/bg.jpg"
              alt="Background"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-75"
            />
          </div>
        </div>

        {/* Content Container */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center ${unbounded.className}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider mb-2 sm:mb-4">
            <span
              className="block font-semibold
"
            >
              SREE
            </span>
            <span
              className="block font-semibold
"
            >
              NARAYANA
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-8 sm:mb-12">
            <span className="block">EDUCATIONAL</span>
            <span className="block">SOCIETY</span>
          </h2>

          {/* Button - Made Responsive */}
          <div className="flex justify-center py-12 bg-transparent">
            <Link
              href="/institutions"
              className="group relative inline-flex items-center rounded-[46px] overflow-hidden bg-white shadow-lg w-[250px] h-[60px] sm:w-[300px] sm:h-[70px] md:w-[350px] md:h-[75px] lg:w-[417px] lg:h-[82px]"
            >
              {/* Text container */}
              <div className="relative z-20 flex-1 flex justify-center pr-14 sm:pr-16 md:pr-16 lg:pr-20 md:justify-start md:pl-8">
                <span
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight block transition-colors duration-500 text-[#3A3A3A] group-hover:text-[#FFE601] ${raleway.className} pl-0 md:pl-0`}
                >
                  Our Institutions
                </span>
              </div>

              {/* Dark circle that expands on hover */}
              <div className="absolute right-[5px] top-[5px] sm:right-[6px] sm:top-[6px] md:right-[7px] md:top-[7px] lg:right-[7.5px] lg:top-[7.5px] bg-[#3A3A3A] rounded-full w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] md:w-[62px] md:h-[62px] lg:w-[67px] lg:h-[67px] group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:top-0 group-hover:rounded-[46px] transition-all duration-500 ease-out z-10"></div>

              {/* Circle with arrow */}
              <div className="absolute right-[5px] top-[5px] sm:right-[6px] sm:top-[6px] md:right-[7px] md:top-[7px] lg:right-[7.5px] lg:top-[7.5px] z-20 bg-[#3A3A3A] text-white rounded-full flex items-center justify-center w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] md:w-[62px] md:h-[62px] lg:w-[67px] lg:h-[67px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
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
    </div>
  );
}
