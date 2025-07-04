/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables additional React checks in dev
  swcMinify: true, // SWC minification enabled (default in newer versions)

  async redirects() {
    return [
      {
        source: "/Home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["yourdomain.com"], // Replace with real domains for next/image optimization
  },

  compiler: {
    styledComponents: true, // Enable if you're using styled-components
  },

  eslint: {
    ignoreDuringBuilds: false, // Ensure linting is enforced during builds
  },

  typescript: {
    ignoreBuildErrors: false, // Prevent builds from succeeding if TS errors exist
  },
};

module.exports = nextConfig;
