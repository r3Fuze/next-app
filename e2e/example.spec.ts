import { test, expect } from "@playwright/test"

test("Basic test", async ({ page }) => {
  await page.goto("/")
  const title = page.locator("main > h1")
  await expect(title).toHaveText("Welcome to Next.js!")

  await page.click("text=About →")
  await expect(page).toHaveURL("/about")
  await expect(page.locator("h1")).toHaveText("About Page")

  await page.goBack()
  await page.click("text=Blog →")
  await expect(page).toHaveURL("/blog")
  await expect(page.locator("h1")).toHaveText("This is my blog")
})
