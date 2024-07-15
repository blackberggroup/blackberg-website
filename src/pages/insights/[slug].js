import SEOHead from '@/app/components/SEOHead';
import ContentFirstSection from '@/app/components/insights/details/ContentFirstSection';
import DetailsSection from '@/app/components/insights/details/DetailsSection';
import FeaturedImageSection from '@/app/components/insights/details/FeaturedImageSection';
import RelatedInsightsSection from '@/app/components/insights/details/RelatedInsightsSection';
import { getInsightBySlug, getRelatedInsights } from '@/app/lib/hygraph';

function InsightDetailPage ({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <DetailsSection page={page} />
        <FeaturedImageSection page={page} />
        <ContentFirstSection page={page} />
        <RelatedInsightsSection page={page} />
        {/* <DetailsSection page={page} />
        <FeaturedImageSection page={page} />
        <ContentFirstSection page={page} />
        <GalleryFirstSection page={page} />
        <StrategiesSection page={page} />
        <GallerySecondSection page={page} />
        <ResultsSection page={page} />
        <RelatedCaseStudiesSection page={page} /> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1).replace("insights/",  "");
  const page = await getInsightBySlug(slug);

    if (!page) {
      return {
          notFound: true,
      };
  }

  console.log('Page Category: ' + page.category.title);
 const relatedInsights = await getRelatedInsights(page.category.title, page.id);

  return {
    props: { 
        page: page || null,
      //  relatedInsights: relatedInsights || null,
        navStyle: "light", 
        footerCta: true
      },
  };

}

export default InsightDetailPage;