"use client";
// components/Navbar.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Navbar() {
  const customStyles = `
    .group:hover .group-hover\\:w-calc-full {
      width: calc(100% - 1.5rem);
    }
  `;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    if (pathname === "/") {
      const initiativesSection = document.getElementById("our-initiatives");
      if (initiativesSection) {
        initiativesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#our-initiatives");
    }
  };

  const handleNewsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    if (pathname === "/") {
      const newsSection = document.getElementById("news-section");
      if (newsSection) {
        newsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#news-section");
    }
  };

  const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    if (pathname === "/") {
      const gallerySection = document.getElementById("gallery-section");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#gallery-section");
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      if (window.location.hash === "#our-initiatives") {
        setTimeout(() => {
          const initiativesSection = document.getElementById("our-initiatives");
          if (initiativesSection) {
            initiativesSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else if (window.location.hash === "#news-section") {
        setTimeout(() => {
          const newsSection = document.getElementById("news-section");
          if (newsSection) {
            newsSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else if (window.location.hash === "#gallery-section") {
        setTimeout(() => {
          const gallerySection = document.getElementById("gallery-section");
          if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <nav
      className={`w-full bg-white border-b border-gray-300 shadow-sm ${raleway.className} font-semibold md:h-[100px] md:flex md:items-center`}
    >
      <style jsx>{customStyles}</style>
      {/* Desktop Navigation */}
      <div className="container mx-auto hidden md:flex items-center justify-between px-4 lg:px-16 h-full">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-gray-600 transition duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE601] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <a
            href="#our-initiatives"
            onClick={handleAboutClick}
            className="text-gray-800 hover:text-gray-600 transition duration-300 relative group cursor-pointer"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE601] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
          <Link
            href="/founders"
            className="text-gray-800 hover:text-gray-600 transition duration-300 relative group"
          >
            Founders
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE601] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Anayurveda Logo"
              width={95}
              height={89.28}
              className="w-[95px] h-[89.28px]"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link
            href="/execom"
            className="text-gray-800 hover:text-gray-600 transition duration-300 relative group"
          >
            Execom
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE601] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <a
            href="#news-section"
            onClick={handleNewsClick}
            className="text-gray-800 hover:text-gray-600 transition duration-300 relative group cursor-pointer"
          >
            News
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE601] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
          <a
            href="#gallery-section"
            onClick={handleGalleryClick}
            className="text-gray-800 hover:text-gray-600 transition duration-300 relative group cursor-pointer"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE601] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full">
        <div className="flex items-center justify-between px-4 py-2">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none transform transition-transform duration-300 ease-in-out"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6 transition-all duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Anayurveda Logo"
                width={95}
                height={89.28}
                className="w-[95px] h-[89.28px]"
              />
            </Link>
          </div>

          <div className="w-6">{/* Empty div for balanced spacing */}</div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out 
            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-2 pt-2 pb-4 bg-white border-t border-gray-200">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded transition-all duration-300 transform hover:translate-x-1 relative group"
            >
              Home
              <span className="absolute bottom-0 left-3 right-3 w-0 h-0.5 bg-[#FFE601] group-hover:w-calc-full transition-all duration-300 ease-in-out"></span>
            </Link>
            <a
              href="#our-initiatives"
              onClick={handleAboutClick}
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded transition-all duration-300 transform hover:translate-x-1 relative group cursor-pointer"
            >
              About
              <span className="absolute bottom-0 left-3 right-3 w-0 h-0.5 bg-[#FFE601] group-hover:w-calc-full transition-all duration-300 ease-in-out"></span>
            </a>
            <Link
              href="/founders"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded transition-all duration-300 transform hover:translate-x-1 relative group"
            >
              Founders
              <span className="absolute bottom-0 left-3 right-3 w-0 h-0.5 bg-[#FFE601] group-hover:w-calc-full transition-all duration-300 ease-in-out"></span>
            </Link>
            <Link
              href="/execom"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded transition-all duration-300 transform hover:translate-x-1 relative group"
            >
              Execom
              <span className="absolute bottom-0 left-3 right-3 w-0 h-0.5 bg-[#FFE601] group-hover:w-calc-full transition-all duration-300 ease-in-out"></span>
            </Link>
            <a
              href="#news-section"
              onClick={handleNewsClick}
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded transition-all duration-300 transform hover:translate-x-1 relative group cursor-pointer"
            >
              News
              <span className="absolute bottom-0 left-3 right-3 w-0 h-0.5 bg-[#FFE601] group-hover:w-calc-full transition-all duration-300 ease-in-out"></span>
            </a>
            <a
              href="#gallery-section"
              onClick={handleGalleryClick}
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded transition-all duration-300 transform hover:translate-x-1 relative group cursor-pointer"
            >
              Gallery
              <span className="absolute bottom-0 left-3 right-3 w-0 h-0.5 bg-[#FFE601] group-hover:w-calc-full transition-all duration-300 ease-in-out"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
