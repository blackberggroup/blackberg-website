import { getPageBySlug } from '@/app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/HeroSection";
import ServicesSection from '@/app/components/home/ServicesSection';
import gsap from 'gsap';

function Services({page, caseStudies}) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <ServicesSection />
    </>
  );
}


export default Services;