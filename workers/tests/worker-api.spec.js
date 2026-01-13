import { test, expect } from '@playwright/test';

const SUPPORTED_LANGUAGES = ['en', 'pt', 'es'];

test.describe('Worker API - Blueprint Generation', () => {
  test('should return valid JSON for default request (English)', async ({ request }) => {
    const response = await request.get('/');

    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/json');

    const blueprint = await response.json();
    expect(blueprint).toBeDefined();
    expect(blueprint.$schema).toBe('https://playground.wordpress.net/blueprint-schema.json');
  });

  test('should have correct CORS headers', async ({ request }) => {
    const response = await request.get('/');

    expect(response.headers()['access-control-allow-origin']).toBe('*');
    expect(response.headers()['cache-control']).toContain('no-cache');
  });

  for (const lang of SUPPORTED_LANGUAGES) {
    test(`should return blueprint for language: ${lang}`, async ({ request }) => {
      const response = await request.get(`/?lang=${lang}`);

      expect(response.ok()).toBeTruthy();

      const blueprint = await response.json();
      expect(blueprint).toBeDefined();
      expect(blueprint.meta).toBeDefined();
      expect(blueprint.meta.title).toBeDefined();
      expect(blueprint.meta.author).toBe('Fellyph Cintra');
    });
  }

  test('should fallback to English for unsupported language', async ({ request }) => {
    const response = await request.get('/?lang=invalid');

    expect(response.ok()).toBeTruthy();

    const blueprint = await response.json();
    // Should return English content as fallback
    expect(blueprint.meta.title).toBe("WordPress 6.9 What's New");
  });

  test('should return different content for each language', async ({ request }) => {
    const responses = await Promise.all(
      SUPPORTED_LANGUAGES.map(lang => request.get(`/?lang=${lang}`))
    );

    const blueprints = await Promise.all(responses.map(r => r.json()));

    // Get unique titles
    const titles = new Set(blueprints.map(b => b.meta.title));

    // All languages should have different titles
    expect(titles.size).toBe(SUPPORTED_LANGUAGES.length);
  });
});

test.describe('Worker API - Blueprint Structure', () => {
  test('should have required meta fields', async ({ request }) => {
    const response = await request.get('/');
    const blueprint = await response.json();

    expect(blueprint.meta.title).toBeDefined();
    expect(blueprint.meta.author).toBeDefined();
    expect(blueprint.meta.description).toBeDefined();
  });

  test('should have required siteOptions', async ({ request }) => {
    const response = await request.get('/');
    const blueprint = await response.json();

    expect(blueprint.siteOptions.blogname).toBeDefined();
    expect(blueprint.siteOptions.description).toBeDefined();
    expect(blueprint.siteOptions.permalink_structure).toBe('/%postname%/');
  });

  test('should have correct landing page', async ({ request }) => {
    const response = await request.get('/');
    const blueprint = await response.json();

    expect(blueprint.landingPage).toBe('/wp-6-9/');
  });

  test('should have required steps', async ({ request }) => {
    const response = await request.get('/');
    const blueprint = await response.json();

    expect(blueprint.steps).toBeDefined();
    expect(Array.isArray(blueprint.steps)).toBeTruthy();
    expect(blueprint.steps.length).toBe(4);

    // Check step types
    const stepTypes = blueprint.steps.map(s => s.step);
    expect(stepTypes).toContain('resetData');
    expect(stepTypes).toContain('login');
    expect(stepTypes).toContain('writeFile');
    expect(stepTypes).toContain('runPHPWithOptions');
  });

  test('should have login step with correct credentials', async ({ request }) => {
    const response = await request.get('/');
    const blueprint = await response.json();

    const loginStep = blueprint.steps.find(s => s.step === 'login');
    expect(loginStep).toBeDefined();
    expect(loginStep.username).toBe('admin');
    expect(loginStep.password).toBeDefined();
  });

  test('should have runPHPWithOptions step with env variables', async ({ request }) => {
    const response = await request.get('/');
    const blueprint = await response.json();

    const phpStep = blueprint.steps.find(s => s.step === 'runPHPWithOptions');
    expect(phpStep).toBeDefined();
    expect(phpStep.options).toBeDefined();
    expect(phpStep.options.code).toBeDefined();
    expect(phpStep.options.env).toBeDefined();

    // Check required env variables
    const env = phpStep.options.env;
    expect(env.MAIN_POST_TITLE).toBeDefined();
    expect(env.CONTENT_TEMPLATE).toBeDefined();
    expect(env.TITLE_FOR_USERS).toBeDefined();
    expect(env.TITLE_FOR_DEVELOPERS).toBeDefined();
  });
});

test.describe('Worker API - Language Content Validation', () => {
  test('English content should have correct values', async ({ request }) => {
    const response = await request.get('/?lang=en');
    const blueprint = await response.json();

    expect(blueprint.meta.title).toBe("WordPress 6.9 What's New");
    expect(blueprint.siteOptions.blogname).toBe("WordPress 6.9 What's New");

    const env = blueprint.steps.find(s => s.step === 'runPHPWithOptions').options.env;
    expect(env.CENTER_TITLE_USERS).toBe('For Editors and Creators');
    expect(env.CENTER_TITLE_DEVELOPERS).toBe('For Developers');
    expect(env.NAV_NEXT).toBe('next');
  });

  test('Portuguese content should have correct values', async ({ request }) => {
    const response = await request.get('/?lang=pt');
    const blueprint = await response.json();

    expect(blueprint.meta.title).toContain('WordPress 6.9');

    const env = blueprint.steps.find(s => s.step === 'runPHPWithOptions').options.env;
    // Portuguese should have "próximo" for navigation
    expect(env.NAV_NEXT).toBeDefined();
  });

  test('Spanish content should have correct values', async ({ request }) => {
    const response = await request.get('/?lang=es');
    const blueprint = await response.json();

    expect(blueprint.meta.title).toContain('WordPress 6.9');

    const env = blueprint.steps.find(s => s.step === 'runPHPWithOptions').options.env;
    expect(env.NAV_NEXT).toBeDefined();
  });
});
