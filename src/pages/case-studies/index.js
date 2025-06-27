import { getPageBySlug } from '@/app/lib/hygraph/pages';
import { listCaseStudyModulars } from '@/app/lib/hygraph/case-studies';
import SEOHead from '@/app/components/seo/SEOHead';
import HeroSection from '@/app/components/case-studies/HeroSection';
import CaseStudiesList from '@/app/components/case-studies/CaseStudiesList';

function CaseStudies ({ page, studies }) {

  return (
    <>
      <SEOHead page={page} />
      <HeroSection />
      <CaseStudiesList items={studies} />
    </>
  );
}

export async function getServerSideProps(context) {
    const slug = context.resolvedUrl.substring(1);
    const page = await getPageBySlug(slug);
    const studies = await listCaseStudyModulars();
    return {
      props: { 
          page: page,
          studies,
          navStyle: "dark", 
          footerCta: true
        },
    };
}

export default CaseStudies;