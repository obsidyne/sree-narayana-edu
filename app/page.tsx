import Image from "next/image";
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
  return (
    <>
      <Navbar />
      <HeroSection />
      <br />
      <br />
      <MissionSection />
      <br />
      <br />
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Our Initiatives
            </h2>

            <div className="space-y-4 font-light text-[#3A3A3A] mb-8 text-justify">
              <p className="text-sm sm:text-base">
                Sree Narayana Educational Society, Kollam was established in the
                year 1986. The founding fathers envisaged quality education to
                the youth of Kollam and surrounding places.
              </p>

              <p className="text-sm sm:text-base">
                The idea was introduced by Prof. K Sasikumar and he was able to
                bring like minded persons associated with the Sree Narayana
                Samskariка Samithi, Kollam to the organization. A Charitable
                Society was registered under the Travancore, Cochin, Literary,
                Scientific and Charitable Societies Registration Act 1955 with
                Reg No.Q790/86.
              </p>

              <p className="text-sm sm:text-base">
                The teaching of Sree Narayana Guru viz One Caste, One Religion,
                One God for man is the guiding spirit of this organization.
                <br />
                Prof.S Sivaprasad was designated as President, Prof K Sasikumar
                as Secretary and
                <br /> Mr. M L Andharan as Treasurer. The Committee consisted of
                21 members. Members were enrolled by membership fee collected in
                the following denominations: Rs.1000, Rs.3000 and Rs.5000/-. The
                Sree Narayana Samskariка Samithi, Kollam was enrolled as an
                institutional member with 5 membership in the Executive
                Committee. The first venture was to establish a School with
                affiliation to the Central Board of Secondary Education .
              </p>
            </div>
          </div>
        </div>
        
        {/* Full-width carousel section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-8 mb-8">
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
      {/* Add the Contact Section here - just before Footer */}
      <ContactSection />
      <Footer />
      
    </>
  );
  
}