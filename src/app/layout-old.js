import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BootstrapClient from './components/layout/BootstrapClient.js/index.js';
import "../app/scss/main.scss";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}