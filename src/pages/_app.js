import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import BootstrapClient from '../app/components/BootstrapClient';
// import "bootstrap/dist/css/bootstrap.min.css";
import "../app/styles/globals.scss";
import "../app/scss/main.scss";

import SmoothScrolling from "../app/components/SmoothScrolling";
import { getNavigation } from '@/app/lib/hygraph';
import NavInteractivity from '@/app/components/HeaderInteractive';

function MyApp({ Component, pageProps, nav, navStyle }) {


  return (
    <>
    <Header nav={nav} navStyle={navStyle} />
    <NavInteractivity />
    <SmoothScrolling>
        <main aria-label="Main content">
            <Component {...pageProps} />
        </main>
    </SmoothScrolling>
    <Footer />
    <BootstrapClient />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const nav = await getNavigation();
  const pathname = ctx.router.pathname;
  const navStyle = pathname.replace('/', '').replace(/\//g, '-') || 'home';
  return { nav, navStyle };
};

export default MyApp;