import { getAllInsights } from '@/app/lib/hygraph/insights';
import { getPageBySlug } from '@/app/lib/hygraph/pages';
import HeroSection from '@/app/components/insights/HeroSection';
import InsightsListSection from '@/app/components/insights/InsightsListSection';
import SEOHeadInsights from '@/app/components/seo/SeoHeadInsights';

function Insights ({ page, insights }) {

  return (
    <>
      <SEOHeadInsights page={page} insights={insights}/>
      <HeroSection />
      <InsightsListSection insights={insights} />
    </>
  );
}

export async function getServerSideProps(context) {
    const slug = context.resolvedUrl.substring(1);

    const [page, insights, categories] = await Promise.all([
        getPageBySlug(slug),
        getAllInsights()
    ]);

    return {
        props: { 
            page: page,
            insights: insights || null,
            categories: categories || null,
            navStyle: "dark",
            footerCta: true
        },
    };
}

export default Insights;