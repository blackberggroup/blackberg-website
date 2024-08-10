import { getPageBySlug } from '../../app/lib/hygraph';
import SEOHead from '@/app/components/SEOHead';
import HeroSection from '@/app/components/case-studies/HeroSection';
import CaseStudiesList from '@/app/components/case-studies/CaseStudiesList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageTransitionOut from '@/app/components/PageTransitionOut';

function CaseStudies ({ page }) {

  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 900);

    const handleRouteChangeStart = (url) => {
      if(url.includes('case-studies/') && !isNavigating) {
          setIsNavigating(true);
          setTimeout(() => {
            router.push(url);
          }, 1000);

        throw "Abort route change to wait for animation";
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router, isNavigating]);

  return (
    <>
      {isNavigating &&
        <PageTransitionOut />
      }
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