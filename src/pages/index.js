import { getFeaturedCaseStudies, getPageBySlug } from '@/app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import HeroSection from "../app/components/home/HeroSection";
import ServicesSection from '@/app/components/home/ServicesSection';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutSection from '@/app/components/home/AboutSection';
import CaseStudySection from '@/app/components/home/CaseStudySection';

function HomePage({page, caseStudies}) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        {caseStudies?.length > 0 &&
            <CaseStudySection caseStudies={caseStudies} />
        }
    </>
  );
}

export async function getServerSideProps(context) {

    const slug = context.resolvedUrl.substring(1);

    const [page, caseStudies] = await Promise.all([
        getPageBySlug(slug),
        getFeaturedCaseStudies()
    ]);

    return {
        props: { 
            page: page,
            caseStudies: caseStudies || null,
            navStyle: "dark",
            footerCta: true
        },
    };
}

export default HomePage;