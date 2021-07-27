import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "../base/Heading";
import Button from "../base/Button";

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col h-screen has-cool-scrollbar">
      <Navbar />
      <main>
        <article className="mb-10">{children}</article>
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
