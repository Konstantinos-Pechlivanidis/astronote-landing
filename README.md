# Astronote Landing Page

Unified landing page for Astronote SMS Marketing platform, connecting Shopify and Retail applications.

## Features

- Unified landing page showcasing both Shopify and Retail platforms
- Platform comparison and feature highlights
- Direct links to Shopify and Retail applications
- Responsive design with glass morphism UI
- SEO optimized with structured data

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Helmet Async (SEO)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
VITE_SHOPIFY_APP_URL=https://astronote-shopify-frontend.onrender.com
VITE_RETAIL_APP_URL=https://astronote-retail-frontend.onrender.com
VITE_LANDING_URL=https://astronote-landing.onrender.com
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## URLs

- **Landing Page**: `https://astronote-landing.onrender.com`
- **Shopify App**: `https://astronote-shopify-frontend.onrender.com/shopify`
- **Retail App**: `https://astronote-retail-frontend.onrender.com/retail`

## Deployment

The production build will be in the `dist` directory. Deploy this folder to your hosting service (e.g., Render.com, Vercel, Netlify).

**Important:** Configure your hosting service to redirect all routes to `index.html` for SPA routing.

