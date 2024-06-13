import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import BootstrapClient from '../app/components/BootstrapClient';
import "../app/styles/globals.scss";
import "../app/scss/main.scss";
import SmoothScrolling from "../app/components/SmoothScrolling";
import { getNavigation } from '@/app/lib/hygraph';
import NavInteractivity from '@/app/components/HeaderInteractive';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ScrollToTop from "@/app/components/ScrollToTop";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function MyApp({ Component, pageProps, nav, pageName }) {

  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
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
    
  }, [router]);

  return (
    <>
    <Header nav={nav} props={pageProps} />
    <NavInteractivity />
    <SmoothScrolling>
        <main aria-label="Main content" className={pageName}>
            <Component {...pageProps} />
        </main>
    </SmoothScrolling>
    <Footer props={pageProps}/>
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