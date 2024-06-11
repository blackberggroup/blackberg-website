import { getAllPagePaths } from '../app/lib/hygraph';

import { getServerSideSitemapLegacy } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  
  const paths = await getAllPagePaths();

  const fields = paths.map((path) => ({
    loc: `https://blackberggroup.com${path}`,
    changefreq: 'daily',
    priority: 1,
  }));

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {}
