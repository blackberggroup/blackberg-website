import SEOHead from '@/app/components/seo/SEOHead';
import ContentSection from '@/app/components/insights/details/ContentSection';
import DetailsSection from '@/app/components/insights/details/DetailsSection';
import FeaturedImageSection from '@/app/components/insights/details/FeaturedImageSection';
import RelatedInsightsSection from '@/app/components/insights/details/RelatedInsightsSection';
import ResourcesSection from '@/app/components/insights/details/ResourcesSection';
import { getInsightBySlug, getRelatedInsights } from '@/app/lib/hygraph';

function InsightDetailPage ({ page, relatedInsights }) {

  return (
    <>
        <SEOHead page={page} />
        <DetailsSection page={page} />
        <FeaturedImageSection page={page} />
        <ContentSection page={page} />
        <ResourcesSection page={page} />
        <RelatedInsightsSection relatedInsights={relatedInsights} />
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

  console.log('page category: ' + page.category.title);
  const relatedInsights = await getRelatedInsights(page.category, page.id);
  console.log('Related Insights: ', relatedInsights);
  return {
    props: { 
        page: page || null,
        relatedInsights: relatedInsights || null,
        navStyle: "light", 
        footerCta: true
      },
  };

}

export default InsightDetailPage;