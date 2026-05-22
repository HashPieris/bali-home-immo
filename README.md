# Bali Home Immo - Property Listing Platform

Professional property listing platform for Bali real estate. Showcases villa inventory with interactive image galleries, responsive design, and structured data formatting for CMS integration.

## Overview

Bali Home Immo is a modern web application designed to present property listings with emphasis on visual presentation and seamless user experience across devices. The platform implements a modular architecture with separation of concerns, featuring individual property cards with multi-image galleries, detailed specifications, and JSON-formatted backend mapping.

## Directory Structure

```
bali-home-immo/
├── index.html                 # Entry point with all property listings
├── css/
│   ├── variables.css          # Design tokens (colors, typography scales)
│   ├── styles.css             # Component styling (header, cards, footer)
│   ├── slider.css             # Image gallery component styles
│   └── responsive.css         # Breakpoint definitions (700px, 480px)
├── js/
│   └── slider.js              # Image gallery state management and controls
├── components/                # Documentation templates (reference only)
│   ├── header.html
│   ├── hero.html
│   ├── card-template.html
│   └── footer.html
├── assets/
│   ├── images/                # Property images (bali1-15.jpg)
│   └── icons/                 # UI icons
├── STRUCTURE.md               # Technical architecture documentation
├── ASSETS.md                  # Asset organization reference
└── README.md                  # This file
```

## Core Features

### Image Gallery System
Each property card includes a 3-image slider with the following capabilities:
- Keyboard navigation (arrow keys for prev/next)
- Click controls (prev/next buttons)
- Dot indicators for direct slide navigation
- Image counter display
- Circular navigation (loops at start/end)

### Design System
Centralized design token management through CSS custom properties:
- Color palette: Navy (#0d1f2d), Gold (#b8955a), Cream (#f5f0e8), Forest, Sand, Muted
- Typography: Cormorant Garamond (display), DM Sans (interface)
- Spacing and sizing scales defined in variables.css
- Consistent badge styling for property attributes

### Responsive Design
Multi-breakpoint responsive layout:
- Desktop: 4-column CSS Grid with 340px minimum width
- Tablet (max 700px): 2-column adaptive layout
- Mobile (max 480px): Single column full-width display
- Touch-friendly controls for all devices

### Data Structure
Property listings include structured JSON mapping for backend integration:
- Unique property identifiers
- Pricing in IDR and USD with negotiation flags
- Rental yield calculations
- Specifications and metadata
- Legal documentation status

## Installation and Usage

### Quick Start
Open index.html directly in a web browser, or run a local development server:

```bash
python -m http.server 8000
```

Then navigate to `http://localhost:8000`

### Adding a New Property

1. Locate `<div class="listings">` container in index.html
2. Add new card structure before the closing `</div>` tag
3. Update property details: location, title, price, specifications, images
4. Add image references to assets/images/ directory
5. Register slider state in js/slider.js:

```javascript
let sliderState = {
  // existing entries...
  propertyId: { current: 0, total: 3 }
};
```

### Modifying the Design System

Edit css/variables.css to update colors:

```css
:root {
  --navy: #0d1f2d;
  --gold: #b8955a;
  --cream: #f5f0e8;
  --forest: #1a4d2e;
  --sand: #d4a574;
}
```

Changes apply globally to all components through CSS inheritance.

## Technical Specifications

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Image Requirements
- Format: JPEG recommended for compression
- Dimensions: 600x400px optimal (aspect ratio 3:2)
- Color space: sRGB
- Naming convention: bali{n}.jpg (e.g., bali1.jpg, bali2.jpg)

### Performance Considerations
- CSS Grid for efficient layout calculation
- CSS transforms for smooth slider transitions (GPU accelerated)
- External fonts loaded from Google Fonts CDN
- Minification recommended for production

## Deployment

The platform is tested for compatibility with:
- GitHub Pages (static hosting)
- Netlify (build-free deployment)
- Vercel (serverless platform)
- Traditional shared hosting (FTP/SFTP)

### Production Optimization
- Minify CSS and JavaScript files
- Convert images to WebP format with fallbacks
- Enable gzip compression on server
- Implement lazy loading for images below viewport

## File Dependencies

- index.html requires: css/variables.css, css/styles.css, css/slider.css, css/responsive.css, js/slider.js
- js/slider.js requires: DOM elements with specific ID patterns (slider-{id}, slider-count-{id}, slider-dots-{id})
- All CSS files use @import for proper cascading order

## Maintenance

### Adding/Removing Properties
Update the hero statistics in index.html when property count changes:
```html
<span class="number">5</span><span class="label">Properties</span>
```

### Image Gallery Troubleshooting
Verify slider registration in js/slider.js and confirm image paths use correct relative URL format: `./assets/images/filename.jpg`

## Project Information

Built as technical assessment demonstrating front-end development practices including semantic HTML structure, modular CSS architecture, vanilla JavaScript state management, responsive design patterns, and professional code organization.

