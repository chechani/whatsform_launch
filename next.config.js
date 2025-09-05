
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  devIndicators: {
    allowedDevOrigins: ["https://3004-firebase-whatsform-1757034527872.cluster-va5f6x3wzzh4stde63ddr3qgge.cloudworkstations.dev"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://web.waflow.in/api/:path*',
      },
    ]
  },
};

export default nextConfig;
