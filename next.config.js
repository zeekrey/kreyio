// // const withTM = require('next-transpile-modules')(['unist-util-visit']);
// import { withContentlayer } from 'next-contentlayer'
// export default withContentlayer({})

// next.config.js
const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
}

module.exports = withContentlayer(nextConfig)
