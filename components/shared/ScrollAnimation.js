import PropTypes from "prop-types";

const ScrollAnimation = ({ animation, children }) => {
  return (
    <div data-aos={animation} data-aos-mirror="false" data-aos-once="true">
      {children}
    </div>
  );
};

ScrollAnimation.propTypes = {
  animation: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default ScrollAnimation;
