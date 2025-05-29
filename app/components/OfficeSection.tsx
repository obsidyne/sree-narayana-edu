"use client";
import React from "react";
import Image from "next/image";
import { Unbounded, Raleway } from "next/font/google";

// Load Unbounded font for headings
const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

// Load Raleway font for body text
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const OfficeSection: React.FC = () => {
  return (
    <div
      className={`bg-white py-8 sm:py-12 md:py-16 lg:py-20 ${raleway.className}`}
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full">
        {/* Responsive Heading with fixed margins */}
        <div className="pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20 2xl:pl-[151px] 2xl:pr-[59px]">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase ${unbounded.className}`}
          >
            COMMITTEE MEMBERS
          </h2>
        </div>

        {/* Responsive Image Container with fixed margins */}
        <div className="pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-20 2xl:pl-[151px] 2xl:pr-[423px]">
          <div className="w-full flex justify-center lg:justify-start">
            <Image
              src="/officers.png"
              alt="Executive Committee Officers"
              width={866}
              height={947}
              className="w-full h-auto object-contain max-w-full lg:w-[866px] lg:h-[947px] lg:max-w-[866px]"
              sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 768px) calc(100vw - 64px), (max-width: 1024px) 866px, 866px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
