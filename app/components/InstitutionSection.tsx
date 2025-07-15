"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import { useRouter } from "next/navigation";

import localFont from "next/font/local";
const bigwhale = localFont({
  src: "Bigwhale.otf",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

// New interface for metrics
interface MetricItem {
  label: string;
  value: string;
  icon?: string;
}

interface InstitutionCardProps {
  title: string;
  subtitle: string;
  isLeft?: boolean;
  imageSrc: string;
  slug?: string;
  index?: number;
  isVisible?: boolean;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({
  title,
  subtitle,
  imageSrc,
  slug = "shks",
  index = 0,
  isVisible = false,
}) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  // Separate the title for styling - handles "Sree Narayana" differently from the rest
  const formatTitleParts = (text: string) => {
    const parts = text.split(" ");
    if (parts.length >= 3) {
      return {
        firstPart: `${parts[0]} ${parts[1]}`,
        restPart: parts.slice(2).join(" "),
      };
    }
    return { firstPart: text, restPart: "" };
  };

  const { firstPart, restPart } = formatTitleParts(title);

  // Handle the arrow click
  const handleArrowClick = () => {
    router.push(`/institutions/${slug}`);
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-white hover:bg-[#FFE601] rounded-2xl w-full overflow-hidden shadow-md transition-all duration-300 ease-in-out group h-auto sm:h-56 opacity-0"
      style={{
        animation: isVisible
          ? `slideInUp 0.8s ease-out ${index * 0.2}s forwards`
          : "none",
        transform: "translateY(8px)",
      }}
    >
      {/* For mobile, stack image on top of content */}
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image container with hover effect */}
        <div
          className="relative transition-all duration-300 ease-in-out sm:w-2/5 group-hover:sm:w-1/5"
          style={{
            height: "100%",
            minHeight: "224px",
          }}
        >
          <Image
            src={imageSrc}
            alt={`${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>

        {/* Content container */}
        <div className="flex flex-col justify-center py-6 px-6 pb-16 transition-all duration-300 sm:w-3/5 group-hover:sm:w-4/5">
          <div>
            <h3
              className={`transition-all duration-300 group-hover:text-[#333] ${bigwhale.className}`}
            >
              <span
                className="block font-normal capitalize leading-tight tracking-tight"
                style={{ fontSize: "36px" }}
              >
                {firstPart}
              </span>
              {restPart && (
                <span
                  className="block font-normal uppercase leading-tight tracking-tight"
                  style={{ fontSize: "36px" }}
                >
                  {restPart}
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-800 leading-tight mt-2 transition-all duration-300 group-hover:text-[#333]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Arrow button - at bottom of content area */}
      <div className="absolute left-auto right-6 bottom-6 z-10">
        <div
          className="w-10 h-10 bg-white border border-gray-800 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#FFE601] group-hover:border-[#333] cursor-pointer"
          onClick={handleArrowClick}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

// New Metrics Component
const MetricsSection: React.FC<{ 
  isVisible: boolean; 
  isMobile: boolean; 
}> = ({ isVisible, isMobile }) => {
  const [counters, setCounters] = useState({
    students: 0,
    faculty: 0,
    routes: 0,
    experience: 0,
  });

  const finalValues = {
    students: 15000,
    faculty: 850,
    routes: 120,
    experience: 25,
  };

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    const countersInterval = setInterval(() => {
      setCounters(prev => ({
        students: Math.min(prev.students + finalValues.students / steps, finalValues.students),
        faculty: Math.min(prev.faculty + finalValues.faculty / steps, finalValues.faculty),
        routes: Math.min(prev.routes + finalValues.routes / steps, finalValues.routes),
        experience: Math.min(prev.experience + finalValues.experience / steps, finalValues.experience),
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(countersInterval);
      setCounters(finalValues);
    }, duration);

    return () => {
      clearInterval(countersInterval);
      clearTimeout(timeout);
    };
  }, [isVisible]);

  const metrics: MetricItem[] = [
    {
      label: "Total Students",
      value: Math.floor(counters.students).toLocaleString() + "+",
      icon: "👥",
    },
    {
      label: "Faculty Members",
      value: Math.floor(counters.faculty).toLocaleString() + "+",
      icon: "👨‍🏫",
    },
    {
      label: "Transport Routes",
      value: Math.floor(counters.routes).toLocaleString() + "+",
      icon: "🚌",
    },
    {
      label: "Years of Excellence",
      value: Math.floor(counters.experience).toLocaleString() + "+",
      icon: "🏆",
    },
  ];

  return (
    <div
      className={`w-full ${isMobile ? 'px-4 py-8' : 'px-20 py-16'} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-all duration-1000 ease-out`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px 24px 0 0',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderBottom: 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className={`grid ${isMobile ? 'grid-cols-2 gap-6' : 'grid-cols-4 gap-12'}`}>
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="text-center group"
            style={{
              animation: isVisible 
                ? `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`
                : 'none',
              opacity: 0,
            }}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div
                className={`text-3xl ${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-gray-800 ${unbounded.className}`}
                style={{
                  background: 'linear-gradient(135deg, #333 0%, #666 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {metric.value}
              </div>
              <div className={`text-sm ${isMobile ? 'text-xs' : 'text-base'} text-gray-600 font-medium tracking-wide uppercase`}>
                {metric.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface InstitutionsSectionProps {
  className?: string;
  id?: string;
}

const InstitutionsSection: React.FC<InstitutionsSectionProps> = ({
  className = "",
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const treeContainerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [treeVisible, setTreeVisible] = useState(false);
  const [metricsVisible, setMetricsVisible] = useState(false);

  // Institution data with slug added
  const leftInstitutions = [
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Vadakkevila, Kollam (Affiliated to CBSE)",
      imageSrc: "/tree/1.png",
      slug: "snps",
    },
    {
      title: "SREE NARAYANA INSTITUTE OF TECHNOLOGY",
      subtitle: "(Affiliated to the University of Kerala)",
      imageSrc: "/tree/2.png",
      slug: "snit",
    },
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Vilapuram, Chathannoor (Affiliated to CBSE)",
      imageSrc: "/tree/3.png",
      slug: "snpsc",
    },
    {
      title: "KIDS' INTERNATIONAL",
      subtitle:"Kadappakada,Kollam(Affiliated to CBSE)",
      imageSrc: "/tree/4.png",
      slug: "shks",
    },
  ];

  const rightInstitutions = [
    {
      title: "SREE NARAYANA COLLEGE OF TECHNOLOGY",
      subtitle: "(Affiliated to the University of Kerala)",
      imageSrc: "/tree/5.png",
      slug: "snct",
    },
    {
      title: "SREE NARAYANA PUBLIC SCHOOL",
      subtitle: "Kizhavoor, Mukhathala (Affiliated to CBSE)",
      imageSrc: "/tree/6.png",
      slug: "snpsk",
    },
    {
      title: "SREE NARAYANA INSTITUTE OF AYURVEDA STUDIES",
      subtitle:
        "Puthoor, Kottarakkara (Affiliated to the Kerala University of Health Sciences)",
      imageSrc: "/tree/7.png",
      slug: "snas",
    },
  ];

  // Combine all institutions for mobile view
  const allInstitutions = [...leftInstitutions, ...rightInstitutions];

  // State to track screen width
  const [isMobile, setIsMobile] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setTitleVisible(true);
          }
          if (entry.target === lineRef.current && entry.isIntersecting) {
            setTimeout(() => setLineVisible(true), 300);
          }
          if (entry.target === treeRef.current && entry.isIntersecting) {
            setTimeout(() => setTreeVisible(true), 600);
          }
          if (entry.target === metricsRef.current && entry.isIntersecting) {
            setTimeout(() => setMetricsVisible(true), 200);
          }
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (lineRef.current) observer.observe(lineRef.current);
    if (treeRef.current) observer.observe(treeRef.current);
    if (metricsRef.current) observer.observe(metricsRef.current);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

  // Effect to check screen size - Updated breakpoint logic
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspectRatio = width / height;

        // Calculate if cards would overflow
        const cardWidth = 500;
        const connectorWidth = 50;
        const totalWidth = (cardWidth + connectorWidth) * 2;
        const wouldOverflow = width < totalWidth + 100;

        setIsMobile(width <= 967 || wouldOverflow || aspectRatio < 0.8);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  // Define constants for positioning
  const cardHeight = 224;
  const cardSpacing = 85;
  const leftStartY = 80; // Reduced from 249
  const rightStartY = 163; // Reduced from 332
  const verticalLineTop = 0; // Reduced from 170

  // Calculate exactly how far the vertical line should extend
  const lastLeftCardCenter =
    leftStartY +
    (leftInstitutions.length - 1) * (cardHeight + cardSpacing) +
    cardHeight / 2;
  const lastRightCardCenter =
    rightStartY +
    (rightInstitutions.length - 1) * (cardHeight + cardSpacing) +
    cardHeight / 2;
  const lastConnectorY = Math.max(lastLeftCardCenter, lastRightCardCenter);
  const verticalLineHeight = lastConnectorY - verticalLineTop + 5;

  // Generate connector positions for all cards
  const leftConnectors = leftInstitutions.map((_, index) => {
    return leftStartY + index * (cardHeight + cardSpacing) + cardHeight / 2;
  });

  const rightConnectors = rightInstitutions.map((_, index) => {
    return rightStartY + index * (cardHeight + cardSpacing) + cardHeight / 2;
  });

  const connectorWidth = 50;

  // Calculate tree container height
  const treeContainerHeight = verticalLineHeight + 200; // Extra padding

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(-8px);
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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-title {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animate-line {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-tree-vertical {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-connector {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      <div
        ref={sectionRef}
        id={id}
        className={`relative w-full bg-gradient-to-br from-[#FFBF01] to-[#FFEE00] ${className}`}
      >
        {isMobile ? (
          // Mobile Layout - Single Column
          <div className="px-4 py-16">
            {/* Metrics Section */}
            <div ref={metricsRef} className="mb-12">
              <MetricsSection isVisible={metricsVisible} isMobile={isMobile} />
            </div>

            {/* Title */}
            <h2
              ref={titleRef}
              className={`text-4xl sm:text-6xl font-normal text-gray-800 text-center mx-auto mb-10 opacity-0 ${
                unbounded.className
              } ${titleVisible ? "animate-title" : ""}`}
              style={{ letterSpacing: "-0.06em" }}
            >
              OUR INSTITUTIONS
            </h2>

            {/* Line under title */}
            <div
              ref={lineRef}
              className={`mx-auto mb-12 opacity-0 ${
                lineVisible ? "animate-line" : ""
              }`}
              style={{
                height: "5px",
                maxWidth: "300px",
                backgroundColor: "#3A3A3A",
              }}
            ></div>

            {/* Single column of institutions */}
            <div className="space-y-6">
              {allInstitutions.map((institution, index) => (
                <InstitutionCard
                  key={`mobile-${index}`}
                  title={institution.title}
                  subtitle={institution.subtitle}
                  imageSrc={institution.imageSrc}
                  slug={institution.slug}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Layout - Flow Structure
          <div className="flex flex-col">
            {/* Metrics Section - Desktop */}
            <div ref={metricsRef} className="w-full">
              <MetricsSection isVisible={metricsVisible} isMobile={isMobile} />
            </div>

            {/* Title */}
            <div className="w-full py-8">
              <h2
                ref={titleRef}
                className={`text-6xl font-normal text-gray-800 text-center mx-auto opacity-0 ${
                  unbounded.className
                } ${titleVisible ? "animate-title" : ""}`}
                style={{ letterSpacing: "-0.06em" }}
              >
                OUR INSTITUTIONS
              </h2>
            </div>

            {/* Horizontal line under title */}
            <div className="w-full flex justify-center pb-8">
              <div
                ref={lineRef}
                className={`opacity-0 ${
                  lineVisible ? "animate-line" : ""
                }`}
                style={{
                  height: "5px",
                  width: "610px",
                  backgroundColor: "#3A3A3A",
                }}
              ></div>
            </div>

            {/* Tree Container */}
            <div
              ref={treeContainerRef}
              className="relative w-full flex-1"
              style={{ minHeight: `${treeContainerHeight}px` }}
            >
              {/* Vertical line - central spine */}
              <div
                ref={treeRef}
                className={`absolute opacity-0 ${
                  treeVisible ? "animate-tree-vertical" : ""
                }`}
                style={{
                  width: "5px",
                  height: `${verticalLineHeight}px`,
                  backgroundColor: "#3A3A3A",
                  left: "50%",
                  marginLeft: "-2.5px",
                  top: `${verticalLineTop}px`,
                }}
              >
                {/* Left side connectors */}
                {leftConnectors.map((connectorY, index) => (
                  <div
                    key={`left-connector-${index}`}
                    className={`absolute h-[5px] bg-[#3A3A3A] opacity-0 ${
                      treeVisible ? "animate-connector" : ""
                    }`}
                    style={{
                      right: "2.5px",
                      top: `${connectorY - verticalLineTop}px`,
                      width: `${connectorWidth}px`,
                      animationDelay: `${0.8 + index * 0.1}s`,
                    }}
                  ></div>
                ))}

                {/* Right side connectors */}
                {rightConnectors.map((connectorY, index) => (
                  <div
                    key={`right-connector-${index}`}
                    className={`absolute h-[5px] bg-[#3A3A3A] opacity-0 ${
                      treeVisible ? "animate-connector" : ""
                    }`}
                    style={{
                      left: "2.5px",
                      top: `${connectorY - verticalLineTop}px`,
                      width: `${connectorWidth}px`,
                      animationDelay: `${0.8 + index * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Left side institutions */}
              <div
                className="absolute"
                style={{
                  left: `calc(50% - ${connectorWidth}px - 500px)`,
                  top: `${leftStartY}px`,
                  width: "500px",
                }}
              >
                <div className="space-y-[85px]">
                  {leftInstitutions.map((institution, index) => (
                    <div className="relative" key={`left-${index}`}>
                      <InstitutionCard
                        title={institution.title}
                        subtitle={institution.subtitle}
                        isLeft={true}
                        imageSrc={institution.imageSrc}
                        slug={institution.slug}
                        index={index}
                        isVisible={treeVisible}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side institutions */}
              <div
                className="absolute"
                style={{
                  right: `calc(50% - ${connectorWidth}px - 500px)`,
                  top: `${rightStartY}px`,
                  width: "500px",
                }}
              >
                <div className="space-y-[85px]">
                  {rightInstitutions.map((institution, index) => (
                    <div className="relative" key={`right-${index}`}>
                      <InstitutionCard
                        title={institution.title}
                        subtitle={institution.subtitle}
                        isLeft={false}
                        imageSrc={institution.imageSrc}
                        slug={institution.slug}
                        index={index + leftInstitutions.length}
                        isVisible={treeVisible}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InstitutionsSection;

// Types for the entire component
export type { InstitutionCardProps, InstitutionsSectionProps };