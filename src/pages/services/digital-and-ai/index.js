import SEOHead from '@/app/components/seo/SEOHead';
import HeroSection from "@/app/components/services/digital-and-ai/HeroSection";
import IntroSection from "@/app/components/services/digital-and-ai/IntroSection";
import StrategicAwarenessSection from "@/app/components/services/strategy/StrategicAwarenessSection";
import StrategicToolkitSection from "@/app/components/services/strategy/StrategicToolkitSection";
import StrategicPlanningSection from "@/app/components/services/strategy/StrategicPlanningSection";
import StrategicImplementationSection from "@/app/components/services/strategy/StrategicImplementationSection";
import { getPageBySlug } from '@/app/lib/hygraph/pages';
import CaseStudies from "@/app/components/services/communications/digital-and-ai/CaseStudies";
import Insights from "@/app/components/services/communications/digital-and-ai/Insights";
import CtaLarge from "@/app/components/services/communications/digital-and-ai/CtaLarge";
import Capabilities from '@/app/components/services/communications/digital-and-ai/Capabilities';
import DigitalCapabilities from '@/app/components/services/communications/digital-and-ai/DigitalCapabilities';
import WhyPartner from '@/app/components/services/communications/digital-and-ai/WhyPartner';
import UnlockingPotential from '@/app/components/services/communications/digital-and-ai/UnlockingPotential';
import SectorExpertise from '@/app/components/services/communications/digital-and-ai/SectorExpertise';
import HealthcareServices from '@/app/components/services/communications/digital-and-ai/health-care-services';
import EthicalPractices from '@/app/components/services/digital-and-ai/EthicalPractices';
import CapabilitiesNew from '@/app/components/services/communications/digital-and-ai/CapabilitiesNew';
import DigitalCapabilitiesNew from '@/app/components/services/communications/digital-and-ai/DigitalCapabilitiesNew';
import HealthServices from '@/app/components/services/communications/digital-and-ai/HealthServices';


function DigitalAndAi({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
        {/* <SectorExpertise /> */}
        <UnlockingPotential />
        <CapabilitiesNew />
        <DigitalCapabilitiesNew />
        <HealthServices />
        <WhyPartner />
        <EthicalPractices />
        <CaseStudies />
        <Insights />
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

export default DigitalAndAi;