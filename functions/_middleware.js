const canonicalHost = "www.wooktools.com";
const redirectHosts = new Set(["wooktool-cloudflare-site.pages.dev", "wooktools.com"]);

const legacyRedirects = new Map(
  Object.entries({
    "/productlist.html": "/products/",
    "/about-us.html": "/about/",
    "/site-page/aea362dea1b34351.html": "/blog/",
    "/products/heavy-duty-16ft-25ft-tape-measure-with-fractional-metal-tape-and-magnetic-tip.html": "/products/heavy-duty-tape-measure/",
    "/products/self-locking-tape-measure-double-sided-reading-customizable-colors.html": "/products/auto-lock-tape-measure/",
    "/products/compact-tape-measure/": "/products/auto-lock-tape-measure/",
    "/products/tape-measures-retractable-fabric-measuring-tape-60-inch-small-sewing-tape-measure.html": "/products/pocket-tape-measure/",
    "/products/21241.html": "/products/heavy-duty-tape-measure/",
    "/products/21445.html": "/products/pocket-tape-measure/",
    "/products/21403.html": "/products/heavy-duty-tape-measure/",
    "/products/528647780235800614.html": "/products/heavy-duty-tape-measure/",
    "/products/easy-retractable-ruler-tape-measure-mini-portable-pull-ruler-keychain-1m3ft.html": "/products/pocket-tape-measure/",
    "/products/measuring-tape-retractable-easy-read-imperialmetric-scale-measurement-tape-for-designer.html": "/products/auto-lock-tape-measure/",
    "/products/retractable-and-easy-read-measuring-tape-bulk-set-min-18-inch-fraction-and-1mm-scale.html": "/products/wide-blade-tape-measure/",
    "/products/tape-measure-portable-steel-frame-ruler-galvanized-iron-stainless-steel-measuring-tape.html": "/products/heavy-duty-tape-measure/",
    "/products/utility-knife-box-cutter-retractable-blade-storage-design-quick-change-blades.html": "/products/heavy-duty-utility-knife/",
    "/products/folding-utility-knife-with-5-piece-extra-quick-change-blades-safely-lock-back-design.html": "/products/folding-utility-knife/",
    "/products/ratchet-screwdriver-with-soft-rubber-handle-easy-to-switch-and-replace-bits.html": "/products/ratchet-screwdriver-set/"
  })
);

const legacyQueryKeys = new Set(["activeelementid", "activecategory", "skuld"]);

const hasLegacyQuery = (searchParams) => [...searchParams.keys()].some((key) => legacyQueryKeys.has(key.toLowerCase()));

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const shouldRedirectHost = redirectHosts.has(url.hostname);

  if (shouldRedirectHost) {
    url.hostname = canonicalHost;
  }

  const normalizedPath = url.pathname.toLowerCase();
  const redirectPath = legacyRedirects.get(normalizedPath);

  if (redirectPath) {
    url.pathname = redirectPath;
    url.search = "";
    return Response.redirect(url.toString(), 301);
  }

  if (normalizedPath.startsWith("/products/") && normalizedPath.endsWith(".html")) {
    url.pathname = "/products/";
    url.search = "";
    return Response.redirect(url.toString(), 301);
  }

  if (hasLegacyQuery(url.searchParams)) {
    url.search = "";
    return Response.redirect(url.toString(), 301);
  }

  if (shouldRedirectHost) {
    return Response.redirect(url.toString(), 301);
  }

  return next();
}
