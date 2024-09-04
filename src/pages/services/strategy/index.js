import SEOHead from '@/app/components/seo/SEOHead';
import HeroSection from "@/app/components/services/strategy/HeroSection";
import IntroSection from "@/app/components/services/strategy/IntroSection";
import StrategicAwarenessSection from "@/app/components/services/strategy/StrategicAwarenessSection";
import StrategicToolkitSection from "@/app/components/services/strategy/StrategicToolkitSection";
import StrategicPlanningSection from "@/app/components/services/strategy/StrategicPlanningSection";
import StrategicImplementationSection from "@/app/components/services/strategy/StrategicImplementationSection";
import { getPageBySlug } from '@/app/lib/hygraph';

function Strategy({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
        <StrategicAwarenessSection />
        <StrategicToolkitSection />
        <StrategicPlanningSection />
        <StrategicImplementationSection />
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

export default Strategy;