import { getAllPagePaths } from '../../src/app/lib/hygraph/sitemap';

import { getServerSideSitemapLegacy } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  
  const paths = await getAllPagePaths();

  let fields = [];

  if (paths && paths.length > 0) {

    fields = paths.map((path) => ({
      loc: `https://blackberggroup.com${path}`,
      changefreq: 'weekly',
      priority: 1,
    }));
  }

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {
  return null; 
}
