import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    qualities: [70, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.manzelstudio.com",
      },
    ],
  },
};

export default nextConfig;
