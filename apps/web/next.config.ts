import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["unsplash.com", "picsum.photos"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
