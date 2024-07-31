 
/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: 'export',
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
