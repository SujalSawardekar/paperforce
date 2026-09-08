import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/reach",
        destination: "/reach-markets",
        permanent: true,
      },
      {
        source: "/markets",
        destination: "/reach-markets",
        permanent: true,
      },
      {
        source: "/quality",
        destination: "/certifications",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
