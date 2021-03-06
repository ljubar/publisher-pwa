## Configuration

- set env variables:

```
NEXT_PUBLIC_API_URL=http://hasura.com/v1/graphql
NEXT_PUBLIC_TENANT_CODE=a1hrzi
NEXT_PUBLIC_MEDIA_URL=https://sourcefabric.org/uploads/swp/0gjdk8/media/
# used for title meta tag
NEXT_PUBLIC_SITE_NAME=Publisher PWA
NEXT_PUBLIC_DOMAIN=https://publisherpwa.org
NEXT_PUBLIC_GA_TRACKING_ID=your google analytics tracking id. Remove if not needed.
```

- replace sitemap url in public/robots.txt

## Running development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sitemaps

In order to generate sitemap use cron job to run `node generate_sitemaps.js` daily. It will generate sitemaps for all content older than one day. Sitemap with articles from current day is generated dynamically.
