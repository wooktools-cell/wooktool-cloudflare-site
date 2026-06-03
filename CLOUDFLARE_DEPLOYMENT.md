# Cloudflare Pages Deployment Guide

This guide explains how to deploy the WOOKTOOL Astro static website to Cloudflare Pages and connect a custom domain.

## 1. Log in to Cloudflare

Go to:

```text
https://dash.cloudflare.com/
```

Log in with the Cloudflare account that will manage the domain and Pages project.

## 2. Add the Domain

In the Cloudflare dashboard:

1. Select `Add a website`.
2. Enter the domain, for example `your-domain.com`.
3. Choose the Cloudflare plan.
4. Continue to DNS review.

## 3. Change Nameservers

Cloudflare will provide two nameservers.

At your domain registrar:

1. Open DNS or nameserver settings.
2. Replace the current nameservers with the Cloudflare nameservers.
3. Save the changes.

DNS propagation can take several hours.

## 4. Create a Pages Project

In Cloudflare:

1. Open `Workers & Pages`.
2. Choose `Pages`.
3. Click `Create a project`.
4. Select `Connect to Git`.

## 5. Connect the GitHub Repository

1. Authorize Cloudflare to access GitHub if prompted.
2. Select the repository that contains this project.
3. Choose the production branch, usually `main`.

## 6. Configure Build Settings

Use these build settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

No database or backend server is required.

## 7. Deploy

Click `Save and Deploy`.

Cloudflare Pages will install dependencies, run the build command, and publish the generated `dist` folder.

## 8. Bind the Custom Domain

After the first successful deployment:

1. Open the Pages project.
2. Go to `Custom domains`.
3. Click `Set up a custom domain`.
4. Enter `your-domain.com`.
5. Follow Cloudflare DNS prompts.

You can also add:

```text
www.your-domain.com
```

## 9. Enable HTTPS

Cloudflare normally enables HTTPS automatically.

Check:

1. `SSL/TLS` in the Cloudflare dashboard.
2. Confirm SSL mode is active.
3. Open the website with `https://`.

## 10. Submit Sitemap to Google Search Console

After the custom domain is live:

1. Go to `https://search.google.com/search-console`.
2. Add the website property.
3. Verify domain ownership.
4. Submit the sitemap:

```text
https://your-domain.com/sitemap.xml
```

## Required Domain Updates Before Launch

Replace `https://your-domain.com` in these files:

```text
astro.config.mjs
src/siteData.js
public/robots.txt
public/sitemap.xml
```

Also update:

```text
sales@your-domain.com
+86-000-0000-0000
https://your-alibaba-store-link.com
```

These contact placeholders are located in:

```text
src/siteData.js
```

## Deployment Checklist

- `npm install` completes successfully
- `npm run build` completes successfully
- `dist` folder is generated
- Cloudflare Pages build command is `npm run build`
- Cloudflare Pages output directory is `dist`
- Custom domain is connected
- HTTPS works
- `robots.txt` is accessible
- `sitemap.xml` is accessible
- Sitemap is submitted to Google Search Console
