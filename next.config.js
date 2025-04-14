/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static exports for S3 hosting
  trailingSlash: true, // Creates clean URLs with trailing slashes
  images: {
    unoptimized: true, // Required for static export
    domains: ["images.ctfassets.net"], // For Contentful (if chosen)
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
