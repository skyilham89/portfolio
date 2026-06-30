import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
  // Allow the dev server to be reached from other devices on the local
  // network (e.g. testing on a phone). Without this, Next.js blocks the
  // client JS bundles cross-origin, so React never hydrates on the device.
  allowedDevOrigins: [
    "172.20.10.6",
    "172.20.10.*",
    "192.168.*.*",
  ],
};

export default nextConfig;
