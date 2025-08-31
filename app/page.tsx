"use client";
// import Image from "next/image";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import MissionSection from "./components/MissionSection";
import FoundersSection from "./components/FounderSection";
import { Raleway } from "next/font/google";
import OfficeSection from "./components/OfficeSection";
import OfficeBearers from "./components/OfficeBearers";
import InstitutionsSection from "./components/InstitutionSection";
import NewsAndGallerySection from "./components/NewsAndGallerySection";
import Footer from "./components/Footer";
import FoundingExecom from "./components/FoundingExecom";
import ContactSection from "./components/ContactSection";
import InitiativesCarousel from "./components/InitiativesCarousel"; // Add this import

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Home() {
  // Add smooth scrolling styles and snap behavior on component mount
  useEffect(() => {
    // Inject CSS styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      html {
        scroll-behavior: smooth;
      }

      /* Only apply snap to initiatives section when it's close to viewport */
      #our-initiatives {
        scroll-snap-align: start;
        scroll-margin-top: 80px;
      }

      /* Enable snap container only when scrolling near initiatives */
      .snap-container {
        scroll-snap-type: y proximity;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }

      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out 0.2s forwards;
        opacity: 0;
      }

      .animate-slide-up {
        animation: slideUp 1.2s ease-out 0.4s forwards;
        opacity: 0;
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
        
        #our-initiatives {
          scroll-snap-align: none;
        }

        .snap-container {
          scroll-snap-type: none;
        }
        
        .animate-fade-in,
        .animate-fade-in-up,
        .animate-slide-up {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
      }

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #FFE601, #FFDD78);
        border-radius: 4px;
        transition: background 0.3s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #FFBF01, #FFE601);
      }
    `;
    
    document.head.appendChild(styleElement);

    // Add scroll listener for smart snap behavior
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const initiativesSection = document.getElementById('our-initiatives');
          if (initiativesSection) {
            const rect = initiativesSection.getBoundingClientRect();
            const isNear = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
            
            // Enable snap container when initiatives section is near
            if (isNear) {
              document.body.classList.add('snap-container');
            } else {
              document.body.classList.remove('snap-container');
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      document.head.removeChild(styleElement);
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('snap-container');
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <br />
      <br />
      {/* Mission Section */}
      <MissionSection />
      <br />
      <br />
      {/* Initiatives Section with smart snap behavior */}
      <div
        id="our-initiatives"
        className={`w-full py-8 sm:py-12 bg-radial-[at_25%_25%] from-[#FFBF01] to-[#FFDD78] ${raleway.className}`}
      >
        <div
          className="px-4 sm:px-6"
          style={{
            marginLeft: "clamp(16px, 10vw, 151px)",
            marginRight: "clamp(16px, 4vw, 59px)",
          }}
        >
          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in">
              Our Initiatives
            </h2>

            <div className="space-y-4 font-light text-[#3A3A3A] mb-8 text-justify animate-fade-in-up">
              <p className="text-sm sm:text-base">
                Founded in 1986 with a vision that transcends boundaries, the Sree Narayana Educational Society, Kollam emerged as a beacon of hope for quality education. Our founding fathers envisioned creating opportunities that would illuminate the minds of young learners across Kollam and its neighboring communities, fostering excellence and nurturing dreams.
              </p>

              <p className="text-sm sm:text-base">
                The spark of this transformative idea was ignited by Prof. K Sasikumar, whose unwavering dedication brought together a fellowship of visionary minds from the Sree Narayana Samskarika Samithi, Kollam. United by a shared purpose, these passionate educators established a Charitable Society under the Travancore, Cochin, Literary, Scientific and Charitable Societies Registration Act 1955, bearing the registration number Q790/86.
              </p>

              <p className="text-sm sm:text-base">
                At the heart of our institution beats the profound wisdom of Sree Narayana Guru: &ldquo;One Caste, One Religion, One God for man&rdquo; — a philosophy that continues to guide our every endeavor and shapes our commitment to inclusive education.
                <br />
                Our founding leadership was graced by Prof. S Sivaprasad as President, Prof K Sasikumar as Secretary, and Mr. M L Andharan as Treasurer. Together with a dedicated committee of 21 distinguished members, they laid the cornerstone of our educational journey. Through generous contributions of Rs.1,000, Rs.3,000, and Rs.5,000, committed individuals became pillars of our mission. The Sree Narayana Samskarika Samithi, Kollam joined as our esteemed institutional member, contributing five valuable positions to our Executive Committee. Our inaugural milestone was the establishment of a school affiliated with the Central Board of Secondary Education — the first step in our continuing quest for educational excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width carousel section with entrance animation */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-8 mb-8 animate-slide-up">
          <div className="max-w-7xl mx-auto">
            <InitiativesCarousel />
          </div>
        </div>
      </div>
      <br />
      <br />
      <FoundersSection />
      <FoundingExecom />
      <br />
      <br />
      <OfficeBearers />
      <OfficeSection />
      <InstitutionsSection id="institutions" />
      <br />
      <br />
      <NewsAndGallerySection />
      <br />
      <br />
      <ContactSection />
      <Footer />
    </>
  );
}