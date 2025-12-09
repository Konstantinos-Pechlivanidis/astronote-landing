# Unified Design System for Astronote Landing Pages

## Overview
This document defines the unified design system for all Astronote landing pages:
- `astronote-landing` (unified landing)
- `astronote-shopify-frontend` (Shopify landing)
- `astronote-retail-frontend` (Retail landing)

## Color System

### Primary Brand Colors

#### Shopify - Ice Blue
- **Primary**: `#99B5D7` (ice-accent) - Icy blue for Shopify sections
- **Light**: `#B3CDDA` (ice-light)
- **Dark**: `#6686A9` (ice-dark)
- **Usage**: All Shopify-related sections, CTAs, badges, icons

#### Retail - Mercurial Teal/Cyan
- **Primary**: `#06B6D4` (cyan-accent) - Bright cyan for Retail sections
- **Light**: `#67E8F9` (cyan-light)
- **Dark**: `#0891B2` (cyan-dark)
- **Usage**: All Retail-related sections, CTAs, badges, icons

### Neutral Colors (Shared)
- **Background Dark**: `#020202` (bg-dark)
- **Background Light**: `#FAFAFA` (for light mode)
- **Surface Dark**: `#191819` (surface-dark)
- **Text Primary**: `#E5E5E5` (primary-light)
- **Text Secondary**: `#94A9B4` (border-subtle)
- **Border**: `rgba(148, 169, 180, 0.30)`

## Typography

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`
- **Mono**: `'SF Mono', Monaco, Menlo, Inconsolata, monospace`

### Font Sizes
- **Hero**: `3.0rem` (48px) - Main headline
- **H1**: `2.25rem` (36px) - Section titles
- **H2**: `1.875rem` (30px) - Subsection titles
- **H3**: `1.5rem` (24px) - Card titles
- **Body**: `1rem` (16px) - Body text
- **Small**: `0.75rem` (12px) - Captions, hints

## Spacing System
Based on 4px grid:
- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `12` = 48px
- `16` = 64px
- `20` = 80px
- `24` = 96px

## Component Structure

### Landing Page Sections (Unified Format)

1. **Hero Section**
   - Badge (Shopify: ice, Retail: cyan)
   - Main headline with gradient text
   - Subheadline
   - Dual CTAs (Shopify + Retail)
   - Trust indicators

2. **Results/Stats Section**
   - 3-column grid
   - Large numbers with icons
   - Glass cards

3. **Product Sections** (Shopify & Retail)
   - Badge with icon
   - Section title
   - Description
   - Screenshots grid (3 columns)
   - Features grid (4 columns)
   - CTA button

4. **Shared Features Section**
   - Title + description
   - Feature cards grid

5. **Final CTA Section**
   - Large headline
   - Description
   - Dual CTAs
   - Trust indicators

## Glass Morphism

### Dark Mode (Default for Landing Pages)
```css
.glass {
  background: rgba(2, 2, 2, 0.30);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.10);
}

.glass-ice {
  border: 1px solid rgba(153, 181, 215, 0.20);
}

.glass-cyan {
  border: 1px solid rgba(6, 182, 212, 0.20);
}
```

## Shadows
- **Glass Light**: `0 4px 16px rgba(0, 0, 0, 0.08)`
- **Glass Light LG**: `0 8px 32px rgba(0, 0, 0, 0.12)`
- **Glow Ice**: `0 0 20px rgba(153, 181, 215, 0.40)`
- **Glow Cyan**: `0 0 20px rgba(6, 182, 212, 0.40)`

## Border Radius
- **sm**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 32px

## Animations
- **fade-in**: 0.3s ease-out
- **slide-up**: 0.3s ease-out
- **scale-in**: 0.2s ease-out
- **float**: 6s ease-in-out infinite (for background blobs)

## Implementation Guidelines

1. **Consistent Structure**: All landing pages must follow the same section order
2. **Color Usage**: 
   - Shopify sections → Ice Blue variants
   - Retail sections → Cyan variants
   - Shared sections → Neutral or alternating colors
3. **Component Reuse**: Use the same GlassCard, GlassButton, GlassBadge components
4. **Spacing**: Use the 4px grid system consistently
5. **Typography**: Follow the defined font sizes and weights
6. **Images**: All screenshots must be clickable with ImageLightbox

