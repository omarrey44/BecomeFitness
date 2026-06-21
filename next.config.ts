import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder editorial photography is loaded from Unsplash during the
    // demo phase. Replace with real, authorized BECOME / Eder Saul photos
    // (see ASSET-CHECKLIST.md) and prune any hosts you no longer need.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" }, // YouTube thumbnails
    ],
    qualities: [60, 75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
