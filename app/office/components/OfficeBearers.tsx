import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
interface OfficeBearerMember {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
}

const OfficeBearers: React.FC = () => {
  // Sample data - replace with your actual office bearers
  const officeBearers: OfficeBearerMember[] = [
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
    {
      id: 3,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    },
    {
      id: 4,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    },
    {
      id: 5,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    },
    {
      id: 6,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    },
    {
      id: 7,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    },
    {
      id: 8,
      name: "Name Goes Here",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      imageUrl: "/pfp.jpg", // Replace with actual image path
    },
  ];

  return (
    <main className={raleway.className}>
      <div
        className="bg-gradient-to-br from-[#FFBF01] to-[#FFEE00] min-h-screen p-4 md:p-8"
        // style={{
        //   backgroundImage: "url(/pattern.png)",
        //   backgroundRepeat: "repeat",
        // }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="w-full mb-12 md:mb-8 mt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] uppercase pl-6">
              Office Bearers
            </h1>
          </div>

          {/* Office bearers flex layout instead of grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {officeBearers.map((member) => (
              <div
                key={member.id}
                className="flex bg-white rounded-lg overflow-hidden w-[598.52px] h-[293.45px]"
              >
                <div className="w-[189.52px] h-full relative">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                    priority
                  />
                </div>
                <div
                  className="w-[409px] h-[293px] flex flex-col py-6 px-6"
                  style={{
                    boxShadow: "0px 2.44544px 11.6158px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {member.name}
                  </h2>
                  <p className="text-[15px] font-normal text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OfficeBearers;
