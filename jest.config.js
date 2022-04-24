const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  // Ignore playwright test folder
  testPathIgnorePatterns: ["/node_modules/", "/e2e/"],
  watchPathIgnorePatterns: ["/e2e/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
  },
  testEnvironment: "jest-environment-jsdom",
}

module.exports = createJestConfig(customJestConfig)
