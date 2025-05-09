/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 修改这一行，确保以斜杠开头
  assetPrefix: '/',
}

module.exports = nextConfig