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

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  let page = null;
  let related = [];

  /* ── DETAIL query debug ── */
  try {
    page = await getCaseStudyModularBySlug(slug);
    console.log("DETAIL OK");
  } catch (err) {
    console.error("DETAIL ERROR →", err.networkError?.result?.errors);
  }

  /* ── RELATED query debug ── */
  try {
    const first = page?.serviceLines?.[0];
    if (first) {
      related = await listRelatedCaseStudyModulars(first, slug);
      console.log("RELATED OK");
    }
  } catch (err) {
    console.error("RELATED ERROR →", err.networkError?.result?.errors);
  }

  if (!page) return { notFound: true };

  return {
    props: {
      page,
      related,
      navStyle: "light",
      footerCta: true,
    },
  };
}


export default CaseStudyPage;