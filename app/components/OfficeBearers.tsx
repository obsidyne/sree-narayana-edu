"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Unbounded, Raleway } from "next/font/google";

// Load Unbounded font for headings
const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

// Load Raleway font for body text
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const OfficeBearers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Add mouse drag functionality for desktop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isMouseDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      scrollContainer.style.cursor = "grabbing";
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      e.preventDefault(); // Prevent text selection
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      scrollContainer.style.cursor = "grab";
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
      scrollContainer.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const x = e.pageX - scrollContainer.offsetLeft;
      const dist = x - startX;
      scrollContainer.scrollLeft = scrollLeft - dist;
    };

    // Desktop events
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("mousemove", handleMouseMove);

    // Set initial cursor
    scrollContainer.style.cursor = "grab";

    return () => {
      // Cleanup
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Sample data - replace with your actual data
  const founders = [
    {
      id: 1,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
    {
      id: 2,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
    {
      id: 3,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
    {
      id: 4,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
    {
      id: 5,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
    {
      id: 6,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
    {
      id: 7,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
    {
      id: 8,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
    {
      id: 9,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg",
    },
  ];

  return (
    <div
      className={`bg-white py-8 px-4 ${raleway.className}`}
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-5xl font-bold text-gray-800 mb-8 uppercase ${unbounded.className}`}
        >
          OFFICE BEARERS{" "}
        </h2>

        {/* Simple scrollable container with ref for desktop drag functionality */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollable-container"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="rounded-lg overflow-hidden"
                style={{ width: "280px" }}
              >
                <div className="w-full h-[280px]">
                  <Image
                    src={founder.imageUrl}
                    alt={founder.name}
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                    draggable="false" // Prevent image dragging from interfering
                  />
                </div>

                {/* Content Container */}
                <div className="bg-[#333333] text-white p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-2">
                      <h3 className="text-lg font-medium mb-1">
                        {founder.name}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                        {founder.description}
                      </p>
                    </div>
                    {/* Circle Arrow Button */}
                    <div className="ml-1 mt-1 flex-shrink-0">
                      <div className="w-7 h-7 rounded-full bg-[#333333] border border-white flex items-center justify-center text-white cursor-pointer">
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 1L13 5L8 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 5H13"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS to hide scrollbar and improve drag interaction */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollable-container::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollable-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
          user-select: none; /* Prevent text selection during drag */
        }

        /* Disable text selection on cards */
        .scrollable-container * {
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default OfficeBearers;
