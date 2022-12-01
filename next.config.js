const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,

  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'files.stripe.com',
      's3-alpha-sig.figma.com',
      'i.postimg.cc',
      'firebasestorage.googleapis.com',
    ],
  },
}

module.exports = nextConfig
