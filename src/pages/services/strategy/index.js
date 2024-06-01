import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/strategy/HeroSection";
import IntroSection from "@/app/components/services/strategy/IntroSection";
import StrategicAwarenessSection from "@/app/components/services/strategy/StrategicAwarenessSection";
import StrategicToolkitSection from "@/app/components/services/strategy/StrategicToolkitSection";
import StrategicPlanningSection from "@/app/components/services/strategy/StrategicPlanningSection";
import StrategicImplementationSection from "@/app/components/services/strategy/StrategicImplementationSection";

function Strategy({page }) {

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

export default Strategy;