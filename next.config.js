const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ["pages", "components", "lib", "graphql", "tests", "e2e"],
  },
  images: {
    domains: ["media.graphassets.com"],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
