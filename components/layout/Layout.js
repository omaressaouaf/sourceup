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
      {/* <div className="text-gray-100 -mb-4">
        <svg
          viewBox="0 0 145 18"
          preserveAspectRatio="none"
          fill="currentColor"
          className="w-full"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M144.54 17.34H87.5H0V0H144.54V17.34ZM0 0C0 0 104.63 14 144.54 14C144.54 8.67 144.54 0 144.54 0"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="144.54" height="17.34" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div> */}

      {/* <section className="py-10 mt-14 space-y-20">
        <div className="transform bg-gray-100 rotate-6 border-t border-gray-200"></div>
        <div className="container flex flex-col space-y-4 items-center justify-center">
          <Heading size={4} className="">
            Reach <span className="text-transparent bg-clip-text bg-brand-gradient">The Team</span>
          </Heading>
          <Button variant="brand" className="w-8/12 md:w-4/12 h-14 rounded-none">
            # Contact Us Now
          </Button>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
