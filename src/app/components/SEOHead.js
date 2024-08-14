import Head from 'next/head';
import { useRouter } from 'next/router';

const SEOHead = ({page}) => {

  const router = useRouter();
  const canonicalUrl = `http://www.blackberggroup.com${router.asPath}`;
  // Title 
  const pageTitle = page?.seoOverride?.title || page?.title || 'Blackberg Group, LLC.';
  const fullTitle = `${pageTitle} | Blackberg Group, LLC.`;
  // Description
  const description = page?.seoOverride?.description || page?.description || 'Where Strategy Meets Creativity';
  // Image
  const image = page?.seoOverride?.image?.url || page?.coverImage?.image?.url || 'https://media.graphassets.com/JMyrcEGXSI2wH3oHnzBI';

  console.log('Page SEO Data: ', page);
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Charset and Viewport */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph (OG) Tags for Social Sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  );
};

export default SEOHead;