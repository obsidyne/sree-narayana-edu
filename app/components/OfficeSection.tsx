"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  // Define type for committee member
  type CommitteeMember = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  };

  // Handle card click to navigate to /execom
  const handleCardClick = () => {
    router.push("/execom");
  };

  // Sample data - replace with your actual data
  const founders: CommitteeMember[] = [
    {
      id: 1,
      name: "Sr. Krishna Bhadran M.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/1.png",
    },
    {
      id: 2,
      name: "Er. Ajay S.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/2.png",
    },
    {
      id: 3,
      name: "Prof. G. Suresh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/3.png", // Replace with your actual image path
    },
    {
      id: 4,
      name: "Sri. Dathan T. D.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/4.png", // Replace with your actual image path
    },
    {
      id: 5,
      name: "Sri. Rajkumar D.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/5.png", // Replace with your actual image path
    },
    {
      id: 6,
      name: "Sri. Naresh Narayanan J.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/6.png", // Replace with your actual image path
    },
    {
      id: 7,
      name: "Sri. Sunil Kumar A.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/7.png", // Replace with your actual image path
    },
    {
      id: 8,
      name: "Er. Rafi Kambisseri",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/8.png",
    },
    {
      id: 9,
      name: "Prof. K. Jayapalan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/9.png",
    },
    {
      id: 10,
      name: "Sri. Prasad D.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/10.png",
    },
    {
      id: 11,
      name: "Sri. Shirish Kesavan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/11.png",
    },
    {
      id: 12,
      name: "Er. Yesodharan S. K.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/12.png",
    },
    {
      id: 13,
      name: "Sri. Jayadevan S.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/13.png",
    },
    {
      id: 14,
      name: "Sri. Rajeev V. B.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/14.png",
    },
    {
      id: 15,
      name: "Er. Joy N. R.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/15.png",
    },
    {
      id: 16,
      name: "Er. Ligin K. G.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/16.png",
    },
    // Adding 7 more cards to make a total of 23
    {
      id: 17,
      name: "Dr. Raveendran G.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/17.png",
    },
    {
      id: 18,
      name: "Sri. Gulnar Somarajan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/18.png",
    },
    {
      id: 19,
      name: "Sri. N. Sugatha Rao",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/19.png",
    },
    {
      id: 20,
      name: "Dr. C. N. Somarajan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/20.png",
    },
    {
      id: 21,
      name: "Sri.Saseendran C.K",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/21.png",
    },
    {
      id: 22,
      name: "Sri. Mohanan V.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/22.png",
    },
    {
      id: 23,
      name: "Sri. Lalu D.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/execom/23.png",
    },
  ];

  // The Card component to ensure consistent styling
  const Card = ({ member }: { member: CommitteeMember }) => (
    <div
      className="rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ width: "100%" }}
      onClick={handleCardClick}
    >
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
            <div className="w-7 h-7 rounded-full bg-[#333333] border border-white flex items-center justify-center text-white">
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
