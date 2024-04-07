/** @type {import('next').NextConfig} */
const nextConfig = {
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
