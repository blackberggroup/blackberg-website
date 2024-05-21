import Head from 'next/head';

const SEOHead = ({page}) => {

  const data =  page?.seoOverride || page?.post?.seoOverride;
  
  return (
    <Head>
      <title>{data?.title ?? 'Default Title'}</title>
      <meta name="description" content={data?.description ?? 'Default description'} />
      <link rel="canonical" href={`http://www.testsite.com/blog/${data?.slug ?? ''}`} />

      {/* Charset and Viewport */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph (OG) Tags for Social Sharing */}
      <meta property="og:title" content={data?.title ?? 'Default Title'} />
      <meta property="og:description" content={data?.description ?? 'Default description'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`http://www.testsite.com/blog/${data?.slug ?? ''}`} />
      <meta property="og:image" content={data?.coverImage?.url ?? ''} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data?.title ?? 'Default Title'} />
      <meta name="twitter:description" content={data?.description ?? 'Default description'} />
      <meta name="twitter:image" content={data?.coverImage?.url ?? ''} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEOHead;