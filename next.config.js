const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,

  images: {
    domains: ['files.stripe.com', 's3-alpha-sig.figma.com'],
  },
}

module.exports = nextConfig
