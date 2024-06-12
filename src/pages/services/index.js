import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/HeroSection";
import ServicesSection from '@/app/components/services/ServicesSection';
import { getPageBySlug } from '@/app/lib/hygraph';

function Services({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <ServicesSection />
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