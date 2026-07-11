# wooktools SEO/GEO and Google Ads Prelaunch Plan

Date: 2026-07-11

## Current Readiness Summary

The website is ready to begin deeper SEO/GEO work. Google Ads can start with a small Search-only test after conversion events are confirmed in GA4.

Current technical status:

| Area | Status | Notes |
|---|---|---|
| Production site | Ready | Homepage and key product pages return 200. |
| robots.txt | Ready | Allows crawling and points to the production sitemap. |
| sitemap.xml | Ready | Production sitemap includes main pages, product pages, and blog pages. |
| SEO metadata | Ready | Generated pages include title, meta description, canonical, and Open Graph tags. |
| Schema | Ready for baseline | Product pages include Product schema; key content pages include breadcrumb and FAQ schema where applicable. |
| RFQ conversion path | Ready | Header, mobile bar, product pages, category pages, contact page, email, WhatsApp, and Alibaba links exist. |
| Analytics | Needs live validation | GA4 and Clarity are installed. Events are now standardized for lead tracking, but GA4/Ads conversion setup must be confirmed in the platforms. |

## Conversion Tracking Checklist Before Google Ads

Track these as primary or secondary conversion events:

| Event name | Source action | Conversion priority | Notes |
|---|---|---:|---|
| `generate_lead` | RFQ form submit, WhatsApp click, email click | Primary | Recommended GA4 event name for lead generation. |
| `form_submit` | Main contact RFQ form submit | Primary | Use as supporting form-specific event. |
| `compact_rfq_submit` | Product/category compact RFQ form submit | Primary | Useful for product page CRO analysis. |
| `request_quote_click` | Header/CTA quote buttons | Secondary | Measures buyer intent before form completion. |
| `request_quote_button_click` | RFQ submit button click | Secondary | Helps diagnose form friction. |
| `whatsapp_click` | WhatsApp links | Primary or secondary | Primary if WhatsApp inquiries are accepted as leads. |
| `email_click` | Email links | Primary or secondary | Primary if direct email inquiries are accepted as leads. |
| `alibaba_click` | Alibaba store links | Secondary | Measures off-site buyer movement. |
| `linkedin_click` / `facebook_click` | Social profile clicks | Secondary | Trust signal, not primary lead conversion. |

Manual GA4 setup:

1. Open GA4 Admin.
2. Go to Data display > Events.
3. Confirm these events appear after test clicks/submissions: `generate_lead`, `form_submit`, `compact_rfq_submit`, `whatsapp_click`, `email_click`.
4. Mark `generate_lead` as a key event.
5. Mark `form_submit`, `compact_rfq_submit`, `whatsapp_click`, and `email_click` based on how you want to count leads.
6. Link Google Ads with GA4.
7. Import GA4 key events into Google Ads.

Do not scale Google Ads until at least one test conversion is visible in GA4.

## Google Ads Launch Recommendation

Start with a small Search-only test. Do not start Display, broad Performance Max, or broad match campaigns yet.

Suggested initial structure:

| Campaign | Landing page | Match type | Notes |
|---|---|---|---|
| Custom Tape Measure | `/custom-tape-measure/` | Phrase/exact | Highest intent for OEM/private-label buyers. |
| Tape Measure Manufacturer | `/tape-measures/` | Phrase/exact | Broader sourcing intent. |
| Utility Knife OEM | `/utility-knives/` | Phrase/exact | Run only after keyword and page review. |
| Screwdriver Set OEM | `/screwdriver-sets/` | Phrase/exact | Run only after keyword and page review. |

Initial daily budget:

| Stage | Budget | Goal |
|---|---:|---|
| Test week | USD 20-50/day | Validate keywords, countries, CTR, form/WhatsApp events. |
| Optimization week | USD 50-100/day | Keep only converting search terms. |
| Scale | Based on CPL | Increase only after valid RFQs are confirmed. |

Negative keyword themes:

- free
- used
- repair
- jobs
- pdf
- template
- home depot
- amazon
- walmart
- lowes
- personal use
- how to read

## Deep SEO/GEO First Batch Page Plan

Priority is high-intent B2B pages that can rank, answer buyer questions, and work as ad landing pages.

| Priority | Page type | Target URL | Primary keyword | Search intent | Core CTA |
|---:|---|---|---|---|---|
| 1 | Landing page | `/custom-tape-measure-manufacturer/` | custom tape measure manufacturer | Buyer wants OEM/private-label tape measure factory | Request Product Quote |
| 2 | Landing page | `/private-label-tape-measure/` | private label tape measure | Buyer wants logo + packaging + sourcing support | Discuss Private Label Project |
| 3 | Landing page | `/oem-tape-measure-china/` | OEM tape measure China | Buyer wants China factory supply | Send OEM RFQ |
| 4 | Landing page | `/25ft-tape-measure-supplier/` | 25ft tape measure supplier | Buyer wants specific wholesale model | Request 25ft Tape Measure Quote |
| 5 | Landing page | `/bulk-tape-measures/` | bulk tape measures | Buyer wants wholesale/volume supply | Get Bulk Pricing |
| 6 | Landing page | `/utility-knife-manufacturer/` | utility knife manufacturer | Buyer wants factory or OEM box cutter supplier | Request Utility Knife Quote |
| 7 | Landing page | `/snap-off-knife-supplier/` | snap off knife supplier | Buyer wants specific utility knife category | Request OEM Quote |
| 8 | Landing page | `/screwdriver-set-manufacturer/` | screwdriver set manufacturer | Buyer wants screwdriver set factory | Send Screwdriver Set RFQ |
| 9 | Landing page | `/private-label-hand-tools/` | private label hand tools | Buyer wants multi-category private-label supplier | Start Private Label Tools Project |
| 10 | Landing page | `/hand-tools-factory-china/` | hand tools factory China | Buyer wants trust/factory verification | Contact Factory Sales |

## GEO Content Requirements

Each page should be built to answer buyer questions directly, not only rank for a keyword.

Required content blocks:

1. One clear H1 using the target keyword naturally.
2. Short answer section near the top: what wooktools supplies, who it is for, and what can be customized.
3. Product or service scope table.
4. Buyer decision table: use case, recommended product direction, what to confirm.
5. Customization options.
6. Quality-control checkpoints.
7. Packaging and MOQ notes.
8. RFQ checklist.
9. FAQ section with FAQPage schema.
10. Internal links to product/category pages, `/oem-odm/`, `/quality-control/`, `/factory/`, and `/contact/`.

GEO writing standard:

- Use concise, factual answers.
- Mention wooktools as the company and WOOKTOOL as the brand.
- Use real product and factory photos where possible.
- Avoid unsupported claims such as "best", "largest", or exact production capacity unless documented.
- Include tables that summarize sourcing decisions.
- Do not keyword-stuff; use natural buyer language.

## Execution Order

Recommended next sprint:

1. Validate GA4 events after a live test submission and test clicks.
2. Build `/custom-tape-measure-manufacturer/`.
3. Build `/private-label-tape-measure/`.
4. Add both URLs to sitemap through the static path system.
5. Add internal links from homepage, `/tape-measures/`, `/custom-tape-measure/`, and related blog posts.
6. Build and push.
7. Submit the two new URLs in Google Search Console.
8. Start a Google Ads Search-only test after GA4 key events are active.
