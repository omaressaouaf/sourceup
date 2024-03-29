import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactShortInfo from "../contact/ContactShortInfo";
import WaveDivider from "../shared/WaveDivider";
import { useRouter } from "next/router";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import useTranslation from "next-translate/useTranslation";

const Layout = ({ children }) => {
  const { pathname, locale } = useRouter();

  const { t: tContact } = useTranslation("contact");

  return (
    <>
      <div className="flex flex-col h-screen has-cool-scrollbar">
        <Navbar />
        <main className={pathname === "/contact" ? "mb-10" : ""}>
          <article>{children}</article>
          <article>
            {pathname !== "/contact" && pathname !== "/" && <WaveDivider />}
            {pathname !== "/contact" && (
              <div className={pathname !== "/" ? "bg-gray-100" : "bg-gray-100"}>
                <ContactShortInfo />
              </div>
            )}
            <WhatsAppWidget
              phoneNumber="+212632204178"
              textReplyTime={tContact("whatsappTextReplyTime")}
              message={tContact("whatsappMessage")}
              sendButton={tContact("whatsappSendButton")}
              companyName="Mohammed Bnouanas"
            />

            {/* <a
              href="tel:+212625716365"
              className="text-gray-50 bg-green-500 rounded-full px-5 py-4 shadow fixed bottom-2 right-4"
            >
              <i className="fa fa-phone"></i>
            </a> */}
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
