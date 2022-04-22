import type { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  reporter: process.env.CI ? "github" : "list",
}

export default config
