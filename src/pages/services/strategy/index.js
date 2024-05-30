import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/strategy/HeroSection";

function Strategy({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
    </>
  );
}

export default Strategy;