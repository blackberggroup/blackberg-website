import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/strategy/HeroSection";
import IntroSection from "@/app/components/services/strategy/IntroSection";
import ProjectManagementSection from "@/app/components/services/strategy/ProjectManagementSection";

function Strategy({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
        <ProjectManagementSection />
    </>
  );
}

export default Strategy;