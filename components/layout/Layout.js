import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "../base/Heading";
import Button from "../base/Button";
import ContactShortInfo from "../contact/ContactShortInfo";
import WaveDivider from "../shared/WaveDivider";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className="flex flex-col h-screen has-cool-scrollbar">
      <Navbar />
      <main className={pathname === "/contact" && "mb-10"}>
        <article>{children}</article>
        <article>
          {pathname !== "/contact" && pathname !== "/" && <WaveDivider />}
          {pathname !== "/contact" && (
            <div className={pathname !== "/" && "bg-gray-100"}>
              <ContactShortInfo />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
