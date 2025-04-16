"use client";
import React from "react";

interface InstitutionCardProps {
  title: string;
  subtitle: string;
  location?: string;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({
  title,
  subtitle,
  location,
}) => {
  return (
    <div className="flex bg-white rounded-lg w-full h-56 overflow-hidden relative">
      <div className="relative w-56 h-full">
        <div className="absolute w-56 h-64 -left-5 top-0 bg-gray-300">
          {/* Placeholder for image */}
        </div>
      </div>
      <div className="flex flex-col justify-center ml-6 w-52">
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-gray-800 leading-tight tracking-tight mb-4">
            {title}
          </h3>
          <p className="text-xs text-gray-800 leading-tight">{subtitle}</p>
        </div>
      </div>
      {/* Circular button outside of the card content, positioned to connect with the lines */}
      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 border border-gray-800 rounded-full flex items-center justify-center">
          <span className="text-gray-800 text-xs">→</span>
        </div>
      </div>
    </div>
  );
};

interface InstitutionsSectionProps {
  className?: string;
}

const InstitutionsSection: React.FC<InstitutionsSectionProps> = ({
  className = "",
}) => {
  return (
    <div
      className="relative w-full py-20 px-8 overflow-hidden"
      style={{ backgroundColor: "#EEDC82", minHeight: "1436px" }}
    >
      {/* Title and horizontal line */}
      <div className="relative text-center mb-24">
        <h2
          className="text-5xl font-normal text-gray-800 tracking-tight mb-8"
          style={{ letterSpacing: "-0.06em" }}
        >
          OUR INSTITUTIONS
        </h2>
        <div
          className="h-1 w-1/2 mx-auto bg-gray-800"
          style={{ height: "5px" }}
        ></div>
      </div>

      {/* Main content with connectors */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line - connects to horizontal line at top */}
        <div
          className="absolute left-1/2 top-0 bottom-0 bg-gray-800"
          style={{ width: "5px" }}
        ></div>

        {/* Layout grid */}
        <div
          className="relative grid grid-cols-2 gap-16"
          style={{ marginTop: "100px" }}
        >
          {/* Left column */}
          <div className="space-y-16">
            <div className="relative">
              <InstitutionCard
                title="SREE NARAYANA PUBLIC SCHOOL"
                subtitle="Vadakkevila, Kollam (Affiliated to CBSE)"
              />
              <div
                className="absolute right-0 top-1/2 w-24 h-1 bg-gray-800"
                style={{ height: "5px", transform: "translateX(100%)" }}
              ></div>
            </div>

            <div className="relative mt-16">
              <InstitutionCard
                title="SREE NARAYANA INSTITUTE OF TECHNOLOGY"
                subtitle="(Affiliated to the University of Kerala)"
              />
              <div
                className="absolute right-0 top-1/2 w-24 h-1 bg-gray-800"
                style={{ height: "5px", transform: "translateX(100%)" }}
              ></div>
            </div>

            <div className="relative mt-16">
              <InstitutionCard
                title="SREE NARAYANA PUBLIC SCHOOL"
                subtitle="Vilapuram, Chathannoor (Affiliated to CBSE)"
              />
              <div
                className="absolute right-0 top-1/2 w-24 h-1 bg-gray-800"
                style={{ height: "5px", transform: "translateX(100%)" }}
              ></div>
            </div>

            <div className="relative mt-16">
              <InstitutionCard
                title="SREE NARAYANA KIDS' SCHOOLS"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              />
              <div
                className="absolute right-0 top-1/2 w-24 h-1 bg-gray-800"
                style={{ height: "5px", transform: "translateX(100%)" }}
              ></div>
            </div>
          </div>

          {/* Right column with vertical offset */}
          <div className="space-y-16 pt-24">
            <div className="relative">
              <InstitutionCard
                title="SREE NARAYANA COLLEGE OF TECHNOLOGY"
                subtitle="(Affiliated to the University of Kerala)"
              />
              <div
                className="absolute left-0 top-1/2 w-24 h-1 bg-gray-800"
                style={{ height: "5px", transform: "translateX(-100%)" }}
              ></div>
            </div>

            <div className="relative mt-16">
              <InstitutionCard
                title="SREE NARAYANA PUBLIC SCHOOL"
                subtitle="Kizhavoor, Mukhathala (Affiliated to CBSE)"
              />
              <div
                className="absolute left-0 top-1/2 w-24 h-1 bg-gray-800"
                style={{ height: "5px", transform: "translateX(-100%)" }}
              ></div>
            </div>

            <div className="relative mt-16">
              <InstitutionCard
                title="SREE NARAYANA INSTITUTE OF AYURVEDA STUDIES"
                subtitle="Puthoor, Kottarakkara (Affiliated to the Kerala University of Health Sciences)"
              />
              <div
                className="absolute left-0 top-1/2 w-24 h-1 bg-gray-800"
                style={{ height: "5px", transform: "translateX(-100%)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionsSection;

// Types for the entire component
export type { InstitutionCardProps, InstitutionsSectionProps };
