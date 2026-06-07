const cookieName = "wooktool_oauth_state";

const parseCookies = (cookieHeader = "") =>
  cookieHeader.split(";").reduce((cookies, pair) => {
    const [rawName, ...rawValue] = pair.trim().split("=");
    if (rawName) {
      cookies[rawName] = rawValue.join("=");
    }
    return cookies;
  }, {});

const popupResponse = (token) => {
  const payload = JSON.stringify({ token, provider: "github" });
  const message = JSON.stringify(`authorization:github:success:${payload}`);

  return new Response(
    `<!doctype html>
<html>
  <head><meta charset="utf-8"><title>GitHub Login Complete</title></head>
  <body>
    <p>Login complete. You can close this window.</p>
    <script>
      const message = ${message};
      if (window.opener) {
        window.opener.postMessage("authorizing:github", "*");
        window.opener.postMessage(message, "*");
      }
      window.close();
    </script>
  </body>
</html>`,
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": `${cookieName}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`
      }
    }
  );
};

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookies = parseCookies(request.headers.get("Cookie") || "");
  const [storedState, verifier] = (cookies[cookieName] || "").split(".");

  if (!code || !state || storedState !== state || !verifier) {
    return new Response("Invalid GitHub login state.", { status: 401 });
  }

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return new Response("Missing GitHub OAuth environment variables in Cloudflare Pages.", { status: 500 });
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/callback`,
      code_verifier: verifier
    })
  });

  const tokenData = await tokenResponse.json();

  if (!tokenData.access_token) {
    return new Response("GitHub login failed.", { status: 401 });
  }

  return popupResponse(tokenData.access_token);
}
