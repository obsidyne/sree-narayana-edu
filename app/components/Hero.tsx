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

    "/slideshow/snpsv.jpg",
    "/slideshow/co.jpg",
    // "/slideshow/snct.jpg",
    // "/slideshow/4snpsc.jpg",
    // "/slideshow/5snpsk.jpg",
    // "/slideshow/6kwk.jpg",
    "/slideshow/8kik.jpg",
    
    
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
    <div className="relative w-full" style={{ height: "580px" }}> {/* Reduced from 700px to 500px */}
      {/* Shadow Container */}
      <div className="absolute inset-0 w-full" style={{ height: "500px" }}>
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black/30 to-transparent"></div>
        {/* Reduced gradient height */}
        <div className="absolute left-0 bottom-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Centered container */}
      <div className="mx-auto max-w-[1400px] xl:max-w-[1800px] 2xl:max-w-[2100px] 3xl:max-w-full 3xl:w-[95%] h-full px-5 sm:px-6 md:px-8">
        {/* Background Image */}
        <div className="absolute inset-x-0 top-0 h-full mx-auto max-w-[1400px] xl:max-w-[1800px] 2xl:max-w-[2100px] 3xl:max-w-full 3xl:w-[95%] px-5 sm:px-6 md:px-8">
          <div className="relative w-full h-full rounded-b-3xl overflow-hidden">
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
                <div className="absolute inset-0 bg-black/35"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Container - Reduced spacing */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center ${unbounded.className}`}
        >
          {/* Reduced text sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wider mb-1 sm:mb-2">
            <span className="block font-semibold">SREE</span>
            <span className="block font-semibold">NARAYANA</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider mb-4 sm:mb-6">
            <span className="block">EDUCATIONAL</span>
            <span className="block">SOCIETY</span>
          </h2>

          {/* Reduced button padding */}
          <div className="flex justify-center py-6 bg-transparent">
            <button
              onClick={scrollToInstitutions}
              className="group relative inline-flex items-center rounded-[46px] overflow-hidden bg-white shadow-lg w-[250px] h-[60px] sm:w-[300px] sm:h-[70px] md:w-[350px] md:h-[75px] lg:w-[417px] lg:h-[82px]"
            >
              <div className="absolute left-0 top-0 bg-[#FFE601] w-0 h-full group-hover:w-full transition-all duration-500 ease-out z-10"></div>
              <div className="absolute right-[5px] top-[5px] sm:right-[6px] sm:top-[6px] md:right-[7px] md:top-[7px] lg:right-[7.5px] lg:top-[7.5px] bg-[#3A3A3A] rounded-full w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] md:w-[62px] md:h-[62px] lg:w-[67px] lg:h-[67px] group-hover:w-[calc(100%+6px)] group-hover:h-[calc(100%+6px)] group-hover:right-[-3px] group-hover:top-[-3px] group-hover:rounded-[49px] transition-all duration-500 ease-out z-20"></div>
              <div className="relative z-30 flex-1 flex justify-center pr-14 sm:pr-16 md:pr-16 lg:pr-20 md:justify-start md:pl-8">
                <span
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight block transition-colors duration-500 text-[#3A3A3A] group-hover:text-[#FFE601] ${raleway.className} pl-0 md:pl-0`}
                >
                  Our Institutions
                </span>
              </div>
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