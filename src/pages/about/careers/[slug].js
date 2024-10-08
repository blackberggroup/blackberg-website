import ContentSection from '@/app/components/careers/dynamic/ContentSection';
import FormSection from '@/app/components/careers/dynamic/FormSection';
import HeroSection from '@/app/components/careers/dynamic/HeroSection';
import SEOHeadCareerDetails from '@/app/components/seo/SeoHeadCareerDetails';
import { getCareerBySlug } from '@/app/lib/hygraph/careers';

function CareerDetailPage ({ page }) {

  return (
    <>
      <SEOHeadCareerDetails page={page} />
      <HeroSection page={page} />
      <ContentSection page={page} />
      <FormSection page={page} />
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.resolvedUrl.substring(1).replace("about/careers/",  "");
  //console.log('Career Details Slug: ' + slug);
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