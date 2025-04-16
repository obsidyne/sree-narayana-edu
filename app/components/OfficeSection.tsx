"use client";
import React from "react";
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

const OfficeSection: React.FC = () => {
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
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 4,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 5,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 6,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 7,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 8,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 9,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 10,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 11,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 12,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 13,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 14,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
    },
    {
      id: 15,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/pfp.jpg", // Replace with your actual image path
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
          EXECUTIVE COMMITEE
        </h2>

        {/* Founders Grid - Updated to show 5 items per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8 justify-center">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="rounded-lg overflow-hidden"
              style={{ width: "100%" }}
            >
              <div className="w-full aspect-square">
                <Image
                  src={founder.imageUrl}
                  alt={founder.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="bg-[#333333] text-white p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-2">
                    <h3 className="text-lg font-medium mb-1">{founder.name}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {founder.description}
                    </p>
                  </div>
                  {/* Circle Arrow Button - positioned to the right of text */}
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
  );
};

export default OfficeSection;
