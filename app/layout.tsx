import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sneskollam.org'),
  title: {
    default: 'Sree Narayana Educational Society, Kollam | Quality Education Network Since 1986',
    template: '%s | Sree Narayana Educational Society'
  },
  description: 'Sree Narayana Educational Society, Kollam - Leading educational network since 1986 with institutions like SNPS Vadakkevila, SNCT, SNIT, Kids International, and Ayurvedic Studies providing excellence across Kerala.',
  keywords: [
    'Sree Narayana Educational Society',
    'SNES Kollam',
    'SNPS Vadakkevila',
    'SNPS Chathanoor', 
    'SNPS Mukathala',
    'SNCT Engineering College',
    'SNIT Technology',
    'Kids International',
    'Sree Narayana Ayurvedic Studies',
    'Kollam education',
    'Kerala schools',
    'CBSE schools',
    'Engineering colleges Kerala',
    'Quality education',
    'Sree Narayana Guru philosophy',
    'Educational network India',
    'Technical education Kerala'
  ],
  authors: [{ name: 'Sree Narayana Educational Society', url: 'https://www.sneskollam.org' }],
  creator: 'Sree Narayana Educational Society',
  publisher: 'Sree Narayana Educational Society',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sneskollam.org',
    siteName: 'Sree Narayana Educational Society',
    title: 'Sree Narayana Educational Society, Kollam | Leading Educational Network Kerala',
    description: 'Leading educational network with SNPS schools, SNCT, SNIT, Kids International, and specialized institutes providing excellence in education across Kerala since 1986.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sree Narayana Educational Society - Network of Quality Educational Institutions',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'SNES Kollam - Educational Excellence',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sree Narayana Educational Society, Kollam | Quality Education Since 1986',
    description: 'Leading educational network with SNPS schools, SNCT, SNIT, and specialized institutes providing excellence in education across Kerala since 1986.',
    images: ['/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  alternates: {
    canonical: 'https://www.sneskollam.org',
    languages: {
      'en-US': 'https://www.sneskollam.org',
    },
  },
  category: 'education',
  classification: 'Educational Institution',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'SNES Kollam',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#FFE601',
    'msapplication-config': '/browserconfig.xml',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://thankful-novelty-5d39f22046.media.strapiapp.com" />
        
        {/* DNS prefetch for institutional websites */}
        <link rel="dns-prefetch" href="//snpskollam.org" />
        <link rel="dns-prefetch" href="//indianpublicschoolkollam.com" />
        <link rel="dns-prefetch" href="//www.snct.ac.in" />
        <link rel="dns-prefetch" href="//www.snit.ac.in" />
        <link rel="dns-prefetch" href="//kidsinternationalsnps.com" />
        <link rel="dns-prefetch" href="//snayurveda.ac.in" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#FFE601" />
        <meta name="msapplication-TileColor" content="#FFE601" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Educational Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Sree Narayana Educational Society",
              "alternateName": ["SNES Kollam", "SN EduSociety"],
              "description": "Educational society providing quality education since 1986 with multiple institutions across Kerala including schools, engineering colleges, and specialized institutes",
              "foundingDate": "1986",
              "logo": "https://www.sneskollam.org/logo.png",
              "image": "https://www.sneskollam.org/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Kollam",
                "addressRegion": "Kerala",
                "postalCode": "691001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "availableLanguage": ["English", "Malayalam"]
              },
              "url": "https://www.sneskollam.org",
              "sameAs": [
                "https://snpskollam.org",
                "https://indianpublicschoolkollam.com", 
                "https://www.snct.ac.in",
                "https://www.snit.ac.in",
                "https://kidsinternationalsnps.com",
                "https://snayurveda.ac.in"
              ],
              "member": [
                {
                  "@type": "EducationalOrganization",
                  "name": "SNPS Vadakkevila",
                  "url": "https://snpskollam.org",
                  "description": "CBSE affiliated school providing quality primary and secondary education"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "SNPS Mukathala - Indian Public School",
                  "url": "https://indianpublicschoolkollam.com",
                  "description": "Premier CBSE school with modern facilities and innovative teaching methods"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "SNCT - Sree Narayana College of Technology",
                  "url": "https://www.snct.ac.in",
                  "description": "Engineering college offering undergraduate and postgraduate programs"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "SNIT - Sree Narayana Institute of Technology", 
                  "url": "https://www.snit.ac.in",
                  "description": "Technical education institute focusing on engineering and technology"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Kids International",
                  "url": "https://kidsinternationalsnps.com",
                  "description": "International standard pre-school and primary education"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Sree Narayana Institute of Ayurvedic Studies and Research",
                  "url": "https://snayurveda.ac.in",
                  "description": "Specialized institute for Ayurvedic medicine education and research"
                }
              ],
              "areaServed": {
                "@type": "Place",
                "name": "Kerala, India"
              },
              "knowsAbout": [
                "CBSE Education",
                "Engineering Education", 
                "Technical Education",
                "Ayurvedic Studies",
                "Primary Education",
                "Secondary Education",
                "Higher Education"
              ]
            })
          }}
        />
        
        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sree Narayana Educational Society",
              "alternateName": "SNES Kollam",
              "url": "https://www.sneskollam.org",
              "description": "Official website of Sree Narayana Educational Society, Kollam - Leading educational network in Kerala",
              "publisher": {
                "@type": "EducationalOrganization",
                "name": "Sree Narayana Educational Society",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.sneskollam.org/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.sneskollam.org/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Breadcrumb List for Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.sneskollam.org"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Our Institutions",
                  "item": "https://www.sneskollam.org#institutions"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Alumni Network",
                  "item": "https://www.sneskollam.org/alumni"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "News & Gallery",
                  "item": "https://www.sneskollam.org#news-gallery"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}