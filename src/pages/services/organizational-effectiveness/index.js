import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/organizational-effectiveness/HeroSection";
import IntroSection from "@/app/components/services/organizational-effectiveness/IntroSection";

function OrganizationalEffectiveness({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
    </>
  );
}

export default OrganizationalEffectiveness;