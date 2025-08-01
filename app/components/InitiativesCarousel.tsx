"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

interface Initiative {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const initiatives: Initiative[] = [
  {
    id: 1,
    title: "Quality Education Programs",
    description:
      "Comprehensive educational programs from primary to higher education with CBSE affiliation. Our modern curriculum focuses on holistic development, combining academic excellence with moral values as envisioned by Sree Narayana Guru.",
    image: "/initiative.png", // ✅ Use your custom image
    category: "Education",
  },
  {
    id: 2,
    title: "Medical & Healthcare Training",
    description:
      "Advanced medical education and healthcare training programs including MBBS, nursing, and paramedical courses. We prepare competent healthcare professionals to serve communities with dedication and expertise.",
    image: "/initiative.png",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "Community Welfare Programs",
    description:
      "Extensive community outreach initiatives including free health camps, educational scholarships for underprivileged students, and social service programs that embody the spirit of 'One Caste, One Religion, One God for Humanity'.",
    image: "/initiative.png",
    category: "Community",
  },
  {
    id: 4,
    title: "Research & Innovation Center",
    description:
      "State-of-the-art research facilities promoting scientific inquiry and innovation. Our research programs focus on traditional medicine, modern healthcare solutions, and educational methodologies for societal advancement.",
    image: "/initiative.png",
    category: "Research",
  },
  {
    id: 5,
    title: "Skill Development Institute",
    description:
      "Comprehensive skill development and vocational training programs designed to enhance employability. We offer courses in technology, healthcare, entrepreneurship, and traditional crafts to empower youth.",
    image: "/initiative.png",
    category: "Skills",
  },
  {
    id: 6,
    title: "Cultural Heritage Programs",
    description:
      "Preserving and promoting Kerala's rich cultural heritage through traditional arts, music, and dance programs. We celebrate diversity while fostering unity as taught by our founding principles.",
    image: "/initiative.png",
    category: "Culture",
  },
];

export default function InitiativesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === initiatives.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex(
      currentIndex === 0 ? initiatives.length - 1 : currentIndex - 1
    );
  const goToNext = () =>
    setCurrentIndex(
      currentIndex === initiatives.length - 1 ? 0 : currentIndex + 1
    );

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className={`relative w-full ${raleway.className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {initiatives.map((initiative) => (
            <div
              key={initiative.id}
              className="w-full flex-shrink-0 min-h-[420px]"
            >
              <div className="grid lg:grid-cols-5 h-full">
                {/* Image Section */}
                <div className="relative order-2 lg:order-1 lg:col-span-2 h-full flex items-center justify-center bg-white">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-bl-2xl rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-10 xl:p-12 flex flex-col justify-center order-1 lg:order-2 lg:col-span-3 h-full bg-gradient-to-br from-white to-gray-50">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE601] to-yellow-400 text-[#3A3A3A] text-xs font-bold rounded-full shadow-md">
                      {initiative.category}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#3A3A3A] mb-4 leading-snug">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 font-light max-w-2xl line-clamp-4">
                    {initiative.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto">
                    <button className="bg-gradient-to-r from-[#3A3A3A] to-gray-700 hover:from-gray-700 hover:to-[#3A3A3A] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Learn More
                    </button>
                    <div className="flex items-center text-[#3A3A3A] bg-white/50 px-4 py-2 rounded-full">
                      <span className="text-base font-bold mr-2">
                        {String(currentIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-gray-500 mx-2">/</span>
                      <span className="text-base font-bold">
                        {String(initiatives.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white backdrop-blur-md rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-30 border border-gray-200"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-[#3A3A3A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white backdrop-blur-md rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-30 border border-gray-200"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-[#3A3A3A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-4 mt-6">
        {initiatives.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#3A3A3A] scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress */}
      <div className="mt-5 bg-gray-200 rounded-full h-1.5 overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-[#FFE601] to-yellow-400 transition-all duration-700 ease-out shadow-sm"
          style={{
            width: `${((currentIndex + 1) / initiatives.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
