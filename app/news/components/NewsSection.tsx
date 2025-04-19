import React from "react";
import Image from "next/image";
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
interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  images?: string[];
}

interface NewsSectionProps {
  news?: NewsItem[];
  backgroundImage?: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({
  news,
  backgroundImage = "/news.jpg",
}) => {
  // Default news content if none provided
  const defaultNews: NewsItem = {
    id: 1,
    date: "5 April 2025",
    title: "LATEST NEWS IS HERE\nLISTEN UP FOR UPDATES",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Loremipsum laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: ["/gal.jpg", "/gal.jpg", "/gal.jpg"],
  };

  // Use provided news or default
  const latestNews = news && news.length > 0 ? news[0] : defaultNews;

  return (
    <div className="w-full">
      {/* Top background banner */}
      <div className="relative w-full h-96 z-0">
        <Image
          src={backgroundImage}
          alt="News section background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Parent container with relative positioning */}
      <div className="w-full relative">
        {/* Card that's positioned relatively to the top of parent */}
        <div className="px-4 relative z-10" style={{ marginTop: "-128px" }}>
          <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 sm:px-8 pt-8 pb-8">
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
                      <Image
                        src={img}
                        alt={`News image ${idx + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  ))}
                </div>
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
