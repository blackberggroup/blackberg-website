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
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function CaseStudyPage ({ page }) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const titleWords = page.title.split(' ');

  useEffect(() => {
    setTimeout(() => {
      setIsNavigating(true);
    }, 500);
  
    gsap.registerPlugin(ScrollTrigger);
  
    // First timeline for initial animations
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".inner",
        toggleActions: "restart none none reset"
      }
    });
  
    // Set initial state
    tl.set(".inner", { autoAlpha: 1 });
  
    // Animate the image moving down initially
    tl.fromTo("#featured-image img", { y: -100 }, {
      y: 0,
      scale: 1.4,
      duration: 1,
      ease: 'power1.out',
      delay: 0.4
    })
    .from('h1 .word', {
      y: '110%',
      opacity: 0,
      rotationZ: 10,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
    }, "-=0.5")
    .from('.client-category-container', {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
    }, "-=0.25");
  
    // Synchronize the scroll-triggered animation to the final state of the initial animation
    gsap.to("#featured-image img", {
      top: "40%", // Move the image up by 200 pixels (adjust as needed)
      ease: "none", // Linear movement with no easing
      scrollTrigger: {
        trigger: "#featured-image", // The element that triggers the animation
        start: "top bottom", // Start the animation when the top of the container hits the bottom of the viewport
        end: "bottom top", // End the animation when the bottom of the container hits the top of the viewport
        scrub: true, // Link the animation progress to the scroll progress
        markers: false, // Optional: Show markers for debugging
      }
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