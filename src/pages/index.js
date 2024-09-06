import { getPageBySlug } from '@/app/lib/hygraph/pages';
import { getFeaturedInsights } from '@/app/lib/hygraph/insights';
import { getFeaturedCaseStudies } from '@/app/lib/hygraph/case-studies';
import ServicesSection from '@/app/components/home/ServicesSection';
import AboutSection from '@/app/components/home/AboutSection';
import CaseStudySection from '@/app/components/home/CaseStudySection';
import InsightsSection from '@/app/components/home/InsightsSection';
import HeroSection from "@/app/components/home/HeroSection";
import SeoHeadHome from '@/app/components/seo/SeoHeadHome';

function HomePage({ page, caseStudies, insights }) {

  return (
    <>
      <SeoHeadHome page={page} insights={insights} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      {caseStudies?.length > 0 &&
          <CaseStudySection caseStudies={caseStudies} />
      }
      {insights?.length > 0 &&
          <InsightsSection insights={insights} />
      }
    </>
  );
}

export async function getServerSideProps(context) {

    const slug = context.resolvedUrl.substring(1);

    const [page, caseStudies, insights] = await Promise.all([
        getPageBySlug(slug),
        getFeaturedCaseStudies(),
        getFeaturedInsights()
    ]);

    return {
        props: { 
            page: page,
            caseStudies: caseStudies || null,
            insights: insights || null,
            navStyle: "dark",
            footerCta: true
        },
    };
}

export default HomePage;