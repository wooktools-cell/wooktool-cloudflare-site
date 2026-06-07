# Domain and SEO Launch Checklist

Use this checklist when `www.wooktools.com` is ready to replace the temporary Cloudflare Pages URL.

Current status: `www.wooktools.com` is connected to Cloudflare Pages. The site domain, CMS display URL, `robots.txt`, and sitemap URL have been switched to the canonical domain.

## Phase 1: Already prepared

- Keep `robots.txt` as `Disallow: /` while the site is still on the temporary `pages.dev` preview URL.
- Keep canonical URLs and sitemap URLs on the temporary preview domain until the custom domain opens correctly.
- Add legacy URL redirects in `public/_redirects` so old indexed pages can pass visitors to the closest new pages.

## Phase 2: After the custom domain is connected

- Confirm these URLs open correctly:
  - `https://www.wooktools.com/`
  - `https://www.wooktools.com/products/`
  - `https://www.wooktools.com/sitemap.xml`
  - `https://www.wooktools.com/admin/`
- Update the production site domain from `https://wooktool-cloudflare-site.pages.dev` to `https://www.wooktools.com`. Done.
- Update `public/robots.txt`:
  - Change `Disallow: /` to `Allow: /`. Done.
  - Change the sitemap URL to `https://www.wooktools.com/sitemap.xml`. Done.
- Update Decap CMS settings:
  - `base_url`. Done.
  - `site_url`. Done.
  - `display_url`. Done.
- Update the GitHub OAuth callback URL to:
  - `https://www.wooktools.com/callback`
- Configure redirects so non-canonical domains point to `https://www.wooktools.com`:
  - `https://wooktools.com/*`
  - `https://wooktool-cloudflare-site.pages.dev/*`
- Submit `https://www.wooktools.com/sitemap.xml` in Google Search Console.

## Phase 3: After Google starts crawling

- Watch Search Console for indexing, redirects, and 404 reports.
- Add extra redirects for any old URLs that appear in Search Console.
- Continue product-page SEO optimization on the final canonical domain.
