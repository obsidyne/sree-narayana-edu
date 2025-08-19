"use client";
import { useState, useCallback } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

type MissionVision = {
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

  const items: MissionVision[] = [
    {
      title: "Mission",
      description:
        "To be a beacon of inclusive and transformative education that empowers individuals with knowledge, values, and wisdom, inspired by the teachings of Sree Narayana Guru — fostering equality, unity, and social progress for a harmonious society.",
    },
    {
      title: "Vision",
      description:
        "To provide value-based, equitable, and holistic education that nurtures wisdom, unity, and social progress in the spirit of Sree Narayana Guru.",
    },
  ];

  return (
    <section
      className={`w-full bg-white ${inter.className} border-t border-b border-gray-200`}
      style={{
        minHeight: "200px",
        height: "auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 -2px 8px rgba(0,0,0,0.06)",
      }}
      aria-label="Mission and Vision"
    >
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 ease-out group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleMouseEnter(index)}
              onTouchEnd={handleMouseLeave}
              role="article"
              aria-labelledby={`${item.title.toLowerCase()}-heading`}
            >
              {/* Animated background overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#FFBF01] to-[#FFD700] transition-all duration-700 ease-out rounded-xl"
                style={{
                  transform: hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  zIndex: 1,
                }}
              />

              {/* Content container */}
              <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col">
                {/* Header with vertical accent and title */}
                <div className="flex items-center mb-3">
                  <div 
                    className={`w-1 h-6 rounded-full mr-3 transition-all duration-300 ${
                      hoveredIndex === index ? "bg-gray-800" : "bg-[#FFBF01]"
                    }`}
                  />
                  <h2
                    id={`${item.title.toLowerCase()}-heading`}
                    className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                      hoveredIndex === index ? "text-gray-900" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h2>
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 flex-grow ${
                    hoveredIndex === index ? "text-gray-800" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>

                {/* Decorative element */}
                <div
                  className={`mt-3 w-12 h-0.5 rounded-full transition-all duration-500 ${
                    hoveredIndex === index ? "bg-gray-700 w-20" : "bg-[#FFBF01]"
                  }`}
                />
              </div>

              {/* Subtle corner decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gray-50 to-transparent opacity-50 rounded-bl-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}