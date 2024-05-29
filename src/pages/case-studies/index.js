import CaseStudyCard from '@/app/components/CaseStudyCard';
import { getPageBySlug, getAllCaseStudies } from '../../app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import { RichText } from '@graphcms/rich-text-react-renderer';
import HeroSection from '@/app/components/case-studies/HeroSection';
import CaseStudiesList from '@/app/components/case-studies/CaseStudiesList';

function CaseStudies ({ page }) {

    // gsap.registerPlugin(ScrollTrigger);
    // CustomEase.create('customEase', '0.77, 0, 0.175, 1');

    // const cardRefs = useRef([]);

    // useEffect(() => {
    //     cardRefs.current.forEach((card, index) => {
    //       gsap.fromTo(
    //         card,
    //         { opacity: 0, y: 20 },
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 0.3,
    //           scrollTrigger: {
    //             trigger: card,
    //             start: 'top 80%',
    //             toggleActions: 'play none none none',
    //           },
    //           delay: index * 0.2, 
    //         }
    //       );
    //     });
    //   }, []);

  return (
    <>
      <SEOHead page={page} />
      <HeroSection />
      <CaseStudiesList />
    </>
  );
}

export async function getServerSideProps(context) {
    const slug = context.resolvedUrl.substring(1);
    const page = await getPageBySlug(slug);
    return { props: { page: page || null } };
}

export default CaseStudies;