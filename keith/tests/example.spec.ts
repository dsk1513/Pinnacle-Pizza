import { test, expect } from '@playwright/test';

test.describe('Aboutuss Component Tests', () => {
  // Load the page where Aboutuss component is rendered before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://group-project-three.vercel.app/'); // Replace with the correct URL
  });

  // Test to check if the main section is present
  test('should display the main Aboutuss section', async ({ page }) => {
    const aboutSection = await page.locator('section#Aboutuss');
    await expect(aboutSection).toBeVisible();
  });

  test('should display the correct main heading', async ({ page }) => {
    const heading = await page.locator('h2:text("Our Story")').textContent();
    await expect(heading).toBe('Our Story');
  });
});