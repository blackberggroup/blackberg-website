import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/HeroSection";
import ServicesSection from '@/app/components/services/ServicesSection';

function Services({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <ServicesSection />
    </>
  );
}

export default Services;