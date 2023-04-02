/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_NOTION_KEY:
      'secret_V2XKAY6eomhJP2e8SsbZ4YGDYCYrpZJBdt6t8NGDEai',
    NEXT_PUBLIC_NOTION_DATABASE_KEY: '987a9318eeac4c5e87d4ac76984913b4',
  },
};

module.exports = nextConfig;
