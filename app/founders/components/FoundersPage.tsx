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
  education?: string;
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
          {education && (
            <>
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
            </>
          )}

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

const FoundersPage: React.FC = () => {
  const founders = [
    {
      name: "Prof. S. Sivaprasad",
      bio: "A known academician of the State, Prof. S. Sivaprasad is deeply involved in cultural activities in Kollam and is admired by his students and the public alike. He was the first President of the Kollam District Unit of Sree Narayana Samskarika Samithy and the Founder Director of the erstwhile Sree Narayana Open University—a non-governmental institute of Higher Education.",
      education:
        "He had been a member of the syndicate of Calicut University and a member of several educational bodies in different universities.",
      career:
        "Prof. S. Sivaprasad is the retired Principal of Sree Narayana College, Kollam.",
      imageUrl: "/sp.png",
    },
    {
      name: "Prof. K. Sasikumar",
      bio: "Prof. K. Sasikumar was a member of the teaching faculty at Sree Narayana College, Kollam, at the time of the formation of the Sree Narayana Educational Society. He was the Secretary of the Sree Narayana Samskarika Samithy, Kollam, and was instrumental in organizing coaching classes for Competitive Examinations under the Sree Narayana Open University. He also organized the Students forum at Kollam, a motivational forum for competitive examinations from which several persons were selected for the I A S. His overseas experience has been instrumental in organizing the Sree Narayana Educational Society.",
      education:
        "He has served as a member of several educational bodies, including the Curriculum Committee of the Government of Kerala, as a peer team leader for NAAC, a member of the Senate of the University of Kerala, and a member of the Board of Governors of the APJ Abdul Kalam Technological University of Kerala. He was also the President of the Kerala Self Financing Engineering Colleges Association.",
      career:
        "He served as a teacher in Nigeria for five years, from 1975 to 1980, and then continued his teaching assignment at Sree Narayana College, Kollam. By 1992, he was appointed Principal of Sree Narayana College and served in that capacity in different colleges until his retirement in 2003 as the Principal of Sree Narayana College, Kollam.",
      imageUrl: "/founder2.png",
    },
    {
      name: "Sri. M.L. Anidharan",
      bio: "Sri. M.L. Anidharan is a well-known officer of the Kerala State Electricity Board, a good organizer, an amiable personality, and an ardent devotee of Sree Narayana Guru. He was the Managing Director of the United Electrical Industries Limited (Metre Company) at Kollam and worked as the Secretary of the Sree Narayana Samskarika Samithy, Kollam.",
      career:
        "He was an Executive Engineer of the Kerala State Electricity Board at the time of the formation of the Sree Narayana Educational Society. He retired as the Chief Engineer (Distribution) of the Kerala State Electricity Board. He was also associated with the Brahmapuram plant at Cochin.",
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