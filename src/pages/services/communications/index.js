import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/communications/HeroSection";
import IntroSection from "@/app/components/services/communications/IntroSection";

function Communications({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
    </>
  );
}

export default Communications;