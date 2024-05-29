import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/operations/HeroSection";
import IntroSection from "@/app/components/services/operations/IntroSection";

function Services({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
    </>
  );
}

export default Services;