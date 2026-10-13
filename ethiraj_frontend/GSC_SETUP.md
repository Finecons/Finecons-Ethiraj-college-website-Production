Google Search Console (GSC) — setup and verification
---------------------------------------------------

1) Create or sign in to a Google account and open Search Console: https://search.google.com/search-console

2) Add a property (recommended: Domain property)
   - Domain property (recommended): verifies the entire domain (example.com) via DNS TXT record. Use your DNS provider UI to add the TXT record Google provides.
   - URL-prefix: verifies a specific protocol + host (https://ethirajcollege.edu.in). You can verify via HTML file (place at `public/`), meta tag, Google Analytics, or Google Tag Manager.

3) DNS verification steps (domain property)
   - In GSC choose Domain and copy the TXT record value.
   - Log into your domain registrar (GoDaddy, Cloudflare, BigRock, etc.) and add the TXT value to DNS.
   - Wait for DNS propagation (can be minutes to hours), then click Verify.

4) HTML file verification (URL-prefix)
   - In GSC choose URL-prefix and pick HTML file method.
   - Download the verification file that Google provides and place it in `public/` (e.g., `googleXXXXXXXXXXXX.html`).
   - Deploy to production and visit `https://ethirajcollege.edu.in/googleXXXXXXXXXXXX.html` to confirm access.
   - In GSC click Verify.

5) Meta tag verification (alternative)
   - Copy the meta tag Google provides and paste into `public/index.html` (the placeholder is included in index.html).
   - Deploy and then click Verify in GSC.

6) Submit sitemap
   - Generate `sitemap.xml` listing all public URLs and place it at `public/sitemap.xml`.
   - In GSC > Sitemaps, enter `/sitemap.xml` and Submit.

7) Post-verification tasks
   - Use URL Inspection to request indexing for important pages.
   - Monitor Coverage and Mobile Usability reports and fix issues.
   - Monitor Performance, Core Web Vitals, and Enhancements (structured data) sections.

8) Notes and best-practices
   - Prefer Domain verification (single DNS TXT) for full coverage across subdomains.
   - After verification, ensure `robots.txt` does not block crawlers from important pages.
   - Keep sitemap up-to-date and resubmit when significant URL changes happen.
