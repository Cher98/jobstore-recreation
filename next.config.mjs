/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/jobstore-recreation",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
