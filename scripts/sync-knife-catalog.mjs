// Sync the illustrated PDF's knife models using its extracted source data.
// Usage: node scripts/sync-knife-catalog.mjs <utility-knives.json>
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';

const source = process.argv[2];
if (!source) throw new Error('Provide the source utility-knives.json path');
const dataPath = 'public/catalog-quote-data.json';
const catalog = JSON.parse(await readFile(dataPath, 'utf8'));
const extracted = JSON.parse((await readFile(source, 'utf8')).replace(/^\uFEFF/, ''));
// WT-K03 is present in the extraction source but not in the supplied PDF.
const rows = extracted.products.filter((item) => item.model !== 'WT-K03');
if (rows.length !== 79) throw new Error(`Expected 79 PDF models, got ${rows.length}`);
const featured = ['WT-K54', 'WT-K13', 'WT-K11', 'WT-K08', 'WT-K05', 'WT-K15', 'WT-K23', 'AD223', 'AD87', '9mm286'];
const targetDir = 'public/images/catalog-quote/pdf-knives';
await mkdir(targetDir, { recursive: true });
const knives = [];
for (const item of rows) {
  const code = item.model.replace(/ Utility Knife$/i, '');
  const filename = `${code.replace(/[^a-z0-9-]/gi, '-')}${path.extname(item.imagePath).toLowerCase()}`;
  await copyFile(item.imagePath, path.join(targetDir, filename));
  const product = {
    family: 'knife', code,
    image: `/images/catalog-quote/pdf-knives/${filename}`,
    specifications: [{ value: item.spec || 'Specification on request', carton: item.quantityPerCarton || '', cartonSize: item.cartonSize || '' }],
    customization: item.customization || ''
  };
  const order = featured.indexOf(code);
  if (order !== -1) product.featuredOrder = order + 1;
  knives.push(product);
}
if (new Set(knives.map((item) => item.code.toLowerCase())).size !== knives.length) throw new Error('Duplicate knife codes');
const index = catalog.products.findIndex((item) => item.family === 'knife');
if (index < 0) throw new Error('No knife family found');
catalog.products = catalog.products.filter((item) => item.family !== 'knife');
catalog.products.splice(index, 0, ...knives);
await writeFile(dataPath, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Synced ${knives.length} knives, without price fields.`);
