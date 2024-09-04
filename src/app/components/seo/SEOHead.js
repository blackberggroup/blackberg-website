import Head from 'next/head';
import { useRouter } from 'next/router';

const SEOHead = ({ page, insights }) => {
  const router = useRouter();
  const canonicalUrl = `https://www.blackberggroup.com${router.asPath}`;
  let article = null;

  console.log('Insights: ', insights);

  // Title 
  const pageTitle = page?.seoOverride?.title || page?.title || 'Blackberg Group, LLC.';
  const fullTitle = `${pageTitle} | Blackberg Group, LLC.`;

  // Description
  const description = page?.seoOverride?.description || page?.description || 'Where Strategy Meets Creativity';

  // Image
  const image = page?.seoOverride?.image?.url || page?.coverImage?.image?.url || 'https://media.graphassets.com/JMyrcEGXSI2wH3oHnzBI';

  // JSON-LD
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "url": canonicalUrl,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Blackberg Group, LLC.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blackberggroup.com/images/logo-dark.svg"
      }
    }
  };

  const servicesJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Strategy",
      "description": "Translating vision into actionable blueprints",
      "image": "https://blackberggroup.com/images/services/services-strategy.webp"
    },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Communications",
    "description": "Shaping hearts and minds behind public service",
    "image": "https://blackberggroup.com/images/services/services-communications.webp"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Organizational Effectiveness",
    "description": "Mastering data-driven change and innovation",
    "image": "https://blackberggroup.com/images/services/services-organizational-effectiveness.webp"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Operations",
    "description": "Driving operations into pathways for unprecedented growth",
    "image": "https://blackberggroup.com/images/services/services-operations.webp"
  }
  ];

  // Article JSON-LD for each insight
  const insightsJsonLd = insights?.map(insight => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": insight.title,
    "author": insight.employee?.firstName + " " + insight.employee?.lastName || "Unknown",
    "datePublished": insight.date,
    "url": `https://blackberggroup.com/insights/${insight.slug}`,
    "image": insight.coverImage?.url || "https://blackberggroup.com/default-image.jpg",
    "description": insight.content?.text ? insight.content.text.split('. ')[0] + '.' : "No description available."
  }));

  if(router.pathname.includes("/insights/")) {
    article = {
      
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": page.title,
        "author": {
          "@type": "Person",
          "name": page.employee.firstName + " " + page.employee.lastName
        },
        "datePublished": page.date,
        "dateModified": page.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "image": [
          page.coverImage.url
        ],
        "publisher": {
          "@type": "Organization",
          "name": "Blackberg Group, LLC.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://blackberggroup.com/images/logo-dark.svg"
          }
        },
        "articleBody": page.content.text,
        "description": page.content?.text ? page.content.text.split('. ')[0] + '.' : "No description available."
    }
  }

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
      {/* <script>
        console.log('Services', {JSON.stringify(servicesJsonLd)});
      </script> */}

      {/* Inject JSON-LD for Services */}
      {router.pathname === '/' && servicesJsonLd.map((service, index) => (
        <script key={`service-${index}`} type="application/ld+json">
          {JSON.stringify(service)}
        </script>
      ))}

      {/* Inject JSON-LD for (Insights) */}
      {insightsJsonLd?.map((jsonLd, index) => (
        <script key={`insight-${index}`} type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      ))}

    </Head>
  );
};

export default SEOHead;
