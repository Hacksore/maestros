const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const moduleExports = {
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['@repo/prisma'],
};

module.exports = withContentlayer(moduleExports);
