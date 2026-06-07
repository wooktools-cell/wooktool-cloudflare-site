const canonicalHost = "www.wooktools.com";
const redirectHosts = new Set(["wooktool-cloudflare-site.pages.dev", "wooktools.com"]);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);

  if (redirectHosts.has(url.hostname)) {
    url.hostname = canonicalHost;
    return Response.redirect(url.toString(), 301);
  }

  return next();
}
