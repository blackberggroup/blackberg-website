import Head from 'next/head';
import { useRouter } from 'next/router';

const SEOHeadTeam = ({ page, employees }) => {
  const router = useRouter();
  const canonicalUrl = `https://www.blackberggroup.com${router.asPath}`;
  let articleJsonLd = null;

  console.log('Employees: ', employees);

  // Title 
  const pageTitle = page?.seoOverride?.title || page?.title || 'Meet The Team';
  const fullTitle = `${pageTitle} | Blackberg Group, LLC.`;

  // Description
  const description = page?.seoOverride?.description || page?.description || 'Where Strategy Meets Creativity';

  // Image
  const image = page?.seoOverride?.image?.url || page?.coverImage?.image?.url || 'https://media.graphassets.com/JMyrcEGXSI2wH3oHnzBI';

  // JSON-LD
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
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

  const organizationJsonLd = 
  [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Blackberg Group, LLC",
      "url": "https://www.blackberggroup.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blackberggroup.com/images/logo-dark.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/blackberg-group/",
      ],
    }
  ]
  
  const employeesJsonLd = employees.map((employee) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": employee.firstName + " " + employee.lastName,
    "jobTitle": employee.position,
    "worksFor": {
      "@type": "Organization",
      "name": "Blackberg Group, LLC"
    },
    "image": employee.image.url || "",
  }));

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

      {/* Inject JSON-LD for Organization */}
      <script type="application/ld+json">
            {JSON.stringify(organizationJsonLd)}
        </script>

      {/* Inject JSON-LD for Employees */}
      {employeesJsonLd?.map((jsonLd, index) => (
        <script key={`insight-${index}`} type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      ))}

    </Head>
  );
};

export default SEOHeadTeam;
