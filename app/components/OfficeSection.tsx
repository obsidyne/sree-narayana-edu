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
      className={`bg-white py-8 px-4 md:pl-[151px] md:pr-[59px] ${raleway.className}`}
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8 uppercase ${unbounded.className}`}
        >
          EXECUTIVE COMMITTEE
        </h2>

        {/* Officers Image */}
        <div className="flex justify-center">
          <Image
            src="/officers.png"
            alt="Executive Committee Officers"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
