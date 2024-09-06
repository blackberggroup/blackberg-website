import SEOHead from '@/app/components/seo/SEOHead';
import ContentFirstSection from '@/app/components/case-studies/dynamic/ContentFirstSection';
import DetailsSection from '@/app/components/case-studies/dynamic/DetailsSection';
import FeaturedImageSection from '@/app/components/case-studies/dynamic/FeaturedImageSection';
import GalleryFirstSection from '@/app/components/case-studies/dynamic/GalleryFirstSection';
import GallerySecondSection from '@/app/components/case-studies/dynamic/GallerySecondSection';
import RelatedCaseStudiesSection from '@/app/components/case-studies/dynamic/RelatedCaseStudiesSection';
import ResultsSection from '@/app/components/case-studies/dynamic/ResultsSection';
import StrategiesSection from '@/app/components/case-studies/dynamic/StrategiesSection';
import { getCaseStudyBySlug, getPageBySlug } from '@/app/lib/hygraph';

function CaseStudyPage ({ page }) {

  return (
    <>
      <SEOHead page={page} />
      <DetailsSection page={page} />
      <FeaturedImageSection page={page} />
      <ContentFirstSection page={page} />
      <GalleryFirstSection page={page} />
      <StrategiesSection page={page} />
      <GallerySecondSection page={page} />
      <ResultsSection page={page} />
      <RelatedCaseStudiesSection page={page} />
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1).replace("case-studies/",  "");
  const page = await getCaseStudyBySlug(slug);

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

export default CaseStudyPage;