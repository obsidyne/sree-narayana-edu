"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Unbounded, Raleway, Poppins } from "next/font/google";

const unbounded = Unbounded({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
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

interface ApiNewsItem {
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
  News: ApiNewsItem[];
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

interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  images?: string[];
  mainImage?: string;
}

interface NewsSectionProps {
  news?: NewsItem[];
  backgroundImage?: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({
  news,
  backgroundImage = "/news.jpg",
}) => {
  const searchParams = useSearchParams();
  const newsId = searchParams?.get('id');
  
  const [newsData, setNewsData] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Default news content if none provided or API fails
  const defaultNews: NewsItem = {
    id: 1,
    date: "5 April 2025",
    title: "LATEST NEWS IS HERE\nLISTEN UP FOR UPDATES",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Loremipsum laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: ["/gal.jpg", "/gal.jpg", "/gal.jpg"],
  };

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
        
        // Flatten all news items from all data entries
        const allNewsItems: ApiNewsItem[] = [];
        data.data.forEach((newsData) => {
          if (newsData.News && Array.isArray(newsData.News)) {
            allNewsItems.push(...newsData.News);
          }
        });

        // Find the specific news item by ID or use the first one
        let selectedNewsItem: ApiNewsItem | null = null;
        
        if (newsId) {
          selectedNewsItem = allNewsItems.find(item => item.id === parseInt(newsId)) || null;
        }
        
        // If no specific item found or no ID provided, use the first available news item
        if (!selectedNewsItem && allNewsItems.length > 0) {
          selectedNewsItem = allNewsItems[0];
        }

        if (selectedNewsItem) {
          // Process photos for gallery
          const galleryImages: string[] = [];
          
          // First, add the main photo to gallery
          if (selectedNewsItem.main_photo) {
            const mainImageUrl = selectedNewsItem.main_photo.formats?.medium?.url || selectedNewsItem.main_photo.url;
            if (mainImageUrl) {
              galleryImages.push(mainImageUrl);
            }
          }
          
          // Then, add additional photos if they exist
          if (selectedNewsItem.photos && Array.isArray(selectedNewsItem.photos)) {
            selectedNewsItem.photos.forEach((photo) => {
              const imageUrl = photo.formats?.medium?.url || photo.url;
              if (imageUrl) {
                galleryImages.push(imageUrl);
              }
            });
          }

          setNewsData({
            id: selectedNewsItem.id,
            date: formatDate(selectedNewsItem.date),
            title: selectedNewsItem.heading,
            content: selectedNewsItem.description,
            images: galleryImages.length > 0 ? galleryImages : ["/gal.jpg", "/gal.jpg", "/gal.jpg"],
            mainImage: selectedNewsItem.main_photo?.formats?.large?.url || selectedNewsItem.main_photo?.url,
          });
        } else {
          // Use default news if no data found
          setNewsData(defaultNews);
        }
        
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch news data");
        console.error("Error fetching news data:", err);
        // Use default news on error
        setNewsData(defaultNews);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [newsId, backgroundImage]);

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

  // Use provided news, fetched data, or default
  const latestNews = news && news.length > 0 ? news[0] : (newsData || defaultNews);

  return (
    <div className="w-full">
      {/* Top background banner with centered 16:9 image and glassmorphism sides */}
      <div className="relative w-full h-96 z-0 overflow-hidden">
        {/* Blurred background for glassmorphism effect */}
        <div className="absolute inset-0">
          <img
            src={latestNews.mainImage || backgroundImage}
            alt="Background blur"
            className="w-full h-full object-cover filter blur-xl scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = backgroundImage;
            }}
          />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>
        
        {/* Centered 16:9 image container */}
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="relative w-full max-w-6xl">
            {/* 16:9 aspect ratio container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <img
                src={latestNews.mainImage || backgroundImage}
                alt="News main image"
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white/20"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = backgroundImage;
                }}
              />
              {/* Subtle overlay on the main image for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
        
        {/* Left side glassmorphism panel */}
        <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-white/40 to-transparent backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/10"></div>
        </div>
        
        {/* Right side glassmorphism panel */}
        <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-white/40 to-transparent backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/20 to-purple-50/10"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20"></div>
        <div className="absolute top-1/2 left-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20"></div>
      </div>

      {/* Parent container with relative positioning */}
      <div className="w-full relative">
        {/* Card that's positioned relatively to the top of parent */}
        <div className="px-4 relative z-10" style={{ marginTop: "-128px" }}>
          <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 sm:px-8 pt-8 pb-8">
              {/* Loading State */}
              {loading && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading news...</p>
                </div>
              )}

              {/* Error State */}
              {error && !loading && (
                <div className="text-center py-4 mb-6">
                  <p className="text-red-600 text-sm">
                    Error loading news data. Showing default content.
                  </p>
                </div>
              )}

              {/* Content */}
              {!loading && (
                <>
                  {/* Title inside the main card */}
                  <h2
                    className={`text-2xl sm:text-3xl font-semibold text-gray-900 uppercase leading-tight whitespace-pre-line mb-6 ${unbounded.className}`}
                  >
                    {latestNews.title}
                  </h2>

                  {/* Metadata bar */}
                  <div className="flex items-center mb-6">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider text-gray-700 mr-2 ${raleway.className}`}
                    >
                      NEWS
                    </span>
                    <span className={`text-sm text-gray-500 ${poppins.className}`}>
                      {latestNews.date}
                    </span>
                  </div>

                  {/* Text content - split by paragraphs */}
                  <div
                    className={`space-y-4 text-gray-700 font-light ${poppins.className}`}
                  >
                    {latestNews.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Image gallery */}
                  {latestNews.images && latestNews.images.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {latestNews.images.map((img, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden">
                          <img
                            src={img}
                            alt={`News image ${idx + 1}`}
                            className="w-full h-32 object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/gal.jpg"; // Fallback image
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Clear spacing div to push content below */}
        <div className="w-full pb-16"></div>
      </div>
    </div>
  );
};

export default NewsSection;