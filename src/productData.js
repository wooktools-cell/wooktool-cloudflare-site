import { categorySeoDefaults, productSeoEnhancements } from "./productSeoEnhancements.js";

const productModules = import.meta.glob("./cms/products/*.json", { eager: true });

const normalizeSpecs = (specs = []) => {
  if (Array.isArray(specs)) {
    return specs.reduce((result, item) => {
      if (item?.label) {
        result[item.label] = item.value || "";
      }
      return result;
    }, {});
  }

  return specs;
};

const normalizeTextList = (items = []) =>
  items
    .map((item) => {
      if (typeof item === "string") {
        return item;
      }
      return item?.value || item?.text || item?.point || item?.note || item?.image || "";
    })
    .filter(Boolean);

const normalizeProduct = (product) => {
  const enhancement = productSeoEnhancements[product.slug] || {};
  const categoryDefault = categorySeoDefaults[product.category] || {};
  const merged = { ...product, ...enhancement };

  return {
    ...merged,
    detailImages: normalizeTextList(merged.detailImages),
    sellingPoints: normalizeTextList(merged.sellingPoints),
    specs: normalizeSpecs(merged.specs),
    quality: normalizeTextList(merged.quality),
    targetBuyers: merged.targetBuyers || "Importers, distributors, wholesalers, and private-label brands",
    keywords: normalizeTextList(merged.keywords || categoryDefault.keywords),
    buyerFit: merged.buyerFit || categoryDefault.buyerFit || [],
    inquiryChecklist: normalizeTextList(merged.inquiryChecklist || categoryDefault.inquiryChecklist)
  };
};

const chunkProducts = (products, size) =>
  Array.from({ length: Math.ceil(products.length / size) }, (_, index) => ({
    page: index + 1,
    href: `/products/page/${index + 1}/`,
    products: products.slice(index * size, index * size + size)
  }));

const allProducts = Object.values(productModules)
  .map((module) => normalizeProduct(module.default || module))
  .sort((a, b) => (a.order || 999) - (b.order || 999));

export const productRoutes = allProducts;

export const catalogProducts = allProducts.filter((product) => !product.excludeFromCatalog);

export const catalogPages = chunkProducts(catalogProducts, 5);

export const categoryCatalogs = {
  "Tape Measures": catalogProducts.filter((product) => product.category === "Tape Measures"),
  "Utility Knives": catalogProducts.filter((product) => product.category === "Utility Knives"),
  "Screwdriver Sets": catalogProducts.filter((product) => product.category === "Screwdriver Sets")
};
