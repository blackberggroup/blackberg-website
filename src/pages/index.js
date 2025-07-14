import { getPageBySlug } from "@/app/lib/hygraph/pages";
import { listHomePageCaseStudies } from "@/app/lib/hygraph/case-studies";
import { getFeaturedInsights } from "@/app/lib/hygraph/insights";

import SeoHeadHome from "@/app/components/seo/SeoHeadHome";
import HeroSection from "@/app/components/home/HeroSection";
import ServicesSection from "@/app/components/home/ServicesSection";
import AboutSection from "@/app/components/home/AboutSection";
import CaseStudySection from "@/app/components/home/CaseStudySection";
import InsightsSection from "@/app/components/home/InsightsSection";

function HomePage({ page, featuredStudies, insights }) {
  return (
    <>
      <SeoHeadHome page={page} insights={insights} />

      <HeroSection />
      <ServicesSection />
      <AboutSection />
      {featuredStudies?.length > 0 && (
        <CaseStudySection items={featuredStudies} />
      )}
      {insights?.length > 0 && <InsightsSection insights={insights} />}
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1) || "home";

  const [page, featuredStudies, insights] = await Promise.all([
    getPageBySlug(slug),
    listHomePageCaseStudies(),
    getFeaturedInsights(),
  ]);

  return {
    props: {
      page: page || null,
      featuredStudies: featuredStudies || null,
      insights: insights || null,
      navStyle: "dark",
      footerCta: true,
    },
  };
}

export default HomePage;
