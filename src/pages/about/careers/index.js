import CareersList from '@/app/components/careers/CareersList';
import GeneralInterestForm from '@/app/components/careers/GeneralInterestForm';
import HeroSection from '@/app/components/careers/HeroSection';
import { getAllCareers } from '@/app/lib/hygraph/careers';
import { getPageBySlug } from '@/app/lib/hygraph/pages';
import { CAREER_LISTINGS_ENABLED } from '@/app/lib/config/careers';
import SEOHeadCareers from '@/app/components/seo/SeoHeadCareers';

function Careers({page, careers, listingsEnabled }) {

  return (
    <>
        <SEOHeadCareers page={page} careers={careers} />
        <HeroSection />
        {listingsEnabled && <CareersList careers={careers} />}
        <GeneralInterestForm />
    </>
  );
}

export async function getServerSideProps(context) {

  const slug = context.resolvedUrl.substring(1).split('?')[0];

  // Job listings are switched off (see src/app/archive/careers/README.md).
  // With no careers passed in, no job cards or JobPosting structured data are rendered.
  const [page, careers] = await Promise.all([
      getPageBySlug(slug),
      CAREER_LISTINGS_ENABLED ? getAllCareers() : Promise.resolve([])
  ]);

  return {
      props: { 
          page: page,
          careers: careers,
          listingsEnabled: CAREER_LISTINGS_ENABLED,
          navStyle: "light", 
          footerCta: false
      },
  };
}

export default Careers;
