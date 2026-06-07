import { catalogPages, catalogProducts, site } from "../siteData.js";
import { cmsBlogPosts } from "../blogData.js";

const cmsPageModules = import.meta.glob("../cms/pages/*.md", { eager: true });

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
  "/blog/",
  "/blog/choose-tape-measure-manufacturer/",
  "/blog/custom-tape-measures-guide/",
  "/blog/tape-measure-accuracy-classes/"
];

const slugFromPath = (path) => path.split("/").pop().replace(/\.md$/, "");

const cmsPagePaths = Object.entries(cmsPageModules).map(([path, module]) => {
  const slug = module.frontmatter.slug || slugFromPath(path);
  return `/pages/${slug}/`;
});

const productPaths = catalogProducts.map((product) => `/products/${product.slug}/`);
const catalogPagePaths = catalogPages.map((page) => page.href);
const cmsBlogPaths = cmsBlogPosts.map((post) => post.href);

const uniquePaths = [...new Set([...staticPaths, ...catalogPagePaths, ...productPaths, ...cmsBlogPaths, ...cmsPagePaths])];

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
