"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/mdkzpnne", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "" }); // Reset form
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-4"
      style={{
        background:
          "conic-gradient(from 90deg at 7.16% 0%, #FFD001 0deg, #C69500 360deg)",
      }}
    >
      {/* Responsive container with max width for large screens */}
      <div className="w-full max-w-[1445px] mx-auto lg:h-[624.04px]">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left side - Form */}
          <div className="w-full lg:w-[851px] flex flex-col justify-center p-4 sm:p-6 lg:pl-[103px]">
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${raleway.className}`}
            >
              <span className="text-black">Get in </span>
              <span className="text-white">Touch</span>
            </h1>
            <p
              className={`text-black mb-8 max-w-prose font-semibold ${raleway.className}`}
            >
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  required
                  disabled={isSubmitting}
                  className="w-full sm:w-[400px] lg:w-[464px] p-4 border border-gray-200 rounded disabled:opacity-50"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  disabled={isSubmitting}
                  className="w-full sm:w-[400px] lg:w-[464px] p-4 border border-gray-200 rounded disabled:opacity-50"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number *"
                  required
                  disabled={isSubmitting}
                  className="w-full sm:w-[400px] lg:w-[464px] p-4 border border-gray-200 rounded disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-[400px] lg:w-[464px] bg-white hover:bg-gray-100 text-black font-bold py-4 px-4 rounded transition duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed ${raleway.className}`}
              >
                {isSubmitting ? "SENDING..." : "SEND"}
              </button>
            </form>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row justify-between mt-12 gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${raleway.className}`}>
                    PHONE
                  </h3>
                  <p className={`text-sm ${raleway.className}`}>03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${raleway.className}`}>
                    FAX
                  </h3>
                  <p className={`text-sm ${raleway.className}`}>03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${raleway.className}`}>
                    EMAIL
                  </h3>
                  <p className={`text-sm ${raleway.className}`}>
                    info@marcc.com.au
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Map with responsive dimensions */}
          <div className="w-full lg:w-[594px] flex items-center justify-center lg:justify-start py-4">
            <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[594px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[460.04px] bg-white rounded-md overflow-hidden">
              <div className="w-full h-full relative">
                {/* Map image with responsive sizing */}
                <Image
                  src="/snct.png"
                  alt="Location Map"
                  fill
                  style={{ objectFit: "cover" }}
                  className="grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
