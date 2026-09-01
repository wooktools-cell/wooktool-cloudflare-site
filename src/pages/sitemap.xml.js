import { catalogPages, productRoutes, site } from "../siteData.js";
import { cmsBlogPosts } from "../blogData.js";

const lastModified = "2026-09-01";

const staticPaths = [
  "/",
  "/about/",
  "/products/",
  "/tape-measures/",
  "/custom-tape-measure/",
  "/utility-knives/",
  "/screwdriver-sets/",
  "/oem-odm/",
  "/quality-control/",
  "/factory/",
  "/contact/",
  "/buyer-guides/",
  "/resources/tape-measure-rfq-quality-checklist/",
  "/blog/",
  "/blog/choose-tape-measure-manufacturer/",
  "/blog/custom-tape-measures-guide/",
  "/blog/tape-measure-accuracy-classes/"
];

const productPaths = productRoutes.map((product) => `/products/${product.slug}/`);
const productCatalogPagePaths = catalogPages
  .filter((page) => page.page > 1)
  .map((page) => page.href);
const cmsBlogPaths = cmsBlogPosts.map((post) => post.href);
const cmsBlogDateMap = new Map(cmsBlogPosts.map((post) => [post.href, post.date]));

const uniquePaths = [
  ...new Set([...staticPaths, ...productCatalogPagePaths, ...productPaths, ...cmsBlogPaths])
];

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const pageSignals = (path) => {
  if (path === "/") {
    return { priority: "1.0", changefreq: "weekly", lastmod: lastModified };
  }

  if (["/products/", "/tape-measures/", "/custom-tape-measure/", "/utility-knives/", "/screwdriver-sets/", "/oem-odm/", "/quality-control/", "/factory/", "/contact/", "/buyer-guides/", "/blog/"].includes(path)) {
    return { priority: "0.9", changefreq: "weekly", lastmod: lastModified };
  }

  if (path.startsWith("/products/")) {
    return { priority: "0.8", changefreq: "monthly", lastmod: lastModified };
  }

  if (path.startsWith("/blog/")) {
    return {
      priority: "0.7",
      changefreq: "monthly",
      lastmod: cmsBlogDateMap.get(path) || lastModified
    };
  }

  return { priority: "0.6", changefreq: "monthly", lastmod: lastModified };
};

export function GET() {
  const urls = uniquePaths
    .map((path) => {
      const signals = pageSignals(path);
      return [
        "  <url>",
        `    <loc>${escapeXml(new URL(path, site.domain).toString())}</loc>`,
        `    <lastmod>${escapeXml(signals.lastmod)}</lastmod>`,
        `    <changefreq>${signals.changefreq}</changefreq>`,
        `    <priority>${signals.priority}</priority>`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
