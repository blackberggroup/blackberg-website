import CaseStudyCard from '@/app/components/CaseStudyCard';
import { getPageBySlug, getAllCaseStudies } from '../../app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

function CaseStudies ({ page, caseStudies }) {

    gsap.registerPlugin(ScrollTrigger);
    CustomEase.create('customEase', '0.77, 0, 0.175, 1');

    const cardRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.2, 
            }
          );
        });
      }, []);

  return (
    <>
      <SEOHead page={page} />
      <div className="container-fluid">
          <div className="container">
              <h1>Case Studies</h1>
              <div className="row mt-4">
                {caseStudies.map((caseStudy, index) => (
                    <div className="col-12 col-sm-4" key={index} ref={(el) => (cardRefs.current[index] = el)}>
                        <CaseStudyCard caseStudy={caseStudy}  />
                    </div>
                ))}
              </div>
          </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {

    const slug = context.resolvedUrl.substring(1);

    const [page, caseStudies] = await Promise.all([
        getPageBySlug(slug),
        getAllCaseStudies()
    ]);

    return {
        props: { 
            page: page || null,
            caseStudies: caseStudies || [] 
        },
    };
}

export default CaseStudies;