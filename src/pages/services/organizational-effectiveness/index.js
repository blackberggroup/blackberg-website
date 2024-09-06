import SEOHead from '@/app/components/seo/SEOHead';
import HeroSection from "@/app/components/services/organizational-effectiveness/HeroSection";
import IntroSection from "@/app/components/services/organizational-effectiveness/IntroSection";
import ChangeManagementToolkitSection from "@/app/components/services/organizational-effectiveness/ChangeManagementToolkitSection";
import TalentManagementSection from "@/app/components/services/organizational-effectiveness/TalentManagementSection";
import DigitalServicesSection from "@/app/components/services/organizational-effectiveness/DigitalServicesSection";
import { getPageBySlug } from '@/app/lib/hygraph';

function OrganizationalEffectiveness({ page }) {

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

export default OrganizationalEffectiveness;