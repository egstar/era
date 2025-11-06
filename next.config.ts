
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '**',
                search: '',
            },
        ],
    },
    allowedDevOrigins: ['*.eramsco.com', 'localhost:3000'],
    experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);