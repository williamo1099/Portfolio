/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export.
  output: "export",
  trailingSlash: true,

  // Disable image optimization.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
