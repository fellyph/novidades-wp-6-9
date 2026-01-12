import { test, expect } from '@playwright/test';

// WordPress Playground URL
const PLAYGROUND_URL = 'https://playground.wordpress.net';

// Get the deployed worker URL from environment, or skip Playground tests
const DEPLOYED_WORKER_URL = process.env.DEPLOYED_WORKER_URL;

// Skip Playground tests if no deployed URL is available
// These tests require a publicly accessible worker URL since Playground
// cannot fetch from localhost
const shouldRunPlaygroundTests = !!DEPLOYED_WORKER_URL;

// Test configurations for each language
const LANGUAGE_CONFIGS = {
  en: {
    lang: 'en',
    expectedTitle: "WordPress 6.9 What's New",
    expectedHeadings: ['For Editors and Creators', 'For Developers'],
    navText: 'next',
  },
  pt: {
    lang: 'pt',
    expectedTitle: 'Novidades do WordPress 6.9',
    expectedHeadings: ['Para Editores e Criadores', 'Para Desenvolvedores'],
    navText: 'proximo',
  },
  es: {
    lang: 'es',
    expectedTitle: 'Novedades de WordPress 6.9',
    expectedHeadings: ['Para Editores y Creadores', 'Para Desarrolladores'],
    navText: 'siguiente',
  },
};

/**
 * Helper function to get the WordPress iframe from Playground
 */
async function getWordPressFrame(page) {
  await page.waitForLoadState('domcontentloaded');

  const possibleSelectors = [
    'iframe[src*="wordpress"]',
    'iframe[title*="WordPress"]',
    'iframe[name*="wordpress"]',
    '#wordpress-iframe',
    'iframe',
  ];

  for (const selector of possibleSelectors) {
    try {
      const iframe = page.frameLocator(selector).first();
      const body = iframe.locator('body');
      await body.waitFor({ state: 'attached', timeout: 5000 });
      return iframe;
    } catch {
      continue;
    }
  }

  throw new Error('Could not find WordPress iframe');
}

/**
 * Wait for WordPress content to be fully loaded in Playground
 */
async function waitForWordPressContent(page, timeout = 90000) {
  await page.waitForTimeout(15000); // Initial wait for blueprint processing

  const iframe = await getWordPressFrame(page);

  try {
    await iframe.locator('.wp-block-group, .wp-block-heading, article, .entry-content, main, h1, h2').first().waitFor({
      state: 'visible',
      timeout: timeout
    });
  } catch {
    await iframe.locator('body').waitFor({ state: 'visible', timeout: timeout });
  }

  await page.waitForTimeout(5000);

  return iframe;
}

// Conditionally run Playground tests based on whether a deployed URL is available
test.describe('WordPress Playground - Blueprint E2E Tests', () => {
  test.describe.configure({ timeout: 180000 });

  // Skip all tests in this describe block if no deployed URL
  test.skip(!shouldRunPlaygroundTests, 'Skipping Playground tests: DEPLOYED_WORKER_URL not set. Run with DEPLOYED_WORKER_URL=https://your-worker.workers.dev npm run test:e2e');

  for (const [langCode, config] of Object.entries(LANGUAGE_CONFIGS)) {
    test.describe(`Language: ${langCode.toUpperCase()}`, () => {
      test(`should load blueprint and render content in ${langCode}`, async ({ page }) => {
        const blueprintUrl = `${DEPLOYED_WORKER_URL}/?lang=${config.lang}`;
        const playgroundUrl = `${PLAYGROUND_URL}/?blueprint-url=${encodeURIComponent(blueprintUrl)}`;

        await page.goto(playgroundUrl);
        const iframe = await waitForWordPressContent(page);

        const wpContent = iframe.locator('.wp-block-group, .wp-block-heading, .entry-content, article, h1, h2');
        await expect(wpContent.first()).toBeVisible({ timeout: 60000 });
      });

      test(`should display headings for ${langCode}`, async ({ page }) => {
        const blueprintUrl = `${DEPLOYED_WORKER_URL}/?lang=${config.lang}`;
        const playgroundUrl = `${PLAYGROUND_URL}/?blueprint-url=${encodeURIComponent(blueprintUrl)}`;

        await page.goto(playgroundUrl);
        const iframe = await waitForWordPressContent(page);

        let foundHeading = false;
        for (const heading of config.expectedHeadings) {
          try {
            const headingElement = iframe.getByText(heading, { exact: false });
            await expect(headingElement.first()).toBeVisible({ timeout: 30000 });
            foundHeading = true;
            break;
          } catch {
            continue;
          }
        }

        expect(foundHeading).toBeTruthy();
      });
    });
  }
});

test.describe('WordPress Playground - Content Verification', () => {
  test.describe.configure({ timeout: 180000 });

  test.skip(!shouldRunPlaygroundTests, 'Skipping Playground tests: DEPLOYED_WORKER_URL not set');

  test('should display WordPress 6.9 features content', async ({ page }) => {
    const blueprintUrl = `${DEPLOYED_WORKER_URL}/?lang=en`;
    const playgroundUrl = `${PLAYGROUND_URL}/?blueprint-url=${encodeURIComponent(blueprintUrl)}`;

    await page.goto(playgroundUrl);
    const iframe = await waitForWordPressContent(page);

    const features = ['Interactivity API', 'Abilities API', 'HTML API'];

    let featuresFound = 0;
    for (const feature of features) {
      try {
        const featureElement = iframe.getByText(feature, { exact: false });
        await expect(featureElement.first()).toBeVisible({ timeout: 15000 });
        featuresFound++;
      } catch {
        // Feature not found
      }
    }

    expect(featuresFound).toBeGreaterThan(0);
  });

  test('should have content blocks', async ({ page }) => {
    const blueprintUrl = `${DEPLOYED_WORKER_URL}/?lang=en`;
    const playgroundUrl = `${PLAYGROUND_URL}/?blueprint-url=${encodeURIComponent(blueprintUrl)}`;

    await page.goto(playgroundUrl);
    const iframe = await waitForWordPressContent(page);

    const blocks = iframe.locator('.wp-block-accordion, .wp-block-group, .wp-block-heading, h1, h2');
    await expect(blocks.first()).toBeVisible({ timeout: 30000 });
  });

  test('should have images loaded', async ({ page }) => {
    const blueprintUrl = `${DEPLOYED_WORKER_URL}/?lang=en`;
    const playgroundUrl = `${PLAYGROUND_URL}/?blueprint-url=${encodeURIComponent(blueprintUrl)}`;

    await page.goto(playgroundUrl);
    const iframe = await waitForWordPressContent(page);

    const images = iframe.locator('img');
    const imageCount = await images.count();

    expect(imageCount).toBeGreaterThan(0);
  });
});

test.describe('WordPress Playground - Visual Regression', () => {
  test.describe.configure({ timeout: 180000 });

  test.skip(!shouldRunPlaygroundTests, 'Skipping Playground tests: DEPLOYED_WORKER_URL not set');

  test('should capture screenshot of loaded content', async ({ page }) => {
    const blueprintUrl = `${DEPLOYED_WORKER_URL}/?lang=en`;
    const playgroundUrl = `${PLAYGROUND_URL}/?blueprint-url=${encodeURIComponent(blueprintUrl)}`;

    await page.goto(playgroundUrl);
    await waitForWordPressContent(page);

    await page.screenshot({
      path: 'tests/screenshots/playground-en.png',
      fullPage: false,
    });
  });

  test('should capture screenshots for all languages', async ({ page }) => {
    for (const lang of ['en', 'pt', 'es']) {
      const blueprintUrl = `${DEPLOYED_WORKER_URL}/?lang=${lang}`;
      const playgroundUrl = `${PLAYGROUND_URL}/?blueprint-url=${encodeURIComponent(blueprintUrl)}`;

      await page.goto(playgroundUrl);
      await waitForWordPressContent(page);

      await page.screenshot({
        path: `tests/screenshots/playground-${lang}.png`,
        fullPage: false,
      });
    }
  });
});
