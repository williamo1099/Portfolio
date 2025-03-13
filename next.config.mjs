/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export.
  output: "export",

  // Disable image optimization.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
