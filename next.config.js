const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "components", "lib", "graphql", "tests", "e2e"],
  },
  images: {
    domains: ["media.graphassets.com"],
  },
  experimental: {
    newNextLinkBehavior: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
