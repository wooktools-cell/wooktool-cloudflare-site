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

const normalizeProduct = (product) => ({
  ...product,
  detailImages: normalizeTextList(product.detailImages),
  sellingPoints: normalizeTextList(product.sellingPoints),
  specs: normalizeSpecs(product.specs),
  quality: normalizeTextList(product.quality),
  targetBuyers: product.targetBuyers || "Importers, distributors, wholesalers, and private-label brands"
});

const chunkProducts = (products, size) =>
  Array.from({ length: Math.ceil(products.length / size) }, (_, index) => ({
    page: index + 1,
    href: `/products/page/${index + 1}/`,
    products: products.slice(index * size, index * size + size)
  }));

export const catalogProducts = Object.values(productModules)
  .map((module) => normalizeProduct(module.default || module))
  .sort((a, b) => (a.order || 999) - (b.order || 999));

export const catalogPages = chunkProducts(catalogProducts, 5);

export const categoryCatalogs = {
  "Tape Measures": catalogProducts.filter((product) => product.category === "Tape Measures").slice(0, 5),
  "Utility Knives": catalogProducts.filter((product) => product.category === "Utility Knives").slice(0, 5),
  "Screwdriver Sets": catalogProducts.filter((product) => product.category === "Screwdriver Sets").slice(0, 5)
};
