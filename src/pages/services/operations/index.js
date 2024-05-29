import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/operations/HeroSection";
import ProjectManagementSection from "@/app/components/services/operations/ProjectManagementSection";

function Services({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <ProjectManagementSection />
    </>
  );
}

export default Services;