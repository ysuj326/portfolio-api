/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://ysuj326.github.io/portfolio-api"
      : "",
}

module.exports = nextConfig
