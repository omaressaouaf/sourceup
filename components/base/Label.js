import PropTypes from "prop-types";

const Label = ({ fieldRequired, children }) => {
  return (
    <label className="text-sm font-medium text-gray-800">
      {children} {fieldRequired && <span className="text-red-600">*</span>}
    </label>
  );
};

Label.propTypes = {
  fieldRequired: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Label;
