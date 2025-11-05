import SeoHeadServices from '@/app/components/seo/SeoHeadServices';
import SectorExpertise from '@/app/components/services/communications/digital-and-ai/SectorExpertise';
import HeroSection from "@/app/components/services/HeroSection";
import ServicesSection from '@/app/components/services/ServicesSection';
import { getPageBySlug } from '@/app/lib/hygraph/pages';

function Services({page }) {

  return (
    <>
        <SeoHeadServices page={page} />
        <HeroSection />
        <ServicesSection />
        <SectorExpertise />
    </>
  );
}

export async function getServerSideProps(context) {

  const slug = context.resolvedUrl.substring(1);

  const [page] = await Promise.all([
      getPageBySlug(slug)
  ]);

  return {
    props: { 
        page: page,
        navStyle: "dark",
        footerCta: true
      },
  };
}

export default Services;