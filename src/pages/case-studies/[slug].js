import { getCaseStudyModularBySlug } from '@/app/lib/hygraph/case-studies';
import { listRelatedCaseStudyModulars } from '@/app/lib/hygraph/case-studies';
import SEOHead from '@/app/components/seo/SEOHead';
import DetailsSection from '@/app/components/case-studies/dynamic/DetailsSection';
import FeaturedImageSection from '@/app/components/case-studies/dynamic/FeaturedImageSection';
import CsBulletWithImage   from '@/app/components/case-studies/modular/CsBulletWithImage';
import CsCalloutBox        from '@/app/components/case-studies/modular/CsCalloutBox';
import CsIntroText         from '@/app/components/case-studies/modular/CsIntroText';
import CsNarrowRegularText from '@/app/components/case-studies/modular/CsNarrowRegularText';
import CsWideImage         from '@/app/components/case-studies/modular/CsWideImage';
import CsWideRegularText   from '@/app/components/case-studies/modular/CsWideRegularText';
import ShareButtons from "@/app/components/common/ShareButtons";
import RelatedCaseStudiesSection from '@/app/components/case-studies/modular/RelatedCaseStudiesSection';

const componentMap = {
  CsBulletWithImage,
  CsCalloutBox,
  CsIntroText,
  CsNarrowRegularText,
  CsWideImage,
  CsWideRegularText,
};

function CaseStudyPage ({ page, related }) {
  const sections = Array.isArray(page.components) ? page.components : [];

  return (
    <>
      <SEOHead page={page} />
      <DetailsSection page={page} />
      <FeaturedImageSection page={page} />

      {sections.map(section => {
        const Component = componentMap[section.__typename];
        if (!Component) {
          console.warn(`Missing component for ${section.__typename}`);
          return null;
        }
        return <Component key={section.id} section={section} page={page} />;
      })}
      
      <ShareButtons title={page.title} />
      <div className="pb-6"></div>
      <RelatedCaseStudiesSection items={related} />
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1).replace("case-studies/",  "");
  const page = await getCaseStudyModularBySlug(slug);
  console.log('Case Study Page: ', page);

    if (!page) {
      return {
          notFound: true,
      };
  }

  console.log('Enum literal sent to helper =', page.category);

  const related = await listRelatedCaseStudyModulars(page.category, slug);

  return {
    props: { 
        page: page,
        related,
        navStyle: "light", 
        footerCta: true
      },
  };

}

export default CaseStudyPage;