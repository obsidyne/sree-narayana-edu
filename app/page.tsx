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
        className={`w-full py-8 sm:py-12 bg-gradient-to-br from-[#FFBF01] to-[#FFEE00] ${raleway.className}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Our Initiatives
            </h2>

            <div className="space-y-4 font-light text-[#3A3A3A]">
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

            <div className="flex mt-8 mb-8">
              <div className="relative w-[582px] h-[328px] rounded-xl overflow-hidden max-w-full">
                <Image
                  src="/students.jpg"
                  alt="Students"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 582px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FoundersSection />
      <FoundingExecom />
      <OfficeSection />
      <OfficeBearers />
      <InstitutionsSection id="institutions" />
      <br />
      <br />
      <NewsAndGallerySection />
      <br />
      <br />
      <Footer />
    </>
  );
}
