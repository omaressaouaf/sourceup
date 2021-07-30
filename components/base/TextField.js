import { forwardRef } from "react";
import PropTypes from "prop-types";

const TextField = forwardRef(
  ({ className = "", error, helperText, helperTextColor, textarea, ...otherProps }, ref) => {
    const classes = `w-full px-3 py-3 mt-2 shadow-sm border border-gray-300 placeholder-gray-500 text-sm text-gray-800 rounded focus:outline-none focus:ring-1 ${
      error ? "focus:ring-red-500" : "focus:ring-brand-light"
    } ${className}`;

    return (
      <>
        {textarea ? (
          <textarea rows="5" ref={ref} {...otherProps} className={classes}></textarea>
        ) : (
          <input ref={ref} {...otherProps} className={classes} />
        )}
        {helperText && (
          <span className={`text-xs ml-1 ${error ? "text-red-600" : helperTextColor}`}>
            {helperText}
          </span>
        )}
      </>
    );
  }
);

TextField.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextColor: PropTypes.string,
  textarea: PropTypes.bool,
};

export default TextField;
