import SEOHead from '@/app/components/seo/SEOHead';
import HeroSection from "@/app/components/services/communications/event-management/HeroSection";
import WeSpecializeIn from "@/app/components/services/communications/event-management/WeSpecializeIn";
import WhatSetsUsApart from "@/app/components/services/communications/event-management/WhatSetsUsApart";
import { getPageBySlug } from '@/app/lib/hygraph/pages';

function EventManagement({ page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <WeSpecializeIn />
        <WhatSetsUsApart />
    </>
  );
}

export async function getServerSideProps(context) {

  const slug = context.resolvedUrl.split('/').filter(Boolean)[1];

  const [page] = await Promise.all([
      getPageBySlug(slug)
  ]);

  return {
      props: { 
          page: page || null,
          footerCta: false,
          simpleHeader: true
      },
  };
}

export default EventManagement;