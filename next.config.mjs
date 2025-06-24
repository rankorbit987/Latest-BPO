/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Add other domains if needed
      {
        protocol: 'https',
        hostname: 'tse3.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'tse2.mm.bing.net',
      },
    ],
    domains: [
      'www.statista.com',
      'mca.org.uk',
      'upload.wikimedia.org',
      
    ]
  }
};

export default nextConfig;
