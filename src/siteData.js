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
    image: "/images/products/utility-knife-1000.png",
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
    image: "/images/products/screwdriver-set-1000.png",
    alt: "WOOKTOOL screwdriver set product category with packaging customization",
    text: "Screwdriver sets with handle, bit, case, blister card, and gift-box customization.",
    subcategories: [
      { label: "Precision Screwdriver Sets", href: "/products/precision-screwdriver-set/" },
      { label: "Household Screwdriver Sets", href: "/products/household-screwdriver-set/" },
      { label: "Multi-Bit Screwdriver Sets", href: "/products/multi-bit-screwdriver-set/" },
      { label: "Ratchet Screwdriver Sets", href: "/products/ratchet-screwdriver-set/" },
      { label: "Insulated Screwdriver Sets", href: "/products/insulated-screwdriver-set/" }
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
  },
  {
    slug: "wide-blade-tape-measure",
    title: "Wide Blade Tape Measure",
    category: "Tape Measures",
    image: "/images/products/custom-tape-measure-1000.png",
    summary: "Placeholder product page for wide blade tape measures for construction, contractor, and hardware retail programs.",
    specs: {
      Length: "5m, 7.5m, 8m, 10m optional",
      Blade: "Wide steel blade placeholder",
      Case: "Rubber-coated or ABS case placeholder",
      Packaging: "Blister card, color box, display box",
      Customization: "Logo, shell color, blade print, hook type"
    },
    quality: [
      "Blade standout and rewind review",
      "Hook riveting inspection",
      "Case impact and assembly check",
      "Retail packaging verification"
    ]
  },
  {
    slug: "pocket-tape-measure",
    title: "Pocket Tape Measure",
    category: "Tape Measures",
    image: "/images/products/custom-tape-measure-1000.png",
    summary: "Placeholder product page for pocket tape measures for promotional, DIY, and compact retail tool lines.",
    specs: {
      Length: "1m, 2m, 3m optional",
      Case: "Mini ABS case placeholder",
      Blade: "Steel or fiberglass tape placeholder",
      Packaging: "OPP bag, hang card, small color box",
      Customization: "Logo print, case color, barcode label"
    },
    quality: [
      "Compact rewind function check",
      "Printed scale readability review",
      "Logo position inspection",
      "Carton quantity and packing check"
    ]
  },
  {
    slug: "safety-utility-knife",
    title: "Safety Utility Knife",
    category: "Utility Knives",
    image: "/images/products/utility-knife-1000.png",
    summary: "Placeholder product page for safety utility knives with protected blade and controlled cutting functions.",
    specs: {
      Blade: "Protected or retractable blade placeholder",
      Handle: "Plastic or metal safety handle placeholder",
      Mechanism: "Auto-retract or guarded blade option",
      Packaging: "Blister card, color box, instruction insert",
      Customization: "Safety color, logo, warning label, barcode"
    },
    quality: [
      "Blade retraction function test",
      "Guard and handle assembly inspection",
      "Safety warning label check",
      "Packing and carton review"
    ]
  },
  {
    slug: "replacement-utility-knife-blades",
    title: "Replacement Utility Knife Blades",
    category: "Utility Knives",
    image: "/images/products/utility-knife-1000.png",
    summary: "Placeholder product page for replacement blade packs for snap-off, trapezoid, and heavy-duty utility knife programs.",
    specs: {
      Blade: "9mm, 18mm, 25mm, or trapezoid blade placeholder",
      Material: "Carbon steel or SK steel placeholder",
      Pack: "Tube, dispenser, blister card, or color box",
      Quantity: "5pcs, 10pcs, 50pcs, 100pcs optional",
      Customization: "Brand label, pack color, barcode, carton mark"
    },
    quality: [
      "Blade dimension and count check",
      "Sharpness and edge finish review",
      "Anti-rust packing inspection",
      "Retail label and barcode verification"
    ]
  },
  {
    slug: "ratchet-screwdriver-set",
    title: "Ratchet Screwdriver Set",
    category: "Screwdriver Sets",
    image: "/images/products/screwdriver-set-1000.png",
    summary: "Placeholder product page for ratchet screwdriver sets with bit selection, case layout, and retail packaging options.",
    specs: {
      Bits: "Common bit selection placeholder",
      Handle: "Ratchet handle placeholder",
      Case: "Storage case or blister card placeholder",
      Packaging: "Color box, gift box, display card",
      Customization: "Logo, bit layout, case color, insert card"
    },
    quality: [
      "Ratchet function and direction switch test",
      "Bit fit and hardness review",
      "Case layout and completeness check",
      "Packaging artwork verification"
    ]
  },
  {
    slug: "insulated-screwdriver-set",
    title: "Insulated Screwdriver Set",
    category: "Screwdriver Sets",
    image: "/images/products/screwdriver-set-1000.png",
    summary: "Placeholder product page for insulated screwdriver sets for electrical, hardware, and professional tool markets.",
    specs: {
      Pieces: "2pcs, 6pcs, 8pcs, or custom set placeholder",
      Handle: "Insulated handle placeholder",
      Shaft: "Insulated shaft and tip placeholder",
      Packaging: "Blister card, pouch, color box",
      Customization: "Handle color, logo, safety label, barcode"
    },
    quality: [
      "Insulation appearance inspection",
      "Tip size and finish review",
      "Handle bonding check",
      "Safety label and packing verification"
    ]
  }
];

export const catalogPages = [
  { page: 1, href: "/products/page/1/", products: catalogProducts.slice(0, 5) },
  { page: 2, href: "/products/page/2/", products: catalogProducts.slice(5, 10) }
];

export const categoryCatalogs = {
  "Tape Measures": catalogProducts.filter((product) => product.category === "Tape Measures").slice(0, 5),
  "Utility Knives": catalogProducts.filter((product) => product.category === "Utility Knives").slice(0, 5),
  "Screwdriver Sets": catalogProducts.filter((product) => product.category === "Screwdriver Sets").slice(0, 5)
};

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
