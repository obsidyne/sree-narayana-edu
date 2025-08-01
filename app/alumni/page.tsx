"use client";
// app/alumni/page.tsx
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function AlumniPage() {
  const featuredAlumni = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "1995",
      position: "Chief Medical Officer",
      company: "Apollo Hospitals",
      image: "/alumni-1.jpg", // Add actual images
      achievement: "Leading healthcare innovations in Kerala"
    },
    {
      name: "Prof. Meera Nair",
      batch: "1998",
      position: "Professor & Researcher",
      company: "IIT Madras",
      image: "/alumni-2.jpg",
      achievement: "Published 50+ research papers in biotechnology"
    },
    {
      name: "Arjun Menon",
      batch: "2005",
      position: "Senior Software Engineer",
      company: "Google",
      image: "/alumni-3.jpg",
      achievement: "Contributing to AI/ML projects globally"
    },
    {
      name: "Dr. Priya Nandakumar",
      batch: "2002",
      position: "Ayurvedic Physician",
      company: "Kerala Govt. Health Dept.",
      image: "/alumni-4.jpg",
      achievement: "Promoting traditional medicine in rural areas"
    }
  ];

  const alumniStats = [
    { number: "500+", label: "Total Alumni" },
    { number: "25+", label: "Years of Excellence" },
    { number: "50+", label: "Countries Worldwide" },
    { number: "100+", label: "Success Stories" }
  ];

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

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {featuredAlumni.map((alumni, index) => (
                <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center">
                        {/* Placeholder for alumni photo */}
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFE601] rounded-full flex items-center justify-center">
                          <span className="text-[#3A3A3A] font-bold text-lg sm:text-xl">
                            {alumni.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#3A3A3A] mb-1">
                        {alumni.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Batch of {alumni.batch}</p>
                      <p className="text-sm sm:text-base font-medium text-[#3A3A3A] mb-1">
                        {alumni.position}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">{alumni.company}</p>
                      <p className="text-sm text-gray-700 font-light leading-relaxed">
                        {alumni.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                We'd love to hear about your achievements and journey. Your story could inspire 
                current students and fellow alumni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#FFE601] hover:bg-yellow-500 text-[#3A3A3A] font-semibold rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
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
      <Footer />
    </>
  );
}