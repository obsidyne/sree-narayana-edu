"use client";
import { useState, useCallback } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

type Mission = {
  title: string;
  description: string;
};

export default function MissionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const missions: Mission[] = [
    {
      title: "Mission",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Mission",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Mission",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div
      className={`w-full flex items-center bg-white ${poppins.className} border-t border-b border-gray-200`}
      style={{
        maxWidth: "100%",
        width: "100%",
        minHeight: "270px",
        height: "auto",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05), 0 -2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <div className="container mx-auto px-4 py-8 sm:py-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden p-4 sm:p-6 transition-all duration-300 bg-white rounded-lg 
                ${hoveredIndex === index ? "" : ""}
              `}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              // Add touch support for mobile
              onTouchStart={() => handleMouseEnter(index)}
              onTouchEnd={handleMouseLeave}
            >
              {/* Left-to-right hover animation */}
              <div
                className="absolute inset-0 bg-[#FFE601] transition-transform duration-500 ease-out origin-left rounded-lg"
                style={{
                  transform: hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {mission.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
