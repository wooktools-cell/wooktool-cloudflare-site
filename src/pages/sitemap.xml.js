import { catalogPages, productRoutes, site } from "../siteData.js";
import { cmsBlogPosts } from "../blogData.js";

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

const uniquePaths = [
  ...new Set([...staticPaths, ...productCatalogPagePaths, ...productPaths, ...cmsBlogPaths])
];

export function GET() {
  const urls = uniquePaths
    .map((path) => `  <url><loc>${new URL(path, site.domain).toString()}</loc></url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
