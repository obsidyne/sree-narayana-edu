"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Raleway, Unbounded } from "next/font/google";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Footer: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

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

    if (pathname === "/") {
      const gallerySection = document.getElementById("gallery-section");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#gallery-section");
    }
  };

  return (
    <div
      className="relative w-full shadow-[0px_-1px_38.1px_rgba(0,0,0,0.25)] overflow-hidden"
      style={{
        background: "radial-gradient(circle, #FFBF01, #FFEE00)",
        minHeight: "309px",
      }}
    >
      {/* Main content container */}
      <div
        className="flex flex-col items-center mx-auto px-4 py-8 md:py-10"
        style={{ maxWidth: "787px", gap: "25px" }}
      >
        {/* Organization name */}
        <h2
          className={`${unbounded.className} w-full text-center text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-tight tracking-[-0.01em] text-[#3A3A3A]`}
        >
          SREE NARAYANA
          <br />
          EDUCATIONAL SOCEITY
        </h2>

        {/* Navigation links */}
        <div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8"
          style={{ maxWidth: "478px" }}
        >
          <Link
            href="/"
            className={`${raleway.className} text-[14px] leading-[16px] text-[#3A3A3A]`}
          >
            Home
          </Link>
          <a
            href="#our-initiatives"
            onClick={handleAboutClick}
            className={`${raleway.className} text-[14px] leading-[16px] text-[#3A3A3A] cursor-pointer`}
          >
            About
          </a>
          <Link
            href="/founders"
            className={`${raleway.className} text-[14px] leading-[16px] text-[#3A3A3A]`}
          >
            Founders
          </Link>
          <Link
            href="/execom"
            className={`${raleway.className} text-[14px] leading-[16px] text-[#3A3A3A]`}
          >
            Execom
          </Link>
          <a
            href="#news-section"
            onClick={handleNewsClick}
            className={`${raleway.className} text-[14px] leading-[16px] text-[#3A3A3A] cursor-pointer`}
          >
            News
          </a>
          <a
            href="#gallery-section"
            onClick={handleGalleryClick}
            className={`${raleway.className} text-[14px] leading-[16px] text-[#3A3A3A] cursor-pointer`}
          >
            Gallery
          </a>
        </div>

        {/* Placeholder text - hidden on mobile */}
        <p
          className={`${raleway.className} w-full text-[14px] font-medium leading-[24px] text-center text-[#3A3A3A] hidden sm:block`}
        >
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR <br />
          <a
            href="https://www.obsidyne.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            Designed and Developed By Obsidyne
          </a>
        </p>
      </div>

      {/* Black curved sections that appear correctly on mobile */}
      <div className="hidden sm:block">
        <div
          className="absolute bg-[#3A3A3A] rounded-tr-[100px]"
          style={{
            width: "32%",
            maxWidth: "587px",
            height: "52px",
            left: "0px",
            bottom: "0px",
          }}
        ></div>

        <div
          className="absolute bg-[#3A3A3A]"
          style={{
            width: "32%",
            maxWidth: "587px",
            height: "52px",
            right: "0",
            bottom: "0px",
            borderTopLeftRadius: "100px",
          }}
        ></div>
      </div>

      {/* Mobile-specific dark sections with more space for icons */}
      <div className="block sm:hidden">
        <div
          className="absolute bg-[#3A3A3A] rounded-tr-[100px]"
          style={{ width: "15%", height: "52px", left: "0px", bottom: "0px" }}
        ></div>

        <div
          className="absolute bg-[#3A3A3A]"
          style={{
            width: "15%",
            height: "52px",
            right: "0",
            bottom: "0px",
            borderTopLeftRadius: "100px",
          }}
        ></div>
      </div>

      {/* Social media icons - always visible with more space on smaller screens */}
      <div
        className="absolute z-10 bottom-3"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="flex justify-between items-center sm:w-[160px] w-[200px]">
          {/* Facebook */}
          <a href="#" className="text-[#3A3A3A] hover:text-gray-600">
            <FaFacebookF size={16} />
          </a>

          {/* Twitter */}
          <a href="#" className="text-[#3A3A3A] hover:text-gray-600">
            <FaTwitter size={16} />
          </a>

          {/* LinkedIn */}
          <a href="#" className="text-[#3A3A3A] hover:text-gray-600">
            <FaLinkedinIn size={16} />
          </a>

          {/* Instagram */}
          <a href="#" className="text-[#3A3A3A] hover:text-gray-600">
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
