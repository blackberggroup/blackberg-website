import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import BootstrapClient from '@/app/components/layout/BootstrapClient';
import "@/app/styles/globals.scss";
import "@/app/scss/main.scss";
import SmoothScrolling from "@/app/components/layout/SmoothScrolling";
import NavInteractivity from '@/app/components/layout/HeaderInteractive';
import { getNavigation } from '@/app/lib/hygraph/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ScrollToTop from "@/app/components/layout/ScrollToTop";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps, nav, pageName }) {

  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);
  

  useEffect(() => {
    if (process.env.VERCEL_ENV === 'production') {
      const handleRouteChange = (url) => {
        window.scrollTo(0, 0);
        window.dataLayer.push({
          event: 'pageview',
          page: url,
        });
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
    
  }, [router]);

  return (
    <>
    <Analytics />
    <Header nav={nav} props={pageProps} />
    <NavInteractivity />
    <SmoothScrolling>
        <main aria-label="Main content" className={pageName}>
            <Component {...pageProps} />
        </main>
    </SmoothScrolling>
    <Footer nav={nav} props={pageProps}/>
    <ScrollToTop />
    <BootstrapClient />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const nav = await getNavigation();
  const pathname = ctx.router.pathname;
  const pageName = pathname.replace('/', '').replace(/\//g, '-') || 'home';
  return { nav, pageName };
};

export default MyApp;