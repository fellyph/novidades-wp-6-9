# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WordPress 6.9 feature showcase using Cloudflare Workers to dynamically generate WordPress Playground blueprints with i18n support (English, Portuguese, Spanish).

**Deployed URL:** https://wp-69-blueprint.fellyph-cintra.workers.dev

## Commands

All commands run from the `workers/` directory:

```bash
# Development
npm run dev              # Start local dev server on http://localhost:8787

# Testing
npm run test             # Run all tests (API + E2E)
npm run test:api         # API tests only (~2 seconds)
npm run test:e2e         # Playground E2E tests (needs deployed worker)
npm run test:ui          # Interactive Playwright UI
npm run test:report      # View HTML test report

# Deployment
npm run deploy           # Deploy to Cloudflare Workers
```

## Architecture

### Request Flow

```
Browser → Cloudflare Worker → Language Selection → Blueprint Generation → JSON Response
                                     ↓
WordPress Playground loads JSON → Executes PHP steps → Creates post with template → Content rendered
```

### Key Components

**`workers/worker.js`** - Main entry point
- Handles `/?lang=en|pt|es` query parameter
- Generates WordPress Playground blueprint JSON
- Returns response with CORS headers and 1-hour cache

**`workers/i18n/`** - Translation system
- `en.js`, `pt.js`, `es.js` - Each exports `meta`, `siteOptions`, and `strings` objects
- `index.js` - Re-exports all languages
- Defaults to English for unsupported languages

**Content Template** - In `worker.js`
- Uses `{{PLACEHOLDER}}` pattern for dynamic content
- PHP `strtr()` replaces placeholders with translation strings
- Generates WordPress block markup for Playground

### Blueprint Structure

```javascript
{
  $schema: "https://playground.wordpress.net/blueprint-schema.json",
  meta: { title, author, description },
  siteOptions: { blogname, description },
  steps: [
    { step: "resetData" },
    { step: "login", username: "admin", password: "word" },
    { step: "runPHPWithOptions", code: "...", env: { /* translations */ } }
  ]
}
```

## Testing

**API Tests (`worker-api.spec.js`)** - 16 test cases
- Blueprint schema validation
- CORS headers verification
- Language-specific content checks
- Fallback behavior

**E2E Tests (`playground-e2e.spec.js`)**
- Loads blueprints in WordPress Playground
- Validates content rendering per language
- Visual regression screenshots

**Playwright Config:** Chromium only, 60s timeout for Playground loading, auto-starts wrangler dev server

## Adding a New Language

1. Create `workers/i18n/{lang}.js` with `meta`, `siteOptions`, and `strings` exports
2. Add export to `workers/i18n/index.js`
3. Add language to `languages` map in `worker.js`
4. Add test cases in `worker-api.spec.js`

## Static Blueprints

`blueprints.json` and `blueprints.en.json` at root are static backups. The dynamic worker is preferred for production use.
