import { getPageBySlug } from '@/app/lib/hygraph/pages';
import SEOHead from '@/app/components/SEOHead';
import HeroSection from '@/app/components/case-studies/HeroSection';
import CaseStudiesList from '@/app/components/case-studies/CaseStudiesList';

function CaseStudies ({ page }) {

  return (
    <>
      <SEOHead page={page} />
      <HeroSection />
      <CaseStudiesList />
    </>
  );
}

export async function getServerSideProps(context) {
    const slug = context.resolvedUrl.substring(1);
    const page = await getPageBySlug(slug);
    return {
      props: { 
          page: page,
          navStyle: "dark", 
          footerCta: true
        },
    };
}

export default CaseStudies;