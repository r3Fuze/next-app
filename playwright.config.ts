import "dotenv/config"
import type { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: process.env.BASE_URL,
  },
  webServer: {
    command: "pnpm dev",
    url: process.env.BASE_URL,
    timeout: 30 * 1000,
    reuseExistingServer: !process.env.CI,
  },
}

export default config
