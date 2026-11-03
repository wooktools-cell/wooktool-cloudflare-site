# SEO and inquiry improvements — 2026-11-03

## Implemented

- Track `contact_click`, once-per-form `rfq_start` and validated `rfq_submit_attempt` separately. Prevented/preview submissions do not count as handoffs. Remove false `generate_lead` and Meta Lead events. Do not send buyer form contents to analytics.
- Remove keyword-list rows and internal SEO labels from buyer-facing product templates, blog hub and home page.
- Map 9mm286, WT-K19, WT-K20, WT-K05, WT-K08 and WT-K55 to the current illustrated RFQ catalog model images. Preserve existing thumbnail rendering and original-resolution image links.
- Add explicit catalog codes for those six products and multi-model RFQ links with automatic selection. Unknown codes show a confirmation message instead of selecting a different product.
- Connect GPSR/PPWR guides from OEM, buyer guides, product-data and packaging content.
- Keep visible blog FAQ text but remove frontmatter-only FAQ JSON-LD; retain Article/breadcrumb markup. Thank-you page has noindex. Omit unknown sitemap modification dates instead of applying an old global date.

## Verification

- Production Astro build passed (121 pages).
- Browser tests passed for six model deep links, multiple lines, quantity summary, prevented submissions, no false lead events and no JavaScript errors. No external form/email was sent.
- All generated JSON-LD parsed; mapped images exist; thank-you noindex verified.

## Outstanding evidence and measurement

- The six model pages still need model-verified independent detail/packaging photos. Catalog packaging images are primary images, not substitutes for new detail photographs. Do not reuse unrelated product images or invent materials, dimensions, certifications or packing data.
- Native FormSubmit handoff has no authenticated provider/CRM acceptance callback. `rfq_submit_attempt` is an attempt, not a received inquiry. Implement server-side acknowledgement plus deduplication before restoring any `generate_lead` success event; mailbox delivery is a separate check.
- Search Console sign-in succeeded but API returned missing read-only GSC scope; GA4 discovery returned 502. No traffic/CTR/rank baseline was collected. No keyword expansion or consolidation was inferred from absent metrics.
- Retain the existing 20-page priority and six-model evidence plan. Reassess page/query performance after access is restored; do not bulk-create unverified screwdriver or knife variants.

Full local diagnosis and verification scripts: `E:/WOOKTOOLS/.scratch/website-seo-review-2026-11-03/`.
