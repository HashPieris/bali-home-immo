Bali Home Immo
Property listing platform for villas for sale in Bali. Built as a technical assessment for Web Developer position.

Project Structure
text
bali-home-immo/
├── index.html
├── css/
│   ├── variables.css      # Colors & design tokens
│   ├── styles.css         # Main styling
│   ├── slider.css         # Image gallery
│   └── responsive.css     # Breakpoints
├── js/
│   └── slider.js          # Gallery logic
├── components/
│   ├── header.html
│   ├── hero.html
│   ├── card-template.html
│   └── footer.html
└── assets/
    ├── images/
    └── icons/
Features
Image Slider per Property
Each property card has a 3-slide image gallery. Smooth transitions, navigation buttons, dot indicators, and keyboard arrows support.

Design System
Centralized color variables, consistent spacing, typography using Cormorant Garamond and DM Sans.

Responsive
Desktop grid, tablet adaptive, mobile single column.

Getting Started
Open index.html in a browser, or run a local server:

bash
python -m http.server 8000
Then visit http://localhost:8000

Adding a New Property
Copy the card template from components/card-template.html

Paste inside <div class="listings"> container

Update the placeholders with your property data

Register the new slider in js/slider.js:

javascript
sliderState = {
  // existing entries...
  newPropertyId: { current: 0, total: 3 }
};
Customizing Styles
Edit css/variables.css for colors:

css
:root {
  --navy:    #0d1f2d;
  --gold:    #b8955a;
  --cream:   #f5f0e8;
}
Browser Support
Chrome, Firefox, Safari, Edge (latest 2 versions). Mobile browsers included.

Future Plans
JSON-driven card generation

Property filtering and search

Image lazy loading

Admin panel for listings

Deployment
Tested with GitHub Pages, Netlify, and Vercel. For production, consider minifying CSS and optimizing images to WebP format.

Technical assessment for Bali Home Immo

