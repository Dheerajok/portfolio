/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
    // webpack(config) {
    //   // config.plugins.push(require('tailwind-scrollbar-hide'));
    //   // return config;
    // },
  };
  
  export default nextConfig;
  