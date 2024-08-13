import { getAllInsights, getPageBySlug } from '../../app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import HeroSection from '@/app/components/insights/HeroSection';
import InsightsListSection from '@/app/components/insights/InsightsListSection';

function Insights ({ page, insights }) {

  return (
    <>
      <SEOHead page={page} />
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