import { getCaseStudyBySlug, getPostBySlug } from '../../app/lib/hygraph';
import { RichText } from '@graphcms/rich-text-react-renderer';
import SEOHead from '@/app/components/SEOHead';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function CaseStudyPage ({ caseStudy }) {

  gsap.registerPlugin(ScrollTrigger);

  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {

      const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            toggleActions: "restart none none reset",
          }
      });

      tl.set(containerRef.current, { autoAlpha: 1 });
      tl.set(contentRef.current, { autoAlpha: 0 });

      tl.from(containerRef.current, {
          xPercent: -100,
          ease: "sine.out",
          duration: 1
      });
      tl.from(imageRef.current, {
          xPercent: 100,
          scale: 1.3,
          delay: -1,
          ease: "sine.out",
          duration: 1
      });
      tl.to(contentRef.current, {
        y: 0, // Starts 60px down from its original position
        autoAlpha: 1,
        duration: .5,
        ease: "sine.out",
      });

        // Clean up function
        return () => {
          if (tl) tl.kill();
          ScrollTrigger.getAll().forEach(st => st.kill()); // Cleanup ScrollTriggers
      };
  }, []);

  return (
    <>
      <SEOHead page={caseStudy} />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <h1>Case Studies</h1>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export async function getServerSideProps(context) {

  const { slug } = context.params;

  const caseStudy = await getCaseStudyBySlug(slug);

  return {
    props: { caseStudy }, // This will pass posts to the page component
  };
}

export default CaseStudyPage;