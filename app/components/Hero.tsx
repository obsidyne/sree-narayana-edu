"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
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
  // Define background images array
  const backgroundImages = [
    "/slideshow/co.jpg",
    "/slideshow/4snpsc.jpg",
    "/slideshow/5snpsk.jpg",
    "/slideshow/6kwk.jpg",
    "/slideshow/8kik.jpg",
    "/slideshow/snpsv.jpg",
    "/slideshow/snct.jpg",
    "/slideshow/snit.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Function to handle smooth scrolling to institutions section
  const scrollToInstitutions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const institutionsSection = document.getElementById("institutions");
    if (institutionsSection) {
      institutionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full" style={{ height: "700px" }}>
      {/* Shadow Container that extends beyond the content area */}
      <div className="absolute inset-0 w-full" style={{ height: "700px" }}>
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black/30 to-transparent"></div>
        {/* Gradient that fades from transparent to white starting from the middle */}
        <div className="absolute left-0 bottom-0 w-full h-[350px] bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Centered container with spacing - increased max-width for larger screens */}
      <div className="mx-auto max-w-[1400px] xl:max-w-[1800px] 2xl:max-w-[2100px] 3xl:max-w-full 3xl:w-[95%] h-full px-5 sm:px-6 md:px-8">
        {/* Background Image */}
        <div className="absolute inset-x-0 top-0 h-full mx-auto max-w-[1400px] xl:max-w-[1800px] 2xl:max-w-[2100px] 3xl:max-w-full 3xl:w-[95%] px-5 sm:px-6 md:px-8">
          <div className="relative w-full h-full rounded-b-3xl overflow-hidden">
            {/* Simple fade transition between images */}
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover brightness-75"
                />
                {/* Subtle dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/35"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center ${unbounded.className}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider mb-2 sm:mb-4">
            <span className="block font-semibold">SREE</span>
            <span className="block font-semibold">NARAYANA</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-8 sm:mb-12">
            <span className="block">EDUCATIONAL</span>
            <span className="block">SOCIETY</span>
          </h2>

          {/* Button - Made Responsive */}
          <div className="flex justify-center py-12 bg-transparent">
            <button
              onClick={scrollToInstitutions}
              className="group relative inline-flex items-center rounded-[46px] overflow-hidden bg-white shadow-lg w-[250px] h-[60px] sm:w-[300px] sm:h-[70px] md:w-[350px] md:h-[75px] lg:w-[417px] lg:h-[82px]"
            >
              {/* Yellow background that expands from left */}
              <div className="absolute left-0 top-0 bg-[#FFE601] w-0 h-full group-hover:w-full transition-all duration-500 ease-out z-10"></div>

              {/* Dark background that expands from circle */}
              <div className="absolute right-[5px] top-[5px] sm:right-[6px] sm:top-[6px] md:right-[7px] md:top-[7px] lg:right-[7.5px] lg:top-[7.5px] bg-[#3A3A3A] rounded-full w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] md:w-[62px] md:h-[62px] lg:w-[67px] lg:h-[67px] group-hover:w-[calc(100%+1px)] group-hover:h-[calc(100%+1px)] group-hover:right-0 group-hover:top-0 group-hover:rounded-[46px] transition-all duration-500 ease-out z-20"></div>

              {/* Text container */}
              <div className="relative z-30 flex-1 flex justify-center pr-14 sm:pr-16 md:pr-16 lg:pr-20 md:justify-start md:pl-8">
                <span
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight block transition-colors duration-500 text-[#3A3A3A] group-hover:text-[#FFE601] ${raleway.className} pl-0 md:pl-0`}
                >
                  Our Institutions
                </span>
              </div>

              {/* Circle with arrow */}
              <div className="absolute right-[5px] top-[5px] sm:right-[6px] sm:top-[6px] md:right-[7px] md:top-[7px] lg:right-[7.5px] lg:top-[7.5px] z-40 bg-[#3A3A3A] text-white rounded-full flex items-center justify-center w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] md:w-[62px] md:h-[62px] lg:w-[67px] lg:h-[67px]">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
