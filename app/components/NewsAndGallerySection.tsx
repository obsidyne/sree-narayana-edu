"use client";
import React, { useRef, useState, useEffect } from "react";
import { Unbounded, Raleway, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const NewsAndGallerySection: React.FC = () => {
  const router = useRouter();
  // Ref for scrolling news items
  const newsRef = useRef<HTMLDivElement>(null);
  // State to track if we can scroll left
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  // State to track if we can scroll right
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sample news data - now with 6 items
  const newsItems = [
    {
      id: 1,
      category: "NEWS",
      date: "5 April 2025",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
      image: "/food.jpg", // Replace with your actual image path
    },
    {
      id: 2,
      category: "NEWS",
      date: "5 April 2025",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
      image: "/food.jpg", // Replace with your actual image path
    },
    {
      id: 3,
      category: "NEWS",
      date: "5 April 2025",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
      image: "/food.jpg", // Replace with your actual image path
    },
    {
      id: 4,
      category: "NEWS",
      date: "5 April 2025",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
      image: "/food.jpg", // Replace with your actual image path
    },
    {
      id: 5,
      category: "NEWS",
      date: "5 April 2025",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
      image: "/food.jpg", // Replace with your actual image path
    },
    {
      id: 6,
      category: "NEWS",
      date: "5 April 2025",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
      image: "/food.jpg", // Replace with your actual image path
    },
  ];

  // Sample gallery data - create 10 items for the gallery grid (2 rows of 5)
  const galleryItems = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: "/gal.jpg", // Replace with your actual image path
    alt: "Gallery image",
  }));

  // Handle navigation to news page
  const handleCardClick = (newsId: number) => {
    // You can pass the specific news ID as a query parameter if needed
    router.push(`/news?id=${newsId}`);
    // Alternative: if you want to use dynamic routes
    // router.push(`/news/${newsId}`);
  };

  // Handle scrolling of news section
  const scrollNewsRight = () => {
    if (newsRef.current) {
      const cardWidth =
        newsRef.current.querySelector(".news-card")?.clientWidth || 342;
      const gap = 24; // Gap between cards
      const scrollAmount = cardWidth + gap;

      newsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollNewsLeft = () => {
    if (newsRef.current) {
      const cardWidth =
        newsRef.current.querySelector(".news-card")?.clientWidth || 342;
      const gap = 24; // Gap between cards
      const scrollAmount = -(cardWidth + gap);

      newsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Check scroll position to determine if we can scroll left/right
  const checkScrollPosition = () => {
    if (newsRef.current) {
      // Can scroll left if scrollLeft > 0
      setCanScrollLeft(newsRef.current.scrollLeft > 0);

      // Can scroll right if we haven't reached the end
      const scrollableWidth =
        newsRef.current.scrollWidth - newsRef.current.clientWidth;
      setCanScrollRight(newsRef.current.scrollLeft < scrollableWidth - 10); // 10px buffer
    }
  };

  // Add scroll event listener and handle resize
  useEffect(() => {
    const newsContainer = newsRef.current;
    if (newsContainer) {
      newsContainer.addEventListener("scroll", checkScrollPosition);
      // Initial check
      checkScrollPosition();

      // Add resize listener to recheck scroll position when screen size changes
      window.addEventListener("resize", checkScrollPosition);

      return () => {
        newsContainer.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full bg-white">
      {/* White left sidebar - hidden on mobile */}
      <div className="hidden md:block w-0 sm:w-8 md:w-16 lg:w-28 bg-white"></div>

      {/* Main yellow content area with rounded left corners */}
      <div className="flex-1 bg-gradient-to-br from-[#FFBF01] to-[#FFEE00] relative overflow-hidden rounded-tl-none rounded-bl-none md:rounded-tl-lg md:rounded-bl-lg">
        {/* Flower patterns background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="flex flex-wrap">
            {Array.from({ length: 50 }).map((_, index) => (
              <div
                key={index}
                className="w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-yellow-400"
                >
                  <path
                    d="M50,0 C60,20 80,40 100,50 C80,60 60,80 50,100 C40,80 20,60 0,50 C20,40 40,20 50,0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="mx-auto relative px-4 sm:px-6 md:px-8 lg:px-12">
            {/* News & Updates Section */}
            <h2
              id="news-section"
              className={`${unbounded.className} text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 md:mb-6 lg:mb-8 font-semibold`}
            >
              NEWS & UPDATES
            </h2>

            <div className="relative">
              {/* Left navigation arrow - positioned to the side */}
              {canScrollLeft && (
                <button
                  onClick={scrollNewsLeft}
                  className="absolute bg-white rounded-full shadow-md w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 z-10"
                  style={{
                    left: "-12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform rotate-180"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              )}

              <div
                ref={newsRef}
                className="flex gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 overflow-x-hidden scroll-smooth"
                onScroll={checkScrollPosition}
              >
                {newsItems.map((item) => (
                  <div
                    key={item.id}
                    className="news-card relative bg-white shadow-md flex-none w-[280px] h-[300px] sm:w-[300px] sm:h-[320px] md:w-[320px] md:h-[340px] lg:w-[342px] lg:h-[362px] cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    onClick={() => handleCardClick(item.id)}
                  >
                    <div className="absolute w-full h-40 sm:h-48 md:h-56 left-0 top-0 overflow-hidden bg-gray-400">
                      <img
                        src={item.image}
                        alt="Food dish"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute flex flex-row items-center gap-2 left-4 sm:left-6 top-44 sm:top-52 md:top-60">
                      <span
                        className={`${raleway.className} font-bold text-xs uppercase text-gray-800`}
                      >
                        {item.category}
                      </span>
                      <div className="h-4 border-l border-gray-400"></div>
                      <span
                        className={`${poppins.className} font-medium text-xs text-gray-500`}
                      >
                        {item.date}
                      </span>
                    </div>
                    <p
                      className={`${raleway.className} absolute w-60 sm:w-64 md:w-72 left-4 sm:left-6 top-48 sm:top-56 md:top-64 font-bold text-base sm:text-lg leading-5 sm:leading-6 text-gray-800`}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right navigation arrow - positioned to the side */}
              {canScrollRight && (
                <button
                  onClick={scrollNewsRight}
                  className="absolute bg-white rounded-full shadow-md w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 z-10"
                  style={{
                    right: "-12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Gallery Section */}
            <h2
              id="gallery-section"
              className={`${unbounded.className} text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 md:mb-6 lg:mb-8 font-semibold`}
            >
              GALLERY
            </h2>

            {/* Gallery grid - responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-lg sm:rounded-xl shadow-md w-full h-40 sm:h-44 md:h-48 lg:h-52"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndGallerySection;
