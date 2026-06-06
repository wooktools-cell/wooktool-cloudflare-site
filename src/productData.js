const productImage = (slug, name) => `/images/products/catalog/${slug}-${name}.webp`;

const commonQuality = [
  "Raw material inspection before manufacturing",
  "Assembly process and function testing",
  "Appearance, packaging, and quantity check before shipment",
  "Support for buyer-specific quality-control requirements"
];

const commonLeadTime = "Custom logo samples ready in about 3 days. Bulk lead time can be negotiated based on order quantity and packaging requirements.";
const commonTargetBuyers = "Importers, distributors, wholesalers, and private-label brands";

export const catalogProducts = [
  {
    slug: "heavy-duty-tape-measure",
    title: "Heavy Duty Tape Measure",
    category: "Tape Measures",
    image: productImage("heavy-duty-tape-measure", "main"),
    detailImages: [productImage("heavy-duty-tape-measure", "detail-1"), productImage("heavy-duty-tape-measure", "detail-2")],
    summary: "Heavy duty tape measure with shock-absorbing rubber case, high-carbon steel blade, custom logo and Pantone color options for importers, distributors, wholesalers, and private-label tool brands.",
    sellingPoints: ["Thick rubber shock-absorbing shell", "High-carbon steel tape blade", "Custom logo sticker and Pantone color accepted"],
    specs: {
      Length: "3m/10ft, 5m/16ft, 7.5m/25ft, 10m/33ft",
      Material: "High-carbon steel tape, ABS shell, nylon lanyard, stainless steel hook, belt clip",
      Customization: "Custom logo sticker and Pantone color accepted",
      Packaging: "OPP bag, color box, carton",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "compact-tape-measure",
    title: "Compact Tape Measure",
    category: "Tape Measures",
    image: productImage("compact-tape-measure", "main"),
    detailImages: [productImage("compact-tape-measure", "detail-1"), productImage("compact-tape-measure", "detail-2")],
    summary: "Compact tape measure with easy-read dual-side steel blade, magnetic hook, shockproof ABS case, and custom logo or color options for retail, hardware, and private-label sourcing programs.",
    sellingPoints: ["Easy-read both-side metal blade", "Magnetic hook and shockproof case", "Custom logo printing and Pantone color accepted"],
    specs: {
      Length: "3m/10ft, 5m/16ft, 7.5m/25ft",
      Material: "High-carbon steel tape, ABS shell, nylon lanyard, stainless steel hook, belt clip",
      Customization: "Custom logo printing and Pantone color accepted",
      Packaging: "OPP bag, color box, carton",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "custom-logo-tape-measure",
    title: "Custom Logo Tape Measure",
    category: "Tape Measures",
    image: productImage("custom-logo-tape-measure", "main"),
    detailImages: [productImage("custom-logo-tape-measure", "detail-1"), productImage("custom-logo-tape-measure", "detail-2")],
    summary: "Custom logo tape measure with compact shell, metric/imperial blade, finger brake, and clear bold markings, designed for OEM branding, packaging customization, and B2B promotional tool programs.",
    sellingPoints: ["Compact shell with finger brake", "Metric and imperial measuring blade", "Logo sticker and packaging customization accepted"],
    specs: {
      Length: "3m/10ft, 5m/16ft, 7.5m/25ft, 10m/33ft",
      Material: "High-carbon steel tape, ABS shell, nylon lanyard, stainless steel hook, belt clip",
      Customization: "Custom logo sticker and Pantone color accepted",
      Packaging: "OPP bag, color box, carton",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "wide-blade-tape-measure",
    title: "Wide Blade Tape Measure",
    category: "Tape Measures",
    image: productImage("wide-blade-tape-measure", "main"),
    detailImages: [productImage("wide-blade-tape-measure", "detail-1"), productImage("wide-blade-tape-measure", "detail-2")],
    summary: "Wide blade tape measure with ergonomic case, 0.14 mm thick steel blade, stable extension performance, and customizable logo, color, packaging, and specifications for construction and hardware buyers.",
    sellingPoints: ["Ergonomic case design", "Wide tape with 0.14 mm thickness", "Stable extension up to 2.8 m"],
    specs: {
      Length: "3m/10ft, 5m/16ft, 7.5m/25ft, 10m/33ft",
      Material: "High-carbon steel tape, ABS shell, nylon lanyard, stainless steel hook, belt clip",
      Customization: "Custom logo sticker and Pantone color accepted",
      Packaging: "OPP bag, color box, carton",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "pocket-tape-measure",
    title: "Pocket Tape Measure",
    category: "Tape Measures",
    image: productImage("pocket-tape-measure", "main"),
    detailImages: [productImage("pocket-tape-measure", "detail-1"), productImage("pocket-tape-measure", "detail-2")],
    summary: "Pocket tape measure with compact keychain design, ABS and PVC cover, carbon steel tape, and custom logo or color options for promotional gifts, retail programs, and private-label brands.",
    sellingPoints: ["Compact keychain design", "Good for promotion or gift programs", "Custom logo and color accepted"],
    specs: {
      Length: "1m/6ft",
      Material: "ABS with PVC cover, carbon steel tape",
      Customization: "Custom logo sticker and Pantone color accepted",
      Packaging: "OPP bag, color box, carton",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "heavy-duty-utility-knife",
    title: "Heavy Duty Utility Knife",
    category: "Utility Knives",
    image: productImage("heavy-duty-utility-knife", "main"),
    detailImages: [productImage("heavy-duty-utility-knife", "detail-1"), productImage("heavy-duty-utility-knife", "detail-2")],
    summary: "Heavy duty utility knife with quick-change retractable blade, alloy handle, built-in blade storage, extra blades, and custom logo or packaging options for industrial and hardware buyers.",
    sellingPoints: ["Quick-change retractable blade", "Built-in blade storage design", "Includes extra 18 mm blades"],
    specs: {
      Blade: "60mm x 18mm x 0.6mm",
      Material: "Alloy handle, high-carbon steel blade",
      Customization: "Custom logo printing and Pantone color accepted",
      Packaging: "Hanging card, blister packaging, customizable printing",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "folding-utility-knife",
    title: "Folding Utility Knife",
    category: "Utility Knives",
    image: productImage("folding-utility-knife", "main"),
    detailImages: [productImage("folding-utility-knife", "detail-1"), productImage("folding-utility-knife", "detail-2")],
    summary: "Folding utility knife with SK5 heavy duty blade, ABS handle, blade storage design, and extra blades, suitable for carton cutting, DIY use, retail packaging, and private-label tool programs.",
    sellingPoints: ["SK5 heavy duty folding box cutter", "Blade storage design with extra blades", "Suitable for cartons, cardboard, and boxes"],
    specs: {
      Blade: "60mm x 18mm x 0.6mm",
      Material: "ABS handle, high-carbon steel blade",
      Customization: "Custom logo printing and Pantone color accepted",
      Packaging: "Hanging card, blister packaging, customizable printing",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "snap-off-utility-knife",
    title: "Snap-Off Utility Knife",
    category: "Utility Knives",
    image: productImage("snap-off-utility-knife", "main"),
    detailImages: [productImage("snap-off-utility-knife", "detail-1"), productImage("snap-off-utility-knife", "detail-2")],
    summary: "Snap-off utility knife with automatic lock, built-in blade storage, replaceable 18 mm blades, custom handle color, logo printing, and blister packaging options for distributors and retailers.",
    sellingPoints: ["Automatic lock design", "Built-in storage box", "Includes replaceable blades"],
    specs: {
      Blade: "18mm snap-off blade",
      Material: "ABS handle, high-carbon steel blade",
      Customization: "Custom logo printing and Pantone color accepted",
      Packaging: "Hanging card, blister packaging, customizable printing",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "safety-utility-knife",
    title: "Safety Utility Knife",
    category: "Utility Knives",
    image: productImage("safety-utility-knife", "main"),
    detailImages: [productImage("safety-utility-knife", "detail-1"), productImage("safety-utility-knife", "detail-2")],
    summary: "Safety utility knife with heavy-duty cutting design, ABS/TPR handle, high-carbon steel blade, and customizable packaging for buyers needing practical cutting tools with quality-control support.",
    sellingPoints: ["25 mm extra heavy-duty cutting design", "Multi-purpose custom cutting tool", "Custom handle color and packaging accepted"],
    specs: {
      Blade: "18mm blade",
      Material: "ABS/TPR handle, high-carbon steel blade",
      Customization: "Custom logo printing and Pantone color accepted",
      Packaging: "Hanging card, blister packaging, customizable printing",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "replacement-utility-knife-blades",
    title: "Replacement Utility Knife Blades",
    category: "Utility Knives",
    image: productImage("replacement-utility-knife-blades", "main"),
    detailImages: [productImage("replacement-utility-knife-blades", "detail-1"), productImage("replacement-utility-knife-blades", "detail-2")],
    summary: "Replacement utility knife blades in 9 mm and 18 mm sizes, available in high-carbon steel, SK5, SK4, or SK2 materials, with customizable blade color, packaging, and barcode options.",
    sellingPoints: ["9 mm and 18 mm blade options", "High-carbon steel, SK5, SK4, or SK2 available", "Silver and black blade color options"],
    specs: {
      Blade: "18mm, 9mm",
      Material: "High-carbon steel, SK5, SK4, SK2",
      Customization: "Silver or black blade color, custom packaging options",
      Packaging: "Custom blade pack and carton options",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "screwdriver-set",
    title: "Screwdriver Set",
    category: "Screwdriver Sets",
    image: productImage("screwdriver-set", "main"),
    detailImages: [productImage("screwdriver-set", "detail-1"), productImage("screwdriver-set", "detail-2")],
    summary: "Screwdriver set with reversible dual-end design, magnetic head, tappable tail, chrome vanadium steel construction, and custom handle color or color box options for retail tool programs.",
    sellingPoints: ["7-piece screwdriver set", "Reversible dual-end design", "Magnetic head and tappable tail"],
    specs: {
      Sizes: "6 x 105mm, 6 x 130mm, 6 x 150mm, 8 x 200mm",
      Material: "Chrome vanadium steel",
      Customization: "Handle color accepted",
      Packaging: "Custom color boxes accepted",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "household-screwdriver-set",
    title: "Household Screwdriver Set",
    category: "Screwdriver Sets",
    image: productImage("household-screwdriver-set", "main"),
    detailImages: [productImage("household-screwdriver-set", "detail-1"), productImage("household-screwdriver-set", "detail-2")],
    summary: "Household screwdriver set with Phillips, slotted, and flat head options, non-slip grip, magnetizer support, chrome vanadium steel material, and custom packaging for home repair and DIY markets.",
    sellingPoints: ["Phillips, slotted, and flat head options", "Non-slip grip for home repair and DIY", "Magnetizer support"],
    specs: {
      Type: "Household screwdriver set",
      Material: "Chrome vanadium steel",
      Customization: "Handle color accepted",
      Packaging: "Custom color boxes accepted",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "multi-bit-screwdriver-set",
    title: "Multi-Bit Screwdriver Set",
    category: "Screwdriver Sets",
    image: productImage("multi-bit-screwdriver-set", "main"),
    detailImages: [productImage("multi-bit-screwdriver-set", "detail-1"), productImage("multi-bit-screwdriver-set", "detail-2")],
    summary: "Multi-bit screwdriver set with 12-in-1 ratchet design, switchable Phillips bits, portable tool kit format, chrome vanadium steel construction, and custom color box options for B2B buyers.",
    sellingPoints: ["12-in-1 ratchet screwdriver set", "Switchable multi-bit design", "Portable tool kit for home and DIY repairs"],
    specs: {
      "Head style": "Phillips 12 type",
      Material: "Chrome vanadium steel",
      Customization: "Handle color accepted",
      Packaging: "Custom color boxes accepted",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "ratchet-screwdriver-set",
    title: "Ratchet Screwdriver Set",
    category: "Screwdriver Sets",
    image: productImage("ratchet-screwdriver-set", "main"),
    detailImages: [productImage("ratchet-screwdriver-set", "detail-1"), productImage("ratchet-screwdriver-set", "detail-2")],
    summary: "Ratchet screwdriver set with adjustable length, reversible dual-end structure, chrome vanadium steel material, and custom handle color or packaging options for wholesalers and private-label brands.",
    sellingPoints: ["Multi-bit stubby screwdriver", "Adjustable length", "Reversible dual-end design"],
    specs: {
      Sizes: "100mm, 125mm, 150mm, 200mm, 250mm, 300mm",
      Material: "Chrome vanadium steel",
      Customization: "Handle color accepted",
      Packaging: "Custom color boxes accepted",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
  },
  {
    slug: "hex-key-wrench-set",
    title: "Hex Key Wrench Set",
    category: "Screwdriver Sets",
    image: productImage("hex-key-wrench-set", "main"),
    detailImages: [productImage("hex-key-wrench-set", "detail-1"), productImage("hex-key-wrench-set", "detail-2")],
    summary: "Hex key wrench set with long arm ball-end design, metric and standard size options, chrome vanadium steel construction, and customizable color or packaging for professional and retail buyers.",
    sellingPoints: ["Long arm ball-end Allen wrench design", "Metric and standard size options", "Silver or black color options"],
    specs: {
      Sizes: "1.5, 2, 2.5, 3, 4, 5, 6, 8, 10",
      Material: "Chrome vanadium steel",
      Customization: "Silver or black color options",
      Packaging: "Custom color boxes accepted",
      MOQ: "Flexible MOQ, to be confirmed by order details",
      "Lead time": commonLeadTime
    },
    quality: commonQuality,
    targetBuyers: commonTargetBuyers
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
