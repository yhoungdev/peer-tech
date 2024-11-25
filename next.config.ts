import { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dd.dexscreener.com',
        pathname: '/ds-data/tokens/**',
      },
    ],
  },
};

export default config;
