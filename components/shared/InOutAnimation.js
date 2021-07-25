import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

const InOutAnimation = ({ animation, elementKey, children }) => {
  const renderVariants = () => {
    switch (animation) {
      case "fade":
        return {
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        };
    }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={elementKey}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.25 }}
        variants={renderVariants()}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

InOutAnimation.propTypes = {
  animation: PropTypes.oneOf(["fade"]).isRequired,
  elementKey: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default InOutAnimation;
