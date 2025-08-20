"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
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

interface InitiativesCarouselProps {
  autoPlayInterval?: number;
  maxRetries?: number;
  retryDelay?: number;
  className?: string;
}

// Constants
const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://thankful-novelty-5d39f22046.strapiapp.com";
const DEFAULT_AUTO_PLAY_INTERVAL = 5000;
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_RETRY_DELAY = 1000;
const FALLBACK_IMAGE = "/initiative.png";

export default function InitiativesCarousel({
  autoPlayInterval = DEFAULT_AUTO_PLAY_INTERVAL,
  maxRetries = DEFAULT_MAX_RETRIES,
  retryDelay = DEFAULT_RETRY_DELAY,
  className = "",
}: InitiativesCarouselProps = {}) {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  // Memoized API URL
  const apiUrl = useMemo(() => 
    `${API_BASE_URL}/api/newss?populate[News][populate][main_photo]=true&populate[News][populate][photos]=true&pagination[limit]=-1`,
    []
  );

  // Error handler
  const handleError = useCallback((err: unknown, context: string) => {
    const errorMessage = err instanceof Error ? err.message : `Failed to ${context}`;
    setError(errorMessage);
    console.error(`Error ${context}:`, err);
  }, []);

  // Sanitize HTML content for security
  const sanitizeDescription = useCallback((description: string) => {
    return description.replace(/<[^>]*>/g, '').substring(0, 300);
  }, []);

  // Transform API data
  const transformApiData = useCallback((data: ApiResponse): Initiative[] => {
    const transformedInitiatives: Initiative[] = [];
    
    data.data.forEach((newsData) => {
      newsData.News.forEach((newsItem) => {
        // Validate required fields
        if (!newsItem.heading || !newsItem.description || !newsItem.date) {
          console.warn(`Skipping incomplete news item with id: ${newsItem.id}`);
          return;
        }

        transformedInitiatives.push({
          id: newsItem.id,
          title: newsItem.heading.trim(),
          description: sanitizeDescription(newsItem.description),
          image: newsItem.main_photo?.formats?.medium?.url || 
                 newsItem.main_photo?.formats?.small?.url || 
                 newsItem.main_photo?.url || 
                 FALLBACK_IMAGE,
          category: "News",
          date: newsItem.date,
        });
      });
    });
    
    return transformedInitiatives;
  }, [sanitizeDescription]);

  // Fetch data with retry logic
  const fetchData = useCallback(async (attempt = 0): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
      
      const response = await fetch(apiUrl, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      
      if (!data.data || !Array.isArray(data.data)) {
        throw new Error('Invalid API response format');
      }
      
      const transformedInitiatives = transformApiData(data);
      
      if (transformedInitiatives.length === 0) {
        throw new Error('No valid initiatives found in API response');
      }
      
      setInitiatives(transformedInitiatives);
      setRetryCount(0);
      
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        handleError(new Error('Request timeout'), 'fetch data');
      } else if (attempt < maxRetries) {
        setRetryCount(attempt + 1);
        setTimeout(() => fetchData(attempt + 1), retryDelay * (attempt + 1));
        return;
      } else {
        handleError(err, 'fetch data');
      }
    } finally {
      setLoading(false);
    }
  }, [apiUrl, maxRetries, retryDelay, transformApiData, handleError]);

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Auto-play functionality with cleanup
  useEffect(() => {
    if (!isAutoPlaying || initiatives.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === initiatives.length - 1 ? 0 : prev + 1
      );
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, initiatives.length, autoPlayInterval]);

  // Navigation handlers
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < initiatives.length) {
      setCurrentIndex(index);
    }
  }, [initiatives.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? initiatives.length - 1 : prev - 1);
  }, [initiatives.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev === initiatives.length - 1 ? 0 : prev + 1);
  }, [initiatives.length]);

  // Mouse handlers
  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(initiatives.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, goToSlide, initiatives.length]);

  // Format date with error handling
  const formatDate = useCallback((dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  }, []);

  // Image error handler
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className={`relative w-full ${raleway.className} ${className}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-full min-h-[420px] flex items-center justify-center">
          <div className="text-center" role="status" aria-label="Loading initiatives">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A3A3A] mx-auto mb-4" />
            <p className="text-gray-600">
              Loading initiatives...
              {retryCount > 0 && (
                <span className="block text-sm text-gray-500 mt-1">
                  Retry attempt {retryCount}/{maxRetries}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`relative w-full ${raleway.className} ${className}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-full min-h-[420px] flex items-center justify-center">
          <div className="text-center text-red-600" role="alert">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto mb-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="mb-2 font-medium">Error loading initiatives</p>
            <p className="text-sm text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => fetchData()}
              disabled={loading}
              className="px-4 py-2 bg-red-100 hover:bg-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              {loading ? 'Retrying...' : 'Try Again'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (initiatives.length === 0) {
    return (
      <div className={`relative w-full ${raleway.className} ${className}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-full min-h-[420px] flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>No initiatives available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${raleway.className} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Initiatives carousel"
      aria-live="polite"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.id}
              className="w-full flex-shrink-0 min-h-[420px]"
              aria-hidden={index !== currentIndex}
            >
              <div className="grid lg:grid-cols-5 h-full">
                {/* Image Section */}
                <div className="relative order-2 lg:order-1 lg:col-span-2 h-full flex items-center justify-center bg-white">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover rounded-bl-2xl rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none"
                    onError={handleImageError}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-10 xl:p-12 flex flex-col justify-center order-1 lg:order-2 lg:col-span-3 h-full bg-gradient-to-br from-white to-gray-50">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE601] to-yellow-400 text-[#3A3A3A] text-xs font-bold rounded-full shadow-md">
                      {initiative.category}
                    </span>
                    <time 
                      className="text-sm text-gray-500 font-medium"
                      dateTime={initiative.date}
                    >
                      {formatDate(initiative.date)}
                    </time>
                  </div>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#3A3A3A] mb-4 leading-snug">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 font-light max-w-2xl line-clamp-4">
                    {initiative.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto">
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
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-4 mt-6" role="tablist" aria-label="Carousel navigation">
        {initiatives.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3A3A3A] focus:ring-offset-2 ${
              index === currentIndex
                ? "bg-[#3A3A3A] scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1} of ${initiatives.length}`}
            role="tab"
            aria-selected={index === currentIndex}
            tabIndex={index === currentIndex ? 0 : -1}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-5 bg-gray-200 rounded-full h-1.5 overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-[#FFE601] to-yellow-400 transition-all duration-700 ease-out shadow-sm"
          style={{
            width: `${((currentIndex + 1) / initiatives.length) * 100}%`,
          }}
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={initiatives.length}
          aria-label={`Slide ${currentIndex + 1} of ${initiatives.length}`}
        />
      </div>
    </div>
  );
}