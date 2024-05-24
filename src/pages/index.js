import { getPageBySlug } from '@/app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import HeroSection from "../app/components/home/HeroSection";
import ServicesSection from '@/app/components/home/ServicesSection';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HomePage({page, caseStudies}) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <ServicesSection />
    </>
  );
}

export async function getServerSideProps(context) {

    const slug = context.resolvedUrl.substring(1);

    const [page] = await Promise.all([
        getPageBySlug(slug),
    ]);

    return {
        props: { 
            page: page || null,
        },
    };
}

export default HomePage;