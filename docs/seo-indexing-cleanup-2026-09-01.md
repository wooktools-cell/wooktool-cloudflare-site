# SEO Indexing Cleanup - 2026-09-01

## Goal

Reduce Google indexing confusion from old wooktools.com URLs and support faster discovery of the current wooktools / WOOKTOOL site structure.

## Completed

- Updated sitemap `lastmod` to `2026-09-01`.
- Confirmed `robots.txt` allows crawling and points to `https://www.wooktools.com/sitemap.xml`.
- Confirmed `llms.txt` exists for GEO and answer-engine discovery.
- Added explicit legacy URL redirects for old indexed `.html` product URLs shown in Google Search Console.
- Kept middleware handling for legacy query-string URLs, including `skuld`, `activeElementId`, and `activeCategory`.

## Priority URLs to Request Indexing After Deployment

- `https://www.wooktools.com/`
- `https://www.wooktools.com/products/`
- `https://www.wooktools.com/tape-measures/`
- `https://www.wooktools.com/utility-knives/`
- `https://www.wooktools.com/buyer-guides/`
- `https://www.wooktools.com/blog/china-hand-tool-supplier-trends-2026/`
- `https://www.wooktools.com/blog/auto-retractable-vs-snap-off-utility-knife/`

## Watch in Google Search Console

- `Crawled - currently not indexed`: strengthen internal links and request indexing for the most important pages only.
- `Duplicate, Google chose different canonical`: usually acceptable for old `.html` URLs if they redirect or canonicalize to current pages.
- `Page with redirect`: acceptable when old URLs redirect to current canonical pages.
