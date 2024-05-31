import SEOHead from '@/app/components/SEOHead';
import { getPageBySlug } from '@/app/lib/hygraph';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RelatedCaseStudiesSection from '@/app/components/case-studies/va-immersive-marketing/RelatedCaseStudiesSection';
import ResultsSection from '@/app/components/case-studies/va-immersive-marketing/ResultsSection';
import GallerySecondSection from '@/app/components/case-studies/va-immersive-marketing/GallerySecondSection';
import StrategiesSection from '@/app/components/case-studies/va-immersive-marketing/StrategiesSection';
import GalleryFirstSection from '@/app/components/case-studies/va-immersive-marketing/GalleryFirstSection';
import ContentFirstSection from '@/app/components/case-studies/va-immersive-marketing/ContentFirstSection';
import FeaturedImageSection from '@/app/components/case-studies/va-immersive-marketing/FeaturedImageSection';
import DetailsSection from '@/app/components/case-studies/va-immersive-marketing/DetailsSection';
import HrSpacer from '@/app/components/case-studies/HrSpacer';

function CaseStudyPage ({ page, navStyle }) {

  return (
    <>
      <SEOHead page={page} />
      <DetailsSection />
      <FeaturedImageSection />
      <ContentFirstSection />
      <GalleryFirstSection />
      <StrategiesSection />
      <GallerySecondSection />
      <ResultsSection />
      <HrSpacer />
      <RelatedCaseStudiesSection />
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1);
  const page = await getPageBySlug(slug);

  
  return { props: { 
    page: page || null,
    navStyle: 'page-case-study-details', // Change this based on your logic
  } };
}

export default CaseStudyPage;