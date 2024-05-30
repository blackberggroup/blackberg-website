import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/operations/HeroSection";
import IntroSection from "@/app/components/services/operations/IntroSection";
import ProjectManagementSection from "@/app/components/services/operations/ProjectManagementSection";
import BusinessProcessSection from "@/app/components/services/operations/BusinessProcessSection";
import AugmentingServiceAISection from "@/app/components/services/operations/AugmentingServiceAISection";

function Operations({page }) {

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

export default Operations;