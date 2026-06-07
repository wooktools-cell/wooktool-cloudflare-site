# WOOKTOOL Cloudflare Pages B2B Independent Website

This is a static Astro website for WOOKTOOL, a custom tape measure and hand tool manufacturer in China. It is designed for B2B buyers including importers, wholesalers, distributors, hardware tool dealers, and private-label brands.

The site is prepared for Cloudflare Pages deployment and includes SEO metadata, reusable components, placeholder product images, a static RFQ form layout, blog starter pages, `robots.txt`, and `sitemap.xml`.

## Local Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Astro will print a local preview URL such as `http://localhost:4321`.

## Build

```bash
npm run build
```

The production files will be generated in:

```text
dist
```

## Preview Production Build

```bash
npm run preview
```

## Cloudflare Pages Deployment

Use these settings in Cloudflare Pages:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

See `CLOUDFLARE_DEPLOYMENT.md` for the full deployment checklist, including custom domain, HTTPS, and Google Search Console sitemap submission.

## Replace the Logo

Logo files are stored in:

```text
public/images/logo/
```

Replace these files with the final brand logo:

```text
wooktool-logo.svg
wooktool-logo-light.svg
```

If the logo file name changes, update the image paths in:

```text
src/components/Header.astro
src/components/Footer.astro
```

## Replace Product Images

Placeholder images are stored in:

```text
public/images/placeholder/
```

Real product images can be added to:

```text
public/images/products/
```

After adding real images, update product image paths in:

```text
src/siteData.js
```

You can also update page-specific images in the product pages under:

```text
src/pages/
```

## Replace Factory Images

Add real factory photos to:

```text
public/images/factory/
```

Then update the image paths in:

```text
src/pages/factory.astro
src/pages/about.astro
```

## Modify Contact Email and WhatsApp

Contact placeholders are controlled in:

```text
src/siteData.js
```

Update these fields:

```js
email: "winson@wooktools.com"
whatsapp: "+86 150 9060 8676"
whatsappUrl: "https://wa.me/8615090608676"
alibabaUrl: "https://your-alibaba-store-link.com"
```

The contact page and footer will update automatically.

## Update Domain and SEO URLs

The placeholder domain is:

```text
https://your-domain.com
```

Update it in:

```text
astro.config.mjs
src/siteData.js
public/robots.txt
public/sitemap.xml
```

Each page passes a unique SEO title and meta description through `BaseLayout`.

## Add a New Product Page

1. Create a new `.astro` page in `src/pages/`.
2. Use `BaseLayout` and provide a unique `title`, `description`, and `path`.
3. Add the new page to `navItems` or `productCategories` in `src/siteData.js` if it should appear in navigation or product cards.
4. Add the final URL to `public/sitemap.xml`.

Example:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout
  title="New Product Title | WOOKTOOL"
  description="Short SEO description for the new product page."
  path="/new-product/"
>
  <section class="page-intro">
    <div>
      <p class="eyebrow">Product</p>
      <h1>New Product Title</h1>
      <p>Short introduction for B2B buyers.</p>
    </div>
  </section>
</BaseLayout>
```

## Add a New Blog Article

1. Create a new `.astro` page in `src/pages/blog/`.
2. Add the article to `blogPosts` in `src/siteData.js`.
3. Add the final URL to `public/sitemap.xml`.

## RFQ Form Notes

The contact form is currently a static placeholder for Cloudflare Pages. It does not submit to a live backend yet.

Future form connection options are documented in:

```text
src/components/ContactForm.astro
```

Recommended options:

- Formspree
- Basin
- HubSpot Form
- Cloudflare Workers + Email API

## Project Structure

```text
wooktool-cloudflare-site/
|-- public/
|   |-- images/
|   |   |-- logo/
|   |   |-- products/
|   |   |-- factory/
|   |   `-- placeholder/
|   |-- catalog/
|   |-- robots.txt
|   `-- favicon.svg
|-- src/
|   |-- components/
|   |-- layouts/
|   |-- pages/
|   |   `-- blog/
|   |-- styles/
|   `-- siteData.js
|-- astro.config.mjs
|-- package.json
|-- README.md
`-- CLOUDFLARE_DEPLOYMENT.md
```
