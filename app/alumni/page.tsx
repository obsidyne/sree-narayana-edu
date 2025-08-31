"use client";
// app/alumni/page.tsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Alumni interfaces
interface AlumniPhoto {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
  url: string;
  mime: string;
  size: number;
}

interface AlumniData {
  id: number;
  Name: string;
  batch: string;
  title: string;
  company: string;
  description: string;
  photo?: AlumniPhoto;
}

interface AlumniItem {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  alumni: AlumniData;
}

interface AlumniApiResponse {
  data: AlumniItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export default function AlumniPage() {
  // State for API data
  const [alumniData, setAlumniData] = useState<AlumniData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Contact popup state
  const [showContactPopup, setShowContactPopup] = useState(false);

  // Fetch alumni data from API
  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          "https://thankful-novelty-5d39f22046.strapiapp.com/api/alumnis?populate[alumni][populate]=*"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: AlumniApiResponse = await response.json();
        
        console.log("Alumni API Response:", data); // Debug log
        
        // Transform the nested data structure
        const transformedAlumni = data.data.map(item => item.alumni);
        setAlumniData(transformedAlumni);
        
        if (transformedAlumni.length === 0) {
          console.warn("No alumni data found");
        }
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch alumni data";
        setError(errorMessage);
        console.error("Error fetching alumni data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumniData();
  }, []);

  const alumniStats = [
    { number: "500+", label: "Total Alumni" },
    { number: "25+", label: "Years of Excellence" },
    { number: "50+", label: "Countries Worldwide" },
    { number: "100+", label: "Success Stories" }
  ];

  // Helper function to get initials
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Handle contact popup
  const openContactPopup = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setShowContactPopup(true);
  };

  const closeContactPopup = () => {
    setShowContactPopup(false);
  };

  return (
    <>
      <Navbar />
      <div className={`min-h-screen ${raleway.className}`}>
      {/* Hero Section */}
      <div
        className="w-full py-16 sm:py-24 bg-radial-[at_25%_25%] from-[#FFBF01] to-[#FFDD78]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-5xl"
            style={{
              marginLeft: "clamp(0px, 10vw, 151px)",
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#3A3A3A]">
              Our Alumni
            </h1>
            <div className="space-y-4 font-light text-[#3A3A3A]">
              <p className="text-base sm:text-lg leading-relaxed">
                Our alumni are the pride of our institution, making significant contributions 
                across various fields including healthcare, research, technology, and social service. 
                They continue to embody the values and principles we instilled during their time here.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                From pioneering medical research to leading innovative startups, our graduates 
                are creating positive impact in communities around the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Stats */}
      <div className="w-full py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-5xl"
            style={{
              marginLeft: "clamp(0px, 10vw, 151px)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {alumniStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Alumni */}
      <div className="w-full py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-5xl"
            style={{
              marginLeft: "clamp(0px, 10vw, 151px)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#3A3A3A]">
              Featured Alumni
            </h2>

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 mx-auto mb-2"></div>
                  <p className="text-gray-800">Loading alumni...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="flex items-center justify-center h-64">
                <div className="text-center text-red-600">
                  <p className="mb-2">Error loading alumni:</p>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Alumni Grid */}
            {!loading && !error && (
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                {alumniData.length > 0 ? (
                  alumniData.map((alumni) => (
                    <div key={alumni.id} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start space-x-4 sm:space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            {alumni.photo ? (
                              <img
                                src={alumni.photo.formats?.medium?.url || alumni.photo.formats?.small?.url || alumni.photo.url}
                                alt={alumni.photo.alternativeText || alumni.Name}
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  // Show initials fallback
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFE601] rounded-full flex items-center justify-center"><span class="text-[#3A3A3A] font-bold text-lg sm:text-xl">${getInitials(alumni.Name)}</span></div>`;
                                  }
                                }}
                              />
                            ) : (
                              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFE601] rounded-full flex items-center justify-center">
                                <span className="text-[#3A3A3A] font-bold text-lg sm:text-xl">
                                  {getInitials(alumni.Name)}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-semibold text-[#3A3A3A] mb-1">
                            {alumni.Name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">Batch of {alumni.batch}</p>
                          <p className="text-sm sm:text-base font-medium text-[#3A3A3A] mb-1">
                            {alumni.title}
                          </p>
                          <p className="text-sm text-gray-600 mb-3">{alumni.company}</p>
                          <p className="text-sm text-gray-700 font-light leading-relaxed">
                            {alumni.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center h-64">
                    <p className="text-gray-800">No alumni data found.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Alumni Network Section */}
      <div
        className="w-full py-12 sm:py-16 bg-radial-[at_25%_25%] from-[#FFBF01] to-[#FFDD78]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-5xl"
            style={{
              marginLeft: "clamp(0px, 10vw, 151px)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#3A3A3A]">
              Alumni Network
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#3A3A3A]">
                  Stay Connected
                </h3>
                <div className="space-y-4 font-light text-[#3A3A3A]">
                  <p className="text-sm sm:text-base">
                    Join our alumni network to stay connected with fellow graduates, 
                    share opportunities, and contribute to the growth of our community.
                  </p>
                  <p className="text-sm sm:text-base">
                    Participate in alumni events, mentorship programs, and give back 
                    to current students through your expertise and experience.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#3A3A3A]">
                  How to Join
                </h3>
                <div className="space-y-3 font-light text-[#3A3A3A]">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#3A3A3A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#FFE601] text-xs font-bold">1</span>
                    </div>
                    <p className="text-sm sm:text-base">Register with your graduation details</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#3A3A3A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#FFE601] text-xs font-bold">2</span>
                    </div>
                    <p className="text-sm sm:text-base">Update your current professional information</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#3A3A3A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#FFE601] text-xs font-bold">3</span>
                    </div>
                    <p className="text-sm sm:text-base">Connect with the alumni community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="w-full py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-5xl"
            style={{
              marginLeft: "clamp(0px, 10vw, 151px)",
            }}
          >
            <div className="text-center bg-gray-50 rounded-xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#3A3A3A]">
                Share Your Success Story
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 font-light max-w-2xl mx-auto">
                We&apos;d love to hear about your achievements and journey. Your story could inspire 
                current students and fellow alumni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={(e) => openContactPopup(e)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#FFE601] hover:bg-yellow-500 text-[#3A3A3A] font-semibold rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Get in Touch
                </button>
                <a
                  href="mailto:alumni@organization.org"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#3A3A3A] text-[#3A3A3A] font-semibold rounded-lg hover:bg-[#3A3A3A] hover:text-white transition duration-300"
                >
                  Email Alumni Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* Contact Popup Modal */}
      {showContactPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeContactPopup}
        >
          <div 
            className="relative max-w-md w-full bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeContactPopup}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            
            {/* Header */}
            <div className="bg-[#FFE601] px-6 py-4 rounded-t-lg">
              <h3 className="text-xl font-bold text-[#3A3A3A]">
                Contact Alumni Office
              </h3>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#3A3A3A]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3A3A] mb-1">Email</h4>
                  <a 
                    href="mailto:alumni@organization.org"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    alumni@organization.org
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#3A3A3A]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3A3A] mb-1">Phone</h4>
                  <a 
                    href="tel:+919876543210"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#3A3A3A]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3A3A] mb-1">Address</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Alumni Office<br />
                    Main Building, Ground Floor<br />
                    Your Institution Name<br />
                    Kanayannur, Kerala, India - 682312
                  </p>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#3A3A3A]"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3A3A] mb-1">Office Hours</h4>
                  <p className="text-gray-700 text-sm">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
              <p className="text-sm text-gray-600 text-center">
                We look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}