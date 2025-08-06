/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.externals = config.externals || [];
    if (!config.externals.includes('next-themes')) {
      config.externals.push('next-themes');
    }
    return config;
  },
};

module.exports = nextConfig;
