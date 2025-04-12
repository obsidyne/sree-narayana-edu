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
      className={`w-full py-8 sm:py-12 md:py-16 bg-white ${poppins.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden p-6 sm:p-8 transition-all duration-300 bg-white rounded-lg 
                ${hoveredIndex === index ? "" : ""}
              `}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Left-to-right hover animation */}
              <div
                className="absolute inset-0 bg-[#EEDC82] transition-transform duration-500 ease-out origin-left rounded-lg"
                style={{
                  transform: hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  {mission.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-700">
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
