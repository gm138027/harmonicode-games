   /** @type {import('next').NextConfig} */
   const nextConfig = {
     eslint: {
       ignoreDuringBuilds: true,
     },
     output: 'export',
     images: {
       unoptimized: true,
     },
     assetPrefix: '.',  // 注意这里使用点号而不是'./'
     trailingSlash: true // 添加这一行以确保URL末尾有斜杠
   }

   module.exports = nextConfig