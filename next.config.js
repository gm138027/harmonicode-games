/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true, // 禁用图像优化
  },
  assetPrefix: './', // 添加这一行，使用相对路径加载资源
}

module.exports = nextConfig