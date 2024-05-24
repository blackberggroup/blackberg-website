import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import BootstrapClient from '../app/components/BootstrapClient';
// import "bootstrap/dist/css/bootstrap.min.css";
import "../app/styles/globals.scss";
import "../app/scss/main.scss";

import SmoothScrolling from "../app/components/SmoothScrolling";
import { getNavigation } from '@/app/lib/hygraph';
import NavInteractivity from '@/app/components/HeaderInteractive';

function MyApp({ Component, pageProps, nav }) {


  return (
    <>
    <Header nav={nav} />
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

MyApp.getInitialProps = async () => {
  const nav = await getNavigation();
  return { nav };
};

export default MyApp;