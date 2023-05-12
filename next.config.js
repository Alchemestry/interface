/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main/queue',
        permanent: false,
      },
      {
        source: '/main',
        destination: '/main/queue',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
