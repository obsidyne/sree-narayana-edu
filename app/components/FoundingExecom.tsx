"use client";
import React from "react";
import { Unbounded, Raleway } from "next/font/google";

// Load Unbounded font for headings
const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

// Load Raleway font for body text
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

const FoundingExecom: React.FC = () => {
  // Executive committee members data - split into two columns as per Figma
  const leftColumnMembers = [
    "N. K. Rajappan",
    "D. Prasannan",
    "N. Sudhakaran",
    "P. N. Bhasi",
    "V. Vijayankutty",
    "P. V. Sasidharan",
    "R. D. Dathan",
    "K. Amrithlal",
  ];

  const rightColumnMembers = [
    "Prof. M. I. Rajappan",
    "Prof. S. Sooryadas",
    "Dr. C. N. Somarajan",
    "C. K. Saseendran",
    "V. Sivarajan",
    "N. Gopinathan",
    "G. Sundaresan (Health Inspector)",
  ];

  return (
    <div
      className="bg-white py-6 sm:py-8"
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Container with responsive margins */}
      <div className="w-full px-4 sm:px-6 lg:px-0 lg:ml-[151px] lg:mr-[59px] lg:max-w-none max-w-full">
        {/* Inner container matching Figma's 1230px max width constraint */}
        <div className="max-w-full lg:max-w-[1230px]">
          {/* Main flex container matching Figma's Frame 65 */}
          <div className="flex flex-col justify-center items-start gap-6 lg:gap-[50px] w-full lg:min-h-[412px]">
            {/* Heading matching Figma specs */}
            <h2
              className={`${unbounded.className} font-semibold w-full text-2xl sm:text-3xl lg:text-[35px] leading-tight lg:leading-[1.2] tracking-tight lg:tracking-[-0.03em] text-gray-800 lg:min-h-[26px]`}
            >
              MEMBERS OF THE EXECUTIVE COMMITTEE
            </h2>

            {/* Two column layout container matching Figma's Frame 3869 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-[50px] w-full lg:max-w-[820px] lg:min-h-[336px]">
              {/* Left Column - Frame 3867 */}
              <div className="flex flex-col justify-center items-start flex-1 gap-3 sm:gap-4 lg:gap-[24px] lg:min-h-[336px] lg:max-w-[385px]">
                {leftColumnMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`${raleway.className} font-semibold w-full text-lg sm:text-xl lg:text-[30px] leading-tight lg:leading-[1.2] tracking-tight lg:tracking-[-0.01em] text-gray-800 lg:min-h-[21px]`}
                  >
                    {member}
                  </div>
                ))}
              </div>

              {/* Right Column - Frame 3868 */}
              <div className="flex flex-col justify-center items-start flex-1 gap-3 sm:gap-4 lg:gap-[24px] lg:min-h-[291px] lg:max-w-[385px]">
                {rightColumnMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`${raleway.className} font-semibold w-full text-lg sm:text-xl lg:text-[30px] leading-tight lg:leading-[1.2] tracking-tight lg:tracking-[-0.01em] text-gray-800 lg:min-h-[21px]`}
                    style={{
                      // Special width for the Health Inspector entry on desktop only
                      maxWidth: member.includes("Health Inspector")
                        ? "min(100%, 464px)"
                        : "min(100%, 385px)",
                    }}
                  >
                    {member}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingExecom;
