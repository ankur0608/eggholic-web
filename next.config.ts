import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/items',
        destination: 'https://eggholic-pos.vercel.app/api/items',
      },
    ];
  },
};

export default nextConfig;
