/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/games/midiano',
        destination: '/#play',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig