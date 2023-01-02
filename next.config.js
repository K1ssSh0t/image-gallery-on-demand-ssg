/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  experimental: {
    appDir: true,
  },
  images:{ 
    remotePatterns:[
      {
      protocol: 'https',
      hostname: 'cdn.waifu.im',
      port: '',
      pathname: '/**',
    }
    ],
     
  },
}

module.exports = nextConfig
