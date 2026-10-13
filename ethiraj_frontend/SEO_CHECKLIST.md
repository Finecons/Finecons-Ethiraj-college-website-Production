SEO checklist — Ethiraj College (production)
-------------------------------------------

Use this checklist when preparing a production deploy.

- **Set PUBLIC_URL/homepage**: add `"homepage": "https://ethirajcollege.edu.in"` to package.json so `%PUBLIC_URL%` resolves.
- **Canonical tags**: ensure every important page has a unique canonical tag.
- **Meta descriptions**: unique, descriptive meta descriptions (≤160 chars) per page.
- **Title tags**: unique, concise titles with brand at end (e.g., `Page Title | Ethiraj College`).
- **Open Graph & Twitter**: provide `og:` and `twitter:` tags with high-quality images (1200x630).
- **Structured data**: include JSON-LD Organization/College markup; validate in Rich Results test.
- **Sitemap**: generate and place `/sitemap.xml`; submit to Google Search Console.
- **robots.txt**: create and tune for production; disallow staging if necessary.
- **HTTPS**: ensure TLS certificate, HSTS, and HTTP->HTTPS redirects are configured at server/CDN.
- **Performance**: compress images, enable Brotli/GZIP, use CDN for static assets, and set cache headers.
- **Mobile optimization**: responsive layout, viewport tag (already included), and mobile usability checks.
- **Accessibility**: add skip links, alt text for images, semantic HTML, and ARIA where needed.
- **PWA**: manifest and icons present; register a service worker if offline support desired.
- **Analytics & Consent**: add GA4/GTM and implement consent management (GDPR/CCPA) before tracking.
- **Security headers**: add Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
- **Testing**: run Lighthouse, PageSpeed Insights, and structured data tests; fix issues flagged.

Optional (enterprise)
---------------------
- Consider server-side rendering (Next.js) or prerendering for crawlers to index content-rich pages.
- Add hreflang for multi-language sites.
- Use canonical headers and link rel=alternate for mobile/AMP variants if required.
