import SEOHead from '@/app/components/SEOHead';
import CareersList from '@/app/components/careers/CareersList';
import HeroSection from '@/app/components/careers/HeroSection';
import { getAllCareers, getPageBySlug } from '@/app/lib/hygraph';

function Careers({page, careers }) {

  return (
    <>
        <SEOHead page={page} />
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