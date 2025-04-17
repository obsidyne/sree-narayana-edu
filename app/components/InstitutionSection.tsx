"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

interface InstitutionCardProps {
  title: string;
  subtitle: string;
  isLeft?: boolean;
  imageSrc: string;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({
  title,
  subtitle,
  imageSrc,
}) => {
  // Function to format title with sentence case
  const formatTitle = (text: string) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="relative bg-white hover:bg-[#FFE601] rounded-2xl w-full overflow-hidden shadow-md transition-all duration-300 ease-in-out group h-auto sm:h-56">
      {/* For mobile, stack image on top of content */}
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image container with original hover effect */}
        <div
          className="relative w-full h-48 transition-all duration-300 overflow-hidden"
          style={{
            width: "100%",
            height: "100%",
            minWidth: "226px",
            minHeight: "224px",
          }}
        >
          <Image
            src={imageSrc}
            alt={`${title} building`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 226px"
            priority
          />
        </div>

        {/* Content container */}
        <div className="flex flex-col justify-center py-6 px-6 transition-all duration-300 flex-grow">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 leading-tight tracking-tight mb-2 transition-all duration-300 group-hover:text-[#333]">
              {formatTitle(title)}
            </h3>
            <p className="text-sm text-gray-800 leading-tight transition-all duration-300 group-hover:text-[#333]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Arrow button - always on the right side */}
      <div className="absolute right-6 bottom-6 z-10">
        <div className="w-8 h-8 bg-white border border-gray-800 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FFE601]">
          <span className="text-gray-800 text-xs">→</span>
        </div>
      </div>

      {/* Inline style to ensure image shrinking works on hover */}
      <style jsx>{`
        @media (min-width: 640px) {
          .group:hover .relative[style] {
            min-width: 180px !important;
          }
        }
      `}</style>
    </div>
  );
};

interface InstitutionsSectionProps {
  className?: string;
}

const InstitutionsSection: React.FC<InstitutionsSectionProps> = ({
  className = "",
}) => {
  // Institution data
  const leftInstitutions = [
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Vadakkevila, Kollam (Affiliated to CBSE)",
      imageSrc: "/school.jpg",
    },
    {
      title: "SREE NARAYANA INSTITUTE OF TECHNOLOGY",
      subtitle: "(Affiliated to the University of Kerala)",
      imageSrc: "/school.jpg",
    },
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Vilapuram, Chathannoor (Affiliated to CBSE)",
      imageSrc: "/school.jpg",
    },
    {
      title: "SREE NARAYANA KIDS' SCHOOLS",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolo",
      imageSrc: "/school.jpg",
    },
  ];

  const rightInstitutions = [
    {
      title: "SREE NARAYANA COLLEGE OF TECHNOLOGY",
      subtitle: "(Affiliated to the University of Kerala)",
      imageSrc: "/school.jpg",
    },
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Kizhavoor, Mukhathala (Affiliated to CBSE)",
      imageSrc: "/school.jpg",
    },
    {
      title: "SREE NARAYANA INSTITUTE OF AYURVEDA STUDIES",
      subtitle:
        "Puthoor, Kottarakkara (Affiliated to the Kerala University of Health Sciences)",
      imageSrc: "/school.jpg",
    },
  ];

  // Combine all institutions for mobile view
  const allInstitutions = [...leftInstitutions, ...rightInstitutions];

  // State to track screen width
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen size
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkMobile();

      // Add event listener
      window.addEventListener("resize", checkMobile);

      // Clean up
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  // Define constants for positioning
  const cardHeight = 224; // Height of each card: 56px * 4
  const cardSpacing = 85; // Space between cards
  const leftStartY = 249; // Y position of first left card
  const rightStartY = 332; // Y position of first right card
  const verticalLineTop = 170; // Y position where vertical line starts

  // Calculate exactly how far the vertical line should extend
  const lastLeftCardCenter =
    leftStartY +
    (leftInstitutions.length - 1) * (cardHeight + cardSpacing) +
    cardHeight / 2;
  const lastRightCardCenter =
    rightStartY +
    (rightInstitutions.length - 1) * (cardHeight + cardSpacing) +
    cardHeight / 2;
  const lastConnectorY = Math.max(lastLeftCardCenter, lastRightCardCenter);
  const verticalLineHeight = lastConnectorY - verticalLineTop + 5; // Add 5px for the line thickness

  // Generate connector positions for all cards
  const leftConnectors = leftInstitutions.map((_, index) => {
    return leftStartY + index * (cardHeight + cardSpacing) + cardHeight / 2;
  });

  const rightConnectors = rightInstitutions.map((_, index) => {
    return rightStartY + index * (cardHeight + cardSpacing) + cardHeight / 2;
  });

  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        backgroundColor: "#FFE601",
        minHeight: isMobile ? "auto" : "1436px",
        height: isMobile ? "auto" : "1436px",
      }}
    >
      {isMobile ? (
        // Mobile Layout - Single Column
        <div className="px-4 py-16">
          {/* Title */}
          <h2
            className={`text-4xl sm:text-6xl font-normal text-gray-800 text-center mx-auto mb-10 ${unbounded.className}`}
            style={{ letterSpacing: "-0.06em" }}
          >
            OUR INSTITUTIONS
          </h2>

          {/* Line under title */}
          <div
            className="mx-auto mb-12"
            style={{
              height: "5px",
              maxWidth: "300px",
              backgroundColor: "#3A3A3A",
            }}
          ></div>

          {/* Single column of institutions */}
          <div className="space-y-6">
            {allInstitutions.map((institution, index) => (
              <InstitutionCard
                key={`mobile-${index}`}
                title={institution.title}
                subtitle={institution.subtitle}
                imageSrc={institution.imageSrc}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop Layout - Tree Structure
        <div className="absolute w-full h-full left-0 top-0">
          {/* Title */}
          <div className="absolute w-full" style={{ top: "76px" }}>
            <h2
              className={`text-6xl font-normal text-gray-800 text-center mx-auto ${unbounded.className}`}
              style={{ letterSpacing: "-0.06em", width: "714px" }}
            >
              OUR INSTITUTIONS
            </h2>
          </div>

          {/* Horizontal line under title */}
          <div
            className="absolute"
            style={{
              height: "5px",
              width: "610px",
              backgroundColor: "#3A3A3A",
              left: "calc(50% - 610px/2)",
              top: `${verticalLineTop}px`,
            }}
          ></div>

          {/* Vertical line - central spine */}
          <div
            className="absolute"
            style={{
              width: "5px",
              height: `${verticalLineHeight}px`,
              backgroundColor: "#3A3A3A",
              left: "50%",
              marginLeft: "-2.5px",
              top: `${verticalLineTop}px`,
            }}
          >
            {/* Left side connectors */}
            {leftConnectors.map((connectorY, index) => (
              <div
                key={`left-connector-${index}`}
                className="absolute h-[5px] bg-[#3A3A3A]"
                style={{
                  right: "2.5px",
                  top: `${connectorY - verticalLineTop}px`,
                  width: "100px",
                }}
              ></div>
            ))}

            {/* Right side connectors */}
            {rightConnectors.map((connectorY, index) => (
              <div
                key={`right-connector-${index}`}
                className="absolute h-[5px] bg-[#3A3A3A]"
                style={{
                  left: "2.5px",
                  top: `${connectorY - verticalLineTop}px`,
                  width: "100px",
                }}
              ></div>
            ))}
          </div>

          {/* Left side institutions */}
          <div
            className="absolute"
            style={{ left: "82px", top: `${leftStartY}px`, width: "500px" }}
          >
            <div className="space-y-[85px]">
              {leftInstitutions.map((institution, index) => (
                <div className="relative" key={`left-${index}`}>
                  <InstitutionCard
                    title={institution.title}
                    subtitle={institution.subtitle}
                    isLeft={true}
                    imageSrc={institution.imageSrc}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side institutions */}
          <div
            className="absolute"
            style={{ right: "82px", top: `${rightStartY}px`, width: "500px" }}
          >
            <div className="space-y-[85px]">
              {rightInstitutions.map((institution, index) => (
                <div className="relative" key={`right-${index}`}>
                  <InstitutionCard
                    title={institution.title}
                    subtitle={institution.subtitle}
                    isLeft={false}
                    imageSrc={institution.imageSrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionsSection;

// Types for the entire component
export type { InstitutionCardProps, InstitutionsSectionProps };
