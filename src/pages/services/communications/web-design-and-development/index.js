import SEOHead from '@/app/components/seo/SEOHead';
import CaseStudies from "@/app/components/services/communications/web-design-and-development/CaseStudies";
import Insights from "@/app/components/services/communications/web-design-and-development/Insights";
import CtaLarge from "@/app/components/services/communications/web-design-and-development/CtaLarge";

import { getPageBySlug } from '@/app/lib/hygraph/pages';
import HeroSection from '@/app/components/services/communications/web-design-and-development/HeroSection';
import Capabilities from '@/app/components/services/communications/web-design-and-development/Capabilities';
import DigitalCapabilities from '@/app/components/services/communications/web-design-and-development/DigitalCapabilities';
import WhyPartner from '@/app/components/services/communications/web-design-and-development/WhyPartner';

function WebDesignDevelopment({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <Capabilities />
        <DigitalCapabilities />
        <WhyPartner />
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
        href: "#", // per-page URL
        label: "Book a UX Audit",          
        target: "_self",                   
        id: "header-cta-webdesign-development",
      },
    },
  };
}


export default WebDesignDevelopment;