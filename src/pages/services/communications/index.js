import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/communications/HeroSection";

function Communications({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
    </>
  );
}

export default Communications;