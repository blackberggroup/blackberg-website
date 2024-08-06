import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import BootstrapClient from '../app/components/BootstrapClient';
import "../app/styles/globals.scss";
import "../app/scss/main.scss";
import SmoothScrolling from "../app/components/SmoothScrolling";
import { getNavigation } from '@/app/lib/hygraph';
import NavInteractivity from '@/app/components/HeaderInteractive';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ScrollToTop from "@/app/components/ScrollToTop";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, nav, pageName }) {

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.scrollTo(0, 0);
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

      // Used for page transition
      const start = () => {
        setLoading(true);
      }
      const end = () => {
        setLoading(false);
      }

      router.events.on("routeChangeStart", start)
      router.events.on("routeChangeComplete", handleRouteChange)
      router.events.on("routeChangeError", end)

    //router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      //router.events.off('routeChangeComplete', handleRouteChange);

      router.events.off("routeChangeStart", start)
      router.events.off("routeChangeComplete", handleRouteChange)
      router.events.off("routeChangeError", end)
    };
    
  }, [router]);

  return (
    <>
    <Header nav={nav} props={pageProps} />
    <NavInteractivity />
    <SmoothScrolling>
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
    <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-transition"
            variants={{
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.95 },
            }}
            transition={{ duration: .7, ease: "backInOut" }}
          >
          <main aria-label="Main content" className={pageName}>
              <Component {...pageProps} />
          </main>
        </motion.div>
        </AnimatePresence>
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