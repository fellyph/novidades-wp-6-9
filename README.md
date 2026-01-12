# WordPress 6.9 What's New

A comprehensive showcase of WordPress 6.9 features for editors, creators, and developers using WordPress Playground.

<a href="https://playground.wordpress.net?blueprint-url=https%3A%2F%2Fraw.githubusercontent.com%2Ffellyph%2Fnovidades-wp-6-9%2Frefs%2Fheads%2Fmain%2Fblueprints.json" target="_blank" rel="noopener noreferrer">
  <img src="https://raw.githubusercontent.com/adamziel/playground-preview/refs/heads/trunk/assets/playground-preview-button.svg" alt="Open WordPress Playground Preview" width="220" height="57" />
</a>

## 🌟 Overview

This project demonstrates the key features and improvements introduced in WordPress 6.9 through an interactive WordPress Playground experience. It provides hands-on examples and explanations in both Portuguese and English.

## 🎯 Features Highlighted

### For Editors and Creators
- **Notes (Block Notes)**: Attach notes directly to blocks for asynchronous collaboration
- **Drag & Drop**: Improved drag and drop experience for moving blocks
- **Command Palette**: Quick access to navigation and actions throughout the admin dashboard
- **New Blocks**: Accordion, Term Query, Math, Reading Time, Comment Count, and Comment Link
- **Text Fit**: Automatic text sizing for paragraphs and headings
- **Hide Blocks**: Temporarily hide blocks while keeping them editable in the backend

### For Developers
- **Interactivity API**: Client-side navigation and conditional resource loading
- **Abilities API**: Foundation for AI integrations and automation tools
- **HTML API**: Public release of the new HTML processing API
- **Block Processor**: Optimized block processing for better performance
- **PHP 8.5 Support**: Beta support for PHP 8.5
- **Legacy Code Removal**: Internet Explorer support code removed

## 🚀 Quick Start

### Using WordPress Playground

1. **Portuguese Version**:
   ```
   https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/main/blueprints.json
   ```

2. **English Version**:
   ```
   https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/main/blueprints.en.json
   ```

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/fellyph/novidades-wp-6-9.git
   cd novidades-wp-6-9
   ```

2. Use the blueprint files with WordPress Playground locally or deploy to your preferred hosting.

## 📁 Project Structure

```
novidades-wp-6-9/
├── blueprints.json          # Portuguese version blueprint
├── blueprints.en.json       # English version blueprint
├── blueprints.short.json    # Shortened version (if needed)
├── src/
│   ├── css/
│   │   └── style.css       # Custom styling
│   └── imgs/
│       ├── command-palette.webp
│       ├── hide-visilibility.webp
│       └── image-*.webp    # Feature demonstration images
├── workers/                 # Cloudflare Workers
│   ├── worker.js           # Main worker entry point
│   ├── wrangler.toml       # Wrangler configuration
│   ├── package.json        # Worker dependencies
│   ├── i18n/               # Internationalization
│   │   ├── index.js        # Language exports
│   │   ├── en.js           # English translations
│   │   ├── pt.js           # Portuguese translations
│   │   └── es.js           # Spanish translations
│   └── tests/              # E2E Tests (Playwright)
│       ├── worker-api.spec.js      # API tests
│       └── playground-e2e.spec.js  # Playground E2E tests
└── README.md
```

## 🌍 Languages

- 🇧🇷 **Portuguese** (Português): `blueprints.json` or `?lang=pt`
- 🇺🇸 **English**: `blueprints.en.json` or `?lang=en`
- 🇪🇸 **Spanish** (Español): `?lang=es`

## ☁️ Cloudflare Workers (Dynamic Blueprints)

This project includes a Cloudflare Worker that dynamically generates blueprints with i18n support.

### Deployed URL

```
https://wp-69-blueprint.fellyph-cintra.workers.dev
```

### Usage

```bash
# English
https://playground.wordpress.net/?blueprint-url=https://wp-69-blueprint.fellyph-cintra.workers.dev/?lang=en

# Portuguese
https://playground.wordpress.net/?blueprint-url=https://wp-69-blueprint.fellyph-cintra.workers.dev/?lang=pt

# Spanish
https://playground.wordpress.net/?blueprint-url=https://wp-69-blueprint.fellyph-cintra.workers.dev/?lang=es
```

### Worker Development

```bash
cd workers

# Install dependencies
npm install

# Run locally
npm run dev

# Deploy to Cloudflare
npm run deploy
```

## 🧪 Testing

The project includes E2E tests using Playwright to validate the worker API and WordPress Playground integration.

### Running Tests

```bash
cd workers

# Run all tests
npm run test

# Run only API tests (fast, ~2 seconds)
npm run test:api

# Run Playground E2E tests (requires deployed worker)
DEPLOYED_WORKER_URL=https://wp-69-blueprint.fellyph-cintra.workers.dev npm run test:e2e

# Run tests with Playwright UI
npm run test:ui

# View HTML test report
npm run test:report
```

### Test Coverage

**API Tests (16 tests)**
- Valid JSON response for all languages (en, pt, es)
- CORS headers verification
- Blueprint schema validation (meta, siteOptions, steps)
- Language-specific content validation

**Playground E2E Tests**
- Load blueprint in WordPress Playground
- Verify content renders correctly for each language
- Visual regression screenshots

> **Note**: Playground E2E tests require a deployed worker URL since WordPress Playground cannot fetch from localhost.

## 🔧 Blueprint Configuration

The blueprint files automatically:
- Set up a WordPress instance with version 6.9
- Create a demo post showcasing all features
- Load custom styling from the repository
- Configure the site with appropriate titles and descriptions
- Set the post slug to `wp-6-9`

### Login Credentials
- **Username**: `admin`
- **Password**: `word`

## 📝 Customization

To modify the content:

1. Edit the environment variables in the `env` section of the blueprint files
2. Update the `CONTENT_TEMPLATE` for layout changes
3. Modify the CSS in `src/css/style.css` for styling adjustments
4. Replace images in `src/imgs/` as needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for:
- Translation improvements
- Feature additions
- Bug fixes
- Documentation updates

## 👤 Author

**Fellyph Cintra**

## 📚 Resources

- [WordPress 6.9 Release Notes](https://wordpress.org/news/)
- [WordPress Playground Documentation](https://wordpress.github.io/wordpress-playground/)
- [Interactivity API Documentation](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/)
- [Abilities API Documentation](https://make.wordpress.org/core/tag/abilities-api/)

## 📄 License

This project is open source and available for educational purposes.

## 🔗 Links

- [Live Demo (PT)](https://playground.wordpress.net/#blueprints.json)
- [Live Demo (EN)](https://playground.wordpress.net/#blueprints.en.json)
- [GitHub Repository](https://github.com/fellyph/novidades-wp-6-9)

---

Made with ❤️ for the WordPress community

