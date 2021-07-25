import PropTypes from "prop-types";

const Heading = ({ className, children, size }) => {
  const renderTextSize = () => {
    switch (size) {
      case 1:
        return "text-xl";
      case 2:
        return "text-xl lg:text-2xl";
      case 3:
        return "text-2xl lg:text-3xl";

      case 4:
        return "text-2xl lg:text-4xl";
    }
  };
  return (
    <h1
      className={`h-20 md:h-16 bg-secondary-gradient text-transparent bg-clip-text ${renderTextSize()} ${className}`}
    >
      {children}
    </h1>
  );
};
Heading.propTypes = {
  className : PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4]),
};
export default Heading;
