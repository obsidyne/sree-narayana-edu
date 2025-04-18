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
  // Define type for committee member
  type CommitteeMember = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  };

  // Sample data - replace with your actual data
  const founders: CommitteeMember[] = [
    {
      id: 1,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/1.png",
    },
    {
      id: 2,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/2.png",
    },
    {
      id: 3,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/3.png", // Replace with your actual image path
    },
    {
      id: 4,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/4.png", // Replace with your actual image path
    },
    {
      id: 5,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/5.png", // Replace with your actual image path
    },
    {
      id: 6,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/6.png", // Replace with your actual image path
    },
    {
      id: 7,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/7.png", // Replace with your actual image path
    },
    {
      id: 8,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/8.png",
    },
    {
      id: 9,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/9.png",
    },
    {
      id: 10,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/10.png",
    },
    {
      id: 11,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/11.png",
    },
    {
      id: 12,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/12.png",
    },
    {
      id: 13,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/13.png",
    },
    {
      id: 14,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/14.png",
    },
    {
      id: 15,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/15.png",
    },
    {
      id: 16,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/16.png",
    },
    // Adding 7 more cards to make a total of 23
    {
      id: 17,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/17.png",
    },
    {
      id: 18,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/18.png",
    },
    {
      id: 19,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/19.png",
    },
    {
      id: 20,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/20.png",
    },
    {
      id: 21,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/21.png",
    },
    {
      id: 22,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/22.png",
    },
    {
      id: 23,
      name: "Name Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/23.png",
    },
  ];

  // The Card component to ensure consistent styling
  const Card = ({ member }: { member: CommitteeMember }) => (
    <div className="rounded-lg overflow-hidden" style={{ width: "100%" }}>
      <div className="w-full aspect-square">
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="bg-[#333333] text-white p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-2">
            <h3 className="text-lg font-medium mb-1">{member.name}</h3>
            <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
              {member.description}
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
  );

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

        {/* Just display the items directly, CSS will handle the layout */}
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {/* First 2 cards */}
          {founders.slice(0, 2).map((member) => (
            <div key={member.id}>
              <Card member={member} />
            </div>
          ))}

          {/* First row spacers - these take up the rest of the first row */}
          <div className="hidden xl:block"></div>
          <div className="hidden xl:block"></div>
          <div className="hidden xl:block"></div>

          {/* Cards 3-22 */}
          {founders.slice(2, 22).map((member) => (
            <div key={member.id}>
              <Card member={member} />
            </div>
          ))}

          {/* 23rd card */}
          <div>
            <Card member={founders[22]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
