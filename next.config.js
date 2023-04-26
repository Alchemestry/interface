/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_WEB3_MODAL_PROJECT_ID: '7e1086da67bb06c705e6211e82b121d0',
  },
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
