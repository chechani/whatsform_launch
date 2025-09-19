/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ conditionally enable static export for distribution
  ...(process.env.NEXT_EXPORT === 'true' && { output: 'export' }),
  
  // ✅ required if you use next/image (there's no Image Optimization server in static export)
  images: { unoptimized: true },

  // ✅ static files will be exported to 'out' directory for distribution
  distDir: 'out',

  // keep your custom page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // dev-only; safe to keep
  devIndicators: {
    allowedDevOrigins: [
      "https://3004-firebase-whatsform-1757034527872.cluster-va5f6x3wzzh4stde63ddr3qgge.cloudworkstations.dev",
      "https://web.waflow.in",
	],
  },

  // ⛔️ IMPORTANT:
  // Next.js rewrites do NOT work at runtime for a fully static export.
  // Remove this and do the /api proxying in Nginx instead (see section B).
  // async rewrites() {
  //   return [
  //     { source: '/api/:path*', destination: 'https://web.waflow.in/api/:path*' },
  //   ]
  // },
};

export default nextConfig;