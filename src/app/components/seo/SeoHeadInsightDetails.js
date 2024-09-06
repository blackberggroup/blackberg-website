import Head from 'next/head';
import { useRouter } from 'next/router';

const SEOHeadInsightDetails = ({ page }) => {
  const router = useRouter();
  const canonicalUrl = `https://www.blackberggroup.com${router.asPath}`;

  console.log('Page: ', page);

  // Title 
  const pageTitle = page?.seoOverride?.title || page?.title || 'Insights';
  const fullTitle = `${pageTitle} | Blackberg Group, LLC.`;

  // Description
  const description = page?.seoOverride?.description || page?.description || 'Where Strategy Meets Creativity';

  // Image
  const image = page?.seoOverride?.image?.url || page?.coverImage?.image?.url || 'https://media.graphassets.com/JMyrcEGXSI2wH3oHnzBI';

  // JSON-LD
  const webpageJsonLd = 
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": page.title,
        "author": page.employee?.firstName + " " + page.employee?.lastName || "Unknown",
        "datePublished": page.date,
        "url": `https://blackberggroup.com/insights/${page.slug}`,
        "image": page.coverImage?.url || "https://blackberggroup.com/default-image.jpg",
        "description": page.content?.text ? page.content.text.split('. ')[0] + '.' : "No description available."
  };

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

      {/* Inject JSON-LD for WebPage */}
        <script type="application/ld+json">
            {JSON.stringify(webpageJsonLd)}
        </script>

    </Head>
  );
};

export default SEOHeadInsightDetails;


