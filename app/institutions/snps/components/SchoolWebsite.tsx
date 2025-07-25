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
          src="/slideshow/snpsv.jpg"
          alt="School Entrance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 text-white">
          <h1
            className={`text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-semibold tracking-wider leading-none ${unbounded.className}`}
          >
            SREE NARAYANA
          </h1>
          <h2
            className={`text-[28px] sm:text-[35px] md:text-[45px] lg:text-[55px] font-semibold tracking-wider leading-tight ${unbounded.className}`}
          >
            PUBLIC SCHOOL
          </h2>
          {/* Responsive font size for location and affiliation */}
          <p
            className={`text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] mt-1 ${unbounded.className} font-semibold`}
          >
            VADAKKEVILA, KOLLAM{" "}
            <span
              className={`text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] ${unbounded.className} font-semibold`}
            >
              (AFFILIATED TO CBSE)
            </span>
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
            Sree Narayana Public School
          </h2>

          <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-light">
            Sree Narayana Public School was opened in Mundakkal village of
            Kollam Town with 21 students and 5 teachers in a rented building. Dr
            M. Govindhanan was appointed as the Principal. Subsequently the
            School was shifted to its own building at Vadakkevila and secured
            the approval from the Government of Kerala and Central Board of
            Secondary Education, Delhi. The School was formally opened by the
            Minister of Education Sri K Chandrasekharan in 1987. The then
            presided by Prof. N K Seshan(former Member of the Legislative
            Assembly) is worth mentioning.
          </p>

          <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
            The fund collection for the purchase of land, construction of
            building and other infrastructural development was quite stupendous.
            It was a saga and the premier role was played by the Secretary
            assisted by the Treasurer. In due course, the School grew up as the
            premier institution of &quot;School Education in Kollam&quot; and
            the students who passed out from the School have brought laurels to
            the institution. A large number of our alumni are in the Indian
            Administrative service and allied services viz IAS/IPS/IES/IRS etc.
            Besides, many are in the Scientific, Medical, Engineering and other
            services on a global level. Some of them are distinguished
            Professors in IITs and International Universities like MIT, KNGS
            College etc. The School has grown as one of the top most Schools of
            its kind in Kerala. Overall personality development of the students
            is the motto of the School.
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
            The phenomenal success of the Sree Narayana Public School emboldened
            the organizers to expand its educational activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolWebsite;
