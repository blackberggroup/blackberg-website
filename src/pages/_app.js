import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import BootstrapClient from '../app/components/BootstrapClient';
// import "bootstrap/dist/css/bootstrap.min.css";
import "../app/styles/globals.scss";
import "../app/scss/main.scss";

import SmoothScrolling from "../app/components/SmoothScrolling";

export default function MyApp({ Component, pageProps }) {


  return (
    <>
    <Header />
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