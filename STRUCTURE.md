# Project Architecture

## Overview

Bali Home Immo adalah property listing platform dengan modular architecture yang memisahkan concerns:

```
Presentation Layer (HTML)
         ↓
Styling Layer (CSS)
         ↓
Interaction Layer (JavaScript)
```

## Directory Structure Explained

### `/css` — Stylesheet Organization

**variables.css**
- Color scheme definition
- Typography settings
- Spacing/sizing tokens
- Used by: `styles.css` (via @import)

**styles.css**
- Component-level styling (header, cards, footer)
- Main layout (grid, flexbox)
- Typography & text styles
- Imports `variables.css` untuk access ke custom properties

**slider.css**
- Image gallery/carousel styles
- Button & indicator styling
- Animation/transition definitions
- Separate file untuk easy maintenance

**responsive.css**
- Mobile-first breakpoints (700px, 480px)
- Adaptive layout for different screen sizes
- Component-specific mobile optimizations

### `/js` — JavaScript Modules

**slider.js**
- Slider state management (sliderState object)
- Navigation functions:
  - `updateSlider(id)` — Update position & indicators
  - `sliderNext(id)` / `sliderPrev(id)` — Move slides
  - `sliderGoto(id, index)` — Jump to specific slide
- Keyboard event listeners
- JSDoc comments untuk developer experience

### `/components` — HTML References

Template files untuk dokumentasi & reusability:

**header.html**
- Logo + navigation bar
- Referenced di index.html line ~70

**hero.html**
- Main heading + stats section
- Referenced di index.html line ~85

**card-template.html**
- Reusable property card blueprint
- Includes slider + metadata display
- Copy/paste template untuk add new properties

**footer.html**
- Copyright & attribution
- Referenced di index.html end section

## How Files Connect

```
index.html
├── Links to: css/variables.css
├── Links to: css/styles.css
│   └── @imports: css/variables.css
├── Links to: css/slider.css
├── Links to: css/responsive.css
└── Links to: js/slider.js
```

**Load Order (Critical for Styling):**
1. Google Fonts (via @import)
2. variables.css (define custom properties)
3. styles.css (main styles, uses variables)
4. slider.css (gallery-specific styles)
5. responsive.css (mobile breakpoints)
6. js/slider.js (load last, DOM is ready)

## Component Architecture

### Card Component
```
┌─ card
│  ├─ card-img (height: 220px)
│  │  ├─ slider-container
│  │  │  ├─ slider-wrapper (flex container)
│  │  │  │  ├─ slider-item (image 1)
│  │  │  │  ├─ slider-item (image 2)
│  │  │  │  └─ slider-item (image 3)
│  │  │  ├─ slider-controls (buttons)
│  │  │  ├─ slider-indicators (dots)
│  │  │  └─ slider-counter (1/3)
│  │  ├─ badge-legality (top-right)
│  │  └─ card-img-label (bottom-left)
│  ├─ card-body
│  │  ├─ card-location
│  │  ├─ card-title
│  │  ├─ card-price
│  │  ├─ card-specs (tags)
│  │  └─ card-desc
│  └─ card-json (backend mapping)
```

### CSS Specificity Strategy

- **Base styles** in `styles.css` (low specificity)
- **Component-specific** in `slider.css` (medium specificity)
- **Responsive overrides** in `responsive.css` (using @media)
- **No !important** (avoid specificity wars)

### JavaScript Modularity

**sliderState object** — Extensible data structure
```javascript
let sliderState = {
  tabanan:    { current: 0, total: 3 },
  kerobokan:  { current: 0, total: 3 },
  seminyak:   { current: 0, total: 3 },
  // ... add more properties as needed
};
```

**Functions** — Polymorphic (work with any slider ID)
```javascript
sliderNext('tabanan');    // ✓ Works
sliderNext('kerobokan');  // ✓ Works
sliderNext('newId');      // ✓ Works (if state exists)
```

## Adding New Sliders

### Step 1: Update HTML
Add new card dengan unique `id`:
```html
<div class="slider-wrapper" id="slider-newproperty">
  <!-- images -->
</div>
<div id="slider-dots-newproperty">
  <!-- dots -->
</div>
```

### Step 2: Update JavaScript
Add to `sliderState`:
```javascript
let sliderState = {
  tabanan: { current: 0, total: 3 },
  newproperty: { current: 0, total: 3 }  // Add this
};
```

### Step 3: Optional - Update Keyboard Nav
```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') sliderNext('newproperty');  // Optional
  if (e.key === 'ArrowLeft') sliderPrev('newproperty');
});
```

## CSS Custom Properties (Variables)

All colors & tokens defined in one place:
```css
:root {
  --navy:    #0d1f2d;      /* Primary dark */
  --forest:  #1a3328;      /* Secondary green */
  --gold:    #b8955a;      /* Accent */
  --cream:   #f5f0e8;      /* Light background */
  --white:   #fdfcf9;      /* Main background */
  --muted:   #6b7280;      /* Text secondary */
  --border:  #ddd5c0;      /* Dividers */
}
```

### Usage in CSS:
```css
.card {
  background: var(--white);
  border: 1px solid var(--border);
}
```

### Benefits:
- 🎨 Change entire theme in one file
- 💪 Type-safe with CSS spec
- ⚡ No build tool required
- 🔄 Reusable throughout codebase

## Performance Considerations

### Optimizations
1. **CSS splitting** — Reduce main payload
2. **Lazy-load images** — Add `loading="lazy"` to `<img>`
3. **Minify for production** — Reduce file size
4. **Cache busting** — Add version query: `styles.css?v=1.0`

### Potential Improvements
- Convert images to WebP format
- Implement AVIF for next-gen browsers
- Add srcset for responsive images
- Use CSS Grid subgrid for complex layouts
- Add preload hints for critical fonts

## Maintenance Guidelines

### CSS Updates
- Always update variables.css first
- Keep component styles in styles.css
- Use slider.css only for gallery-specific rules
- Test responsive.css on actual devices

### JavaScript Updates
- Keep slider.js functions pure (no side effects)
- Add JSDoc comments for new functions
- Test keyboard navigation when adding sliders
- Update sliderState object structure in comments

### Adding New Components
1. Create CSS rules in styles.css
2. Create JS functions if interactive
3. Create HTML template in components/
4. Document in README.md & STRUCTURE.md
5. Test on multiple browsers/devices

---

**Architecture Pattern**: Modular Front-End with Separation of Concerns
