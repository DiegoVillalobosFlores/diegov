/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  pageExtensions: ['page.tsx'],

  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
