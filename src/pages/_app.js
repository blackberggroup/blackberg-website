import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import BootstrapClient from '../app/components/BootstrapClient';
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }) {


  return (
    <>
    <Header />
        <main>
            <Component {...pageProps} />
        </main>
    <Footer />
    <BootstrapClient />
    </>
  );
}