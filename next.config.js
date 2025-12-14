/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
};

module.exports = nextConfig;
