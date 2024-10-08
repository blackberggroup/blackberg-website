import SEOHead from '@/app/components/seo/SEOHead';
import { getPageBySlug } from '@/app/lib/hygraph/pages';
import HeroSection from "@/app/components/privacy-policy/HeroSection";
import ContentSection from '@/app/components/privacy-policy/ContentSection';

function PrivacyPolicy({page}) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <ContentSection />
    </>
  );
}

export async function getServerSideProps(context) {

    // Extract the slug from the resolved URL
    // Remove leading slash
    const slug = context.resolvedUrl.substring(1);

    console.log('Privacy Policy Slug: ' + slug)
    const page = await getPageBySlug(slug);
  
    return {
      props: { 
          page: page,
          navStyle: "light", 
          footerCta: true
        },
    };
}

export default PrivacyPolicy;