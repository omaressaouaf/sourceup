import ScrollAnimation from "./ScrollAnimation";
import PropTypes from "prop-types";

const IntroHero = ({ title, titleIsNode, subtitle }) => {
  return (
    <section className="hero text-gray-50 py-16">
      <ScrollAnimation animation="zoom-in">
        <div className="flex flex-col items-center justify-center mt-8 gap-4 container">
          <div>
            {titleIsNode ? (
              title
            ) : (
              <h1 className="text-2xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
            )}
          </div>
          {subtitle && (
            <p className="mb-8 text-base leading-relaxed text-left text-gray-400">{subtitle}</p>
          )}
        </div>
      </ScrollAnimation>
    </section>
  );
};

IntroHero.propTypes = {
  title: PropTypes.any.isRequired,
  subtitle: PropTypes.string,
};

export default IntroHero;
