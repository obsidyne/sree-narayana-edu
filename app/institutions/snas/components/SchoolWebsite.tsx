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
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Banner Section with responsive height */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[493px]">
        <Image
          src="/ayur.jpg"
          alt="School Entrance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 text-white max-w-full">
          <div className="max-w-full">
            <h1
              className={`text-[28px] xs:text-[32px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-semibold tracking-wider leading-none ${unbounded.className} break-words`}
            >
              SREE NARAYANA
            </h1>
            <h2
              className={`text-[20px] xs:text-[24px] sm:text-[35px] md:text-[45px] lg:text-[55px] font-semibold tracking-wider leading-tight ${unbounded.className} break-words`}
            >
              INSTITUTE OF AYURVEDA STUDIES
            </h2>
            {/* Responsive font size for location and affiliation */}
            <div className="mt-1 max-w-full">
              <p
                className={`text-[14px] xs:text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] ${unbounded.className} font-semibold break-words`}
              >
                Puthoor, Kottarakkara
              </p>
              <p
                className={`text-[12px] xs:text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] ${unbounded.className} font-medium leading-tight break-words`}
              >
                (Affiliated to the Kerala University of Health Sciences)
              </p>
            </div>

            {/* Custom button with responsive sizing */}
            <div className="mt-4 flex justify-start">
              <button
                onClick={visitWebsite}
                className="group relative inline-flex items-center rounded-[46px] overflow-hidden bg-white shadow-lg w-[180px] h-[40px] xs:w-[200px] xs:h-[45px] sm:w-[240px] sm:h-[50px] md:w-[270px] md:h-[52px] lg:w-[286px] lg:h-[55px] flex-shrink-0"
              >
                {/* Dark background that expands from circle */}
                <div className="absolute right-[5px] top-[5px] bg-[#3A3A3A] rounded-full w-[30px] h-[30px] xs:w-[35px] xs:h-[35px] sm:w-[40px] sm:h-[40px] md:w-[42px] md:h-[42px] lg:w-[45px] lg:h-[45px] group-hover:w-[calc(100%+1px)] group-hover:h-[calc(100%+1px)] group-hover:right-0 group-hover:top-0 group-hover:rounded-[46px] transition-all duration-500 ease-out z-20"></div>

                {/* Text container */}
                <div
                  className={`relative z-30 flex-1 flex justify-center pr-7 xs:pr-8 sm:pr-10 md:pr-11 lg:pr-12`}
                >
                  <span
                    className={`text-xs xs:text-sm sm:text-base md:text-lg font-semibold leading-tight block transition-colors duration-500 text-[#3A3A3A] group-hover:text-white ${raleway.className} whitespace-nowrap`}
                  >
                    Visit the website
                  </span>
                </div>

                {/* Circle with arrow */}
                <div className="absolute right-[5px] top-[5px] z-40 bg-[#3A3A3A] text-white rounded-full flex items-center justify-center w-[30px] h-[30px] xs:w-[35px] xs:h-[35px] sm:w-[40px] sm:h-[40px] md:w-[42px] md:h-[42px] lg:w-[45px] lg:h-[45px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1"
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

      {/* Content Section */}
      <div className="bg-white p-4 sm:p-6 md:p-8">
        <div
          className={`max-w-4xl mx-auto border-l-4 sm:border-l-6 md:border-l-8 border-yellow-400 pl-3 sm:pl-4 md:pl-6 py-3 sm:py-4 md:py-4 shadow-md rounded-lg p-4 ${poppins.className}`}
        >
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Sree Narayana Institute of Ayurveda Studies
          </h2>

          <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-light">
            It is an outstanding college of Ayurveda providing education at BAMS
            and MD levels. It is situated in Puthoor, the birth place of Sri R
            Sankar the former Chief Minister and founder of Sree Narayana Trust,
            Kollam which ushured a revolution in the field of higher education
            in Kerala.
          </p>

          <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
            The organization selected Puthoor the birth place of Sri R Sankar,
            as a tribute to his unique and historic effort to uplift the Society
            through education imbibing the exhortation of Sree Narayana Guru to
            liberate the Society through education.
          </p>

          <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
            Sree Narayana Educational Society has contributed considerably to
            the revival and quality enhancement of education in Kollam. At
            present there are around 3000 students in this School from play
            classes to Senior Secondary level. The infrastructure is of
            International Standards with swimming pool, Indoor Stadium, Atal
            Thinkering Lab, Digital class room and a Library of the state of art
            facilities.
          </p>

          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
            Sree Narayana Educational Society is the organizing body of the Sree
            Narayana Health Care Society which manages the institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolWebsite;
