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
    image: "/images/products/custom-tape-measure-1000.png",
    alt: "WOOKTOOL steel tape measure product category for B2B buyers",
    text: "Steel tape measures with OEM logo, shell color, tape length, hook, and packaging options.",
    subcategories: [
      { label: "Steel Tape Measures", href: "/products/page/1/" },
      { label: "Custom Tape Measures", href: "/custom-tape-measure/" },
      { label: "Heavy Duty Tape Measures", href: "/products/heavy-duty-tape-measure/" }
    ]
  },
  {
    title: "Utility Knives",
    href: "/utility-knives/",
    image: "/images/products/utility-knife-1000.png",
    alt: "WOOKTOOL utility knife product category for importers and distributors",
    text: "Box cutters and utility knives for retail, industrial, hardware, and private-label programs.",
    subcategories: [
      { label: "Heavy Duty Utility Knives", href: "/products/heavy-duty-utility-knife/" },
      { label: "Folding Utility Knives", href: "/products/folding-utility-knife/" },
      { label: "Replacement Blades", href: "/products/page/2/" }
    ]
  },
  {
    title: "Screwdriver Sets",
    href: "/screwdriver-sets/",
    image: "/images/products/screwdriver-set-1000.png",
    alt: "WOOKTOOL screwdriver set product category with packaging customization",
    text: "Screwdriver sets with handle, bit, case, blister card, and gift-box customization.",
    subcategories: [
      { label: "Precision Screwdriver Sets", href: "/products/precision-screwdriver-set/" },
      { label: "Household Screwdriver Sets", href: "/products/household-screwdriver-set/" },
      { label: "Bit Sets", href: "/products/multi-bit-screwdriver-set/" }
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
      { label: "Custom Packaging", href: "/products/oem-tool-kit/" },
      { label: "Sample Development", href: "/contact/" }
    ]
  }
];

export const catalogProducts = [
  {
    slug: "heavy-duty-tape-measure",
    title: "Heavy Duty Tape Measure",
    category: "Tape Measures",
    image: "/images/products/custom-tape-measure-1000.png",
    summary: "Placeholder product page for a heavy-duty tape measure with OEM branding and retail packaging options.",
    specs: {
      Length: "3m, 5m, 7.5m, 8m, 10m optional",
      Case: "ABS or rubber-coated case placeholder",
      Blade: "Steel blade with metric/inch printing placeholder",
      Packaging: "Blister card, color box, display box",
      Customization: "Logo, shell color, packaging artwork"
    },
    quality: [
      "Blade printing and readability inspection",
      "Lock and rewind function check",
      "Case assembly and drop-resistance review",
      "Packaging and barcode verification"
    ]
  },
  {
    slug: "compact-tape-measure",
    title: "Compact Tape Measure",
    category: "Tape Measures",
    image: "/images/products/custom-tape-measure-1000.png",
    summary: "Placeholder product page for compact measuring tape programs for retail, promotion, and importer catalogs.",
    specs: {
      Length: "2m, 3m, 5m optional",
      Case: "Compact ABS case placeholder",
      Blade: "Steel tape blade placeholder",
      Packaging: "Hang card or color box",
      Customization: "Logo print, shell color, barcode label"
    },
    quality: [
      "Tape extension and rewind test",
      "Logo position check",
      "Shell color consistency review",
      "Final packing inspection"
    ]
  },
  {
    slug: "custom-logo-tape-measure",
    title: "Custom Logo Tape Measure",
    category: "Tape Measures",
    image: "/images/products/custom-tape-measure-1000.png",
    summary: "Placeholder product page for private-label tape measures with logo and packaging customization.",
    specs: {
      Length: "5m, 7.5m, 8m optional",
      Case: "Brand color case placeholder",
      Blade: "Metric, inch, or dual-scale placeholder",
      Packaging: "Private-label blister card or box",
      Customization: "Logo, color, tape printing, carton mark"
    },
    quality: [
      "Artwork proofing before production",
      "Logo adhesion or print inspection",
      "Tape accuracy spot check",
      "Pre-shipment sample review"
    ]
  },
  {
    slug: "heavy-duty-utility-knife",
    title: "Heavy Duty Utility Knife",
    category: "Utility Knives",
    image: "/images/products/utility-knife-1000.png",
    summary: "Placeholder product page for heavy-duty utility knives for hardware and industrial supply buyers.",
    specs: {
      Blade: "18mm or 25mm blade placeholder",
      Handle: "ABS, zinc alloy, or aluminum placeholder",
      Lock: "Auto-lock or screw-lock option placeholder",
      Packaging: "Blister card, color box, display box",
      Customization: "Handle color, logo, replacement blade pack"
    },
    quality: [
      "Blade slide and lock function test",
      "Handle assembly inspection",
      "Blade sharpness and packing safety review",
      "Retail packaging check"
    ]
  },
  {
    slug: "folding-utility-knife",
    title: "Folding Utility Knife",
    category: "Utility Knives",
    image: "/images/products/utility-knife-1000.png",
    summary: "Placeholder product page for folding utility knives with private-label packaging options.",
    specs: {
      Blade: "Trapezoid blade placeholder",
      Handle: "Aluminum or zinc alloy placeholder",
      Mechanism: "Folding lock structure placeholder",
      Packaging: "Blister card or color box",
      Customization: "Logo, color, accessory blade pack"
    },
    quality: [
      "Folding action and lock test",
      "Blade replacement safety check",
      "Handle finish inspection",
      "Packaging drop and carton review"
    ]
  },
  {
    slug: "snap-off-utility-knife",
    title: "Snap-Off Utility Knife",
    category: "Utility Knives",
    image: "/images/products/utility-knife-1000.png",
    summary: "Placeholder product page for snap-off utility knives for office, DIY, and hardware channels.",
    specs: {
      Blade: "9mm, 18mm, or 25mm snap-off blade placeholder",
      Handle: "Plastic or metal body placeholder",
      Lock: "Slide lock placeholder",
      Packaging: "OPP bag, blister card, color box",
      Customization: "Logo, handle color, barcode label"
    },
    quality: [
      "Blade sliding smoothness test",
      "Lock holding review",
      "Blade segment inspection",
      "Final quantity and carton check"
    ]
  },
  {
    slug: "precision-screwdriver-set",
    title: "Precision Screwdriver Set",
    category: "Screwdriver Sets",
    image: "/images/products/screwdriver-set-1000.png",
    summary: "Placeholder product page for precision screwdriver sets with case and retail packaging customization.",
    specs: {
      Bits: "Multi-size precision bits placeholder",
      Handle: "Ergonomic precision handle placeholder",
      Case: "Plastic case or pouch placeholder",
      Packaging: "Color box, blister card, gift box",
      Customization: "Logo, case layout, insert card, barcode"
    },
    quality: [
      "Bit hardness and fit review",
      "Handle grip inspection",
      "Case opening and closing test",
      "Packing completeness check"
    ]
  },
  {
    slug: "household-screwdriver-set",
    title: "Household Screwdriver Set",
    category: "Screwdriver Sets",
    image: "/images/products/screwdriver-set-1000.png",
    summary: "Placeholder product page for household screwdriver sets for retail and distributor programs.",
    specs: {
      Pieces: "6pcs, 8pcs, 10pcs, or custom placeholder",
      Handle: "PP/TPR handle placeholder",
      Shaft: "CR-V or carbon steel placeholder",
      Packaging: "Blister card, rack, color box",
      Customization: "Handle color, logo, packaging artwork"
    },
    quality: [
      "Torque and handle assembly review",
      "Tip size and finish inspection",
      "Packaging position check",
      "Pre-shipment sampling"
    ]
  },
  {
    slug: "multi-bit-screwdriver-set",
    title: "Multi-Bit Screwdriver Set",
    category: "Screwdriver Sets",
    image: "/images/products/screwdriver-set-1000.png",
    summary: "Placeholder product page for multi-bit screwdriver sets with private-label case and packaging options.",
    specs: {
      Bits: "Common bit types placeholder",
      Handle: "Ratchet or standard handle placeholder",
      Case: "Custom storage case placeholder",
      Packaging: "Color box or blister card",
      Customization: "Case layout, logo, barcode, carton mark"
    },
    quality: [
      "Bit count and position check",
      "Handle function test",
      "Case durability review",
      "Final packaging inspection"
    ]
  },
  {
    slug: "oem-tool-kit",
    title: "OEM Hand Tool Kit",
    category: "OEM/ODM",
    image: "/images/products/oem-odm-1000.png",
    summary: "Placeholder product page for OEM hand tool kit programs with custom selection, packaging, and QC flow.",
    specs: {
      Scope: "Tape measure, knife, screwdriver, or mixed kit placeholder",
      Packaging: "Color box, pouch, case, display box",
      Branding: "Logo, color, insert card, barcode",
      MOQ: "To be confirmed by product mix",
      Customization: "Product selection, packaging artwork, carton mark"
    },
    quality: [
      "Component list confirmation",
      "Logo and packaging artwork review",
      "Assembly and completeness inspection",
      "Pre-shipment quality report placeholder"
    ]
  }
];

export const catalogPages = [
  { page: 1, href: "/products/page/1/", products: catalogProducts.slice(0, 5) },
  { page: 2, href: "/products/page/2/", products: catalogProducts.slice(5, 10) }
];

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
