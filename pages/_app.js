import "nprogress/nprogress.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import "../global/boot";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      mirror: false,
      once : true
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
