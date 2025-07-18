import React from "react";
import Image from "next/image";
import { Unbounded, Raleway } from "next/font/google";

const unbounded = Unbounded({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface FounderProps {
  name: string;
  bio: string;
  education: string;
  career: string;
  imageUrl: string;
}

const Founder: React.FC<FounderProps> = ({
  name,
  bio,
  education,
  career,
  imageUrl,
}) => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-none shadow-md ml-0 md:ml-[100px] w-full md:w-[calc(100%-100px)] mr-0 mb-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="md:w-1/4 flex-shrink-0">
          <div className="w-full max-w-xs mx-auto md:mx-0">
            {/* Fixed image container with proper aspect ratio */}
            <div className="relative w-full aspect-[3/4] max-w-[280px] mx-auto">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover rounded-2xl"
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                priority
                sizes="(max-width: 768px) 280px, (max-width: 1280px) 200px, 280px"
              />
            </div>
          </div>
        </div>

        <div className="md:w-3/4">
          <h2
            className={`text-2xl md:text-3xl font-bold text-gray-800 mb-4 ${raleway.className}`}
          >
            {name}
          </h2>
          <p
            className={`text-gray-700 mb-8 leading-relaxed ${raleway.className}`}
          >
            {bio}
          </p>

          <h3
            className={`text-xl md:text-2xl font-semibold text-gray-800 mb-3 ${raleway.className}`}
          >
            Education
          </h3>
          <p
            className={`text-gray-700 mb-8 leading-relaxed ${raleway.className}`}
          >
            {education}
          </p>

          <h3
            className={`text-xl md:text-2xl font-semibold text-gray-800 mb-3 ${raleway.className}`}
          >
            Career
          </h3>
          <p className={`text-gray-700 leading-relaxed ${raleway.className}`}>
            {career}
          </p>
        </div>
      </div>
    </div>
  );
};

// Example usage
const FoundersPage: React.FC = () => {
  const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do";

  const founders = [
    {
      name: "Prof. Sivaprasad",
      bio: placeholderText,
      education: placeholderText,
      career: placeholderText,
      imageUrl: "/sp.png",
    },
    {
      name: "Prof. K. Sasikumar",
      bio: placeholderText,
      education: placeholderText,
      career: placeholderText,
      imageUrl: "/founder2.png",
    },
    {
      name: "M. L. Anidharan",
      bio: placeholderText,
      education: placeholderText,
      career: placeholderText,
      imageUrl: "/founder3.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#FFBF01] to-[#FFEE00] w-full min-h-screen py-10 pr-0">
      <div className="w-full px-4 md:px-0">
        <h1
          className={`text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-8 md:mb-12 pl-0 md:pl-[100px] ${unbounded.className}`}
        >
          OUR FOUNDERS
        </h1>

        {founders.map((founder, index) => (
          <Founder
            key={index}
            name={founder.name}
            bio={founder.bio}
            education={founder.education}
            career={founder.career}
            imageUrl={founder.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;
