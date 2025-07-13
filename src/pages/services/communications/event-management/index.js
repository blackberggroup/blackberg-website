import SEOHead from '@/app/components/seo/SEOHead';
import HeroSection from "@/app/components/services/communications/event-management/HeroSection";
import WeSpecializeIn from "@/app/components/services/communications/event-management/WeSpecializeIn";
import WhatSetsUsApart from "@/app/components/services/communications/event-management/WhatSetsUsApart";
import CtaSmall from "@/app/components/services/communications/event-management/CtaSmall";
import StepByStepProcess from "@/app/components/services/communications/event-management/StepByStepProcess";
import OurAreasOfExpertise from "@/app/components/services/communications/event-management/OurAreasOfExpertise";
import WhoWeWorkWith from "@/app/components/services/communications/event-management/WhoWeWorkWith";
import Testimonials from "@/app/components/services/communications/event-management/Testimonials";
import Awards from "@/app/components/common/Awards";
import CaseStudies from "@/app/components/services/communications/event-management/CaseStudies";
import Insights from "@/app/components/services/communications/event-management/Insights";

import { getPageBySlug } from '@/app/lib/hygraph/pages';

function EventManagement({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <WeSpecializeIn />
        <WhatSetsUsApart />
        <CtaSmall />
        <StepByStepProcess />
        <OurAreasOfExpertise />
        <WhoWeWorkWith />
        <Testimonials />
        <Awards />
        <CaseStudies />
        <Insights />
    </>
  );
}

export async function getServerSideProps({ resolvedUrl }) {
  const segments = resolvedUrl.split('/').filter(Boolean);
  const slug = segments[segments.length - 1];
  const [page] = await Promise.all([getPageBySlug(slug)]);

  return {
    props: {
      page: page || null,
      footerCta: false,
      simpleHeader: true,
    },
  };
}


export default EventManagement;