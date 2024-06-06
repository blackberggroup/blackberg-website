import SEOHead from '@/app/components/SEOHead';
import HeroSection from "@/app/components/services/communications/HeroSection";
import IntroSection from "@/app/components/services/communications/IntroSection";
import { getPageBySlug } from '@/app/lib/hygraph';

function Communications({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <IntroSection />
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

export default Communications;