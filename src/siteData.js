export const site = {
  name: "WOOKTOOL",
  domain: "https://your-domain.com",
  email: "sales@your-domain.com",
  whatsapp: "+86-000-0000-0000",
  whatsappUrl: "https://wa.me/8600000000000",
  alibabaUrl: "https://your-alibaba-store-link.com",
  description:
    "WOOKTOOL is a custom tape measure and hand tool manufacturer in China serving importers, wholesalers, distributors, and private-label brands."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Tape Measures", href: "/tape-measures/" },
  { label: "Utility Knives", href: "/utility-knives/" },
  { label: "Screwdriver Sets", href: "/screwdriver-sets/" },
  { label: "OEM/ODM", href: "/oem-odm/" },
  { label: "Factory", href: "/factory/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];

export const productCategories = [
  {
    title: "Tape Measures",
    href: "/tape-measures/",
    image: "/images/products/catalog/heavy-duty-tape-measure-main.webp",
    alt: "WOOKTOOL steel tape measure product category for B2B buyers",
    text: "Steel tape measures with OEM logo, shell color, tape length, hook, and packaging options.",
    subcategories: [
      { label: "Heavy Duty Tape Measures", href: "/products/heavy-duty-tape-measure/" },
      { label: "Compact Tape Measures", href: "/products/compact-tape-measure/" },
      { label: "Custom Logo Tape Measures", href: "/products/custom-logo-tape-measure/" },
      { label: "Wide Blade Tape Measures", href: "/products/wide-blade-tape-measure/" },
      { label: "Pocket Tape Measures", href: "/products/pocket-tape-measure/" }
    ]
  },
  {
    title: "Utility Knives",
    href: "/utility-knives/",
    image: "/images/products/catalog/heavy-duty-utility-knife-main.webp",
    alt: "WOOKTOOL utility knife product category for importers and distributors",
    text: "Box cutters and utility knives for retail, industrial, hardware, and private-label programs.",
    subcategories: [
      { label: "Heavy Duty Utility Knives", href: "/products/heavy-duty-utility-knife/" },
      { label: "Folding Utility Knives", href: "/products/folding-utility-knife/" },
      { label: "Snap-Off Utility Knives", href: "/products/snap-off-utility-knife/" },
      { label: "Safety Utility Knives", href: "/products/safety-utility-knife/" },
      { label: "Replacement Blades", href: "/products/replacement-utility-knife-blades/" }
    ]
  },
  {
    title: "Screwdriver Sets",
    href: "/screwdriver-sets/",
    image: "/images/products/catalog/screwdriver-set-main.webp",
    alt: "WOOKTOOL screwdriver set product category with packaging customization",
    text: "Screwdriver sets with handle, bit, case, blister card, and gift-box customization.",
    subcategories: [
      { label: "Screwdriver Sets", href: "/products/screwdriver-set/" },
      { label: "Household Screwdriver Sets", href: "/products/household-screwdriver-set/" },
      { label: "Multi-Bit Screwdriver Sets", href: "/products/multi-bit-screwdriver-set/" },
      { label: "Ratchet Screwdriver Sets", href: "/products/ratchet-screwdriver-set/" },
      { label: "Hex Key Wrench Sets", href: "/products/hex-key-wrench-set/" }
    ]
  },
  {
    title: "OEM/ODM Hand Tools",
    href: "/oem-odm/",
    image: "/images/products/oem-odm-1000.png",
    alt: "WOOKTOOL OEM and ODM hand tool solutions for private-label programs",
    text: "Custom hand tool development from concept, sampling, packaging, production, QC, and shipment.",
    subcategories: [
      { label: "Private Label Tools", href: "/oem-odm/" },
      { label: "Custom Packaging", href: "/products/screwdriver-set/" },
      { label: "Sample Development", href: "/contact/" }
    ]
  }
];

export { catalogProducts, catalogPages, categoryCatalogs } from "./productData.js";

export const sellingPoints = [
  "Factory-direct manufacturing",
  "OEM/ODM customization",
  "Flexible MOQ",
  "Quality control before shipment",
  "Packaging customization",
  "Reliable lead time",
  "Support for importers, wholesalers, and private-label brands"
];

export const capabilities = [
  "Logo customization",
  "Color customization",
  "Blade and tape customization",
  "Retail packaging customization",
  "Product development support",
  "Private-label export service"
];

export const qcSteps = [
  "Raw material inspection",
  "Production process inspection",
  "Finished product inspection",
  "Packaging inspection",
  "Pre-shipment inspection"
];

export const rfqChecklist = [
  "Product type and target market",
  "Estimated order quantity",
  "Logo and brand color requirements",
  "Packaging style and barcode needs",
  "Target price or reference product",
  "Required delivery schedule"
];

export const blogPosts = [
  {
    title: "How to Choose a Reliable Tape Measure Manufacturer in China",
    href: "/blog/choose-tape-measure-manufacturer/",
    description:
      "A practical sourcing checklist for importers comparing Chinese tape measure factories.",
    date: "2026-06-03"
  },
  {
    title: "Custom Tape Measures: What Importers Need to Know Before Ordering",
    href: "/blog/custom-tape-measures-guide/",
    description:
      "Key decisions for logo, shell color, tape length, blade finish, packaging, and MOQ.",
    date: "2026-06-03"
  },
  {
    title: "Tape Measure Accuracy Classes Explained for B2B Buyers",
    href: "/blog/tape-measure-accuracy-classes/",
    description:
      "A simple overview of tape measure accuracy classes and why they matter in B2B purchasing.",
    date: "2026-06-03"
  }
];
