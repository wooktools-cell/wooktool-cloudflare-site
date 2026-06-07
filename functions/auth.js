const cookieName = "wooktool_oauth_state";

const base64Url = (bytes) =>
  btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

const randomString = (length = 32) => {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return base64Url(bytes);
};

const challengeFromVerifier = async (verifier) => {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  return base64Url(new Uint8Array(digest));
};

export async function onRequest({ request, env }) {
  if (!env.GITHUB_CLIENT_ID) {
    return new Response("Missing GITHUB_CLIENT_ID. Add GitHub OAuth environment variables in Cloudflare Pages.", {
      status: 500
    });
  }

  const url = new URL(request.url);
  const state = randomString(16);
  const verifier = randomString(32);
  const challenge = await challengeFromVerifier(verifier);
  const redirectUri = `${url.origin}/callback`;
  const scope = env.GITHUB_OAUTH_SCOPE || "public_repo";
  const githubUrl = new URL("https://github.com/login/oauth/authorize");

  githubUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  githubUrl.searchParams.set("redirect_uri", redirectUri);
  githubUrl.searchParams.set("scope", scope);
  githubUrl.searchParams.set("state", state);
  githubUrl.searchParams.set("code_challenge", challenge);
  githubUrl.searchParams.set("code_challenge_method", "S256");

  return new Response(null, {
    status: 302,
    headers: {
      Location: githubUrl.toString(),
      "Set-Cookie": `${cookieName}=${state}.${verifier}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`
    }
  });
}
