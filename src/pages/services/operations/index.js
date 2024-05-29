import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/operations/HeroSection";

function Services({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
    </>
  );
}

export default Services;