/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Individual job listings are switched off unless this is set to 'true'.
// See src/app/archive/careers/README.md.
const careerListingsEnabled = process.env.NEXT_PUBLIC_CAREER_LISTINGS_ENABLED === 'true';

const nextConfig = {
  productionBrowserSourceMaps: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    if (careerListingsEnabled) {
      return [];
    }

    return [
      {
        source: '/about/careers/:slug+',
        destination: '/about/careers',
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

export default nextConfig;
