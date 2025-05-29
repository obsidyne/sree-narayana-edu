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
      className="bg-white py-8"
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Container with custom margins - 151px left, 59px right on larger screens */}
      <div
        className="w-full px-4 sm:px-0"
        style={{
          marginLeft: "clamp(16px, 151px, 151px)",
          marginRight: "clamp(16px, 59px, 59px)",
          maxWidth: "calc(100vw - 32px)", // Fallback for very small screens
        }}
      >
        {/* Inner container matching Figma's 1230px max width constraint */}
        <div className="max-w-[1230px]">
          {/* Main flex container matching Figma's Frame 65 */}
          <div
            className="flex flex-col justify-center items-start gap-6 lg:gap-[50px] w-full"
            style={{ minHeight: "412px" }}
          >
            {/* Heading matching Figma specs */}
            <h2
              className={`${unbounded.className} font-semibold w-full`}
              style={{
                fontSize: "clamp(24px, 4vw, 35px)",
                lineHeight: "1.2",
                letterSpacing: "-0.03em",
                color: "#3A3A3A",
                height: "auto",
                minHeight: "26px",
              }}
            >
              MEMBERS OF THE EXECUTIVE COMMITTEE
            </h2>

            {/* Two column layout container matching Figma's Frame 3869 */}
            <div
              className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-[50px] w-full max-w-[820px]"
              style={{ minHeight: "336px" }}
            >
              {/* Left Column - Frame 3867 */}
              <div
                className="flex flex-col justify-center items-start flex-1"
                style={{
                  gap: "clamp(12px, 2vw, 24px)",
                  minHeight: "336px",
                  maxWidth: "385px",
                }}
              >
                {leftColumnMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`${raleway.className} font-semibold w-full`}
                    style={{
                      fontSize: "clamp(18px, 3vw, 30px)",
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                      color: "#3A3A3A",
                      minHeight: "21px",
                    }}
                  >
                    {member}
                  </div>
                ))}
              </div>

              {/* Right Column - Frame 3868 */}
              <div
                className="flex flex-col justify-center items-start flex-1"
                style={{
                  gap: "clamp(12px, 2vw, 24px)",
                  minHeight: "291px",
                  maxWidth: "385px",
                }}
              >
                {rightColumnMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`${raleway.className} font-semibold w-full`}
                    style={{
                      fontSize: "clamp(18px, 3vw, 30px)",
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                      color: "#3A3A3A",
                      minHeight: "21px",
                      // Special width for the Health Inspector entry
                      maxWidth: member.includes("Health Inspector")
                        ? "464px"
                        : "385px",
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
