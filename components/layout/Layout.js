import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div  className="flex flex-col h-screen">
      <Navbar />
      <main>
        {/* <AnimatePresence exitBeforeEnter> */}
          <motion.article
            key={router.route}
            // initial="pageInitial"
            // animate="pageAnimate"
            // exit="pageExit"
            transition={{ duration: 0.25 }}
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                opacity: 0,
              },
            }}
            className="mb-10"
          >
            {children}
          </motion.article>
        {/* </AnimatePresence> */}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
