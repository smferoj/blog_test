/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    domains: ["roar.media"],
  },
  async headers() {
    return [
    {source: '/', headers: [{key: 'X-Frame-Options', value: 'SAMEORIGIN'}]}
    ]
    }, 
}

module.exports = nextConfig
