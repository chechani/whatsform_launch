/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Always use 'out' folder for builds
  distDir: 'out',
  
  // ✅ required if you use next/image (there's no Image Optimization server in static export)
  images: { unoptimized: true },

  // keep your custom page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Add trailing slash to all URLs
  trailingSlash: true,

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

// ✅ Only apply static export when explicitly building for static
if (process.env.NEXT_EXPORT === 'true') {
  nextConfig.output = 'export';
}

export default nextConfig;