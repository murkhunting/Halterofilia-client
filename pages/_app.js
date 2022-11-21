import "../scss/global.scss";
import App from "next/app";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { parseCookies } from "../lib/parseCookies";

import { AuthContextProvider } from "../auth/AuthContext";

function MyApp({ Component, pageProps, initialLang }) {
  return (
    <AuthContextProvider>
      <Navbar {...initialLang} />
      <Component {...pageProps} />
      <Footer />
    </AuthContextProvider>
  );
}

// MyApp.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);

//   return {
//     initialLang: cookies.lang,
//   };
// };

export default MyApp;
