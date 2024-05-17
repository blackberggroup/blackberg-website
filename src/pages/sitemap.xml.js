import { getAllPagePaths } from '../app/lib/hygraph';

import { getServerSideSitemapLegacy } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  const paths = await getAllPagePaths();
  console.log("Paths: ", paths);

  const fields = paths.map((path) => ({
    loc: `https://testsite.com${path}`,
    changefreq: 'daily',
    priority: 0.7,
  }));

  console.log("Fields:", fields); // Debug log

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {
  // Placeholder component since Next.js requires a default export
}
