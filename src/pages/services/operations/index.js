import SEOHead from '@/app/components/seo/SEOHead';
import HeroSection from "@/app/components/services/operations/HeroSection";
import IntroSection from "@/app/components/services/operations/IntroSection";
import ProjectManagementSection from "@/app/components/services/operations/ProjectManagementSection";
import BusinessProcessSection from "@/app/components/services/operations/BusinessProcessSection";
import AugmentingServiceAISection from "@/app/components/services/operations/AugmentingServiceAISection";
import { getPageBySlug } from '@/app/lib/hygraph';

function Operations({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
        <ProjectManagementSection />
        <BusinessProcessSection />
        <AugmentingServiceAISection />
    </>
  );
}

export async function getServerSideProps(context) {

  const slug = context.resolvedUrl.substring(1);

  const [page] = await Promise.all([
      getPageBySlug(slug)
  ]);

  return {
      props: { 
          page: page || null,
      },
  };
}

export default Operations;