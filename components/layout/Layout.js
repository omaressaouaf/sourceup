import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Heading from "../base/Heading";
import Button from "../base/Button";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen has-cool-scrollbar">
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
      <section className="py-10">
        <div className="container flex flex-col space-y-4 items-center justify-center">
          <Heading size={4} className="">
            Reach <span className="text-transparent bg-clip-text bg-brand-gradient">The Team</span>
          </Heading>
          <Button variant="brand" className="w-96 h-14 rounded-none">
            # Contact Us Now
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
