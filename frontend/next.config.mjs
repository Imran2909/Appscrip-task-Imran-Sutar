/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static site export
  images: {
    unoptimized: true, // required for static deployment
  },
};

export default nextConfig;
