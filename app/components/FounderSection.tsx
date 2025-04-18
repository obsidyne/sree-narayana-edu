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

const FoundersSection: React.FC = () => {
  // Sample data - replace with your actual data
  const founders = [
    {
      id: 1,
      name: "M. L. Anidharan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/anidharan.jpg",
    },
    {
      id: 2,
      name: "Prof. K. Sasikumar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/sasikumar.jpg",
    },
    {
      id: 3,
      name: "Prof. Sivaprasad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/sp.png", // Replace with your actual image path
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
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-5xl font-bold text-gray-800 mb-8 uppercase ${unbounded.className}`}
        >
          Our Founders
        </h2>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 justify-center">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="rounded-lg overflow-hidden"
              style={{ width: "307.84px" }}
            >
              <div className="w-full h-[307.84px]">
                <Image
                  src={founder.imageUrl}
                  alt={founder.name}
                  width={307.84}
                  height={307.84}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="bg-[#333333] text-white p-5">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-medium mb-2">{founder.name}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {founder.description}
                    </p>
                  </div>
                  {/* Circle Arrow Button - positioned to the right of text */}
                  <div className="ml-2 mt-1 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#333333] border border-white flex items-center justify-center text-white cursor-pointer">
                      <svg
                        width="14"
                        height="10"
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

        {/* Description Paragraph */}
        <div className="mb-6 max-w-4xl mx-auto font-bold">
          <p className="text-gray-800 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
