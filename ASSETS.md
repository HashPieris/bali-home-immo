# Assets Management Guide

## Image Guidelines

### Property Photos
- **Location**: `assets/images/`
- **Format**: JPEG or WebP (for modern browsers)
- **Size**: 600x400px minimum (for good quality)
- **Optimization**: Compress using TinyPNG or ImageOptim

### File Naming Convention
```
assets/images/property-{id}-{number}.jpg
```

Examples:
- `assets/images/property-tabanan-01.jpg`
- `assets/images/property-kerobokan-02.jpg`
- `assets/images/property-seminyak-03.jpg`

### Responsive Images (Future)
```html
<img 
  src="assets/images/property-tabanan-01.jpg"
  srcset="
    assets/images/property-tabanan-01-small.jpg 480w,
    assets/images/property-tabanan-01-medium.jpg 768w,
    assets/images/property-tabanan-01-large.jpg 1200w"
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
  alt="Property view"
/>
```

## SVG Icons

### Location**: `assets/icons/`
### Standard Icons Included:
- `logo.svg` — Brand logo
- `bed.svg` — Bedroom icon
- `bath.svg` — Bathroom icon
- `pool.svg` — Swimming pool icon

### Icon Styling
Icons are inline SVG dengan CSS custom properties:
```css
.spec-tag svg {
  color: var(--forest);
  width: 12px;
  height: 12px;
}
```

## Adding Images to Slider

### Option 1: External URL (Current)
```html
<div class="slider-item" style="background-image: url('https://images.unsplash.com/...');"></div>
```

### Option 2: Local File
```html
<div class="slider-item" style="background-image: url('./assets/images/property-tabanan-01.jpg');"></div>
```

### Option 3: CSS Background (Recommended)
```css
/* In styles.css or component-specific CSS */
.card-tabanan .slider-item:nth-child(1) {
  background-image: url('./assets/images/property-tabanan-01.jpg');
}

.card-tabanan .slider-item:nth-child(2) {
  background-image: url('./assets/images/property-tabanan-02.jpg');
}
```

## Compression Guidelines

### Before Upload
```bash
# Using ImageOptim (Mac)
imageoptim assets/images/

# Using TinyPNG API
# https://tinypng.com/developers

# Using ImageMagick
convert input.jpg -quality 85 -strip output.jpg

# Using ffmpeg for batch
ffmpeg -i input.jpg -q:v 5 output.jpg
```

### Target File Sizes
- **Large images** (1200w): 150-250 KB
- **Medium images** (768w): 80-150 KB
- **Small images** (480w): 30-80 KB
- **WebP format**: 30-40% smaller than JPEG

## CDN Configuration (Future)

### Recommended CDN Services
- **Cloudinary** — Image optimization + delivery
- **AWS CloudFront** — High performance CDN
- **Imgix** — Real-time image processing
- **Bunny CDN** — Affordable & fast

### Example with Cloudinary
```html
<!-- Original -->
<div class="slider-item" style="background-image: url('./assets/images/property-tabanan-01.jpg');"></div>

<!-- With Cloudinary -->
<div class="slider-item" style="background-image: url('https://res.cloudinary.com/YOUR_CLOUD/image/fetch/w_600,h_400,c_fill,q_auto/https://your-domain.com/assets/images/property-tabanan-01.jpg');"></div>
```

## Logo & Branding

### Logo Files
- `assets/icons/logo.svg` — Main logo (scalable)
- `assets/icons/logo-white.svg` — White version for dark backgrounds
- `assets/icons/favicon.ico` — Browser tab icon

### Usage in HTML
```html
<!-- In <head> -->
<link rel="icon" type="image/x-icon" href="./assets/icons/favicon.ico">

<!-- In header -->
<div class="logo-mark">
  <img src="./assets/icons/logo.svg" alt="Bali Home Immo" />
</div>
```

## Best Practices

✅ **DO:**
- Use descriptive file names
- Compress images before uploading
- Keep aspect ratios consistent
- Use WebP for better compression
- Organize images by property/category

❌ **DON'T:**
- Upload unoptimized images
- Use generic names like "image1.jpg"
- Mix different aspect ratios
- Store large files in git
- Use external hosting without permission

---

**Asset Storage**: Local files in `assets/` directory (can migrate to CDN later)
