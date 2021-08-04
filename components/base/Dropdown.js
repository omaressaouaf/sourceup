import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

const Dropdown = ({ className = "", title, icon, items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setDropdownOpen(prevVal => !prevVal)}
          type="button"
          className={`px-6 py-2 mr-4 text-base text-gray-50 focus:outline-none ${className}`}
          aria-expanded="true"
          aria-haspopup="true"
        >
          {icon && <i className={`fa ${icon} mr-2`}></i>}
          {title}
          <i className="fa fa-caret-down ml-2"></i>
        </button>
      </div>

      <AnimatePresence>
        {dropdownOpen && (
          <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
            <motion.div
              key="Dropdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              className="origin-top-right absolute right-0 mt-2 w-56 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30 focus:outline-none transition-all duration-300"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div onClick={() => setDropdownOpen(false)} className="py-1" role="none">
                {items}
              </div>
            </motion.div>
          </ClickAwayListener>
        )}
      </AnimatePresence>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  items: PropTypes.node.isRequired,
};
export default Dropdown;
