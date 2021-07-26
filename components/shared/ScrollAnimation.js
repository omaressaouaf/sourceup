import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ScrollAnimation = ({ animation, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [animated, setAnimated] = useState(false);
  const renderVariants = () => {
    switch (animation) {
      case "zoomIn":
        return {
          hidden: { opacity: 0, scale: 0.9, y: 40 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case "dropOn":
        return {
          hidden: { opacity: 0, scale: 1.1, y: 40 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case "fadeInLeft":
        return {
          hidden: { opacity: 0, x: -190 },
          visible: { opacity: 1, x: 0 },
        };
      case "fadeInRight":
        return {
          hidden: { opacity: 0, x: 190 },
          visible: { opacity: 1, x: 0 },
        };
    }
  };

  useEffect(() => {
    if (inView && !animated) {
      controls.start("visible");
      setAnimated(true);
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.4,  }}
      variants={renderVariants()}
    >
      {children}
    </motion.div>
  );
};

ScrollAnimation.propTypes = {
  animation: PropTypes.oneOf(["zoomIn", "dropOn", "fadeInLeft", "fadeInRight"]).isRequired,
  children: PropTypes.any.isRequired,
};

export default ScrollAnimation;
