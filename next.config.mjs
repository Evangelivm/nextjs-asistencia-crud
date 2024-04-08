/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/comp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
