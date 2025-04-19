"use client";
import React from "react";
import Image from "next/image";
import { Unbounded, Poppins, Raleway } from "next/font/google";

const unbounded = Unbounded({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SchoolWebsite: React.FC = () => {
  // Function to handle button click - you can modify this as needed
  const visitWebsite = () => {
    window.open("https://www.example.com", "_blank");
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner Section with responsive height */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[493px]">
        <Image
          src="/slideshow/snct.jpg"
          alt="School Entrance"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 text-white">
          <h1
            className={`text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-semibold tracking-wider leading-none ${unbounded.className}`}
          >
            SREE NARAYANA
          </h1>
          <h2
            className={`text-[28px] sm:text-[35px] md:text-[45px] lg:text-[55px] font-semibold tracking-wider leading-tight ${unbounded.className}`}
          >
            COLLEGE OF TECHNOLOGY
          </h2>
          {/* Responsive font size for location and affiliation */}
          <p
            className={`text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] mt-1 ${unbounded.className} font-semibold`}
          >
            (Affiliated to the University of Kerala)
            <span
              className={`text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] ${unbounded.className} font-semibold`}
            ></span>
          </p>

          {/* Custom button with responsive sizing */}
          <div className="mt-4">
            <button
              onClick={visitWebsite}
              className="group relative inline-flex items-center rounded-[46px] overflow-hidden bg-white shadow-lg w-[200px] h-[45px] sm:w-[240px] sm:h-[50px] md:w-[270px] md:h-[52px] lg:w-[286px] lg:h-[55px]"
            >
              {/* Dark background that expands from circle */}
              <div className="absolute right-[5px] top-[5px] bg-[#3A3A3A] rounded-full w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[42px] md:h-[42px] lg:w-[45px] lg:h-[45px] group-hover:w-[calc(100%+1px)] group-hover:h-[calc(100%+1px)] group-hover:right-0 group-hover:top-0 group-hover:rounded-[46px] transition-all duration-500 ease-out z-20"></div>

              {/* Text container */}
              <div
                className={`relative z-30 flex-1 flex justify-center pr-8 sm:pr-10 md:pr-11 lg:pr-12`}
              >
                <span
                  className={`text-sm sm:text-base md:text-lg font-semibold leading-tight block transition-colors duration-500 text-[#3A3A3A] group-hover:text-white ${raleway.className}`}
                >
                  Visit the website
                </span>
              </div>

              {/* Circle with arrow */}
              <div className="absolute right-[5px] top-[5px] z-40 bg-[#3A3A3A] text-white rounded-full flex items-center justify-center w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[42px] md:h-[42px] lg:w-[45px] lg:h-[45px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1"
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

      {/* Content Section */}
      <div className="bg-white p-4 sm:p-6 md:p-8">
        <div
          className={`max-w-4xl mx-auto border-l-4 sm:border-l-6 md:border-l-8 border-yellow-400 pl-3 sm:pl-4 md:pl-6 py-3 sm:py-4 md:py-4 shadow-md rounded-lg p-4 ${poppins.className}`}
        >
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Sree Narayana College of Technology- Arts & Science College
          </h2>

          <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-light">
            SNCT is one of the premier higher educational institutions
            established by Sree Narayana Educational Society, Kollam in 2003. It
            has consistently contributed towards educational excellence,
            dissemination of knowledge and social equity. The institution
            strives to instill a spirit of selfless service, foster love of the
            motherland and cultivate respect for all fellow beings as envisaged
            by its founders. It offers four UG Programmes(BCom, BCA, BSc and
            BA)and two PG Programmes (MSc and MCom). The College has always
            maintained high academic standards and a good track record of
            securing 71(seventy one) University ranks
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolWebsite;
