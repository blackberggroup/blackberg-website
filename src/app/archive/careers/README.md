# Archived: individual job listing pages

The per-job listing pages were taken offline in November 2026. Nothing was deleted so they can be restored.

## What is switched off

- `career-detail-page.js` in this folder is the old `src/pages/about/careers/[slug].js`. Because it lives outside `src/pages`, Next.js does not build or deploy it.
- Every `/about/careers/<slug>` URL 301-redirects to `/about/careers` (`next.config.mjs`).
- Job URLs are left out of the sitemap (`src/app/lib/hygraph/sitemap.js`).
- The job list and the JobPosting structured data are not rendered on `/about/careers` (`src/pages/about/careers/index.js`).

Still in the repo and unused while listings are off: `components/careers/CareersList.js`, `components/careers/dynamic/*`, `components/seo/SeoHeadCareerDetails.js`, and the queries in `lib/hygraph/careers.js`.

## How to restore

1. Move the page back: `git mv src/app/archive/careers/career-detail-page.js "src/pages/about/careers/[slug].js"`
2. Set `NEXT_PUBLIC_CAREER_LISTINGS_ENABLED=true` in Vercel (and `.env.local`), then redeploy. This removes the redirect and turns the job list, sitemap entries, and JobPosting data back on.
3. Publish the Career entries in Hygraph.
