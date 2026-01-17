# Google Search Console Setup Guide for Pace

This guide will help you get **Pace** (`yourpace.site`) indexed on Google.

## Prerequisites
- You need a Google Account.
- The site must be deployed and accessible at `https://yourpace.site`.

## Step 1: Add Property
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add property** (top left dropdown).
3. Choose **URL prefix** (recommended for GitHub Pages/Static sites unless you have DNS access).
4. Enter: `https://yourpace.site`
5. Click **Continue**.

## Step 2: Verify Ownership
Since you are using a static site on GitHub Pages, the **HTML Tag** method is usually the easiest if you don't want to mess with DNS.

1. Select **HTML tag** under "Other verification methods".
2. **Copy the meta tag** provided (e.g., `<meta name="google-site-verification" content="..." />`).
3. **Action Required**: You need to add this tag to your `src/app/layout.tsx` file inside the `<head>` or metadata config.
   - *Ideally, ask your developer (me!) to add this specific ID to the metadata config once you have it.*
   - *Alternatively, if you have DNS access to `yourpace.site`, use the **Domain provider** method (TXT record) which requires no code changes.*

## Step 3: Submit Sitemap
Once verified:
1. Go to **Sitemaps** in the left sidebar.
2. Under "Add a new sitemap", enter `sitemap.xml`.
3. Click **Submit**.
4. You should see a "Success" status. If it says "Culdn't fetch", wait 24 hours and try again; Google sometimes takes time.

## Step 4: Request Indexing
1. Go to **URL Inspection** (left sidebar).
2. Enter `https://yourpace.site/`.
3. Google will check the URL.
4. Click **Request Indexing**.

---
**Note**: It can take anywhere from a few days to a few weeks for Google to index your new site. Be patient!
