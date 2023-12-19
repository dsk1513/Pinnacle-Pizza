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
 // Test for image sources
 test('should display correct images', async ({ page }) => {
  await expect(page.locator('img[alt="Tradition of Pizza Making"]')).toHaveAttribute('src', '/images/dough.jpeg');
  await expect(page.locator('img[alt="Artisanal Ingredients"]')).toHaveAttribute('src', '/images/pizza2.webp');
  await expect(page.locator('img[alt="Community and Connection"]')).toHaveAttribute('src', '/images/pizza3.jpeg');
});
 // Test for the presence of specific text content
 test('should display the correct text content', async ({ page }) => {
  const firstParagraph = await page.locator('text=Every great pizza begins with the foundation - the dough.');
  await expect(firstParagraph).toBeVisible();

  // Add more checks for other text content as needed
});

// Additional tests can be written to cover other aspects of the component
});


test.describe('Cards Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the Cards component is rendered
    await page.goto('https://group-project-three.vercel.app/');
  });