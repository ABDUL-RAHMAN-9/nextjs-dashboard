import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* @ts-ignore - Bypass strict type check for Next.js 16 experimental builds */
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
