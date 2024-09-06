const JsonLd = ({ page, insights, isHomePage = false }) => {
    // Build the WebPage JSON-LD
    const webpageJsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": page?.seoOverride?.title || page?.title || 'Blackberg Group, LLC.',
      "url": `https://www.blackberggroup.com${page?.slug || ''}`,
      "description": page?.seoOverride?.description || page?.description || 'Where Strategy Meets Creativity',
      "publisher": {
        "@type": "Organization",
        "name": "Blackberg Group, LLC.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://blackberggroup.com/images/logo-dark.svg"
        }
      }
    };
  
    const services = [
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
  
    // Build the Service JSON-LD (only for homepage)
    const servicesJsonLd = isHomePage
      ? services.map((service) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "image": service.image
        }))
      : [];
  
    // Build the Article JSON-LD for each insight
    const insightsJsonLd = insights.map((insight) => ({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": insight.title,
      "author": insight.employee?.firstName + " " + insight.employee?.lastName || "Unknown",
      "datePublished": insight.date,
      "url": `https://blackberggroup.com/insights/${insight.slug}`,
      "image": insight.coverImage?.url || "https://blackberggroup.com/default-image.jpg",
      "description": insight.content?.text ? insight.content.text.split('. ')[0] + '.' : "No description available."
    }));

    const testJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Test Page",
        "url": "https://example.com"
      };
  
    // Render the JSON-LD data
    return (
      <>
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testJsonLd) }}
      />
      </>
    );
  };
  
  export default JsonLd;  