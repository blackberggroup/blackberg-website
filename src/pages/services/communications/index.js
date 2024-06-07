import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/communications/HeroSection";
import IntroSection from "@/app/components/services/communications/IntroSection";
import IntegratedMarketingSection from "@/app/components/services/communications/IntegratedMarketingSection";
import CreativeStudioSection from "@/app/components/services/communications/CreativeStudioSection";
import EventManagementSection from "@/app/components/services/communications/EventManagementSection";
import { getPageBySlug } from '@/app/lib/hygraph';

function Communications({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
        <IntegratedMarketingSection />
        <CreativeStudioSection />
        <EventManagementSection />
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

export default Communications;