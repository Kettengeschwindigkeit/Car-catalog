/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  basePath: "/red",
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "http://localhost:4200/images/:path*"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/car/1",
        destination: "/car/2",
        permanent: true
      }
    ]
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
