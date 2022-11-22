import "../scss/global.scss";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar {...initialLang} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

// MyApp.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);

//   return {
//     initialLang: cookies.lang,
//   };
// };

export default MyApp;
