import SEOHead from '@/app/components/seo/SEOHead';
// import HeroSection from "@/app/components/services/communications/event-management/HeroSection";
// import WeSpecializeIn from "@/app/components/services/communications/event-management/WeSpecializeIn";
// import WhatSetsUsApart from "@/app/components/services/communications/event-management/WhatSetsUsApart";
// import CtaSmall from "@/app/components/services/communications/event-management/CtaSmall";
// import StepByStepProcess from "@/app/components/services/communications/event-management/StepByStepProcess2";
// import OurAreasOfExpertise from "@/app/components/services/communications/event-management/OurAreasOfExpertise";
// import WhoWeWorkWith from "@/app/components/services/communications/event-management/WhoWeWorkWith";
// import Testimonials from "@/app/components/services/communications/event-management/Testimonials";
import CaseStudies from "@/app/components/services/communications/web-design-and-development/CaseStudies";
import Insights from "@/app/components/services/communications/web-design-and-development/Insights";
import CtaLarge from "@/app/components/services/communications/web-design-and-development/CtaLarge";

import { getPageBySlug } from '@/app/lib/hygraph/pages';

function EventManagement({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <CaseStudies />
        <Insights />
        <CtaLarge />
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
      cta: {
        href: "/contact?service=municipal-ux-audit", // per-page URL
        label: "Book a Municipal UX Audit",          // per-page label (optional)
        target: "_self",                             // open in same tab (optional)
        id: "header-cta-municipal",                       // optional id for tracking
      },
    },
  };
}


export default EventManagement;