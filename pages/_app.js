import "../scss/global.scss";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CookiesProvider>
  );
}

export default MyApp;
