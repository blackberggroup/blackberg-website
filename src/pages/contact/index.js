import SEOHead from '@/app/components/SEOHead';
import FormSection from '@/app/components/contact/FormSection';
import HeroSection from '@/app/components/contact/HeroSection';
import { getPageBySlug } from '@/app/lib/hygraph/pages';

function Contact({page }) {

  return (
    <>
        <SEOHead page={page} />
        <HeroSection />
        <FormSection />
    </>
  );
}

export async function getServerSideProps(context) {

  const slug = context.resolvedUrl.substring(1);

  const [page] = await Promise.all([
      getPageBySlug(slug)
  ]);

  return {
      props: { 
          page: page,
          navStyle: "light", 
          footerCta: false
      },
  };
}

export default Contact;