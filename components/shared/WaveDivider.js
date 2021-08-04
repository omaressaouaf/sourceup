import PropTypes from "prop-types";

const WaveDivider = ({ className = "" }) => {
  return (
    <div className={`text-gray-100 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.54 17.34"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
      </svg>
    </div>
  );
};

WaveDivider.propTypes = {
  className: PropTypes.string,
};

export default WaveDivider;
