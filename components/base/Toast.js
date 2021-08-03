import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const variantClasses = {
  brand: "bg-brand-gradient",
  error: "bg-red-500",
};

const Toast = ({ showToast, variant, icon, children }) => {
  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`${variantClasses[variant]} fixed z-50 text-gray-50 bottom-0 right-2  px-7 py-6 rounded shadow-2xl flex items-center justify-between mb-6`}
          role="alert"
        >
          <i className={`${icon} fa-lg mr-5`}></i>
          <p className="">{children}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Toast.propTypes = {
  showToast: PropTypes.bool,
  variant: PropTypes.oneOf(["brand", "error"]).isRequired,
  icon: PropTypes.string,
  children: PropTypes.any,
};

export default Toast;
