# Bali Home Immo — Modular Property Listing Platform

## Struktur Proyek

Proyek ini telah dimodularisasi untuk memastikan maintainability dan scalability yang lebih baik.

```
bali-home-immo/
├── index.html                  # Main entry point
├── css/                        # Stylesheet directory
│   ├── variables.css          # Color & design tokens
│   ├── styles.css             # Main stylesheets
│   ├── slider.css             # Image gallery styles
│   └── responsive.css         # Mobile-first breakpoints
├── js/                         # JavaScript directory
│   └── slider.js              # Image gallery functionality
├── components/                 # HTML template references
│   ├── header.html            # Header component (reference)
│   ├── hero.html              # Hero section (reference)
│   ├── card-template.html     # Property card template
│   └── footer.html            # Footer component (reference)
├── assets/                     # Static assets
│   ├── images/                # Property images
│   └── icons/                 # SVG icons/logos
├── README.md                  # This file
└── STRUCTURE.md               # Detailed architecture
```

## Fitur Utama

### ✨ Image Slider for Properties
- **3 slide gambar per property** dengan smooth transitions
- **Navigation controls**: Previous/Next buttons & dot indicators
- **Keyboard support**: Gunakan Arrow Keys untuk navigate
- **Responsive design**: Mobile-friendly controls

### 🎨 Modern Design System
- **Color variables** terpusat di `css/variables.css`
- **Typography**: Cormorant Garamond (serif) + DM Sans (sans-serif)
- **Consistent spacing** dan styling guidelines

### 📱 Fully Responsive
- Desktop: Full layout dengan grid 3 kolom
- Tablet: Adaptif layout
- Mobile: Single column dengan optimized controls

## Cara Menggunakan

### 1. **Menjalankan Project**
```bash
# Buka index.html di browser
open index.html
# atau via local server
python -m http.server 8000
# Buka http://localhost:8000
```

### 2. **Menambah Property Card Baru**
1. Buka file `components/card-template.html` untuk referensi
2. Copy template dan paste di dalam `<div class="listings">`
3. Ganti placeholder dengan data property:
   - `[ID]`: Identifier unik untuk slider (e.g., "kerobokan")
   - `[IMAGE_1]`, `[IMAGE_2]`, `[IMAGE_3]`: URL gambar
   - `[LOCATION]`, `[TITLE]`, `[PRICE]`: Property details
   - `[SPECS]`: Spesifikasi property
   - `[JSON_DATA]`: Backend JSON mapping

3. Update `js/slider.js` untuk add slider state:
```javascript
sliderState = {
  tabanan: { current: 0, total: 3 },
  kerobokan: { current: 0, total: 3 }  // <-- tambahkan ini
};
```

### 3. **Mengubah Warna & Styling**
Edit `css/variables.css`:
```css
:root {
  --navy:    #0d1f2d;      /* Primary color */
  --gold:    #b8955a;      /* Accent color */
  --cream:   #f5f0e8;      /* Background */
  /* ... etc ... */
}
```

### 4. **Responsive Breakpoints**
Edit `css/responsive.css` untuk mengubah layout pada berbagai ukuran layar.

## File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure & layout |
| `css/variables.css` | Design tokens (colors, spacing) |
| `css/styles.css` | Component styles (header, cards, footer) |
| `css/slider.css` | Image gallery CSS |
| `css/responsive.css` | Media queries & mobile optimization |
| `js/slider.js` | Image gallery interaction logic |
| `components/*.html` | HTML templates (reference only) |

## Browser Support

- Chrome/Edge (Latest 2 versions)
- Firefox (Latest 2 versions)
- Safari (Latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Development Notes

### Modular Architecture Benefits:
✅ **Easier maintenance** — Change CSS/JS tanpa affect HTML structure
✅ **Better performance** — Browser caches individual CSS files
✅ **Scalability** — Easy untuk add features/components
✅ **Collaboration** — Team dapat work pada different files

### Future Enhancements:
- Add data-driven card generation (JSON source)
- Implement property filtering & search
- Add image lazy-loading untuk performance
- Create admin panel untuk manage listings
- Integrate dengan database backend

## Build & Deployment

### Development:
```bash
# Use a local server
python -m http.server 8000
# atau
npx http-server
```

### Production:
- Minify CSS files using PostCSS or cssnano
- Optimize images using WebP format
- Add service worker untuk offline support
- Deploy ke GitHub Pages, Netlify, atau Vercel

## Credits

Built as a **Technical Assessment** for the Web Developer position at **Bali Home Immo**.

---

**Last Updated**: 2025
