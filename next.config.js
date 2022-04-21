/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "components", "lib", "test", "cypress"],
  },
}

module.exports = nextConfig
