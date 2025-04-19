import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

interface CommitteeMember {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
}

const ExecutiveCommittee: React.FC = () => {
  // Sample data - replace with your actual committee members
  const committeeMembers: CommitteeMember[] = [
    {
      id: 1,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    },
    // Additional 21 members (2 + 21 = 23 total)
    ...Array.from({ length: 21 }, (_, i) => ({
      id: i + 3,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    })),
  ];

  return (
    <main className={`${raleway.className}`}>
      <div
        className="bg-yellow-300 min-h-screen p-4 md:p-8"
        style={{
          backgroundImage: "url(/pattern.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading with exact dimensions and proper spacing for mobile */}
          <div className="w-full max-w-[899px] h-[37px] mb-12 md:mb-8 mt-4">
            <h1
              className={`${raleway.className} text-3xl md:text-4xl font-bold text-gray-800 uppercase pl-6`}
            >
              Executive Committee
            </h1>
          </div>

          <div className="flex flex-col space-y-8">
            {/* First two members (large cards) - stacked vertically with exact dimensions */}
            {committeeMembers.slice(0, 2).map((member) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row bg-white rounded-md overflow-hidden shadow-md w-full max-w-[825px] h-auto md:h-[404px]"
              >
                <div className="w-full md:w-64 h-64 md:h-full relative grayscale">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 md:p-6 flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
                    {member.name}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}

            {/* Remaining members (smaller cards) - grid layout for responsiveness */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committeeMembers.slice(2).map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col md:flex-row bg-white rounded-md overflow-hidden shadow-md h-auto md:h-[293px] w-full max-w-[600px]"
                >
                  <div className="w-full md:w-36 h-48 md:h-full relative grayscale">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExecutiveCommittee;
