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

## Follow-up — 2026-11-16

- Replaced buyer-facing internal SEO/GEO labels with sourcing-oriented wording on the five category and sourcing pages, buyer guide hub, and RFQ builder.
- Added consistent first-touch, last-touch, UTM, source-page, referrer, form-type, and submission-time fields to compact RFQs, the contact form, and the multi-model quote builder.
- Preserved product prefill, multi-model line items, quantity, customization, and attachment fields so new CRM records can be attributed without changing the buyer workflow.
- Production build passed (120 pages). Browser verification passed across the homepage, contact form, and request-quote flow; no form or email was submitted. The CRM FormSubmit parser test suite passed (7 tests).
- Existing inquiries are not retroactively attributed. Search Console API measurement remains unavailable until the Google connection includes read-only Search Console scope.

Full local audit and verification script: `E:/WOOKTOOLS/.scratch/website-seo-review-2026-11-16/`.

## Search Console evidence refresh — 2026-11-16

- Search Console URL-prefix data for 2026-10-16 through 2026-11-14 showed 18 clicks and 2,213 impressions. The latest seven-day window showed 7 clicks and 666 impressions versus 7 clicks and 463 impressions in the preceding seven days.
- Prioritized existing pages instead of creating more URLs. `bulk tape measures` recorded 71 impressions at average position 15.66 with no clicks, all on the bulk 25ft tape measure page.
- The private-label box cutter page recorded 203 total impressions and one click. Its `custom box cutter` query recorded 26 impressions at average position 14.65 with no clicks.
- Updated the two evidence-backed pages with query-aligned title, description, and visible FAQ wording. Kept the custom tape measure manufacturer page unchanged because its matched query already showed a 12.5% CTR.
- Deferred a title change to the blade-width article: the page had 73 impressions at average position 3.42, but the available query export did not expose the corresponding terms, so a rewrite would be speculative.

## RFQ success measurement repair — 2026-11-16

- GA4 showed page views and automatic `form_start`/`form_submit` events but none of the site's custom RFQ events. The root cause was that the Astro-generated GA initializer kept `gtag` inside a local wrapper while the event tracker correctly expected `window.gtag`.
- Exposed the existing GA command function as `window.gtag`, restoring custom click, RFQ start, and RFQ handoff event delivery.
- Added a session-scoped RFQ handoff marker. A valid, non-prevented form handoff that returns to `/contact/thank-you/` now records one `rfq_submit_success` event with form ID, source page, unique event ID, and `browser_redirect` confirmation level.
- Direct thank-you visits, repeat refreshes, expired markers, invalid forms, and prevented preview submissions do not record success. The marker expires after 30 minutes and is consumed before tracking to prevent duplicate events.
- This event confirms a browser return from FormSubmit, not mailbox delivery or CRM import. It is intentionally not sent as `generate_lead` and should not become a GA4 key event until a real submission is matched to the received email and CRM record.
- Production build passed (120 pages). Browser tests covered positive, direct-visit, refresh, and prevented-submit paths; attribution and multi-model RFQ tests also passed. No external form or email was sent during verification.
