import "nprogress/nprogress.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import '../global/boot'

const MyApp = ({ Component, pageProps }) => {

  return (
      <Layout>
        <Component {...pageProps}  />
      </Layout>
  );
};

export default MyApp;
