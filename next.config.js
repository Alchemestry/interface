/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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
