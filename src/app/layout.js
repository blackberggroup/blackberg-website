import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import BootstrapClient from '../app/components/BootstrapClient.js';
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
