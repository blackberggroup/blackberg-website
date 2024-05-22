import { Inter } from "next/font/google";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import BootstrapClient from '../app/components/BootstrapClient.js';
import "../app/scss/main.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
