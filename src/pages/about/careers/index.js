import SEOHead from '@/app/components/seo/SEOHead';
import CareersList from '@/app/components/careers/CareersList';
import HeroSection from '@/app/components/careers/HeroSection';
import { getAllCareers, getPageBySlug } from '@/app/lib/hygraph';
import SEOHeadCareers from '@/app/components/seo/SeoHeadCareers';

function Careers({page, careers }) {

  return (
    <>
        <SEOHeadCareers page={page} careers={careers} />
        <HeroSection />
        <CareersList careers={careers} />
    </>
  );
}

export async function getServerSideProps(context) {

  const slug = context.resolvedUrl.substring(1);

  const [page, careers] = await Promise.all([
      getPageBySlug(slug),
      getAllCareers()
  ]);

  return {
      props: { 
          page: page,
          careers: careers,
          navStyle: "light", 
          footerCta: false
      },
  };
}

export default Careers;