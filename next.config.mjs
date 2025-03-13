/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export.
  output: "export",

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
