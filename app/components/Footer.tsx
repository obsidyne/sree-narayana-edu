import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div
      className="relative w-full bg-[#FFE601] shadow-[0px_-1px_38.1px_rgba(0,0,0,0.25)] overflow-hidden"
      style={{ minHeight: "309px" }}
    >
      {/* Main content container */}
      <div
        className="flex flex-col items-center mx-auto px-4 py-8 md:py-10"
        style={{ maxWidth: "787px", gap: "25px" }}
      >
        {/* Organization name */}
        <h2
          className="w-full text-center text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-tight tracking-[-0.01em] text-[#3A3A3A]"
          style={{ fontFamily: "Unbounded, sans-serif" }}
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
            className="text-[14px] leading-[16px] text-[#3A3A3A]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[14px] leading-[16px] text-[#3A3A3A]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            About
          </Link>
          <Link
            href="/founders"
            className="text-[14px] leading-[16px] text-[#3A3A3A]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Founders
          </Link>
          <Link
            href="/execom"
            className="text-[14px] leading-[16px] text-[#3A3A3A]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Execom
          </Link>
          <Link
            href="/news"
            className="text-[14px] leading-[16px] text-[#3A3A3A]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            News
          </Link>
          <Link
            href="/gallery"
            className="text-[14px] leading-[16px] text-[#3A3A3A]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Gallery
          </Link>
        </div>

        {/* Placeholder text - hidden on mobile */}
        <p
          className="w-full text-[14px] font-medium leading-[24px] text-center text-[#3A3A3A] hidden sm:block"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
          pesask vyfisat. Viktiga poddradio har un mad och inde.
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
