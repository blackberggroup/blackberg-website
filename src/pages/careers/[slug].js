import ContentSection from '@/app/components/careers/dynamic/ContentSection';
import HeroSection from '@/app/components/careers/dynamic/HeroSection';
import SEOHead from '@/app/components/SEOHead';
import { getCareerBySlug, getPageBySlug } from '@/app/lib/hygraph';

function CareerDetailPage ({ page }) {

  return (
    <>
      <SEOHead page={page} />
      <HeroSection page={page} />

    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1).replace("careers/",  "");
  const page = await getCareerBySlug(slug);

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

export default CareerDetailPage;