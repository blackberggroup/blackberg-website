import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/operations/HeroSection";
import IntroSection from "@/app/components/services/operations/IntroSection";
import ProjectManagementSection from "@/app/components/services/operations/ProjectManagementSection";

function Services({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
        <ProjectManagementSection />
    </>
  );
}

export default Services;