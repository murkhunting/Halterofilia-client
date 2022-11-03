import "../scss/global.scss";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { AuthContextProvider } from "../auth/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
