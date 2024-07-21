 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
             hostname: 'images.unsplash.com',
          },
          {
             hostname: 'websitedemos.net',
          },
          {
             hostname: 'lightgrey-caribou-166647.hostingersite.com',
          },
        ],
      },
};

export default nextConfig;
