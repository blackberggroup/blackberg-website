import Head from 'next/head';
import { useRouter } from 'next/router';

const SEOHeadCareers = ({ page, careers }) => {
  const router = useRouter();
  const canonicalUrl = `https://www.blackberggroup.com${router.asPath}`;

  console.log('Careers: ', careers);

  const employmentTypeMapping = {
    fullTime: "FULL_TIME",
    partTime: "PART_TIME",
    contract: "CONTRACT",
    temporary: "TEMPORARY",
    intern: "INTERN",
    volunteer: "VOLUNTEER",
    perDiem: "PER_DIEM",
    other: "OTHER",
    freelance: "FREELANCE",
    seasonal: "SEASONAL"
  };  

  // Title 
  const pageTitle = page?.seoOverride?.title || page?.title || 'Careers';
  const fullTitle = `${pageTitle} | Blackberg Group, LLC.`;

  // Description
  const description = page?.seoOverride?.description || page?.description || 'Work With Us';

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
  
  const careersJsonLd = careers.map((career) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": career.title,
    "description": "We are looking for a skilled " + career.title + " to join our dynamic team.",
    "datePosted": career.date || "2024-08-29",
    "employmentType": employmentTypeMapping[career.type] || "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Blackberg Group, LLC.",
      "sameAs": "https://www.blackberggroup.com",
      "logo": "https://blackberggroup.com/images/logo-dark.svg"
    },
    "applicantLocationRequirements": {  
      "@type": "Country",
      "name": "United States"
    },
    "jobLocationType": "TELECOMMUTE",
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote",
        "addressRegion": "",
        "addressCountry": "US"
      }
    },
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

      {/* Inject JSON-LD for Employees */}
      {careersJsonLd?.map((jsonLd, index) => (
        <script key={`insight-${index}`} type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      ))}

    </Head>
  );
};

export default SEOHeadCareers;
