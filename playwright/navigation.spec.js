import { test, expect } from "@playwright/test";

test.describe("navigation from homepage to venue details", () => {
  test("should navigate to venue details page when clicking on a venue", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator("#venue-container").getByRole("link").first().click();
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
