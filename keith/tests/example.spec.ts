import { test, expect } from '@playwright/test';

test.describe('Aboutuss Component Tests', () => {
  // Load the page where Aboutuss component is rendered before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/'); // Replace with the correct URL
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
    await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/');
  });


  test('Responsive layout changes at breakpoints', async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    // Add checks for layout at this size
    await page.setViewportSize({ width: 1200, height: 800 });
    // Add checks for layout at this size
  });
});

test.describe('Header Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the Header component is rendered
    await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/');
  });



  // Test for clicking each navigation link
  // This assumes your site uses client-side routing or anchor links
  


});




test.describe('Footer Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/'); // Replace with your component's URL
  });

  test('Footer should be visible', async ({ page }) => {
    const footer = await page.locator('footer');
    await expect(footer).toBeVisible();
  });
});













test.describe('Hero Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/'); // Replace with your component's URL
  });

  test('Hero component should be visible', async ({ page }) => {
    const heroComponent = page.locator('#Hero');
    await expect(heroComponent).toBeVisible();
  });
});





const titles = [
  "Buffalo Chicken", "Pepperoni", "Barbeque Chicken", 
  "Meat Lover", "Veggie Wave", "Spinach Delight", 
  "Ranch Chicken", "Feta Cheese", "Supreme", 
  "Maxie"
];

for (const title of titles) {
  test(`should display the card with title "${title}"`, async ({ page }) => {
    await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/'); // Navigate to the page where the titles are expected to be
    const cardTitle = page.locator(`text=${title}`);
    await cardTitle.waitFor({ state: 'visible', timeout: 10000 }); // Optionally increase timeout if needed
    await expect(cardTitle).toBeVisible();
  });
}

test('Navbar renders correctly', async ({ page }) => {
  await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/'); // Adjust the URL to your application's URL
  const navbar = await page.locator('nav');
  expect(await navbar.isVisible()).toBeTruthy();
});

test('Logo image loads correctly', async ({ page }) => {
  await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/');
  const logoImage = await page.locator('nav >> img[alt="Your Brand Logo"]');
  expect(await logoImage.isVisible()).toBeTruthy();
});

test('Page is accessible', async ({ page }) => {
  await page.goto('https://group-project-pmgxs95zh-dsk1513s-projects.vercel.app/Home');
  await expect(await page.accessibility.snapshot()).toBeTruthy();
});

