import SEOHead from '@/app/components/seo/SEOHead';
import HeroSection from "@/app/components/services/communications/HeroSection";
import IntroSection from "@/app/components/services/communications/IntroSection";
import IntegratedMarketingSection from "@/app/components/services/communications/IntegratedMarketingSection";
import CreativeStudioSection from "@/app/components/services/communications/CreativeStudioSection";
import EventManagementSection from "@/app/components/services/communications/EventManagementSection";
import WebDesignSection from "@/app/components/services/communications/WebDesignSection";
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
        <WebDesignSection />
    </>
  );
}

export async function getServerSideProps(context) {

  const slug = context.resolvedUrl.split('/').filter(Boolean)[1];

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