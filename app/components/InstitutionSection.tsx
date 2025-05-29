"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import { useRouter } from "next/navigation"; // Import the router

import localFont from "next/font/local";
const bigwhale = localFont({
  src: "Bigwhale.otf",
  display: "swap",
});

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
  slug?: string; // Add a slug prop for routing
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({
  title,
  subtitle,
  imageSrc,
  slug = "shks", // Default to 'shks' if no slug is provided
}) => {
  const router = useRouter(); // Initialize the router

  // Separate the title for styling - handles "Sree Narayana" differently from the rest
  const formatTitleParts = (text: string) => {
    const parts = text.split(" ");
    if (parts.length >= 3) {
      return {
        firstPart: `${parts[0]} ${parts[1]}`,
        restPart: parts.slice(2).join(" "),
      };
    }
    return { firstPart: text, restPart: "" };
  };

  const { firstPart, restPart } = formatTitleParts(title);

  // Handle the arrow click
  const handleArrowClick = () => {
    router.push(`/institutions/${slug}`);
  };

  return (
    <div className="relative bg-white hover:bg-[#FFE601] rounded-2xl w-full overflow-hidden shadow-md transition-all duration-300 ease-in-out group h-auto sm:h-56">
      {/* For mobile, stack image on top of content */}
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image container with hover effect */}
        <div
          className="relative transition-all duration-300 ease-in-out sm:w-2/5 group-hover:sm:w-1/5"
          style={{
            height: "100%",
            minHeight: "224px",
          }}
        >
          <Image
            src={imageSrc}
            alt={`${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>

        {/* Content container */}
        <div className="flex flex-col justify-center py-6 px-6 pb-16 transition-all duration-300 sm:w-3/5 group-hover:sm:w-4/5">
          <div>
            <h3
              className={`transition-all duration-300 group-hover:text-[#333] ${bigwhale.className}`}
            >
              <span
                className="block font-normal capitalize leading-tight tracking-tight"
                style={{ fontSize: "40px" }}
              >
                {firstPart}
              </span>
              {restPart && (
                <span
                  className="block font-normal uppercase leading-tight tracking-tight"
                  style={{ fontSize: "40px" }}
                >
                  {restPart}
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-800 leading-tight mt-2 transition-all duration-300 group-hover:text-[#333]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Arrow button - at bottom of content area */}
      <div className="absolute left-auto right-6 bottom-6 z-10">
        <div
          className="w-10 h-10 bg-white border border-gray-800 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FFE601] group-hover:border-[#333] cursor-pointer"
          onClick={handleArrowClick}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

interface InstitutionsSectionProps {
  className?: string;
  id?: string; // Add id prop
}

const InstitutionsSection: React.FC<InstitutionsSectionProps> = ({
  className = "",
  id, // Receive the id prop
}) => {
  // Institution data with slug added
  const leftInstitutions = [
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Vadakkevila, Kollam (Affiliated to CBSE)",
      imageSrc: "/tree/1.png",
      slug: "snps", // Add the slug
    },
    {
      title: "SREE NARAYANA INSTITUTE OF TECHNOLOGY",
      subtitle: "(Affiliated to the University of Kerala)",
      imageSrc: "/tree/2.png",
      slug: "snit", // Add the slug
    },
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Vilapuram, Chathannoor (Affiliated to CBSE)",
      imageSrc: "/tree/3.png",
      slug: "snpsc", // Add the slug
    },
    {
      title: "SREE NARAYANA KIDS' SCHOOLS",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolo",
      imageSrc: "/tree/4.png",
      slug: "shks", // Add the slug
    },
  ];

  const rightInstitutions = [
    {
      title: "SREE NARAYANA COLLEGE OF TECHNOLOGY",
      subtitle: "(Affiliated to the University of Kerala)",
      imageSrc: "/tree/5.png",
      slug: "snct", // Add the slug
    },
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Kizhavoor, Mukhathala (Affiliated to CBSE)",
      imageSrc: "/tree/6.png",
      slug: "snpsk", // Add the slug
    },
    {
      title: "SREE NARAYANA INSTITUTE OF AYURVEDA STUDIES",
      subtitle:
        "Puthoor, Kottarakkara (Affiliated to the Kerala University of Health Sciences)",
      imageSrc: "/tree/7.png",
      slug: "snas", // Add the slug
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

  // Reduced horizontal connector length for closer cards-to-trunk spacing
  const connectorWidth = 50; // Reduced from 100px to 50px

  return (
    <div
      id={id} // Apply the id prop here
      className={`relative w-full bg-gradient-to-br from-[#FFBF01] to-[#FFEE00] ${className}`}
      style={{
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
                slug={institution.slug}
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
                  width: `${connectorWidth}px`,
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
                  width: `${connectorWidth}px`,
                }}
              ></div>
            ))}
          </div>

          {/* Left side institutions */}
          <div
            className="absolute"
            style={{
              left: `calc(50% - ${connectorWidth}px - 500px)`,
              top: `${leftStartY}px`,
              width: "500px",
            }}
          >
            <div className="space-y-[85px]">
              {leftInstitutions.map((institution, index) => (
                <div className="relative" key={`left-${index}`}>
                  <InstitutionCard
                    title={institution.title}
                    subtitle={institution.subtitle}
                    isLeft={true}
                    imageSrc={institution.imageSrc}
                    slug={institution.slug}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side institutions */}
          <div
            className="absolute"
            style={{
              right: `calc(50% - ${connectorWidth}px - 500px)`,
              top: `${rightStartY}px`,
              width: "500px",
            }}
          >
            <div className="space-y-[85px]">
              {rightInstitutions.map((institution, index) => (
                <div className="relative" key={`right-${index}`}>
                  <InstitutionCard
                    title={institution.title}
                    subtitle={institution.subtitle}
                    isLeft={false}
                    imageSrc={institution.imageSrc}
                    slug={institution.slug}
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
