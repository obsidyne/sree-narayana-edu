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

  const founders = [
    {
      id: 1,
      name: "Prof. S. Sivaprasad",
      description:
        "A known academician of the State, Prof. S. Sivaprasad is deeply involved in cultural activities of Kollam and is admired by his students and the public alike. He was the first President of the Kollam District Unit of Sree Narayana Samskarika Samithy and the Founder Director of the erstwhile Sree Narayana Open University—a non-governmental institute of Higher Education.",
      imageUrl: "/sp.png",
    },
    {
      id: 2,
      name: "Prof. K. Sasikumar",
      description:
        "He was a member of the teaching faculty of Sree Narayana College, Kollam at the time of the formation of the Sree Narayana Educational Society. He was the Secretary of the Sree Narayana Samskarika Samithy, Kollam and was instrumental in organizing the coaching classes for Competitive Examinations under the aegis of Sree Narayana Open University. He also organized the Students forum at Kollam—a motivational forum for Competitive Examination, from which several persons got selected to IAS. His overseas experience has gone a long way in organizing the Sree Narayana Educational Society.",
      imageUrl: "/sasikumar.jpg",
    },
    {
      id: 3,
      name: "Sri. M.L. Anidharan",
      description:
        "Sri. M.L. Anidharan is a well-known officer of the Kerala State Electricity Board, a good organizer and an amiable personality and an ardent devotee of Sree Narayana Guru. He was the Managing Director of the United Electrical Industries Limited (Metre Company) at Kollam and worked as the Secretary of the Sree Narayana Samskarika Samithy, Kollam. He was an Executive Engineer of the Kerala State Electricity Board at the time of the formation of the Sree Narayana Educational Society.",
      imageUrl: "/anidharan.jpg",
    },
  ];

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
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 xl:ml-[151px] xl:mr-[59px] xl:max-w-none max-w-full">
        <div className="max-w-6xl xl:max-w-[1000px]">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 sm:mb-8 uppercase ${unbounded.className}`}
          >
            Our Founders
          </h2>

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

                <div
                  className="p-4 sm:p-5"
                  style={{
                    background:
                      "linear-gradient(152.59deg, #EBD79B 49.55%, #FBF6F0 82.93%)",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-3 sm:pr-4 h-[120px] sm:h-[150px] overflow-hidden">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                        {founder.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                        {founder.description}
                      </p>
                    </div>
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
                  <div className="mt-4">
                    <span className="text-xs sm:text-sm font-semibold text-gray-400">
                      Click to read more
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;