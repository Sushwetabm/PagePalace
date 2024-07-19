/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.prisma$/,
      use: 'prisma-loader',
    });
    return config;
  },
};

export default nextConfig;