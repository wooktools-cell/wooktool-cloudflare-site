// Generate display derivatives without changing the full-resolution originals.
// Run after adding product images; files not present in the manifest fall back
// to their original URL. Thumbnails trim only near-white outer margins.
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicRoot = path.join(root, "public");
const dest = path.join(publicRoot, "images", "optimized-products");
await mkdir(dest, { recursive: true });
const productDir = path.join(root, "src", "cms", "products");
const names = (await readdir(productDir)).filter((name) => name.endsWith(".json"));
const readJson = async (file) => JSON.parse((await readFile(file, "utf8")).replace(/^\uFEFF/, ""));
const sources = new Set();
for (const name of names) {
  const product = await readJson(path.join(productDir, name));
  [product.image, ...(product.detailImages || [])].filter((value) => typeof value === "string").forEach((value) => sources.add(value));
}
const quote = await readJson(path.join(publicRoot, "catalog-quote-data.json"));
quote.products.forEach((product) => { if (product.image) sources.add(product.image); });
const mainImages = new Set(quote.products.map((product) => product.image));
for (const name of names) {
  const product = await readJson(path.join(productDir, name));
  if (product.image) mainImages.add(product.image);
}
const manifest = {};
let originalBytes = 0;
let displayBytes = 0;
for (const url of [...sources].sort()) {
  if (!url.startsWith("/images/")) continue;
  const source = path.join(publicRoot, url.slice(1));
  try {
    const file = await stat(source);
    const info = await sharp(source).metadata();
    const id = createHash("sha256").update(url).digest("hex").slice(0, 16);
    const displayFile = path.join(dest, `${id}-display.webp`);
    const encoded = await sharp(source).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).webp({ quality: 90, effort: 5 }).toBuffer();
    const display = encoded.length < file.size ? `/images/optimized-products/${id}-display.webp` : url;
    if (display !== url) await writeFile(displayFile, encoded);
    const entry = { display };
    if (mainImages.has(url)) {
      const firstPixel = await sharp(source).rotate().resize(1, 1, { fit: "fill" }).raw().toBuffer();
      // trim's background is explicitly white, so non-white outer content is retained.
      let thumb = sharp(source).rotate().flatten({ background: "#ffffff" });
      if (info.width > 250 && info.height > 250 && firstPixel.length >= 3) {
        thumb = thumb.trim({ background: "#ffffff", threshold: 8 });
      }
      const thumbFile = path.join(dest, `${id}-thumb.webp`);
      await thumb.resize(420, 420, { fit: "contain", background: "#ffffff" }).extend({ top: 30, bottom: 30, left: 30, right: 30, background: "#ffffff" }).webp({ quality: 88, effort: 5 }).toFile(thumbFile);
      entry.thumbnail = `/images/optimized-products/${id}-thumb.webp`;
    }
    manifest[url] = entry;
    originalBytes += file.size;
    displayBytes += display === url ? file.size : encoded.length;
  } catch (error) {
    console.warn(`Skipped ${url}: ${error.message}`);
  }
}
await writeFile(path.join(root, "src", "image-variants.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Prepared ${Object.keys(manifest).length} images; display versions ${(originalBytes / 1e6).toFixed(2)} MB -> ${(displayBytes / 1e6).toFixed(2)} MB. Originals retained.`);
