Public folder SEO & icon recommendations for Ethiraj College
--------------------------------------------------------

Place the following files in `public/` before building and deploying. Use high-quality, compressed images (PNG or SVG) and ensure filenames match references in `index.html` and `manifest.json`.

- favicon.ico                    — legacy root favicon required by Google and some crawlers
- favicon-16x16.png             — 16x16 PNG
- favicon-32x32.png             — 32x32 PNG
- apple-touch-icon.png          — 180x180 PNG for iOS home screen
- android-chrome-192x192.png    — 192x192 PNG for Android / manifest
- android-chrome-512x512.png    — 512x512 PNG for Android / manifest
- mstile-150x150.png            — Windows tile image
- safari-pinned-tab.svg         — SVG mask-icon for Safari pinned tabs
- social-share.png              — 1200x630 Open Graph/Twitter large image
- social-square.png             — 800x800 square social image (profile previews)
- logo.png                      — canonical logo used in JSON-LD and other metadata
- manifest.json                 — app manifest (already provided)
- robots.txt                    — restrict or allow crawlers (add per environment)
- sitemap.xml                   — sitemap listing public URLs (generate and update)

Icon generation tips
---------------------
- Use a favicon generator (e.g., RealFaviconGenerator) or scripts to export required sizes.
- Keep PNGs optimized (use `pngquant`/`oxipng`) and SVGs simple.
- Social share image: export at 1200x630 (JPEG/PNG), include centered logo and readable text.

Notes
-----
- Ensure `homepage` is set in package.json to `https://ethirajcollege.edu.in` so `%PUBLIC_URL%` resolves.
- Place any Google verification HTML files at `public/` root (e.g., `googlexxxxxx.html`) for HTML-file verification.
- Update `social-share.png` per page-level content where feasible by using server-side rendering or prerender pipelines.
