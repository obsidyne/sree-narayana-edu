"use client";
import { useState, useEffect } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

interface NewsPhoto {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
}

interface NewsItem {
  id: number;
  heading: string;
  description: string;
  date: string;
  main_photo: NewsPhoto;
  photos: NewsPhoto[] | null;
}

interface NewsData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  News: NewsItem[];
}

interface ApiResponse {
  data: NewsData[];
  meta: {
    pagination: {
      start: number;
      limit: number;
      total: number;
    };
  };
}

interface Initiative {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export default function InitiativesCarousel() {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://thankful-novelty-5d39f22046.strapiapp.com/api/newss?populate[News][populate][main_photo]=true&populate[News][populate][photos]=true&pagination[limit]=-1"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        
        // Transform API data to initiatives format
        const transformedInitiatives: Initiative[] = [];
        
        data.data.forEach((newsData) => {
          newsData.News.forEach((newsItem) => {
            transformedInitiatives.push({
              id: newsItem.id,
              title: newsItem.heading,
              description: newsItem.description,
              image: newsItem.main_photo?.formats?.medium?.url || newsItem.main_photo?.url || "/initiative.png",
              category: "News", // Default category, you can customize this
              date: newsItem.date,
            });
          });
        });
        
        setInitiatives(transformedInitiatives);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || initiatives.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === initiatives.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, initiatives.length]);

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

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className={`relative w-full ${raleway.className}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-full min-h-[420px] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A3A3A] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading initiatives...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`relative w-full ${raleway.className}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-full min-h-[420px] flex items-center justify-center">
          <div className="text-center text-red-600">
            <p className="mb-2">Error loading initiatives:</p>
            <p className="text-sm">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (initiatives.length === 0) {
    return (
      <div className={`relative w-full ${raleway.className}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-full min-h-[420px] flex items-center justify-center">
          <p className="text-gray-600">No initiatives found.</p>
        </div>
      </div>
    );
  }

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
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover rounded-bl-2xl rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/initiative.png"; // Fallback image
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-10 xl:p-12 flex flex-col justify-center order-1 lg:order-2 lg:col-span-3 h-full bg-gradient-to-br from-white to-gray-50">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE601] to-yellow-400 text-[#3A3A3A] text-xs font-bold rounded-full shadow-md">
                      {initiative.category}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {formatDate(initiative.date)}
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