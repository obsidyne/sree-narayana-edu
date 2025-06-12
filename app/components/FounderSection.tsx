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

const FoundersSection: React.FC = () => {
  const router = useRouter();

  // Sample data - replace with your actual data
  const founders = [
    {
      id: 1,
      name: "Prof. Sivaprasad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/sp.png",
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
      name: "M. L. Anidharan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      imageUrl: "/anidharan.jpg",
    },
  ];

  // Handle navigation to founders page
  const handleFounderClick = () => {
    router.push("/founders");
  };

  return (
    <div
      className={`bg-white py-8 ${raleway.className}`}
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Container with responsive margins */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 xl:ml-[151px] xl:mr-[59px] xl:max-w-none max-w-full">
        <div className="max-w-6xl xl:max-w-[1000px]">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 sm:mb-8 uppercase ${unbounded.className}`}
          >
            Our Founders
          </h2>

          {/* Founders Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 mb-8 justify-items-center ${raleway.className}`}
          >
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="rounded-lg overflow-hidden cursor-pointer w-full max-w-sm lg:max-w-[307.84px]"
                onClick={handleFounderClick}
              >
                <div className="w-full aspect-square lg:aspect-square">
                  <Image
                    src={founder.imageUrl}
                    alt={founder.name}
                    width={307.84}
                    height={307.84}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container with Golden Gradient */}
                <div
                  className="text-white p-4 sm:p-5"
                  style={{
                    background:
                      "linear-gradient(152.59deg, #EBD79B 49.55%, #FBF6F0 82.93%)",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-3 sm:pr-4">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                        {founder.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                        {founder.description}
                      </p>
                    </div>
                    {/* Circle Arrow Button - positioned to the right of text */}
                    <div className="ml-2 mt-1 flex-shrink-0">
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-800"
                        style={{ backgroundColor: "transparent" }}
                      >
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-[14px] sm:h-[10px]"
                        >
                          <path
                            d="M8 1L13 5L8 9"
                            stroke="#3A3A3A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 5H13"
                            stroke="#3A3A3A"
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
          {/* <div className="mb-6 max-w-4xl mx-auto font-bold">
            <p className="text-gray-800 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
