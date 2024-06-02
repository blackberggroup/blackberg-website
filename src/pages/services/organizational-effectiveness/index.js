import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/organizational-effectiveness/HeroSection";

function OrganizationalEffectiveness({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
    </>
  );
}

export default OrganizationalEffectiveness;