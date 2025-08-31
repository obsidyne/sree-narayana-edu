import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thankful-novelty-5d39f22046.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
      // You can add other image domains here if needed
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;