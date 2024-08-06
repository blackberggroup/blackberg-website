import PageTransitionIn from '@/app/components/PageTransitionIn';
import SEOHead from '@/app/components/SEOHead';
import ContentFirstSection from '@/app/components/case-studies/dynamic/ContentFirstSection';
import DetailsSection from '@/app/components/case-studies/dynamic/DetailsSection';
import FeaturedImageSection from '@/app/components/case-studies/dynamic/FeaturedImageSection';
import GalleryFirstSection from '@/app/components/case-studies/dynamic/GalleryFirstSection';
import GallerySecondSection from '@/app/components/case-studies/dynamic/GallerySecondSection';
import RelatedCaseStudiesSection from '@/app/components/case-studies/dynamic/RelatedCaseStudiesSection';
import ResultsSection from '@/app/components/case-studies/dynamic/ResultsSection';
import StrategiesSection from '@/app/components/case-studies/dynamic/StrategiesSection';
import { getCaseStudyBySlug, getPageBySlug } from '@/app/lib/hygraph';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { gsap } from "gsap/dist/gsap";

function CaseStudyPage ({ page }) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const titleWords = page.title.split(' ');

  useEffect(() => {
    setTimeout(() => {
      setIsNavigating(true);
     }, 500);

     
     let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".inner",
        toggleActions: "restart none none reset"
      }
    });
    
    // Set initial state
    tl.set(".inner", { autoAlpha: 1 });
    
    // Animate the words
    tl.from('h1 .word', {
      y: '110%',
      opacity: 0,
      rotationZ: 10,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
      delay: 1.2
    })
    
    // Animate the client category container
    .from('.client-category-container', {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out'
    })
    
    // Animate the featured image
    .from("#featured-image img", {
      yPercent: -120,
      scale: 1.3,
      duration: 1.5,
    });
    
    // Clean up function
    return () => {
        if (tl) tl.kill();
    };
     
  }, []);


  return (
    <>
      <PageTransitionIn />
      {!isNavigating &&
        <div class="overlay-transition loading"></div>
      }
      <SEOHead page={page} />
      <DetailsSection page={page} titleWords={titleWords} />
      <FeaturedImageSection page={page} />
      <ContentFirstSection page={page} />
      <GalleryFirstSection page={page} />
      <StrategiesSection page={page} />
      <GallerySecondSection page={page} />
      <ResultsSection page={page} />
      <RelatedCaseStudiesSection page={page} />
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1).replace("case-studies/",  "");
  const page = await getCaseStudyBySlug(slug);

    if (!page) {
      return {
          notFound: true,
      };
  }

  return {
    props: { 
        page: page,
        navStyle: "light", 
        footerCta: true
      },
  };

}

export default CaseStudyPage;