import PropTypes from "prop-types";

const Button = ({ className = "", variant, children, outline, ...otherProps }) => {
  const variantClasses = {
    brand: outline
      ? "text-brand bg-transparent border border-brand border-opacity-80 hover:bg-brand-gradient hover:text-gray-50 focus:text-gray-50 focus:bg-brand-gradient"
      : "text-white bg-brand-gradient border border-brand focus:ring-brand-light",
    secondary: outline
      ? "text-secondary bg-transparent border border-secondary border-opacity-80 hover:bg-secondary-gradient hover:text-gray-50 focus:text-gray-50 focus:bg-secondary-gradient"
      : "text-white bg-secondary-gradient border border-secondary focus:ring-secondary-light",
  };
  return (
    <button
      className={`${variantClasses[variant]} text-sm uppercase px-5 py-2 shadow-lg focus:outline-none focus:ring-1 hover:opacity-95 disabled:opacity-50 disabled:cursor-default ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["brand", "secondary"]).isRequired,
  children: PropTypes.any,
  outline: PropTypes.bool,
};

export default Button;
