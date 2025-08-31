"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
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

interface TransformedNewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
}

// Gallery interfaces - Updated to match actual API response
interface GalleryPhoto {
  id: number;
  documentId?: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
  url: string;
  mime?: string;
  size?: number;
}

interface GalleryData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  photos?: GalleryPhoto[];
}

interface GalleryApiResponse {
  data: GalleryData;
  meta: Record<string, unknown>;
}

const NewsAndGallerySection: React.FC = () => {
  const router = useRouter();
  // Ref for scrolling news items
  const newsRef = useRef<HTMLDivElement>(null);
  // State to track if we can scroll left
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  // State to track if we can scroll right
  const [canScrollRight, setCanScrollRight] = useState(true);
  // API-related states for news
  const [newsItems, setNewsItems] = useState<TransformedNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Gallery-related states
  const [galleryItems, setGalleryItems] = useState<GalleryPhoto[]>([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [galleryError, setGalleryError] = useState<string | null>(null);
  
  // Popup states
  const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fetch news data from API
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://thankful-novelty-5d39f22046.strapiapp.com/api/newss?populate[News][populate][main_photo]=true&populate[News][populate][photos]=true&pagination[limit]=-1"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        
        // Transform API data to news format
        const transformedNews: TransformedNewsItem[] = [];
        
        data.data.forEach((newsData) => {
          newsData.News.forEach((newsItem) => {
            transformedNews.push({
              id: newsItem.id,
              category: "NEWS",
              date: formatDate(newsItem.date),
              title: newsItem.heading,
              image: newsItem.main_photo?.formats?.medium?.url || newsItem.main_photo?.url || "/food.jpg",
            });
          });
        });
        
        setNewsItems(transformedNews);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch news data");
        console.error("Error fetching news data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setGalleryLoading(true);
        setGalleryError(null);
        
        const response = await fetch(
          "https://thankful-novelty-5d39f22046.strapiapp.com/api/gallery?populate=photos"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: GalleryApiResponse = await response.json();
        
        console.log("Gallery API Response:", data); // Debug log
        
        // Set gallery photos - handle both possible structures
        const photos = data.data?.photos || [];
        setGalleryItems(photos);
        
        if (photos.length === 0) {
          console.warn("No photos found in gallery data");
        }
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch gallery data";
        setGalleryError(errorMessage);
        console.error("Error fetching gallery data:", err);
      } finally {
        setGalleryLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // Handle navigation to news page
  const handleCardClick = (newsId: number) => {
    // You can pass the specific news ID as a query parameter if needed
    router.push(`/news?id=${newsId}`);
    // Alternative: if you want to use dynamic routes
    // router.push(`/news/${newsId}`);
  };

  // Handle gallery image click
  const handleGalleryImageClick = (image: GalleryPhoto) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
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
  }, [newsItems]); // Add newsItems dependency to recheck when data loads

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

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center h-64 mb-8 sm:mb-12 md:mb-16">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 mx-auto mb-2"></div>
                  <p className="text-gray-800">Loading news...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="flex items-center justify-center h-64 mb-8 sm:mb-12 md:mb-16">
                <div className="text-center text-red-600">
                  <p className="mb-2">Error loading news:</p>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* News Content */}
            {!loading && !error && (
              <div className="relative">
                {/* Left navigation arrow - positioned to the side */}
                {canScrollLeft && newsItems.length > 0 && (
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
                  {newsItems.length > 0 ? (
                    newsItems.map((item) => (
                      <div
                        key={item.id}
                        className="news-card relative bg-white shadow-md flex-none w-[280px] h-[300px] sm:w-[300px] sm:h-[320px] md:w-[320px] md:h-[340px] lg:w-[342px] lg:h-[362px] cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        onClick={() => handleCardClick(item.id)}
                      >
                        <div className="absolute w-full h-40 sm:h-48 md:h-56 left-0 top-0 overflow-hidden bg-gray-400">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 342px"
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/food.jpg"; // Fallback image
                            }}
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
                    ))
                  ) : (
                    <div className="flex items-center justify-center w-full h-64">
                      <p className="text-gray-800">No news items found.</p>
                    </div>
                  )}
                </div>

                {/* Right navigation arrow - positioned to the side */}
                {canScrollRight && newsItems.length > 0 && (
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
            )}

            {/* Gallery Section */}
            <h2
              id="gallery-section"
              className={`${unbounded.className} text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 md:mb-6 lg:mb-8 font-semibold`}
            >
              GALLERY
            </h2>

            {/* Gallery Loading State */}
            {galleryLoading && (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 mx-auto mb-2"></div>
                  <p className="text-gray-800">Loading gallery...</p>
                </div>
              </div>
            )}

            {/* Gallery Error State */}
            {galleryError && (
              <div className="flex items-center justify-center h-64">
                <div className="text-center text-red-600">
                  <p className="mb-2">Error loading gallery:</p>
                  <p className="text-sm">{galleryError}</p>
                </div>
              </div>
            )}

            {/* Gallery grid - responsive */}
            {!galleryLoading && !galleryError && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {galleryItems.length > 0 ? (
                  galleryItems.map((item) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-lg sm:rounded-xl shadow-md w-full h-40 sm:h-44 md:h-48 lg:h-52 cursor-pointer hover:shadow-lg transition-shadow duration-300 relative"
                      onClick={() => handleGalleryImageClick(item)}
                    >
                      <Image
                        src={item.formats?.medium?.url || item.formats?.small?.url || item.url}
                        alt={item.alternativeText || item.name || "Gallery image"}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/gal.jpg"; // Fallback image
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center h-64">
                    <p className="text-gray-800">No gallery images found.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {isPopupOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div 
            className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="max-h-[70vh] overflow-hidden relative w-full h-96">
              <Image
                src={selectedImage.formats?.large?.url || selectedImage.url}
                alt={selectedImage.alternativeText || selectedImage.name || "Gallery image"}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
            
            {/* Image name/caption */}
            <div className="p-4 bg-white">
              <h3 className={`${raleway.className} text-lg font-bold text-gray-800 mb-2`}>
                {selectedImage.name || "Gallery Image"}
              </h3>
              {selectedImage.alternativeText && (
                <p className={`${poppins.className} text-gray-600 text-sm`}>
                  {selectedImage.alternativeText}
                </p>
              )}
              {selectedImage.caption && (
                <p className={`${poppins.className} text-gray-600 text-sm mt-1`}>
                  {selectedImage.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAndGallerySection;