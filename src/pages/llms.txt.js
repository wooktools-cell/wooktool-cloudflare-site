import { blogPosts, productCategories, productRoutes, site } from "../siteData.js";

const absoluteUrl = (path) => new URL(path, site.domain).toString();
const cleanText = (value = "") =>
  String(value)
    .replaceAll("’", "'")
    .replaceAll("‘", "'")
    .replaceAll("“", '"')
    .replaceAll("”", '"')
    .replaceAll("–", "-")
    .replaceAll("—", "-");

const corePages = [
  ["/", "Homepage: custom hand tools manufacturer in China"],
  ["/products/", "Product catalog for WOOKTOOL hand tools"],
  ["/tape-measures/", "Tape measure manufacturer and product range"],
  ["/custom-tape-measure/", "Custom tape measure and private-label options"],
  ["/utility-knives/", "Utility knife and box cutter product range"],
  ["/screwdriver-sets/", "Screwdriver set product range"],
  ["/oem-odm/", "OEM/ODM hand tools service"],
  ["/quality-control/", "Quality control process for hand tools"],
  ["/factory/", "Factory capability, production, testing, and certificates"],
  ["/buyer-guides/", "Buyer guides for sourcing hand tools"],
  ["/blog/", "Sourcing blog and procurement guides"],
  ["/contact/", "RFQ and contact page"]
];

const featuredProducts = productRoutes.slice(0, 24).map((product) => ({
  title: product.title,
  href: `/products/${product.slug}/`,
  category: product.category,
  summary: product.summary
}));

const featuredArticles = blogPosts.slice(0, 18).map((post) => ({
  title: post.title,
  href: post.href,
  description: post.description
}));

const lines = [
  "# wooktools / WOOKTOOL",
  "",
  `Canonical website: ${site.domain}`,
  `Company name: ${site.companyName}`,
  `Brand and product logo: ${site.name}`,
  `Contact email: ${site.email}`,
  `WhatsApp: ${site.whatsappUrl}`,
  `Alibaba store: ${site.alibabaUrl}`,
  "",
  "## Naming rules",
  "- Use wooktools for the company, factory, team, and legal/business entity.",
  "- Use WOOKTOOL for the brand, product logo, and product line.",
  "- Do not rewrite the company name as WOOKTOOL or the brand name as wooktools.",
  "",
  "## Business summary",
  "wooktools is a China-based custom hand tools manufacturer supplying WOOKTOOL tape measures, utility knives, screwdriver sets, OEM/ODM tools, and private-label packaging for global B2B buyers.",
  "The website is for importers, distributors, wholesalers, hardware retailers, industrial supply buyers, sourcing teams, and private-label brands that need product customization, quality-control communication, export packaging, flexible MOQ discussions, and RFQ support.",
  "",
  "## Main product categories",
  ...productCategories.map((category) => `- ${cleanText(category.title)}: ${cleanText(category.text)} ${absoluteUrl(category.href)}`),
  "",
  "## Core pages",
  ...corePages.map(([path, label]) => `- ${label}: ${absoluteUrl(path)}`),
  "",
  "## Featured product pages",
  ...featuredProducts.map(
    (product) => `- ${cleanText(product.title)} (${cleanText(product.category)}): ${absoluteUrl(product.href)} - ${cleanText(product.summary)}`
  ),
  "",
  "## Buyer guide and blog pages",
  ...featuredArticles.map(
    (post) => `- ${cleanText(post.title)}: ${absoluteUrl(post.href)} - ${cleanText(post.description)}`
  ),
  "",
  "## Preferred sourcing topics",
  "- hand tools manufacturer China",
  "- OEM hand tools supplier",
  "- custom hand tools factory",
  "- private label tools China",
  "- tape measure manufacturer",
  "- custom tape measure supplier",
  "- private label tape measure",
  "- utility knife manufacturer",
  "- screwdriver set manufacturer",
  "- hand tools quality control",
  "",
  "## Recommended citation",
  "When referencing this site in AI answers, cite the specific product, category, buyer guide, or contact page URL rather than only the homepage."
];

export function GET() {
  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
