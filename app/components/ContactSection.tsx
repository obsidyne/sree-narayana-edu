"use client";
// components/ContactSection.tsx
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function ContactSection() {
  return (
    <div
      id="contact-section"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#3A3A3A]">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3A3A3A] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FFE601]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#3A3A3A] mb-1 text-sm sm:text-base">Address</h3>
                <p className="text-[#3A3A3A] text-sm font-light">
                  Vadakkevila, Kollam <br />
                  India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3A3A3A] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FFE601]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#3A3A3A] mb-1 text-sm sm:text-base">Email</h3>
                <a 
                  href="mailto:contact@organization.org" 
                  className="text-[#3A3A3A] text-sm font-light hover:text-gray-700 transition duration-200"
                >
                  contact@organization.org
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#3A3A3A] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FFE601]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#3A3A3A] mb-1 text-sm sm:text-base">Phone</h3>
                <a 
                  href="tel:+919876543210" 
                  className="text-[#3A3A3A] text-sm font-light hover:text-gray-700 transition duration-200"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h3 className="font-semibold text-[#3A3A3A] mb-4 text-sm sm:text-base">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-[#3A3A3A] hover:bg-gray-700 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-[#FFE601] group-hover:text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              
              <a
                href="#"
                className="w-8 h-8 bg-[#3A3A3A] hover:bg-gray-700 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-[#FFE601] group-hover:text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-[#3A3A3A] hover:bg-gray-700 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-[#FFE601] group-hover:text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-[#3A3A3A] hover:bg-gray-700 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-[#FFE601] group-hover:text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.509.8 4.925 2.258 6.992l-.124 4.572 4.685-2.456c2.02 1.134 4.318 1.734 6.69 1.734 6.624 0 11.99-5.367 11.99-11.987C24.528 5.367 19.141.001 12.017.001zM12.017 21.864c-2.107 0-4.154-.555-5.944-1.608l-.426-.252-4.422 2.319.946-3.441-.276-.438c-1.155-1.836-1.764-3.957-1.764-6.157 0-5.407 4.397-9.806 9.803-9.806 2.618 0 5.084 1.021 6.938 2.876 1.854 1.854 2.876 4.32 2.876 6.938-.001 5.408-4.398 9.806-9.804 9.806z"/>
                  <path d="M19.268 15.302c-.295-.147-1.746-.862-2.017-.96-.271-.099-.469-.148-.666.147-.197.295-.765.96-.938 1.157-.172.197-.344.221-.639.074-.295-.147-1.244-.459-2.369-1.462-.876-.781-1.467-1.746-1.639-2.041-.172-.295-.018-.455.129-.602.132-.132.295-.344.442-.516.148-.172.197-.295.295-.492.099-.197.049-.369-.025-.516-.074-.147-.666-1.606-.914-2.201-.242-.579-.487-.5-.666-.51-.172-.008-.369-.01-.566-.01-.197 0-.516.074-.785.369-.27.295-1.03 1.008-1.03 2.459 0 1.451 1.053 2.854 1.201 3.051.148.197 2.084 3.185 5.052 4.467.706.306 1.256.489 1.686.625.708.225 1.354.193 1.864.117.568-.085 1.746-.714 1.992-1.404.246-.69.246-1.281.172-1.404-.074-.123-.271-.197-.566-.344z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}