import { getPageBySlug } from '@/app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import HeroSection from '@/app/components/about/HeroSection';
import MissionVisionSection from '@/app/components/about/MissionVisionSection';
import OurTeamSection from '@/app/components/about/OurTeamSection';
import ValuesSection from '@/app/components/about/ValuesSection';
import BenefitsSection from '@/app/components/about/BenefitsSection';

function AboutPage({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <MissionVisionSection />
        <OurTeamSection />
        <ValuesSection />
        <BenefitsSection />
    </>
  );
}

export async function getServerSideProps(context) {

    // Extract the slug from the resolved URL
    // Remove leading slash
    const slug = context.resolvedUrl.substring(1); 
    const page = await getPageBySlug(slug);
  
    return {
      props: { 
          page: page,
          navStyle: "light", 
          footerCta: true
        },
    };
}

export default AboutPage;