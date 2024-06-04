import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/organizational-effectiveness/HeroSection";
import IntroSection from "@/app/components/services/organizational-effectiveness/IntroSection";
import ChangeManagementToolkitSection from "@/app/components/services/organizational-effectiveness/ChangeManagementToolkitSection";
import TalentManagementSection from "@/app/components/services/organizational-effectiveness/TalentManagementSection";
import DigitalServicesSection from "@/app/components/services/organizational-effectiveness/DigitalServicesSection";

function OrganizationalEffectiveness({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
        <ChangeManagementToolkitSection />
        <TalentManagementSection />
        <DigitalServicesSection />
    </>
  );
}

export default OrganizationalEffectiveness;